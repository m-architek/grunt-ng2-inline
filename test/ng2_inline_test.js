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
    },

    noDestination: function(test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/no-destination/component.ts');
        var expected = grunt.file.read('test/expected/component.ts');
        test.equal(actual, expected, 'should overrite the original src file with inlined css and html.');

        test.done();
    },

    multiSrc: function(test) {
        test.expect(2);

        var actual = grunt.file.read('tmp/multi-src/component.ts');
        var expected = grunt.file.read('test/expected/component.ts');
        test.equal(actual, expected, 'should overrite the original src file with inlined css and html.');

        var actual2 = grunt.file.read('tmp/multi-src/second-component.ts');
        var expected2 = grunt.file.read('test/expected/second-component.ts');
        test.equal(actual2, expected2, 'should overrite the original src file with inlined css and html.');

        test.done();
    }

};