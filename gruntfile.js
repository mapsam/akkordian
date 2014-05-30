'use strict';

var path = require('path');

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['src/**/*.js']
    },
    uglify: {
      options: {
        banner: '/*\nAkkordian - <%= pkg.version %>\nhttps://github.com/svmatthews/Akkordian\nFree to use under terms of MIT license\n*/\n'
      },
      dist: {
        files: {
          'dist/akkordian.min.js': 'src/akkordian.js'
        }
      }
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: 'dist/',
        src: ['src/*.css', 'src/!*.min.css'],
        dest: 'dist/',
        ext: '.min.css'
      },
      add_banner: {
        options: {
          banner: '/*\nAkkordian - <%= pkg.version %>\nhttps://github.com/svmatthews/Akkordian\nFree to use under terms of MIT license\n*/'
        },
        files: {
          'dist/akkordian.min.css': ['src/*.css']
        }
      }
    }
  });

  // Dependencies
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Tasks
  grunt.registerTask('default', ['jshint', 'uglify', 'cssmin']);
  grunt.registerTask('js', ['jshint', 'uglify']);
  grunt.registerTask('css', ['cssmin']);
};