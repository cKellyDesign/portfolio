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
					'__build/_styles/appStyles.css': '__app/_styles/style.scss'
				},
				options: {
					style: 'expanded'
				}
			}
		},

		watch: {
			scripts: {
				files: '__app/**/*.js',
				tasks: ['express:dev', 'requirejs:devScripts'],
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
		},

		requirejs: {
			devScripts: {
				options: {
					out: '__build/_scripts/appScripts.js',
					mainConfigFile: '__app/_scripts/appScriptsConfig.js',
					name: 'requireLib',
					paths: {
						requireLib: '../../_components/requirejs/require'
					},
					optimize: 'none'
				}
			}
		},

		copy: {
			dev: {
				"files": [
					{ "cwd": "__app/_images/", "src": ["**"], "dest": "__build/_images", "expand": true },
					{ "cwd": "__app/_gfx/", "src": ["**"], "dest": "__build/_gfx", "expand": true }
				]
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-express-server');

	grunt.registerTask('default', ['sass:dev', 'requirejs:devScripts', 'express:dev', 'watch']);

};