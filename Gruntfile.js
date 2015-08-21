/*global module:false*/

var ngrok = require('ngrok');

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

  // Register custom task for ngrok
  grunt.registerTask('pagespeed-ngrok', 'Run pagespeed with ngrok', function() {
    var done = this.async();

    ngrok.connect({
      port: 4000
    }, function(err, url) {
      grunt.config.set('pagespeed.dev.options.url', url);
      grunt.task.run('pagespeed');
      done();
    });
  });

};
