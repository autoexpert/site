module.exports = function(grunt){
	var gc = {
		imageNotyfy: __dirname+'\\src\\notify.png',
		minifyCss: false,
		projectName: 'Сайт АВТОЭКСПЕРТ',
		appName: 'ЮрАвтоЭксперт',
		template: "autoexpert",
		forceFtpUpdate: false,
		generateFavicon: false,
		dts: "D:/domains/evo.autoexpert.my/"
	};
	
	var files = [
		'bower_components/Jarallax/source/jarallax.js',
		'bower_components/Jarallax/source/jarallax_tools.js',
		'bower_components/Jarallax/source/jarallax_controller.js',
		'bower_components/Jarallax/source/jarallax_counter.js',
		'bower_components/Jarallax/source/jarallax_object.js',
		'bower_components/Jarallax/source/jarallax_animation.js',
		'bower_components/Jarallax/source/controllers/*.js',
		'bower_components/Jarallax/import/*/*.js'
	]
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);
	grunt.initConfig({
		globalConfig : gc,
		pkg : grunt.file.readJSON('package.json'),
		exec: {
			index: {
				cmd: "compile.bat"
			}
		},
		realFavicon: {
			favicons: {
				src: 'src/favicon.png',
				dest: "<%= globalConfig.dts%>",
				options: {
					iconsPath: '/',
					html: [ 'src/html/tpl/favicon.tpl' ],
					design: {
						ios: {
							pictureAspect: 'backgroundAndMargin',
							backgroundColor: '#ffffff',
							margin: '14%',
							assets: {
								ios6AndPriorIcons: true,
								ios7AndLaterIcons: true,
								precomposedIcons: true,
								declareOnlyDefaultIcon: true
							},
							appName: "<%= globalConfig.appName%>"
						},
						desktopBrowser: {},
						windows: {
							pictureAspect: 'noChange',
							backgroundColor: '#ffffff',
							onConflict: 'override',
							assets: {
								windows80Ie10Tile: true,
								windows10Ie11EdgeTiles: {
									small: true,
									medium: true,
									big: true,
									rectangle: true
								}
							},
							appName: "<%= globalConfig.appName%>"
						},
						androidChrome: {
							pictureAspect: 'backgroundAndMargin',
							margin: '17%',
							backgroundColor: '#ffffff',
							themeColor: '#ffffff',
							manifest: {
								name: "<%= globalConfig.appName%>",
								display: 'standalone',
								orientation: 'notSet',
								onConflict: 'override',
								declared: true
							},
							assets: {
								legacyIcon: true,
								lowResolutionIcons: true
							}
						},
						safariPinnedTab: {
							pictureAspect: 'silhouette',
							themeColor: '#5bbad5'
						}
					},
					settings: {
						scalingAlgorithm: 'Mitchell',
						errorOnImageTooSmall: false
					}
				}
			}
		},
		modernizr: {
			dist: {
				"crawl": false,
				"customTests": [],
				"dest": "<%= globalConfig.dts%>assets/templates/<%= globalConfig.template%>/js/modernizr.js",
				"tests": [
					"flexbox",
					"svg",
					"smil",
					"objectfit",
					"cssvhunit",
					"cssvwunit",
				],
				"options": [
					"setClasses"
				],
				"uglify": true
			}
		},
		concat: {
			jarallax: {
				src: files,
				dest: 'test/js/jarallax.js'
			},
			yepnope: {
				src: [
					'bower_components/yepnope/dist/yepnope-2.0.0.min.js'
				],
				dest: '<%= globalConfig.dts%>assets/templates/<%= globalConfig.template%>/js/yepnope.js'
			}
		},
		uglify : {
			options: {
				ASCIIOnly: true
			},
			app: {
				files: {
					'<%= globalConfig.dts%>assets/templates/<%= globalConfig.template%>/js/app.js' : [
						'bower_components/jquery/dist/jquery.js',
						'bower_components/jquery.cookie/jquery.cookie.js',
						'bower_components/jquery.easing/jquery.easing.js',
						'src/js/browser.js',
						//'bower_components/jqueryui-touch-punch/jquery.ui.touch-punch.js',
						'bower_components/jquery-mousewheel/jquery.mousewheel.js',
						'bower_components/jquery.maskedinput/dist/jquery.maskedinput.js',
						'bower_components/jquery.transform.js/jquery.transform2d.js',
						'bower_components/jquery.transform.js/jquery.transform3d.js',
						'bower_components/jquery.scroolly/src/jquery.scroolly.js',
						'bower_components/slick-carousel/slick/slick.js',
						'bower_components/parallax.js/parallax.js',
						'bower_components/wow/dist/wow.js',
						'bower_components/raty/lib/jquery.raty.js',
						'bower_components/arcticModal/arcticmodal/jquery.arcticmodal.js',
						'bower_components/fancybox/dist/jquery.fancybox.js',
						'bower_components/jquery_lazyload/jquery.lazyload.js',
						'test/js/jarallax.js'
					]
				}
			},
			hypher: {
				files: {
					'<%= globalConfig.dts%>assets/templates/<%= globalConfig.template%>/js/hypher.js' : [
						'bower_components/hyphernationRUru/dist/jquery.hypher.js',
						'bower_components/hyphernationRUru/dist/ru-ru.js',
					]
				}
			},
			main: {
				files: {
					'<%= globalConfig.dts%>assets/templates/<%= globalConfig.template%>/js/main.js': [
						'src/js/mainmenu.js',
						'src/js/backgroundEffect.js',
						'src/js/googlemap.js',
						'src/js/sshgo.js',
						'src/js/hashlink.js',
						'src/js/main.js',
					]
				}
			}
		},
		less: {
			css: {
				files : {
					'test/css/main.css' : [
						'src/css/main.less'
					],
					'test/css/home.css' : [
						'src/css/home.less'
					],
					'test/css/animate.css' : [
						'bower_components/animate.css/animate.css',
						'src/css/ani.less'
					],
					'test/css/tinymce.css' : [
						'src/css/tinymce.less'
					]
				},
				options : {
					compress: gc.minifyCss,
					ieCompat: false
				}
			}
		},
		autoprefixer:{
			options: {
				browsers: ['last 2 versions', 'Android 4', 'ie 8', 'ie 9', 'Firefox >= 27', 'Opera >= 12.0', 'Safari >= 6'],
				cascade: false
			},
			css: {
				expand: true,
				flatten: true,
				src: [
					'test/css/main.css',
					'test/css/home.css',
					'test/css/animate.css',
					'test/css/tinymce.css'
				],
				dest: 'test/css/main_pref/'
			}
		},
		cssmin: {
			options: {
				level: {
					1: {
						specialComments: 0
					}
				}
			},
			target: {
				files: {
					'<%= globalConfig.dts%>assets/templates/<%= globalConfig.template%>/css/main.css': [
						'test/css/main_pref/main.css'
					],
					'<%= globalConfig.dts%>assets/templates/<%= globalConfig.template%>/css/animate.css': [
						'test/css/main_pref/animate.css'
					],
					'<%= globalConfig.dts%>assets/templates/<%= globalConfig.template%>/css/home.css': [
						'test/css/main_pref/home.css'
					],
					'<%= globalConfig.dts%>assets/templates/<%= globalConfig.template%>/css/tinymce.css': [
						'test/css/main_pref/tinymce.css'
					],
				}
			}
		},
		jade: {
			files: {
				options: {
					pretty: '\t',
					data: {
						debug: false
					}
				},
				files: [
					{
						expand: true,
						cwd: 'src/html/',
						src: ['*.jade'],
						dest: __dirname,
						ext: '.php'
					}
				]
			}/*,
			tpl: {
				options: {
					pretty: '\t',
					data: {
						debug: false
					}
				},
				files: [
					{
						expand: true,
						cwd: 'src/html/inc/',
						src: ['*.jade'],
						dest: '<%= globalConfig.dts%>assets/templates/<%= globalConfig.template%>/tpl/',
						ext: '.tpl'
					}
				]
			}*/
		},
		imagemin: {
			base: {
				options: {
					optimizationLevel: 7,
					//progressive: true,
					//interlaced: true,
					svgoPlugins: [
						{
							removeViewBox: false
						}
					]
				},
				files: [
					{
						expand: true,
						flatten : true,
						src: [
							'src/images/*.{png,jpg,gif,svg}'
						],
						dest: '<%= globalConfig.dts%>assets/templates/<%= globalConfig.template%>/images/',
						filter: 'isFile'
					}
				]
			},
			css: {
				options: {
					optimizationLevel: 3,
					svgoPlugins: [
						{
							removeViewBox: false
						}
					]
				},
				files: [
					{
						expand: true,
						flatten : true,
						src: [
							'src/images/css/*.{png,jpg,gif,svg}'
						],
						dest: 'src/images/bin/',
						filter: 'isFile'
					}
				]
			}
		},
		copy: {
			main: {
				expand: true,
				cwd: 'src/fonts',
				src: '**',
				dest: '<%= globalConfig.dts%>assets/templates/<%= globalConfig.template%>/fonts/',
			},
		},
		clean: {
			folder: [
				'assets/templates/<%= globalConfig.template%>/fonts/'
			]
		},
		ftp_push: {
			options: {
				authKey: "serverA",
				host: "217.107.34.121",
				dest: "/domains/yuravtoexpert.ru/",
				port: 21,
				incrementalUpdates: !gc.forceFtpUpdate
			},
			/*room: {
				files: [
					{
						expand: true,
						flatten : true,
						cwd: '',
						src: [
							'.htaccess',
							'*.html',
							'*.ico',
							'*.png',
							'*.svg',
							'*.xml',
							'manifest.json',
							"assets/templates/<%= globalConfig.template%>/**",
							"assets/templates/<%= globalConfig.template%>/tpl/.htaccess"
						],
						filter: 'isFile'
					}
				]
			},*/
			assets: {
				files: [
					{
						expand: true,
						flatten : true,
						cwd: '<%= globalConfig.dts%>',
						src: [
							//"*.html",
							"assets/templates/<%= globalConfig.template%>/**",
							'assets/plugins/**',
							'assets/snippets/**',
							'assets/modules/**',
							"assets/templates/.htaccess",
							"assets/templates/<%= globalConfig.template%>/formlister/.htaccess"
						]
					},
					{
						expand: true,
						flatten : true,
						cwd: '<%= globalConfig.dts%>',
						src: [
							//"*.html",
							"vendor/**",
							"assets/modules/**",
							"assets/plugins/**",
							"assets/snippets/**"
						]
					}
				]
			}
		},
		notify: {
			init: {
				options: {
					title: "<%= globalConfig.projectName %> v<%= pkg.version %>",
					message: 'Waiting...',
					image: '<%= globalConfig.imageNotyfy %>'
				}
			},
			watch: {
				options: {
					title: "<%= globalConfig.projectName %> v<%= pkg.version %>",
					message: 'Запуск',
					image: '<%= globalConfig.imageNotyfy %>'
				}
			},
			done: {
				options: {
					title: "<%= globalConfig.projectName %> v<%= pkg.version %>",
					message: "Успешно Завершено",
					image: '<%= globalConfig.imageNotyfy %>'
				}
			},
			fav: {
				options: {
					title: "<%= globalConfig.projectName %> v<%= pkg.version %>",
					message: "Favicon Generate - Успешно Завершено",
					image: '<%= globalConfig.imageNotyfy %>'
				}
			}
		},
		watch: {
			options: {
				livereload: true,
			},
			html: {
				files: [
					'src/html/php/*.php',
					'src/html/**/*.jade',
					'src/html/js/*.js',
					'src/html/tpl/*.tpl'
				],
				tasks: [
					'jade',
					//'exec',
					//'ftp_push:room',
					'notify:done'
				]
			},
			js: {
				files: [
					'src/js/*.js',
					'src/js/**/*.js'
				],
				tasks: [
					'notify:watch',
					'concat',
					'uglify',
					'jade',
					//'exec',
					//'ftp_push:assets',
					'notify:done'
				]
			},
			css: {
				files: [
					'src/css/**/*.{css,less}',
				],
				tasks: [
					'notify:watch',
					'less',
					'autoprefixer',
					'cssmin',
					'jade',
					//'exec',
					//'ftp_push:assets',
					'notify:done'
				]
			},
			img: {
				files: [
					'src/images/*.{png,jpg,gif,svg}',
				],
				tasks: [
					'notify:watch',
					'imagemin:base',
					'less',
					'autoprefixer',
					'cssmin',
					'jade',
					//'exec',
					//'ftp_push:assets',
					'notify:done'
				]
			},
			imgcss: {
				files: [
					'src/images/css/*.{png,jpg,gif,svg}',
				],
				tasks: [
					'notify:watch',
					'imagemin:css',
					'less',
					'autoprefixer',
					'cssmin',
					'jade',
					//'exec',
					//'ftp_push:assets',
					'notify:done'
				]
			},
			fonts: {
				files: [
					'src/fonts/**.*'
				],
				tasks: [
					'notify:watch',
					'clean',
					'copy',
					//'ftp_push:assets',
					'notify:done'
				]
			},
			vendor: {
				files: [
					'<%= globalConfig.dts%>assets/modules/**/*.*',
					'<%= globalConfig.dts%>assets/plugins/**/*.*',
					'<%= globalConfig.dts%>assets/snippets/**/*.*',
					'<%= globalConfig.dts%>vendor/**/*.*'
				],
				tasks: [
					//'ftp_push:assets',
					'notify:done'
				]
			}
		}
	});
	grunt.registerTask('default', 	gc.generateFavicon ? [
		'notify:watch',
		//'clean',
		'copy',
		'imagemin',
		'modernizr',
		'concat',
		'uglify',
		'less',
		'autoprefixer',
		'cssmin',
		'jade',
		'realFavicon',
		'notify:fav',
		//'exec',
		//'ftp_push:room',
		'notify:done'
	] : [
		'notify:watch',
		//'clean',
		'copy',
		'imagemin',
		'modernizr',
		'concat',
		'uglify',
		'less',
		'autoprefixer',
		'cssmin',
		'jade',
		//'exec',
		//'ftp_push:room',
		'notify:done'
	]);
	grunt.registerTask('dev', 	[
		'notify:init',
		'watch'
	]);
}
