module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		connect: {
			server: {
				options: {
					port: 8888,
					base:'www-root',
					keepalive: false
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
		},

		watch: {
			scripts: {
				files: '__app/**/*.js',
				options: {
					livereload: true
				}
			},
			css: {
				files: '__app/**/*.scss',
				tasks: ['sass'],
				options: {
					livereload: true,
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('default', ['sass:dev','connect', 'watch']);
};