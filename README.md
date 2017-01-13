# grunt-ng2-inline

> Inline angular2 templates and styles with [Grunt](http://gruntjs.com/) and [angular2-inline-template-style](https://github.com/ghpabs/angular2-inline-template-style)

## Getting Started

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-ng2-inline --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-ng2-inline');
```

## The "ng2_inline" task

### Overview
In your project's Gruntfile, add a section named `ng2_inline` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  ng2_inline: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.base
Type: `String`  
Default value: `cwd`

Base folder for templates and stylesheet files.

#### options.compress
Type: `Boolean`
Default value: `false`

Use [html-min](https://github.com/kangax/html-minifier) and [clean-css](https://github.com/jakubpawlowicz/clean-css) to compress the templates before they are inlined.

#### options.relative
Type: `Boolean`  
Default value: `false`

Set base folder for templates and stylesheet relative to source file.

#### options.overwriteSrc
Type: `Boolean`  
Default value: `false`

When this option is set to `true`, the source files will be replaced with files having inline templates and css.
`dest` provided with this task will be ignored.

### Usage Examples

```js
grunt.initConfig({
    ng2_inline: {
        default: {
            expand: true,
            nonull: true,
            dest: 'target',
            cwd: 'src',
            src: 'app/**/*.ts',
            options: {
                base: 'src/assets',
                compress: true,
                relative: false
            }
        }
    }
});
```

```js
grunt.initConfig({
    ng2_inline: {
        default: {
            expand: true,
            nonull: true,
            cwd: 'src',
            src: 'app/**/*.ts',
            options: {
                base: 'src/assets',
                compress: true,
                relative: false,
                overwriteSrc: true
            }
        }
    }
});
```

## License
MIT
