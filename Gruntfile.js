module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		express: {
			dev: {
				options: {
					script: 'app.js',
					port: 8080
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
				files: ['*.js', '__app/**/*.js', '__server/**/*.js'],
				tasks: ['requirejs:devScripts'],
				options: {
					livereload: true
				}
			},
			css: {
				files: ['__app/_styles/*.scss', '__app/_styles/**/*.scss'],
				tasks: ['sass'],
				options: {
					livereload: true
				}
			},
			files: {
				files: ['__app/**/*.hbs', '__app/**/*.json'],
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
					mainConfigFile: '__app/_scripts/config/appScriptsConfig.js',
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

	grunt.registerTask('default', ['sass:dev', 'copy:dev', 'requirejs:devScripts', 'express:dev', 'watch']);

};