/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        jshintrc: true
      },
      files: 'Gruntfile.js'
    },
    pagespeed: {
      dev: {
        options: {
          nokey: true,
          url: "http://example.com",
          locale: "en_ZA",
          strategy: "mobile",
          threshold: 85
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-pagespeed');

  // Default task.
  grunt.registerTask('default', ['pagespeed']);

};
