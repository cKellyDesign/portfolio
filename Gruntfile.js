module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		express: {
			option: {
				port: 8080
			},
			dev: {
				options: {
					script: 'app.js'
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
				tasks: ['express:dev'],
				options: {
					livereload: true
				}
			},
			css: {
				files: '__app/**/*.scss',
				tasks: ['sass', 'express:dev'],
				options: {
					livereload: true
				}
			},
			files: {
				files: '__app/**/*.hbs',
				tasks: ['express:dev'],
				options: {
					livereload: true
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-express-server');

	grunt.registerTask('default', ['sass:dev','express:dev', 'watch']);
};