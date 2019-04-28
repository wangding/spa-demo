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
    uglify: {
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

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-htmlhint');

  grunt.registerTask('lint', ['htmlhint', 'csslint', 'eslint']);
  grunt.registerTask('build', ['htmlmin', 'cssmin', 'uglify', 'imagemin', 'copy']);
};
