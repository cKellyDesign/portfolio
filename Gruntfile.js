module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		connect: {
			server: {
				options: {
					port: 8888,
					base:'www-root',
					keepalive: true
				}
			}
		},

		sass: {
			dev: {
				files: {
					'__build/_styles/style.css': '__app/_styles/style.scss'
				},
				options: {
					style: 'expanded'
				}
			}
		}

	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.registerTask('default', ['sass:dev','connect']);
};