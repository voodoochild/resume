module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          sourcemap: false
        },
        files: {
          'stylesheets/css/main.css': 'stylesheets/sass/main.scss'
        }
      }
    },

    watch: {
      styles: {
        files: ['stylesheets/sass/**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true,
        }
      },
      scripts: {
        files: ['javascripts/**/*.js'],
        options: {
          livereload: true
        }
      },
      html: {
        files: ['**/*.html'],
        options: {
          livereload: true
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 8080,
          base: '.',
          livereload: true
        }
      }
    }
  });

  // Modules
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Tasks
  grunt.registerTask('default', ['connect', 'watch']);
};
