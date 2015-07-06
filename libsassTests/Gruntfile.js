var timer = require("grunt-timer");

module.exports = function(grunt) {
	timer.init(grunt);
	grunt.initConfig({
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'bootstrap-node.css': 'bootstrap.scss'
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-sass');	 
	grunt.registerTask('default', ['sass']);
	
}