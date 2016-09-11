'use strict';

var grunt = require('grunt');


exports.ng2_inline = {
    
    setUp: function(done) {
        done();
    },
    
    default: function(test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/default/component.ts');
        var expected = grunt.file.read('test/expected/component.ts');
        test.equal(actual, expected, 'should inline template and style into component file.');

        test.done();
    },
    
    base: function(test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/base/component.ts');
        var expected = grunt.file.read('test/expected/component.ts');
        test.equal(actual, expected, 'should inline template and style into component file.');

        test.done();
    },
    
    relative: function(test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/relative/component.ts');
        var expected = grunt.file.read('test/expected/component.ts');
        test.equal(actual, expected, 'should inline template and style into component file.');

        test.done();
    },
    
    compress: function(test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/compress/component.ts');
        var expected = grunt.file.read('test/expected/compressed.ts');
        test.equal(actual, expected, 'should inline compressed template and style into component file.');

        test.done();
    }

};