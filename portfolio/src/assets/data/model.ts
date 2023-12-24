const CkD = (window as any).Ckd || {};
CkD.loadedModel = {
	"about": {
		// "pitch":"My name is Conor Kelly and I am an interactive diviner: I design intuitive user experiences and develop the front-end user-interfaces that drive them. <span class='blue'>cKellyDesign's</span> goal is to create captivating and engaging communication systems.",
		
		"pitch" : "My name is Conor Kelly and I utilize HCD methods to design, explore, and ultimately build ICT solutions that advance efforts to solve society's most pressing issues. I am a designer, coder, and problem solver who is passionate about creating positive social impact, empowering and enriching the lives of my users.",
		
		"highlights": [
			{
				"title": "Human Centered Designer",
				"paragraph": "\"Form follows function\" is a cornerstone design principle, and I truly believe that <b>function follows human</b>. With this focus I strive to build empathy and iterate approaches when searching for solutions.",
				"tags" :[]
			},
			{
				"title": "Innovative Developer",
				"paragraph": "I stand on the shoulders of giants when architecting and implementing full stack infrastructures and I enjoy the science, craft, and challenge of creating efficient, robust, modular, and scalable systems.",
				"tags" :[] 
			},
			{
				"title": "Data Fanatic", // todo: redo this content
				"paragraph": "Empowering organizations to use data effectively, from automatic analysis to qualitative data collection and analysis methodologies, we can start to uncover key insights for better decision-making.",
				"tags" :[]
			// },
			// {
			// 	"title": "",
			// 	"paragraph": "",
			// 	"tags" :[]
			}

		]
	},
	// appFocus determined by tags
	// be comprehensive with these tags, substrings will match! 
	// Ordering matters here too for non-unique tags
	// if substring is match is found, algorithm will switch into direct match detection and continue through tags
	// direct match trumps partial match, direct match terminates proccess
	"featured": {
		"currentState" : "general",
		"appStates": {
			"general" : { 
				"active" : true,
				"gallerySlugs": ["","",""],
				"tags" : [],
				"gallery": []
			},
			"ProductDesigner" : { 
				"active" : false,
				"gallerySlugs": ["today", "nbcnews", "TemplateFramework"],
				"tags" : ["product", "productdesigner"],
				"gallery" : []
			},
			"UXDesigner" : { 
				"active" : false,
				"gallerySlugs": ["ROL","Water1stOrg","TasteFinder"],
				"tags": ["userexperience","ux","uxdesigner" ],
				"gallery" : []
			},
			"DesignResearcher" : { 
				"active" : false,
				"gallerySlugs": ["qube","CPI","ROL"],
				"tags" : ["researching","userresearcher"],
				"gallery" : []
			},
			"DIAL": {
				"active": false,
				"gallerySlugs": ["gisida","NBCVid","Kidogo2"],
				"tags" : ["tech","lead","DIAL","dial","UNF"],
				"gallery": [],
				"highlights": [{
					"title": "Team Leader",
					"paragraph": "I thrive in managing projects through their entire lifecycles, from defining roadmaps, to weekly sprints, to retrospectives. As a leader I drive collaboration to leverage the voices of the team, empowering the entire team to realize our vision and deliver outcomes."
				}, {
					"title": "Innovative Developer",
					"paragraph": "I stand on the shoulders of giants when architecting and implementing full stack infrastructures and I enjoy the science, craft, and challenge of creating efficient, robust, modular, and scalable systems.",
					"tags" :[] 
				}, {
					"title": "Human Centered Designer",
					"paragraph": "\"Form follows function\" is a cornerstone design principle, and I truly believe that <i>function follows human</i>. With this focus I strive to build empathy and iterate approaches when developing new solutions.",
					"tags" :[]
				}]
			},
			"Mapbox": {
				"active": false,
				"gallerySlugs": ["gisida","NBCVid","qube"],
				"tags" : ["map","mapbox","MapBox","mb","Mapbox"],
				"gallery": [],
				"highlights": [{
					"title": "Team Leader",
					"paragraph": "I thrive in managing projects through their entire lifecycles, from defining roadmaps, to weekly sprints, to retrospectives. As a leader I drive collaboration to leverage the voices of the team, empowering the entire team to realize our vision and deliver outcomes."
				}, {
					"title": "Innovative Developer",
					"paragraph": "I stand on the shoulders of giants when architecting and implementing full stack infrastructures and I enjoy the science, craft, and challenge of creating efficient, robust, modular, and scalable systems.",
					"tags" :[] 
				}, {
					"title": "Human Centered Designer",
					"paragraph": "\"Form follows function\" is a cornerstone design principle, and I truly believe that <i>function follows human</i>. With this focus I strive to build empathy and iterate approaches when developing new solutions.",
					"tags" :[]
				}]
			},
			"IDEO.org" : { 
				"active" : false,
				"gallerySlugs": ["gisida","qube","Kidogo2"],
				"tags" : ["ideo", "ideo.org","IDEO.org","IDEOorg","dimagi"],
				"gallery" : []
			},
			"4Good" : { 
				"active" : false,
				"gallerySlugs": ["ECDNeK","upendo","Kidogo2"],
				"tags" : ["nonprofit","ngo","nongovernemt", "org"],
				"gallery" : []
			},
			"FEDeveloper" : { 
				"active" : false,
				"gallerySlugs": ["gisida", "NBCVid","today"],
				"tags" : ["frontenddevelopment","softwareengineering","web", "developer", "dev"],
				"gallery" : []
			},
			"VisualDesigner" : { 
				"active" : false,
				"gallerySlugs": ["LivelyHoods","Water1stCampaign","CPI"],	
				"tags" : ["visualdesigner","print","cornish" ],
				"gallery" : []
			}
		}
	},
	
	"experience": [
		// Work Schema
		// {
		// 	"title": "Gisida",
		// 	"slug": "gisida",
		// 	"tags": [],
		// 	"mainImage": {
		// 		"lowRes": "",
		// 		"highRes": "",
		// 		"feature": "",
		// 	},
		// 	"description": "",
		// 	"bullets": [
		// 		""
		// 	],
		// 	"gallery": [
		// 		{
		// 			"thumb": "",
		// 			"gal": "",
		// 			"fullRes": ""
		// 		}
		// 	]
		// },

		{
			"title": "Gisida",
			"slug": "gisida",
			"tags": [],
			"mainImage": {
				"lowRes": "/gisida/gisida-0-feat.jpg",
				"highRes": "",
				"feature": "/gisida/gisida-0-feat.jpg",
			},
			"description": "With ONA I am developing ONA's front-end GIS data visualization product to provide an integrated response platform utilizing real-time data to a growing number of organizations, agencies, and governments. Currently, I am collaborating within a small agile team and PM to grow Gisida from prototype to product and eventually platform.",
			"bullets": [
				"GIS / Data Visualization",
				"Product Design and Development",
				"Client Correspondence",
				"Front-end Engineering / Architecture"
			],
			"gallery": [
				{
					"fullRes": "/gisida/gisida-7-cycloneResponse.jpg",
					"gal": "/gisida/gisida-gal7-cycloneResponse.jpg",
					"thumb": "/gisida/gisida-thumb7-cycloneResponse.jpg"
				}, {
					"fullRes": "/gisida/gisida-1-UGatlas.jpg",
					"gal": "/gisida/gisida-gal1-UGatlas.jpg",
					"thumb": "/gisida/gisida-thumb1-UGatlas.jpg"
				}, {
					"fullRes": "/gisida/gisida-3-detailView.jpg",
					"gal": "/gisida/gisida-gal3-detailView.jpg",
					"thumb": "/gisida/gisida-thumb3-detailView.jpg"
				}, {
					"fullRes": "/gisida/gisida-4-summaryChart.jpg",
					"gal": "/gisida/gisida-gal4-summaryChart.jpg",
					"thumb": "/gisida/gisida-thumb4-summaryChart.jpg"
				}, {
					"fullRes": "/gisida/gisida-5-summarySplash.jpg",
					"gal": "/gisida/gisida-gal5-summarySplash.jpg",
					"thumb": "/gisida/gisida-thumb5-summarySplash.jpg"
				}, {
					"fullRes": "/gisida/gisida-6-sectorSummary.jpg",
					"gal": "/gisida/gisida-gal6-sectorSummary.jpg",
					"thumb": "/gisida/gisida-thumb6-sectorSummary.jpg"
				}, 
			]
		},

		{
			"title": "Qübe",
			"slug": "qube",
			"tags": [],
			"mainImage": {
				"lowRes": "/qube/qube-0-feat.jpg",
				"highRes": "",
				"feature": "/qube/qube-0-feat.jpg",
			},
			"description": "Working towards my MHCI+D degree I collaborated on a capstone project taking on disinformation in news media just as Fake News was gaining headlines. With Qübe we sought to reveal ways of critically engaging college students with the news via physical Qübe and companion app. Collaborative credit and mad props to Erica Queen and Olivia Thoma.",
			"bullets": [
				"Human Centered Design",
				"Design Thinking Process",
				"Usability Research",
				"Physical, Digital, and Video Prototypes"

			],
			"gallery": [
				{
					"thumb": "/qube/qube-1-research-thumb.jpg",
					"gal": "/qube/qube-1-research-gal.jpg",
					"fullRes": "/qube/qube-1-research.jpg"
				},
				{
					"thumb": "/qube/qube-2-synthesis-thumb.jpg",
					"gal": "/qube/qube-2-synthesis-gal.jpg",
					"fullRes": "/qube/qube-2-synthesis.jpg"
				},
				{
					"thumb": "/qube/qube-3-ideation-thumb.jpg",
					"gal": "/qube/qube-3-ideation-gal.jpg",
					"fullRes": "/qube/qube-3-ideation.jpg"
				},
				{
					"thumb": "/qube/qube-4-prototype-thumb.jpg",
					"gal": "/qube/qube-4-prototype-gal.jpg",
					"fullRes": "/qube/qube-4-prototype.jpg"
				},
				{
					"thumb": "/qube/qube-5-evaluate-thumb.jpg",
					"gal": "/qube/qube-5-evaluate-gal.jpg",
					"fullRes": "/qube/qube-5-evaluate.jpg"
				},
				{
					"thumb": "/qube/qube-6-iterate-thumb.jpg",
					"gal": "/qube/qube-6-iterate-gal.jpg",
					"fullRes": "http://qube-ux.herokuapp.com"
				},
				{
					"thumb": "/qube/qube-7-product-thumb.jpg",
					"gal": "/qube/qube-7-product-gal.jpg",
					"fullRes": "https://youtu.be/ybHAgAeMYXs"
				}
				
			]
		},

		{
			"title": "Kidogo Consultancy",
			"slug": "Kidogo2",
			"tags": [],
			"mainImage": {
				"lowRes": "/Kidogo2/Kidogo2-0-GalThumb.jpg",
				"highRes": "",
				"feature": "/Kidogo2/Kidogo2-0-GalThumb.jpg"
			},
			"description": "While in Nairobi I collaborated with Kidogo staff to design and implemented an ODK data collection via an ONA.io pipeline. This process dynamically updates a Google Sheets dashboard for better data visualization capacities, childcare social enterprise M&E, and Kidogo operations management. I trained members of the Kidogo research team in XLSForms for maintaining and generating surveys for versatile mobile data collection and aggregation to monitor and evaluate impact and to support Kidogo operations.",
			"bullets": [
				"Non-Profit Monitoring and Evaluation",
				"Rapid Prototyping / Training",
				"Customer Centered Design",
				"ODK / ONA.io", 
				"Google Sheets Development"
			],
			"gallery": [
				{
					"thumb": "/Kidogo2/Kidogo2-1-Pipeline-th.jpg",
					"gal": "/Kidogo2/Kidogo2-1-Pipeline.jpg",
					"fullRes": "/Kidogo2/Kidogo2-1-Pipeline.jpg"
				},
				{
					"thumb": "/Kidogo2/Kidogo2-2-TrainingSlides-th-2.jpg",
					"gal": "/Kidogo2/Kidogo2-2-TrainingSlides-gal.jpg",
					"fullRes": "/Kidogo2/Kidogo2-2-TrainingSlides.jpg"
				},
				{
					"thumb": "/Kidogo2/Kidogo2-3-Training-th.jpg",
					"gal": "/Kidogo2/Kidogo2-3-Training-gal.jpg",
					"fullRes": "/Kidogo2/Kidogo2-3-Training-th.jpg"
				},
				{
					"thumb": "/Kidogo2/Kidogo2-4-Dashboard-th.jpg",
					"gal": "/Kidogo2/Kidogo2-4-Dashboard.jpg",
					"fullRes": "/Kidogo2/Kidogo2-4-Dashboard.jpg"
				},
				{
					"thumb": "/Kidogo2/Kidogo2-5-Gist-th.jpg",
					"gal": "/Kidogo2/Kidogo2-5-Gist.jpg",
					"fullRes": "/Kidogo2/Kidogo2-5-Gist.jpg"
				},

			]	
		},

		{
			"title": "NBC Video Team",
			"slug": "NBCVid",
			"tags": [916 - 887 - 4001],
			"mainImage": {
				"lowRes": "/NBCVid/NBCVid-Feat.jpg",
				"highRes": "",
				"feature": "/NBCVid/NBCVid-Feat.jpg"
			},
			"description": "As a part of the central Video Product team I researched, developed, and integrated updates, solutions, and performance upgrades for the core Video Player as a service to peripheral brands. I advocated for Git workflow, API, codebase architecture and release processes best practices, collaborating within a small agile team. Consulted UX teams on Video Player during update releases and unified front-end integration across brands.",
			"bullets": [
				"Javascript Client Side Application",
				"Singleton, Module, Observer, Prototype Patterns",
				"HTML5 Media Elements &amp; Events",
				"Performance Testing &amp; Optimization",
				"Software as a Service"
				// "Test &amp; Dev Pages Creation"
			],
			"gallery": [
				{
					// !!!! TODO - ALT !!!!
					"thumb": "/NBCVid/NBCVid-Thumb1.jpg",
					"gal": "/NBCVid/NBCVid-Gal1.jpg",
					"fullRes": "/NBCVid/NBCVid-1-devices.jpg"
				},
				{
					"thumb": "/NBCVid/NBCVid-Thumb3.jpg",
					"gal": "/NBCVid/NBCVid-Gal3.jpg",
					// "fullRes": "NBCVid-3-Singleton.zip"
					"fullRes": "https://gist.github.com/cKellyDesign/542c70d4d79ee13e0ace"
				},
				{
					"thumb": "/NBCVid/NBCVid-Thumb4.jpg",
					"gal": "/NBCVid/NBCVid-Gal4.jpg",
					// "fullRes": "NBCVid-4-PDK+FW.zip"
					"fullRes": "https://gist.github.com/cKellyDesign/bdfb509fe904c1726253"
				},
				{
					"thumb": "/NBCVid/NBCVid-Thumb2.jpg",
					"gal": "/NBCVid/NBCVid-Gal2.jpg",
					"fullRes": "NBCVid-2-StateTestPage.jpg"
				}
			]	
		},
		{
			"title": "TODAY.com",
			"slug": "today",
			"tags": [],
			"mainImage": {
				"lowRes": "/today/today-0-feat.jpg",
				// "highRes": "/today/today-0-feat_outline.jpg",
				"highRes": "",
				"feature": "/today/today-0-feat.jpg"
			},
			"description": "While working at NBC I was dubbed most valuable player on TODAY.com's major replatforming. I championed every aspect of the project during the months of rebuilding the website from the ground up, leading our team to a successful launch. From bringing business oriented project goals to fruition, to defining agile workflow best practices, to continuously integrating significant amounts of work, I touched every corner of this expansive codebase.",
			"bullets": [
				"Full Stack UX Developer",
				"JavaScript, HTML5, Handlebars, CSS3, Sass",
				"NodeJS, BackboneJS, UnderscoreJS, Bluebird Promises",
				"Git, GitHub, Grunt",
				"Continuous Integration, MVP Standards, ZenHub, JIRA",
				"Mobile First WebApp"
			],
			"gallery": [
				{
					"thumb": "/today/today-thumb1-Cover.jpg",
					"gal": "/today/today-gal1-Cover.jpg",
					"fullRes": "/today/today-1-Cover.jpg"
				},
				{
					"thumb": "/today/today-thumb2-videoHub.jpg",
					"gal": "/today/today-gal2-videoHub.jpg",
					"fullRes": "/today/today-2-videoHub.jpg"
				},
				{
					"thumb": "/today/today-thumb3-canonicVideo.jpg",
					"gal": "/today/today-gal3-canonicVideo.jpg",
					"fullRes": "/today/today-3-canonicVideo.jpg"
				},
				{
					"thumb": "/today/today-thumb4-visualFront.jpg",
					"gal": "/today/today-gal4-visualFront.jpg",
					"fullRes": "/today/today-4-visualFront.jpg"
				},
				{
					"thumb": "/today/today-thumb5-articlePage.jpg",
					"gal": "/today/today-gal5-articlePage.jpg",
					"fullRes": "/today/today-5-articlePage.jpg"
				},
				{
					"thumb": "/today/today-thumb6-contributers.jpg",
					"gal": "/today/today-gal6-contributers.jpg",
					"fullRes": "/today/today-6-contributers.jpg"
				},
				{
					"thumb": "/today/today-thumb7-serverSideGist.jpg",
					"gal": "/today/today-gal7-serverSideGist.jpg",
					// "fullRes": "today-7-serverSideGist.gz"
					"fullRes": "https://gist.github.com/cKellyDesign/ceec07425fc07c3aa656"
				},
				{
					"thumb": "/today/today-thumb8-clientSideGist.jpg",
					"gal": "/today/today-gal8-clientSideGist.jpg",
					// "fullRes": "today-8-clientSideGist.gz"
					"fullRes": "https://gist.github.com/cKellyDesign/f613bd18cca9e940bf42"
				},
				{
					"thumb": "/today/today-thumb9-FEandWorkflowArchGist.jpg",
					"gal": "/today/today-gal9-FEandWorkflowArchGist.jpg",
					// "fullRes": "today-9-FEandWorkflowArchGist.gz"
					"fullRes": "https://gist.github.com/cKellyDesign/b180937918e3aa644cea"
				},
				{
					"thumb": "/today/today-thumb10-wallOfGreen.jpg",
					"gal": "/today/today-gal10-wallOfGreen.jpg",
					"fullRes": "/today/today-10-wallOfGreen.jpg"
				}
			]	
		},
		{
			"title": "LivelyHoods",
			"slug": "LHAP",
			"tags":[],
			"mainImage": {
				"lowRes": "/LHAP/LHAP-galThumb.jpg",
				"highRes": "/LHAP/LHAP-0-feat.jpg",
				"feature": "/LHAP/LHAP-feat.jpg"
			},
			"description": "With the non-profit organization LivelyHoods, I had the opportunity to redefine their two distinct LivelyHoods/iSmart brand experiences by designing internal and external print materials, developing their first ever annual report and item catalogue.",
			"bullets": [
				"Graphic Design",
				"Visual Communications",
				"Brand Design",
				"Internal/External Materials"
			],
			"gallery": [
				{
					"thumb": "/LHAP/LHAP-thumb1.jpg",
					"gal": "/LHAP/LHAP-Gal1.jpg",
					"fullRes": "/LHAP/LHAP-1.jpg",
					"otherLink": ""
				},
				{
					"thumb": "/LHAP/LHAP-thumb2.jpg",
					"gal": "/LHAP/LHAP-Gal2.jpg",
					"fullRes": "/LHAP/LHAP-2.jpg",
					"otherLink": ""
				},
				{
					"thumb": "/LHAP/LHAP-thumb3.jpg",
					"gal": "/LHAP/LHAP-Gal3.jpg",
					"fullRes": "/LHAP/LHAP-3.jpg",
					"otherLink": ""
				},
				{
					"thumb": "/LHAP/LHAP-thumb4.jpg",
					"gal": "/LHAP/LHAP-Gal4.jpg",
					"fullRes": "/LHAP/LHAP-4.jpg",
					"otherLink": ""
				}
			]
		},
		{
			"title": "nbcnews.com",
			"slug": "nbcnews",
			"tags":[],
			"mainImage": {
				"lowRes": "/nbcnews/nbcnews-feat2.jpg",
				"highRes": "",
				"feature": "/nbcnews/nbcnews-feat2.jpg"
			},
			"description": "I worked on the highly agile NBC UX Team and provided Front End development to launch nbcnews.com. While I contributed to the progressively enhancing \"Premium Experience\", I took on the major role of re-developing the gracefully degrading \"Baseline Experience\" to ensure compatibility among legacy browsers.",
			"bullets": [
				"UI/UX",
				"Github",
				"Agile Workflow",
				"Browser Compatibility",
				"Responsive Design"
			],
			"gallery": [
				{
					"thumb": "/nbcnews/nbcnews-thumb1.jpg",
					"gal": "/nbcnews/nbcnews-gal1.jpg",
					"fullRes": "/nbcnews/nbcnews-1.jpg",
					"otherLink": ""
				},
				{
					"thumb": "/nbcnews/nbcnews-thumb2.jpg",
					"gal": "/nbcnews/nbcnews-gal2.jpg",
					"fullRes": "/nbcnews/nbcnews-2.jpg",
					"otherLink": ""
				},
				{
					"thumb": "/nbcnews/nbcnews-thumb3.jpg",
					"gal": "/nbcnews/nbcnews-gal3.jpg",
					"fullRes": "nbcnews-3.jpg",
					"otherLink": ""
				},
				{
					"thumb": "/nbcnews/nbcnews-thumb4.jpg",
					"gal": "/nbcnews/nbcnews-gal4.jpg",
					"fullRes": "/nbcnews/nbcnews-4.jpg",
					"otherLink": ""
				},
				{
					"thumb": "/nbcnews/nbcnews-thumb5.jpg",
					"gal": "/nbcnews/nbcnews-gal5.jpg",
					"fullRes": "/nbcnews/nbcnews-5.jpg",
					"otherLink": ""
				},
				{
					"thumb": "/nbcnews/nbcnews-thumb6.jpg",
					"gal": "/nbcnews/nbcnews-gal6.jpg",
					"fullRes": "/nbcnews/nbcnews-6.jpg",
					"otherLink": ""
				},
				{
					"thumb": "/nbcnews/nbcnews-thumb7.jpg",
					"gal": "/nbcnews/nbcnews-gal7.jpg",
					"fullRes": "/nbcnews/nbcnews-7.jpg",
					"otherLink": ""
				}
				
			]
		},
		{
			"title": "MSNBC.com",
			"slug": "msnbc",
			"tags":[],
			"mainImage": {
				"lowRes": "/msnbc/msnbc-galThumb_2x.jpg",
				"highRes": "",
				// "highRes": "/msnbc/msnbc-galThumb_2x_outline.jpg",
				"feature": "/msnbc/msnbc-feat.jpg"
			},
			"description": "I provided NBC with Front End design support to launch msnbc.com, ensuring the consistency and coherency of NBC's user experience across all browsers and devices.  Collaborating with multiple teams, I tracked and resolved bugs using Jira ticketing and SVN version control.",
			"bullets": [
				"UI/UX",
				"Graceful Degradation",
				"Responsive Design",
				"Quality Assurance"
			],
			"gallery": [
				{
					"thumb": "/msnbc/msnbc-thumb1.jpg",
					"gal": "/msnbc/msnbc-Gal1a.jpg",
					"fullRes": "/msnbc/msnbc-1.jpg",
					"otherLink": ""
				},
				{
					"thumb": "/msnbc/msnbc-thumb2.jpg",
					"gal": "/msnbc/msnbc-Gal2a.jpg",
					"fullRes": "/msnbc/msnbc-2b.jpg",
					"otherLink": ""
				},
				{
					"thumb": "/msnbc/msnbc-thumb3.jpg",
					"gal": "/msnbc/msnbc-Gal3a.jpg",
					"fullRes": "/msnbc/msnbc-3a.jpg",
					"otherLink": ""
				},
				{
					"thumb": "/msnbc/msnbc-thumb4.jpg",
					"gal": "/msnbc/msnbc-Gal4a.jpg",
					"fullRes": "/msnbc/msnbc-4a.jpg",
					"otherLink": ""
				},
				{
					"thumb": "/msnbc/msnbc-thumb5.jpg",
					"gal": "/msnbc/msnbc-Gal5.jpg",
					"fullRes": "/msnbc/msnbc-5.jpg",
					"otherLink": ""
				},
				{
					"thumb": "/msnbc/msnbc-thumb6.png",
					"gal": "/msnbc/msnbc-Gal6.png",
					"fullRes": "/msnbc/msnbc-6.png",
					"otherLink": ""
				}
			]
		},
		{
			"title": "YP Template Framework",
			"slug": "TemplateFramework",
			"tags":[],
			"mainImage": {
				"lowRes": "/TemplateFramework/TemplateFramework-Feat3.jpg",
				// "highRes": "/TemplateFramework/YP_0_feat_outline.jpg",
				"highRes": "",
				"feature": "/TemplateFramework/TemplateFramework-Feat.jpg"
			},
			"description": "Most of my time at YP Holdings I was on the Research and Development team working on YP's new DIY web product designing, developing, and distributing front-end frameworks for my team.",
			"bullets": [
				"Responsive Design",
				"HTML5, CSS3, JavaScript, jQuery",
				"Project Management",
				"Quality Assurance"
			],
			"gallery": [
				{
					"thumb": "/TemplateFramework/TemplateFramework-Thumb1.jpg",
					"gal": "/TemplateFramework/TemplateFramework-Gal1b.jpg",
					"fullRes": "https://github.com/EchoTemplates"
				},
				{
					"thumb": "/TemplateFramework/TemplateFramework-Thumb2.jpg",
					"gal": "/TemplateFramework/TemplateFramework-Gal2b.jpg",
					"fullRes": "/TemplateFramework/TemplateFramework-2-HealthWellness/HealthWellness.html"
				},
				{
					"thumb": "/TemplateFramework/TemplateFramework-Thumb3.jpg",
					"gal": "/TemplateFramework/TemplateFramework-Gal3b.jpg",
					"fullRes": "/TemplateFramework/TemplateFramework-3-Locksmith/Locksmith.html"
				},
				{
					"thumb": "/TemplateFramework/TemplateFramework-Thumb4.jpg",
					"gal": "/TemplateFramework/TemplateFramework-Gal4b.jpg",
					"fullRes": "/TemplateFramework/TemplateFramework-4-Fitness/Fitness.html"
				},
				{
					"thumb": "/TemplateFramework/TemplateFramework-Thumb5.jpg",
					"gal": "/TemplateFramework/TemplateFramework-Gal5b.jpg",
					"fullRes": "/TemplateFramework/TemplateFramework-5-MartialArts/MartialArts.html"
				}
			]
		},
		{
			"title": "YP Premium Design",
			"slug": "Premium",
			"tags": [],
			"mainImage": {
				"lowRes": "/Premium/Premium-Feat1.jpg",
				"highRes": "",
				"feature": "/Premium/Premium-Feat1.jpg"
			},
			"description": "Part of my time at YP Holdings I was on the Premium Web Design team, designing and developing custom web sites for small business across the nation.",
			"bullets": [
				"UI &amp; UX Design",
				"Front-End Development",
				"HTML, CSS, jQuery",
				"Agency Experience"
			],
			"gallery": [
				{
					"thumb": "/Premium/Premium-Thumb1.jpg",
					"gal": "/Premium/Premium-Gal1.jpg",
					"fullRes": "/Premium/Premium_1_bedfellows/index-new.html"
				},
				{
					"thumb": "/Premium/Premium-Thumb2.jpg",
					"gal": "/Premium/Premium-Gal2.jpg",
					"fullRes": "/Premium/Premium_2_Bowman/index-new.html"
				},
				{
					"thumb": "/Premium/Premium-Thumb3.jpg",
					"gal": "/Premium/Premium-Gal3.jpg",
					"fullRes": "/Premium/Premium_3_allseasonsonehourair/index-new.html"
				},
				{
					"thumb": "/Premium/Premium-Thumb4.jpg",
					"gal": "/Premium/Premium-Gal4.jpg",
					"fullRes": "/Premium/Premium_4_ComfortAir/index-new.html"
				},
				{
					"thumb": "/Premium/Premium-Thumb5.jpg",
					"gal": "/Premium/Premium-Gal5.jpg",
					"fullRes": "/Premium/Premium-Gal5a.jpg"
				}
			]	
		},
		{
			"title": "Water1st.org",
			"slug": "Water1stOrg",
			"tags": [],
			"mainImage": {
				"lowRes": "/Water1st/Water1st-Featb.jpg",
				"highRes": "",
				"feature": "/Water1st/Water1st-Featb.jpg"
			},
			"description": "With Water 1st I remotely designed and developed the front and back ends of a custom Wordpress theme from UX/UI to launch and maintenance. As I worked solo I was given the opportunity to learn anything and everything I needed to overcome any obstacles in delivering this product. Utilizing custom plugins and API integrations, the theme was hand crafted to match the client's needs.",
			"bullets": [
				"UX &amp; UI Design",
				"HTML5, CSS3, jQuery, PHP5, MySQL",
				"Custom Wordpress Template"
			],
			"gallery": [
				{
					"thumb": "/Water1st/Water1st-Thumb1b.jpg",
					"gal": "/Water1st/Water1st-Gal1b.jpg",
					"fullRes": "/Water1st/Water1st-1b.jpg"
				},
				{
					"thumb": "/Water1st/Water1st-Thumb2b.jpg",
					"gal": "/Water1st/Water1st-Gal2b.jpg",
					"fullRes": "/Water1st/Water1st-2b.jpg"
				},
				{
					"thumb": "/Water1st/Water1st-Thumb3b.jpg",
					"gal": "/Water1st/Water1st-Gal3b.jpg",
					"fullRes": "/Water1st/Water1st-3b.jpg"
				},
				{
					"thumb": "/Water1st/Water1st-Thumb4b.jpg",
					"gal": "/Water1st/Water1st-Gal4b.jpg",
					"fullRes": "/Water1st/Water1st-4b.jpg"
				},
				{
					"thumb": "/Water1st/Water1st-Thumb5b.jpg",
					"gal": "/Water1st/Water1st-Gal5b.jpg",
					"fullRes": "/Water1st/Water1st-5b.jpg"
				},
				{
					"thumb": "/Water1st/Water1st-Thumb6b.jpg",
					"gal": "/Water1st/Water1st-Gal6b.jpg",
					"fullRes": "/Water1st/Water1st-6b.jpg"
				},
				{
					"thumb": "/Water1st/Water1st-Thumb7b.jpg",
					"gal": "/Water1st/Water1st-Gal7b.jpg",
					"fullRes": "/Water1st/Water1st-7b.jpg"
				}
			]	
		},
		{
			"title": "Carry 5 Campaign",
			"slug": "Water1stCampaign",
			"tags": [],
			"mainImage": {
				"lowRes": "/Water1st/W1Campaign-Gal3.jpg",
				"highRes": "",
				"feature": "/Water1st/W1Campaign-Featb.jpg" 
			},
			"description": "For Water 1st International, I implemented a total redesign of their entire brand unifying their campaign across print, web, and mobile materials. I worked remotely with the Water 1st staff and board of directors to design a powerful user experience, emotionally connecting with donors and supporters alike.",
			"bullets": [
				"Graphic &amp; Print Design",
				"Non-Profit Communications",
				"Photoshop, Illustrator, InDesign"
			],
			"gallery": [
				{
					"thumb": "/Water1st/W1Campaign-Thumb1b.jpg",
					"gal": "/Water1st/W1Campaign-Gal1b.jpg",
					"fullRes": "/Water1st/Water1st-1b.jpg"
				},
				{
					"thumb": "/Water1st/W1Campaign-Thumb2.jpg",
					"gal": "/Water1st/W1Campaign-Gal2b.jpg",
					"fullRes": "/Water1st/W1Campaign-2b.jpg"
				},
				{
					"thumb": "/Water1st/W1Campaign-Thumb3.jpg",
					"gal": "/Water1st/W1Campaign-Gal3.jpg",
					"fullRes": "/Water1st/W1Campaign-3.jpg"
				},
				{
					"thumb": "/Water1st/W1Campaign-Thumb4.jpg",
					"gal": "/Water1st/W1Campaign-Gal4.jpg",
					"fullRes": "/Water1st/W1Campaign-4.jpg"
				},
				{
					"thumb": "/Water1st/W1Campaign-Thumb5.jpg",
					"gal": "/Water1st/W1Campaign-Gal5.jpg",
					"fullRes": "/Water1st/W1Campaign-5.jpg"
				}
			]	
		},
		{
			"title": "Redbook Online Mobile",
			"slug": "ROL",
			"tags": [],
			"mainImage": {
				"lowRes": "/ROL/ROL-Feat.jpg",
				"highRes": "",
				"feature": "/ROL/ROL-Feat.jpg"
			},
			"description": "This is the mobile version of the web app Redbook Online. From creating wireframes and IA, to developing user flows, to building and testing prototypes, I was integral to every facet of the process. I collaborated directly with fellow developers through the implementation process to deliver the extensive product under demanding deadlines.",
			"bullets": [
				"UX &amp; UI Design",
				"Mobile App Design",
				"Data Driven Design",
				"Wireframes &amp; User-flows"
			],
			"gallery": [
				{
					"thumb": "/ROL/ROL-Thumb1.jpg",
					"gal": "/ROL/ROL-Gal1.jpg",
					"fullRes": "/ROL/ROL-1.jpg"
				},
				{
					"thumb": "/ROL/ROL-Thumb2b.jpg",
					"gal": "/ROL/ROL-Gal2b.jpg",
					"fullRes": "/ROL/ROL-2b.jpg"
				},
				{
					"thumb": "/ROL/ROL-Thumb3b.jpg",
					"gal": "/ROL/ROL-Gal3b.jpg",
					"fullRes": "/ROL/ROL-3b.jpg"
				},
				{
					"thumb": "/ROL/ROL-Thumb4b.jpg",
					"gal": "/ROL/ROL-Gal4b.jpg",
					"fullRes": "/ROL/ROL-4b.jpg"
				},
				{
					"thumb": "/ROL/ROL-Thumb5b.jpg",
					"gal": "/ROL/ROL-Gal5b.jpg",
					"fullRes": "/ROL/ROL-5b.jpg"
				},
				{
					"thumb": "/ROL/ROL-Thumb6b.jpg",
					"gal": "/ROL/ROL-Gal6b.jpg",
					"fullRes": "/ROL/ROL-6b.jpg"
				},
				{
					"thumb": "/ROL/ROL-Thumb7b.jpg",
					"gal": "/ROL/ROL-Gal7b.jpg",
					"fullRes": "/ROL/ROL-7b.jpg"
				}
			]	
		},
		{
			"title": "Taste Finder",
			"slug": "TasteFinder",
			"tags": [],
			"mainImage": {
				"lowRes": "/TasteFinder/TasteFinder-Feat.jpg",
				"highRes": "",
				"feature": "/TasteFinder/TasteFinder-Feat.jpg"
			},
			"description": "TasteFinder.com was a pitch design for Sam's Club to get them further into the wine market. We designed both a site to promote wines and the beginnings of a mobile application to allow customers to find wine ratings and video reviews.",
			"bullets": [
				"UI &amp; UX Design",
				"Icon &amp; Graphic Design",
				"eCommerce Platform",
				"Photoshop, Illustrator, Axure"
			],
			"gallery": [
				{
					"thumb": "/TasteFinder/TasteFinder-Thumb1.jpg",
					"gal": "/TasteFinder/TasteFinder-Gal1b.jpg",
					"fullRes": "/TasteFinder/TasteFinder-1b.jpg"
				},
				{
					"thumb": "/TasteFinder/TasteFinder-Thumb2.jpg",
					"gal": "/TasteFinder/TasteFinder-Gal2b.jpg",
					"fullRes": "/TasteFinder/TasteFinder-2b.jpg"
				},
				{
					"thumb": "/TasteFinder/TasteFinder-Thumb3.jpg",
					"gal": "/TasteFinder/TasteFinder-Gal3b.jpg",
					"fullRes": "/TasteFinder/TasteFinder-3b.jpg"
				},
				{
					"thumb": "/TasteFinder/TasteFinder-Thumb5b.jpg",
					"gal": "/TasteFinder/TasteFinder-Gal5b.jpg",
					"fullRes": "/TasteFinder/TasteFinder-5b.jpg"
				},
				{
					"thumb": "/TasteFinder/TasteFinder-Thumb6b.jpg",
					"gal": "/TasteFinder/TasteFinder-Gal6b.jpg",
					"fullRes": "/TasteFinder/TasteFinder-6b.jpg"
				},
				{
					"thumb": "/TasteFinder/TasteFinder-Thumb7b.jpg",
					"gal": "/TasteFinder/TasteFinder-Gal7b.jpg",
					"fullRes": "/TasteFinder/TasteFinder-7b.jpg"
				},
				{
					"thumb": "/TasteFinder/TasteFinder-Thumb8b.jpg",
					"gal": "/TasteFinder/TasteFinder-Gal8b.jpg",
					"fullRes": "/TasteFinder/TasteFinder-8b.jpg"
				}
			]	
		},
		{
			"title": "Whitman Redbook Online",
			"slug": "Redbook",
			"tags": [],
			"mainImage": {
				"lowRes": "/Redbook/Redbook-Feat.jpg",
				"highRes": "",
				"feature": "/Redbook/Redbook-Feat.jpg"
			},
			"description": "Whitman Publishing has been printing the coin pricing book The Redbook for decades and we designed and developed this web app to present coin data to paying subscribers.",
			"bullets": [
				"Web App Design",
				"UX &amp; UI Design",
				"Data Centric Design"
			],
			"gallery": [
				{
					"thumb": "/Redbook/Redbook-Thumb1.jpg",
					"gal": "/Redbook/Redbook-Gal1.jpg",
					"fullRes": "/Redbook/Redbook-1.jpg"
				},
				{
					"thumb": "/Redbook/Redbook-Thumb2.jpg",
					"gal": "/Redbook/Redbook-Gal2.jpg",
					"fullRes": "/Redbook/Redbook-2.jpg"
				},
				{
					"thumb": "/Redbook/Redbook-Thumb3.jpg",
					"gal": "/Redbook/Redbook-Gal3.jpg",
					"fullRes": "/Redbook/Redbook-3.jpg"
				},
				{
					"thumb": "/Redbook/Redbook-Thumb4.jpg",
					"gal": "/Redbook/Redbook-Gal4.jpg",
					"fullRes": "/Redbook/Redbook-4.jpg"
				},
				{
					"thumb": "/Redbook/Redbook-Thumb5.jpg",
					"gal": "/Redbook/Redbook-Gal5.jpg",
					"fullRes": "/Redbook/Redbook-5.jpg"
				},
				{
					"thumb": "/Redbook/Redbook-Thumb6.jpg",
					"gal": "/Redbook/Redbook-Gal6.jpg",
					"fullRes": "/Redbook/Redbook-6.jpg"
				}
			]	
		},
		// {
		// 	"title": "Whitman Themed Landing Pages",
		// 	"slug": "WTL",
		// 	"tags": [],
		// 	"mainImage": {
		// 		"lowRes": "/Whitman/WTL-Feat.jpg",
		// 		"highRes": "",
		// 		"feature": "/Whitman/WTL-Feat.jpg"
		// 	},
		// 	"description": "This was a project to design themed landing pages for Whitman Publishing's new State Series and National Park Series merchandise. The fully interactive map draws in users and provides information on the coin and related state or park before guiding them to the eCommerce portion of the site.",
		// 	"bullets": [
		// 		"UI &amp; UX Design",
		// 		"eCommerce Marketing",
		// 		"Photoshop, Illustrator, Axure"
		// 	],
		// 	"gallery": [
		// 		{
		// 			"thumb": "/Whitman/WTL-Thumb1.jpg",
		// 			"gal": "/Whitman/WTL-Gal1.jpg",
		// 			"fullRes": "/Whitman/WTL-1.jpg"
		// 		},
		// 		{
		// 			"thumb": "/Whitman/WTL-Thumb2.jpg",
		// 			"gal": "/Whitman/WTL-Gal2.jpg",
		// 			"fullRes": "/Whitman/WTL-2.jpg"
		// 		},
		// 		{
		// 			"thumb": "/Whitman/WTL-Thumb3.jpg",
		// 			"gal": "/Whitman/WTL-Gal3.jpg",
		// 			"fullRes": "/Whitman/WTL-1.jpg"
		// 		},
		// 		{
		// 			"thumb": "/Whitman/WTL-Thumb4.jpg",
		// 			"gal": "/Whitman/WTL-Gal4.jpg",
		// 			"fullRes": "/Whitman/WTL-4.jpg"
		// 		},
		// 		{
		// 			"thumb": "/Whitman/WTL-Thumb5.jpg",
		// 			"gal": "/Whitman/WTL-Gal5.jpg",
		// 			"fullRes": "/Whitman/WTL-5.jpg"
		// 		},
		// 		{
		// 			"thumb": "/Whitman/WTL-Thumb6.jpg",
		// 			"gal": "/Whitman/WTL-Gal6.jpg",
		// 			"fullRes": "/Whitman/WTL-6.jpg"
		// 		}
		// 	]	
		// },
		{
			"title": "Tutu Couture",
			"slug": "Tutu",
			"tags": [],
			"mainImage": {
				"lowRes": "/Tutu/Tutu-Feat2.jpg",
				"highRes": "",
				"feature": "/Tutu/Tutu-Feat2.jpg"
			},
			"description": "Tutu Couture is a company under the Anderson Press, Inc umbrella. I designed several iterations of the Tutu Couture landing page.",
			"bullets": [
				"Web Design",
				"Graphic Design",
				"eCommerce Landing Page"
			],
			"gallery": [
				{
					"thumb": "/Tutu/Tutu-Thumb1.jpg",
					"gal": "/Tutu/Tutu-Gal1.jpg",
					"fullRes": "/Tutu/Tutu-1.jpg"
				},
				{
					"thumb": "/Tutu/Tutu-Thumb2.jpg",
					"gal": "/Tutu/Tutu-Gal2.jpg",
					"fullRes": "/Tutu/Tutu-2.jpg"
				},
				{
					"thumb": "/Tutu/Tutu-Thumb3.jpg",
					"gal": "/Tutu/Tutu-Gal3.jpg",
					"fullRes": "/Tutu/Tutu-3.jpg"
				},
				{
					"thumb": "/Tutu/Tutu-Thumb4.jpg",
					"gal": "/Tutu/Tutu-Gal4.jpg",
					"fullRes": "/Tutu/Tutu-4.jpg"
				},
				{
					"thumb": "/Tutu/Tutu-Thumb5.jpg",
					"gal": "/Tutu/Tutu-Gal5.jpg",
					"fullRes": "/Tutu/Tutu-5.jpg"
				},

			]	
		},

	],

	"Projects": [

		{
			"title": "Upendo",
			"slug": "upendo",
			"tags": [],
			"mainImage": {
				"lowRes": "/upendo/upendo_thumbGal_2x.jpg",
				"highRes": "",
				"feature": "/upendo/upendo_1thumb_FullPage.jpg"
			},
			"description": "Upendo Children Centre is run by an extraordinary woman by the name of Everlyn Ingosi who loves and nurtures the children in her care. She produces crafts to generate extra income to support the centre and now has an Etsy Shop. This site gives Upendo a public face to help generate traffic to and boost her credibility online.",
			"bullets": [
				"Pro Bono Web &amp; Design",
				"Logo &amp; Branding Design",
				"Consultation Services",
				"Squarespace Template Enhancement"
			],
			"gallery": [
				{
					"thumb": "/upendo/upendo_1thumb_FullPage.jpg",
					"gal": "/upendo/upendo_1_FullPage_2x.jpg",
					"fullRes": "/upendo/upendo_1_FullPage.jpg"
				},
				{
					"thumb": "/upendo/upendo_2thumb_WP_2x.jpg",
					"gal": "/upendo/upendo_2_WP_2x.jpg",
					"fullRes": "/upendo/upendo_2_WP.jpg"
				},
				{
					"thumb": "/upendo/upendo_3thumb_Logo_2x.jpg",
					"gal": "/upendo/upendo_3_Logo_2x.jpg",
					"fullRes": "/upendo/upendo_3_Logo.jpg"
				}
			]	
		},


		{
			"title": "ECD Network for Kenya",
			"slug": "ECDNeK",
			"tags": [],
			"mainImage": {
				"lowRes": "/ECDNeK/ECDNeK_0galThumb_2x.jpg",
				"highRes": "",
				"feature": "/ECDNeK/ECDNeK_0galThumb_2x.jpg"
			},
			"description": "I built a WordPress website allowing the organization to obtain official non-profit status while providing a platform to recruit new member organizations. Key features include information about ECDNeK, network member listings and profiles, new member request forms, and an event calendar.",
			"bullets": [
				"Pro Bono Web &amp; Design",
				"Logo &amp; Branding Design",
				"Consultation Services",
				"Squarespace Template Enhancement"
			],
			"gallery": [
				{
					"thumb": "/ECDNeK/ECDNeK_1Thumb_Home_2x.jpg",
					"gal": "/ECDNeK/ECDNeK_1gal_Home_2x.jpg",
					"fullRes": "/ECDNeK/ECDNeK_1_Home.jpg"
				},
				{
					"thumb": "/ECDNeK/ECDNeK_2Thumb_Members_2x.jpg",
					"gal": "/ECDNeK/ECDNeK_2gal_Members_2x.jpg",
					"fullRes": "/ECDNeK/ECDNeK_2_Members.jpg"
				},
				{
					"thumb": "/ECDNeK/ECDNeK_3Thumb_Member_2x.jpg",
					"gal": "/ECDNeK/ECDNeK_3gal_Member_2x.jpg",
					"fullRes": "/ECDNeK/ECDNeK_3_Member.jpg"
				},
				{
					"thumb": "/ECDNeK/ECDNeK_4Thumb_Join_2x.jpg",
					"gal": "/ECDNeK/ECDNeK_4gal_Join_2x.jpg",
					"fullRes": "/ECDNeK/ECDNeK_4_Join.jpg"
				},
				{
					"thumb": "/ECDNeK/ECDNeK_5thumb_Logo_2x.jpg",
					"gal": "/ECDNeK/ECDNeK_5gal_Logo_2x.jpg",
					"fullRes": "/ECDNeK/ECDNeK_5_Logo.jpg"
				},
			]	
		},

		{
			"title": "Kidogo Branding",
			"slug": "Kidogo",
			"tags": [],
			"mainImage": {
				"lowRes": "/Kidogo1/Kidogo-0-GalThumb1.jpg",
				"highRes": "",
				"feature": "/Kidogo1/Kidogo-Feat.jpg"
			},
			"description": "I provided web and design consultation for nonprofit Kidogo Early Years located in Nairobi, Kenya. I designed Curriculum handbook, produced logo and branding design iterations submitted to members of the community for feedback and provided consultations on the creation, and implemented a new foursquare web template.",
			"bullets": [
				"Pro Bono Web &amp; Design",
				"Logo &amp; Branding Design",
				"Consultation Services",
				"Squarespace Template Enhancement"
			],
			"gallery": [
				{
					"thumb": "/Kidogo1/Kidogo-1-Curriculum-th.jpg",
					"gal": "/Kidogo1/Kidogo-1-Curriculum-gal.jpg",
					"fullRes": "/Kidogo1/Kidogo-1-Curriculum.jpg"
				},
				{
					"thumb": "/Kidogo1/Kidogo-2-logos-th.jpg",
					"gal": "/Kidogo1/Kidogo-2-logos.jpg",
					"fullRes": "/Kidogo1/Kidogo-2-logos.jpg"
				},
				{
					"thumb": "/Kidogo1/Kidogo-3-Website-th.jpg",
					"gal": "/Kidogo1/Kidogo-3-Website-gal.jpg",
					"fullRes": "/Kidogo1/Kidogo-3-Website.jpg"
				},
			]	
		},
		{
			"title": "Kenya Community Childcare Initiative",
			"slug": "KCCI",
			"tags": [],
			"mainImage": {
				"lowRes": "/KCCI/KCCI-Feat.jpg",
				"highRes": "",
				"feature": "/KCCI/KCCI-Feat.jpg"
			},
			"description": "For KCCI I designed and produced a coherent and consistent brand campaign across web/interactive, motion, and print materials.",
			"bullets": [
				"Graphic, Web &amp; Motion Design",
				"Non-Profit Communications",
				"Photoshop, Illustrator, After Effects"
			],
			"gallery": [
				{
					"thumb": "/KCCI/KCCI-Thumb1.jpg",
					"gal": "/KCCI/KCCI-Gal1.jpg",
					"fullRes": "/KCCI/KCCI-1.jpg"
				},
				{
					"thumb": "/KCCI/KCCI-Thumb2.jpg",
					"gal": "/KCCI/KCCI-Gal2b.jpg",
					"fullRes": "/KCCI/KCCI-2.jpg"
				},
				{
					"thumb": "/KCCI/KCCI-Thumb3.jpg",
					"gal": "/KCCI/KCCI-Gal3.jpg",
					"fullRes": "https://www.youtube.com/watch?v=WfooHZbNuOs"
				},
				{
					"thumb": "/KCCI/KCCI-Thumb4.jpg",
					"gal": "/KCCI/KCCI-Gal4.jpg",
					"fullRes": "/KCCI/KCCI-4.jpg"
				},

			]	
		},
		
		{
			"title": "BusyBee Spelling",
			"slug": "BusyBee",
			"tags": [],
			"mainImage": {
				"lowRes": "/BusyBee/BusyBee-GalThumb.jpg",
				"highRes": "",
				"feature": "/BusyBee/BusyBee-Feat.jpg"
			},
			"description": "I developed a children's spelling game for Android and iOS utilizing PhoneGap and Cordova for the backend and AngularJS for the frontend. Kids (and adults!) navigate through various levels of difficulty selecting the correctly cased vowels, consonants, digraphs, and blends before restarting their adventure.",
			"bullets": [
				"AngularJS",
				"PhoneGap &amp; Cordova",
				"Android &amp; iOS",
				"Early Childhood Development"
			],
			"gallery": [
				{
					"thumb": "/BusyBee/BusyBee-Thumb1.jpg",
					"gal": "/BusyBee/BusyBee-Gal1.jpg",
					"fullRes": "/BusyBee/BusyBee-1-GamePlay.jpg"
				},
				{
					"thumb": "/BusyBee/BusyBee-Thumb2.jpg",
					"gal": "/BusyBee/BusyBee-Gal2.jpg",
					"fullRes": "/BusyBee/BusyBee-2-WinScreen.jpg"
				},
				{
					"thumb": "/BusyBee/BusyBee-Thumb3.jpg",
					"gal": "/BusyBee/BusyBee-Gal3.jpg",
					"fullRes": "/BusyBee/BusyBee-3-Splash.jpg"
				},
				{
					"thumb": "/BusyBee/BusyBee-Thumb4.jpg",
					"gal": "/BusyBee/BusyBee-Gal4.jpg",
					"fullRes": "/BusyBee/BusyBee-4-HardLevel.jpg"
				},
				{
					"thumb": "/BusyBee/BusyBee-Thumb5.jpg",
					"gal": "/BusyBee/BusyBee-Gal5.jpg",
					// "fullRes": "BusyBee-5-Angular.jpg"
					"fullRes": "https://github.com/cKellyDesign/BusyBeeSpelling"
				}
			]	
		},

		
		
		{
			"title": "Community Partners International",
			"slug": "CPI",
			"tags": [],
			"mainImage": {
				"lowRes": "/CPI/CPI-Feat.jpg",
				"highRes": "",
				"feature": "/CPI/CPI-Feat.jpg"
			},
			"description": "I worked with Community Partners International to develop the organization's overall branding, web, and print design. When I initially became involved, Community Partners International was a newly formed organization without an identity. I did market competitor research of other local and international non-profits to find a niche where CPI would stand out.",
			"bullets": [
				"Graphic &amp; Logo Design",
				"Information Architecture",
				"Competitor Analysis"
			],
			"gallery": [
				{
					"thumb": "/CPI/CPI-Thumb1.jpg",
					"gal": "/CPI/CPI-Gal1.jpg",
					"fullRes": "/CPI/CPI-1.jpg"
				},
				{
					"thumb": "/CPI/CPI-Thumb2.jpg",
					"gal": "/CPI/CPI-Gal2b.jpg",
					"fullRes": "/CPI/CPI-2.jpg"
				},
				{
					"thumb": "/CPI/CPI-Thumb3.jpg",
					"gal": "/CPI/CPI-Gal3.jpg",
					"fullRes": "/CPI/CPI-3.jpg"
				},
				{
					"thumb": "/CPI/CPI-Thumb4.jpg",
					"gal": "/CPI/CPI-Gal4.jpg",
					"fullRes": "/CPI/CPI-4.jpg"
				},
				{
					"thumb": "/CPI/CPI-Thumb5.jpg",
					"gal": "/CPI/CPI-Gal5.jpg",
					"fullRes": "/CPI/CPI-5.jpg"
				}
			]	
		}
	],
	"Contact": {
		"blurb": "<p>Currently located in Nairobi, Kenya <br>I work both domestically and internationally. I am available for freelance and/or telecommuting opportunities.<p><p class='blue'>Contact me today for your web communication needs!</p>"
	}
};

export interface HeaderLink {
	title: string;
	innerText: string;
	url: string;
	rel?: string;
	target?: string;
}

export const headerLinks: HeaderLink[] = [
  // linkedIn
  {
    title: "LinkedIn",
    innerText: "LinkedIn",
    url: "https://github.com/cKellyDesign",
    rel: "noopener noreferrer",
    target: "_blank",
  },
  // github
  {
    title: "GitHub",
    innerText: "GitHub",
    url: "https://github.com/cKellyDesign",
    rel: "noopener noreferrer",
    target: "_blank",
  },
  // email
  {
    title: "Email",
    innerText: "Email",
    url: "mailto:ckellydesign.net@gmail.com",
    rel: "noopener noreferrer",
    target: "_blank",
  },
	// accessitech
	{
		title: "AccessiTech",
		innerText: "AccessiTech",
		url: "https://accessi.tech",
		rel: "noopener noreferrer",
		target: "_blank",
	},
  // resume
  // {
  //   title: "Resume",
  //   innerText: "Resume",
  //   url: "",
  //   rel: "noopener noreferrer",
  //   target: "_blank",
  // },
];



export interface Collection {
	[key: string]: Project;
}

export const aboutSection = {
  id: "about",
  header: "About",
  blurb: [
    "I am an accessibility consultant, design technologist, and technical leader with over 15 years of experience in web development, digital accessibility, and user experience design. I'm extremely passionate about making the web more accessible and inclusive for all users.",
  ],
};

/* Basic Project Data Structure

		{
			"title": "",
			"slug": "",
			"tags": [],
			"mainImage": {
				"lowRes": "",
				"highRes": "",
				"feature": ""
			},
			"description": "",
			"bullets": [],
			"gallery": [
				{
					"thumb": "",
					"gal": "",
					"fullRes": ""
				}
			]	
		}

*/
