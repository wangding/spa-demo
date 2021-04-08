/* global module: true */
module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin: {
      options: {
        collapseWhitespace: true,
        preserveLineBreaks: false
      },
      files: {
        expand: true,
        src: ['*.html', '??-*/*.html', '??-*/??-*/*.html'],
        dest: 'dist/'
      }
    },
    cssmin: {
      files: {   
        expand: true,
        src: ['css/*.css', '??-*/*.css', '??-*/??-*/*.css', '??-*/css/*.css'],
        dest: 'dist/'
      }
    },
    imagemin: {
      files: {
        expand: true,
        src: ['0?-*/images/*.{png,jpg,gif}'],
        dest: 'dist/'
      }
    },
    terser: {
      main: {
        files: [{
          expand: true,
          src: ['js/*.js', '??-*/*.js', '??-*/0?-*/*.js', '??-*/js/*.js'],
          dest: 'dist/'
        }]
      }
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: '03-third-part-widget',
            src: 'mathquill/**',
            dest: 'dist/03-third-part-widget/'
          }
        ]
      }
    },
    qiniu_qupload: {
      default_options: {
        options: {
          ak: 'QINIU_AK',
          sk: 'QINIU_SK',
          bucket: 'app-spa-demo',
          assets: [{src: 'dist', prefix: ''}]
        }
      }
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: ['css/*.css', '0?-*/*.css']
    },
    htmlhint: {
      options: {
        htmlhintrc: '.htmlhintrc'
      },
      src: ['*.html', '0?-*/*.html']
    },
    eslint: {
      options: {
        configFile: '.eslintrc.json'
      },
      target: [
        './**/*.js',
        '!./node_modules/**/*.js',
        '!./03-third-part-widget/mathquill/*.js'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-terser');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('@wangding/grunt-qiniu-qupload');

  grunt.registerTask('lint', ['htmlhint', 'csslint', 'eslint']);
  grunt.registerTask('build', ['htmlmin', 'cssmin', 'terser', 'copy']);
  grunt.registerTask('upload', ['qiniu_qupload']);
};
