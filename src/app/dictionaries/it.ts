const dictionary = {
	language: 'Italiano',
	lang: 'it',
	navbar: {
		blog: 'Blog',
		experience: 'Esperienze',
		skills: 'Competenze',
		projects: 'Progetti',
		contacts: 'Contatti',
		curriculum: 'Curriculum',
		theme: 'Tema',
	},
	home: {
		links: {
			skills: 'le mie competenze',
			blog: 'il mio blog',
			portfolio: 'il mio portfolio',
			contacts: 'i miei contatti',
		},
		whoAmITitle: 'Chi sono?',
		whatIDoTitle: 'Cosa faccio?',
		whatISpecializeInTitle: 'In cosa sono specializzato?',
		message:
			'Ciao, sono un fullstack developer, amo programmare e sono sempre alla ricerca di nuove sfide.',
	},
	contacts: {
		title: 'I miei contatti',
		subtitle: "Costruiamo qualcosa insieme.",
		buttons: {
			sendEmail: 'Invia un messaggio',
			linkedin: 'Linkedin',
			facebook: 'Facebook',
			github: 'Github',
			storeLink: {
				button: 'Vai',
				content: {
					linkedin:
						'Verrai reindirizzato su Linkedin sul mio profilo pubblico. Puoi mandarmi un messaggio solamente se sei nella mia rete, quindi dovrai chiedere la connessione.',
					facebook:
						"Verrai reindirizzato su Facebook sul mio profilo pubblico. Puoi mandarmi un messaggio solamente se sei mio amico, quindi dovrai chiedere l'amicizia.",
					github:
						'Verrai reindirizzato su Github sul mio profilo pubblico. Non puoi mandarmi un messaggio ma puoi visionare le mie repository pubbliche e cliccare su "Follow".',
				},
			},
		},
		modal: {
			title: 'Invia un messaggio',
			content1:
				'Compila il form sottostante per inviarmi un messaggio. I campi contrassegnati con * sono obbligatori. Riceverai una risposta il prima possibile. Consulta la',
			content2: 'per maggiori informazioni su come gestisco i tuoi dati.',
			privacy: 'Leggi la privacy',
			message: 'Grazie per il tuo messaggio!!!',
		},
		form: {
			name: {
				value: 'Nome',
				label: 'Nome',
				placeholder: 'Inserisci il tuo nome',
				required: 'Il nome è obbligatorio',
			},
			email: {
				value: 'Email',
				label: 'Email',
				placeholder: 'Inserisci la tua email',
			},
			message: {
				value: 'Messaggio',
				label: 'Il tuo messaggio',
				placeholder: 'Inserisci il tuo messaggio qui...',
				required: 'Il messaggio è obbligatorio',
			},
			loading: 'Invio in corso...',
			buttons: {
				send: 'Invia',
				done: 'Indietro',
			},
		},
	},
	skills: {
		title: 'Le mie Competenze',
		subtitle: "",
		languages: 'Linguaggi',
		frontends: 'Frontend',
		frameworks_frontend: 'Frameworks Frontend',
		database: 'Database',
		frameworks_backend: 'Frameworks Backend',
		tools: 'Strumenti',
		platforms: 'Piattaforme',
		soft: 'Soft',
		legend: {
			title: 'Legenda',
			description:
				'La barra di avanzamento indica il mio livello di competenza in ciascuna tecnologia. Ecco cosa rappresentano i diversi colori:',
			buttons: {
				show: 'Mostra legenda',
				hide: 'Nascondi legenda',
			},
			list: [
				{
					color: 'secondary',
					label: 'Eccellente padronanza',
					level: 90,
				},
				{
					color: 'success',
					label: 'Ottima padronanza',
					level: 80,
				},
				{
					color: 'warning',
					label: 'Buona padronanza',
					level: 60,
				},
				{
					color: 'danger',
					label: 'Conoscenze di base',
					level: 50,
				},
			],
		},
		card: {
			level: 'Livello',
			adequate: 'Adeguato',
			good: 'Buono',
			optimal: 'Ottimale',
			bad: 'Scarso',
			basic: 'Base',
			intermediate: 'Intermedio',
			advanced: 'Avanzato',
			unknown: 'Sconosciuto',
		},
	},
	blog: {
		title: 'Il mio Blog',
		card: {
			editedAt: 'Modificato il',
			postedAt: 'Pubblicato il',
		},
		article: {
			link: 'Link alla fonte',
			editedAt: 'Modificato il',
			postedAt: 'Pubblicato il',
			buttons: {
				back: 'Indietro',
			},
			comments: {
				title: 'Commenti',
				no_comment: 'Nessun commento disponibile',
				form: {
					title: 'Lascia un commento',
					username: {
						label: 'Username',
						placeholder: 'Inserisci il tuo username',
						error: 'Lo username è obbligatorio',
					},
					content: {
						label: 'Il tuo commento',
						placeholder: 'Inserisci il tuo commento qui...',
						error: 'Il commento è obbligatorio',
					},
					buttons: {
						submit: 'Invia',
						done: 'Indietro',
						loading: 'Invio in corso...',
					},
				},
			},
		},
		buttons: {
			create: 'Crea un nuovo articolo',
		},
	},
	projects: {
		title: 'I miei progetti',
		subtitle: 'Una raccolta del mio lavoro.',
		project: {
			link: 'Link alla webapp/package',
			github: 'Link al repository github',
			buttons: {
				back: 'Indietro',
			},
		},
	},
	cookies: {
		content:
			'Questo sito non utilizza cookie o altre tecnologie di tracciamento per raccogliere informazioni sugli utenti. La tua navigazione è completamente libera e non monitorata. Nessun dato personale o comportamento di navigazione viene registrato o analizzato per finalità di marketing, profilazione o statistiche. Naviga con tranquillità, sapendo che non vengono installati cookie di prima o terza parte durante la tua visita, né vengono utilizzati strumenti di tracciamento che potrebbero compromettere la tua privacy o raccogliere informazioni sulle tue preferenze online. Per qualsiasi domanda o chiarimento riguardo alla gestione della privacy, sentiti libero di contattarmi.',
		title: 'Informativa sui cookie',
	},
	privacy: {
		content:
			"I dati trasmessi attraverso questo sito sono trattati con la massima riservatezza e sicurezza, conformemente alle normative vigenti in materia di protezione dei dati personali. Le informazioni fornite, inclusi email, nome, username e contenuto del messaggio, verranno automaticamente inoltrate alla mia casella di posta maurizio.tolomeo@outlook.it. Tali dati non verranno archiviati su server locali, e tutti i dati raccolti saranno utilizzati esclusivamente per finalità di risposta alle tue richieste e non verranno mai condivisi con terze parti, a meno che ciò non sia richiesto dalla legge. Inoltre, entro 30 giorni dall'invio del messaggio, i dati verranno eliminati in modo permanente e irreversibile, senza alcuna possibilità di recupero, mediante un processo automatico. Mi impegno a garantire che i tuoi dati siano trattati in modo sicuro e responsabile. Se desideri maggiori dettagli o hai domande riguardanti la gestione dei tuoi dati, non esitare a contattarmi.",
		title: 'Informativa sulla privacy',
	},
	curriculum: {
		title: 'Curriculum Vitae',
		education: 'Istruzione',
		experiences: 'Esperienze',
		download: 'Scarica CV',
		terms:
			"Spuntando la checkbox in basso, l'utente accetta i seguenti termini e condizioni. Il pdf è fornito esclusivamente per uso personale. Autorizzo il trattamento dei dati personali contenuto in questo curriculum vitae in base all'art. 13 del D.Lgs. 196/2003 e all'art 13 del Regolamento Europeo UE 2016/679 relativo alla protezione delle persone fisiche. Ti impegni a non divulgare informazioni riservate che potresti ottenere tramite questo pdf, inclusi i miei dati personali. Questi Termini e Condizioni sono regolati dalle leggi italiane e ogni controversia sarà risolta dinanzi un tribunale.",
		cancel: 'Annulla',
	},
	quiz: {
		popup: {
			title: 'Quiz completato!',
			message:
				'Grazie per aver partecipato! Puoi ripetere il quiz per esplorare altre opzioni.',
			buttons: {
				close: 'Ripeti il quiz',
			},
		},
		label: 'Perché ti si addice:',
		results: {
			frontend: {
				title: 'Frontend Developer',
				shortLabel: 'Interfacce utente e design web',
				description:
					'Ti piace progettare ciò che l’utente vede: interfacce belle, interattive e responsive. Usi HTML, CSS, JavaScript e framework come React o Vue.',
				reasons: [
					'Preferisci vedere subito i risultati visivi',
					'Ti piace lavorare con layout e design',
					'Ami creare esperienze utente intuitive',
				],
			},
			backend: {
				title: 'Backend Developer',
				shortLabel: 'Logica, API e gestione dati',
				description:
					"Ti occupi della logica che fa funzionare un'app: server, sicurezza, API, database. Scrivi codice efficiente e sicuro in linguaggi come Python, Java, PHP.",
				reasons: [
					'Preferisci lavorare con i dati e la logica',
					'Ti interessa la sicurezza e la scalabilità',
					'Ami costruire API e sistemi robusti',
				],
			},
			fullstack: {
				title: 'Full-stack Developer',
				shortLabel: 'Frontend + Backend = Potenza totale',
				description:
					'Sai muoverti sia nel frontend che nel backend: costruisci applicazioni complete, conosci database, API, interfacce utente e tutto il ciclo di sviluppo.',
				reasons: [
					'Ti piace avere una visione completa del progetto',
					'Non vuoi limitarti a una sola area',
					'Ami essere versatile e indipendente',
				],
			},
			desktop: {
				title: 'Software Desktop Developer',
				shortLabel: 'App per computer',
				description:
					'Sviluppi software che gira su Windows o Mac, anche offline. Usi linguaggi come C#, Java o C++, e gestisci interfacce, file, dispositivi locali.',
				reasons: [
					'Ti interessano le app installabili su PC',
					'Ami lavorare con logica e interfacce grafiche',
					'Vuoi creare programmi completi e autonomi',
				],
			},
			mobile: {
				title: 'Mobile Developer',
				shortLabel: 'App per smartphone e tablet',
				description:
					'Costruisci app per Android o iOS, che interagiscono con fotocamera, notifiche, GPS. Usi Flutter, Kotlin, Swift o React Native.',
				reasons: [
					'Ami le app mobili e il design touch',
					'Ti piace sfruttare le funzionalità dello smartphone',
					'Vuoi essere presente negli store di app',
				],
			},
			database: {
				title: 'Database Specialist',
				shortLabel: 'Gestione e architettura dei dati',
				description:
					'Progetti, ottimizzi e gestisci database. Scrivi query, crei strutture dati efficienti e garantisci integrità e sicurezza dei dati.',
				reasons: [
					'Ti piace lavorare con dati e strutture logiche',
					'Ami scrivere query complesse e ottimizzare performance',
					'Ti interessa la gestione e l’analisi dei dati',
				],
			},
		},
	},
}

export default dictionary
