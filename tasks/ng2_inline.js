/*
 * grunt-ng2-inline
 * https://github.com/m-architek/grunt-ng2-inline
 *
 * Copyright (c) 2016 Marcin Architek
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    grunt.registerMultiTask('ng2_inline', 'Inline angular2 templates and styles with Grunt and angular2-inline-template-style', function () {

        var ng2Inline = require('angular2-inline-template-style'),
            path = require('path');

        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            base: this.data.cwd,
            compress: false,
            relative: false,
            overwriteSrc: false
        });
        grunt.log.debug('Options: ', options);


        // Iterate over all specified file groups.
        this.files.forEach(function (file) {

            file.src
                .filter(
                    // Fail on invalid source files (if nonull was set).
                    function (filepath) {
                        if (!grunt.file.exists(filepath)) {
                            grunt.fail.warn('Source file "' + filepath + '" not found.');
                            return false;
                        } else {
                            return true;
                        }
                    }
                )
                .forEach(
                    function (filepath) {
                        grunt.log.debug('Process file: ' + filepath);

                        // Read source file.
                        var content = grunt.file.read(filepath);

                        // Do inline!
                        content = ng2Inline(content, options, path.dirname(filepath));

                        if (!options.overwriteSrc) {
                            // Write the destination file.
                            grunt.log.debug('Write to: ' + file.dest);
                            grunt.file.write(file.dest, content);

                        } else {
                            //If a destination file is not specified, this will overrite the
                            //original file that had templateUrl with the one having inline template.
                            grunt.file.write(filepath, content);
                        }
                    }
                );
        });
    });

};