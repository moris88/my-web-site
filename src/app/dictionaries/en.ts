const dictionary = {
	language: 'English',
	lang: 'en',
	go_back: 'Go back',
	go_privacy: 'Go to privacy policy',
	go_cookies: 'Go to cookie policy',
	navbar: {
		blog: 'Blog',
		experience: 'Experience',
		skills: 'Skills',
		projects: 'Projects',
		contacts: 'Contacts',
		curriculum: 'Curriculum',
		theme: 'Theme',
	},
	home: {
		navigate: 'Navigate the sections of the site',
		links: {
			skills:
				'Explore my technology stack and the technical skills I have developed over time.',
			blog: 'Read my latest articles on frontend development, new technologies, and best practices.',
			portfolio:
				'View the projects I have created, from web apps to open-source components.',
			contacts:
				'Let’s get in touch for collaborations, consultations, or simple feedback.',
			curriculum:
				'Download my detailed professional background and academic education.',
			experience:
				'Discover the timeline of my work experiences and the milestones achieved.',
		},
		whoAmITitle: 'Who am I?',
		whatIDoTitle: 'What do I do?',
		whatISpecializeInTitle: 'What do I specialize in?',
		message:
			"Hi, i'm a fullstack developer, i love coding and i'm always looking for new challenges.",
	},
	contacts: {
		title: 'My contacts',
		subtitle: "Let's build something together.",
		buttons: {
			sendEmail: 'Send a message',
			linkedin: 'Linkedin',
			facebook: 'Facebook',
			github: 'Github',
			gitlab: 'GitLab',
			storeLink: {
				button: 'Go',
				content: {
					linkedin:
						'You will be redirected to Linkedin on my public profile. You can send me a message only if you are in my network, so you have to ask for the connection.',
					facebook:
						'You will be redirected to my public Facebook profile. You can only send me a message if you are my friend, so you will have to request friendship.',
					github:
						'You will be redirected to Github on my public profile. You cannot send me a message but you can view my public repositories and click on "Follow".',
					gitlab:
						'You will be redirected to GitLab on my public profile. You cannot send me a message but you can view my public repositories and click on "Follow".',
				},
			},
		},
		modal: {
			title: 'Send a message',
			content1:
				'Use the form below to send direct communications. Fields marked with an asterisk (*) are mandatory for processing the request. The processing of inputs (name, email, message text) is subject to the',
			content2:
				'dedicated link, which governs the security and automatic deletion.',
			privacy: 'Read the privacy',
			message: 'Thank you for your message!!!',
		},
		form: {
			name: {
				value: 'Name',
				label: 'Name',
				placeholder: 'Insert your name',
				required: 'Name is required',
			},
			email: {
				value: 'Email',
				label: 'Email',
				placeholder: 'Insert your email',
				required: 'Email is required',
			},
			message: {
				value: 'Message',
				label: 'Your Message',
				placeholder: 'Insert your message here...',
				required: 'Message is required',
			},
			loading: 'Sending...',
			buttons: {
				send: 'Send',
				done: 'Done',
			},
		},
	},
	skills: {
		title: 'My Skills',
		subtitle: 'Here is a collection of my skills.',
		languages: 'Languages',
		frontends: 'Frontends',
		frameworks_frontend: 'Frameworks Frontend',
		database: 'Database',
		frameworks_backend: 'Frameworks Backend',
		tools: 'Tools',
		platforms: 'Platforms',
		soft: 'Soft',
		legend: {
			title: 'Legend',
			description:
				'The progress bar indicates my level of proficiency in each technology. Here is what the different colors represent:',
			buttons: {
				show: 'Mostra legenda',
				hide: 'Hide legend',
			},
			list: [
				{
					color: 'secondary',
					label: 'Excellent command',
					level: 90,
				},
				{
					color: 'success',
					label: 'Good command',
					level: 80,
				},
				{
					color: 'warning',
					label: 'Adequate command',
					level: 60,
				},
				{
					color: 'danger',
					label: 'Basic command',
					level: 50,
				},
			],
		},
		card: {
			level: 'Level',
			adequate: 'Adequate',
			good: 'Good',
			optimal: 'Optimal',
			bad: 'Bad',
			basic: 'Basic',
			intermediate: 'Intermediate',
			advanced: 'Advanced',
			unknown: 'Unknown',
		},
	},
	blog: {
		title: 'My Blog',
		subtitle:
			'Discover articles, experiments, and inspirations from my frontend world.',
		card: {
			createdAt: 'Created at',
			editedAt: 'Edited at',
			postedAt: 'Posted at',
		},
		filters: {
			title: {
				placeholder: 'Filter by title...',
				label: 'Title',
			},
			date: {
				placeholder: 'Filter by date...',
				label: 'Date',
			},
			author: {
				placeholder: 'Filter by author...',
				label: 'Author',
			},
			buttons: {
				apply: 'Apply Filters',
				reset: 'Reset Filters',
				show: 'Show Filters',
			},
		},
		empty:
			'Sorry, there are no articles matching your criteria. Please try again later or adjust your filters.',
		article: {
			shareTitle: 'Share this article',
			link: 'Source link',
			author: 'Author:',
			createdAt: 'Created at',
			postedAt: 'Posted at',
			editedAt: 'Edited at',
			buttons: {
				back: 'Back',
			},
			comments: {
				title: 'Comments',
				no_comment: 'No comments available',
				form: {
					title: 'Add a comment',
					username: {
						label: 'Username',
						placeholder: 'Enter your username',
						error: 'The username is required',
					},
					content: {
						label: 'Your comment',
						placeholder: 'Enter your comment here...',
						error: 'The comment is required',
					},
					buttons: {
						submit: 'Submit',
						done: 'Done',
						loading: 'Loading...',
					},
				},
			},
		},
		buttons: {
			create: 'Create Article',
		},
	},
	projects: {
		title: 'My Projects',
		subtitle: 'A collection of my work.',
		filters: {
			title: {
				placeholder: 'Search by title...',
				label: 'My Projects',
			},
			tags: {
				placeholder: 'Search by tags...',
				label: 'Tags',
			},
			buttons: {
				reset: 'Reset Filters',
				apply: 'Apply Filters',
				show: 'Show Filters',
			},
		},
		project: {
			link: 'Link webapp/package',
			github: 'Link at github repository',
			buttons: {
				back: 'Done',
			},
		},
	},
	cookies: {
		content: {
			top: 'This domain is configured according to the Privacy by Design principle. The infrastructure does not implement any client-side or server-side tracking system.',
			cookies: [
				'Cookie Policy: The site is completely Cookie-Free. No technical, analytical, or profiling cookies are installed, neither first-party nor third-party (session or persistent).',
				'Tracking Technologies: The use of tracking pixels, web beacons, fingerprinting scripts, or other similar technologies for monitoring user activity is not planned.',
				'Data Analysis: No collection of browsing metadata for statistical, marketing, or behavioral profiling purposes is carried out.',
				'Navigation Integrity: The user experience occurs in total informational isolation, ensuring that no unique identifier is generated or stored during the session.',
				"The site operates in full compliance with the strictest privacy protocols, minimizing the user's digital footprint. For technical details on data management, a formal request can be submitted to the contacts provided.",
			],
			bottom:
				'For technical details on data management, a formal request can be submitted through the appropriate contact form.',
		},
		title: 'Cookie Policy',
	},
	privacy: {
		content: {
			top: 'The data provided through this site is managed according to the following security and confidentiality protocols.',
			privacy: [
				'Types of Data Processed: Name, username, email address, message content.',
				'Transmission Methods: Automatic forwarding exclusively to the address',
				'Storage: No storage on local servers or intermediate databases.',
				"Purpose: Exclusive processing of the user's request.",
				'Third-Party Communication: No external sharing, except as required by law.',
				'Retention and Deletion: Permanent and irreversible deletion through an automatic process within 30 days of submission.',
				'Legal Basis: Compliance with current regulations on personal data protection.',
			],
			bottom:
				'For further details or specific requests regarding personal data, you can contact the data controller through the appropriate contact form.',
		},
		title: 'Privacy Policy',
	},
	curriculum: {
		title: 'Curriculum Vitae',
		education: 'Education',
		experiences: 'Work Experience',
		download: 'Download CV',
		terms: {
			top: 'Before proceeding with the download of my curriculum vitae in PDF format, I invite you to carefully read the following terms and conditions. The document is provided exclusively for informational and professional purposes, and its use is subject to the conditions outlined here. By accepting the following conditions by checking the checkbox, the user acknowledges and agrees to the following:',
			items: [
				'Purpose and Intended Use: The provided PDF document is intended exclusively for personal and professional consultation purposes. Unauthorized reproduction, distribution, or disclosure is prohibited.',
				'Confidentiality: The user agrees to treat the information contained in this curriculum vitae as strictly confidential. It is prohibited to disseminate or use the data for purposes unrelated to the application process.',
				'Privacy Notice: Pursuant to Art. 13 of Legislative Decree 196/2003 and Art. 13 of EU Regulation 2016/679 (GDPR), the user acknowledges that the processing of personal data contained in the document is solely for the management of the selection process or professional evaluation.',
				"Jurisdiction and Competent Court: This agreement is governed by Italian law. Any dispute arising from the interpretation or execution of these terms will be subject to the exclusive jurisdiction of the data controller's place of residence.",
				'Acceptance: The user declares that they have read, understood, and fully accepted the above terms, assuming full responsibility for any violation thereof.',
			],
		},
		cancel: 'Cancel',
		accept:
			'I accept the terms and conditions and wish to proceed with the download',
	},
	quiz: {
		popup: {
			title: 'Quiz completed!',
			message:
				'Thanks for taking the quiz! You can retake it to explore other options.',
			buttons: {
				reset: 'Take the quiz again',
				close: 'Done',
			},
		},
		label: 'Why it suits you:',
		results: {
			frontend: {
				title: 'Frontend Developer',
				shortLabel: 'User Interfaces and Web Design',
				description:
					'You enjoy designing what the user sees: beautiful, interactive, and responsive interfaces. You use HTML, CSS, JavaScript, and frameworks like React or Vue.',
				reasons: [
					'You prefer to see visual results immediately',
					'You like working with layouts and design',
					'You love creating intuitive user experiences',
				],
			},
			backend: {
				title: 'Backend Developer',
				shortLabel: 'Logic, APIs, and Data Management',
				description:
					'You take care of the logic that makes an app work: servers, security, APIs, databases. You write efficient and secure code in languages like Python, Java, or PHP.',
				reasons: [
					'You prefer working with data and logic',
					'You are interested in security and scalability',
					'You love building robust APIs and systems',
				],
			},
			fullstack: {
				title: 'Full-stack Developer',
				shortLabel: 'Frontend + Backend = Full Power',
				description:
					'You can work on both frontend and backend: you build complete applications, know databases, APIs, user interfaces, and the entire development cycle.',
				reasons: [
					'You like having a complete view of the project',
					'You don’t want to limit yourself to just one area',
					'You love being versatile and independent',
				],
			},
			desktop: {
				title: 'Desktop Software Developer',
				shortLabel: 'Computer Applications',
				description:
					'You develop software that runs on Windows or Mac, even offline. You use languages like C#, Java, or C++, and manage interfaces, files, and local devices.',
				reasons: [
					'You are interested in apps installable on PCs',
					'You enjoy working with logic and graphical interfaces',
					'You want to create complete and standalone programs',
				],
			},
			mobile: {
				title: 'Mobile Developer',
				shortLabel: 'Apps for Smartphones and Tablets',
				description:
					'You build apps for Android or iOS that interact with the camera, notifications, GPS. You use Flutter, Kotlin, Swift, or React Native.',
				reasons: [
					'You love mobile apps and touch-based design',
					'You like leveraging smartphone features',
					'You want to be present in app stores',
				],
			},
			database: {
				title: 'Database Specialist',
				shortLabel: 'Data Management and Architecture',
				description:
					'You design, optimize, and manage databases. You write queries, create efficient data structures, and ensure data integrity and security.',
				reasons: [
					'You like working with data and logical structures',
					'You love writing complex queries and optimizing performance',
					'You are interested in data management and analysis',
				],
			},
		},
	},
	not_found: {
		title: 'Page not found',
		message:
			'The page you are looking for seems to have vanished into thin air.',
		button: 'Return Home',
	},
	maintenance: {
		title: 'Site under maintenance',
		message: 'We are working to improve your experience. We will be back soon!',
		button: 'Reload page',
	},
}

export default dictionary
