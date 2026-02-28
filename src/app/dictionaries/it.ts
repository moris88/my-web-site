const dictionary = {
	language: 'Italiano',
	lang: 'it',
	go_back: 'Torna indietro',
	go_privacy: 'Vai alla privacy policy',
	go_cookies: 'Vai alla cookie policy',
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
		navigate: 'Naviga le sezioni del mio sito',
		links: {
			skills:
				'Esplora il mio stack tecnologico e le competenze tecniche maturate nel tempo.',
			blog: 'Leggi i miei ultimi articoli su sviluppo frontend, nuove tecnologie e best practices.',
			portfolio:
				'Visiona i progetti che ho realizzato, dalle web app ai componenti open source.',
			contacts:
				'Mettiamoci in contatto per collaborazioni, consulenze o semplici feedback.',
			curriculum:
				'Scarica il mio percorso professionale dettagliato e la mia formazione accademica.',
			experience:
				'Scopri la cronologia delle mie esperienze lavorative e i traguardi raggiunti.',
		},
		whoAmITitle: 'Chi sono?',
		whatIDoTitle: 'Cosa faccio?',
		whatISpecializeInTitle: 'In cosa sono specializzato?',
		message:
			'Ciao, sono un fullstack developer, amo programmare e sono sempre alla ricerca di nuove sfide.',
	},
	contacts: {
		title: 'I miei contatti',
		subtitle: 'Costruiamo qualcosa insieme.',
		buttons: {
			sendEmail: 'Invia un messaggio',
			linkedin: 'Linkedin',
			facebook: 'Facebook',
			github: 'Github',
			gitlab: 'GitLab',
			storeLink: {
				button: 'Vai',
				content: {
					linkedin:
						'Verrai reindirizzato su Linkedin sul mio profilo pubblico. Puoi mandarmi un messaggio solamente se sei nella mia rete, quindi dovrai chiedere la connessione.',
					facebook:
						"Verrai reindirizzato su Facebook sul mio profilo pubblico. Puoi mandarmi un messaggio solamente se sei mio amico, quindi dovrai chiedere l'amicizia.",
					github:
						'Verrai reindirizzato su Github sul mio profilo pubblico. Non puoi mandarmi un messaggio ma puoi visionare le mie repository pubbliche e cliccare su "Follow".',
					gitlab:
						'Verrai reindirizzato su GitLab sul mio profilo pubblico. Non puoi mandarmi un messaggio ma puoi visionare le mie repository pubbliche e cliccare su "Follow".',
				},
			},
		},
		modal: {
			title: 'Invia un messaggio',
			content1:
				"Utilizzare il form sottostante per inoltrare comunicazioni dirette. I campi contrassegnati da asterisco (*) sono mandatori per l'elaborazione della richiesta. Il trattamento degli input (nome, email, testo messaggio) è subordinato alla",
			content2:
				'consultabile al link dedicato, che ne disciplina la sicurezza e la cancellazione automatica.',
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
				required: "L'email è obbligatoria",
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
		subtitle: 'Ecco una raccolta delle mie skills.',
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
		subtitle:
			'Scopri articoli, esperimenti e ispirazioni dal mio mondo frontend.',
		card: {
			createdAt: 'Creato il',
			editedAt: 'Modificato il',
			postedAt: 'Pubblicato il',
		},
		filters: {
			title: {
				placeholder: 'Cerca per titolo...',
				label: 'Titolo',
			},
			date: {
				placeholder: 'Cerca per data...',
				label: 'Data',
			},
			author: {
				placeholder: 'Cerca per autore...',
				label: 'Autore',
			},
			buttons: {
				reset: 'Reimposta filtri',
				apply: 'Applica filtri',
				show: 'Mostra filtri',
			},
		},
		empty:
			'Non sono stati trovati articoli che corrispondono ai criteri di ricerca. Prova a modificare i filtri o a cercare con parole chiave diverse.',
		article: {
			shareTitle: 'Condividi questo articolo',
			link: 'Link alla fonte',
			author: 'Autore:',
			createdAt: 'Creato il',
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
		filters: {
			title: { placeholder: 'Cerca per titolo...', label: 'Titolo' },
			tags: { placeholder: 'Cerca per tag...', label: 'Tag' },
			buttons: {
				reset: 'Reimposta filtri',
				apply: 'Applica filtri',
				show: 'Mostra filtri',
			},
		},
		project: {
			link: 'Link alla webapp/package',
			github: 'Link al repository github',
			buttons: {
				back: 'Indietro',
			},
		},
	},
	cookies: {
		content: {
			top: "Il presente dominio è configurato secondo il principio della Privacy by Design. Si comunica che l'infrastruttura non implementa alcun sistema di tracciamento lato client o server.",
			cookies: [
				'Cookie Policy: Il sito è totalmente Cookie-Free. Non vengono installati cookie tecnici, analitici o di profilazione, né di prima né di terza parte (sessione o persistenti).',
				"Tecnologie di Tracciamento: Non è previsto l'impiego di pixel di tracciamento, web beacon, script di fingerprinting o altre tecnologie analoghe volte al monitoraggio dell'attività dell'utente.",
				'Analisi Dati: Non viene effettuata alcuna raccolta di metadati di navigazione per finalità statistiche, di marketing o di profilazione comportamentale.',
				"Integrità della Navigazione: L'esperienza utente avviene in totale isolamento informativo, garantendo che nessun identificativo univoco venga generato o memorizzato durante la sessione.",
				"Il sito opera nel pieno rispetto dei protocolli di riservatezza più rigorosi, minimizzando l'impronta digitale dell'utente.",
			],
			bottom:
				"Per approfondimenti tecnici sulla gestione dei dati, è possibile inoltrare una richiesta formale attraverso l'apposito modulo di contatto.",
		},
		title: 'Informativa sui cookie',
	},
	privacy: {
		content: {
			top: 'I dati conferiti tramite questo sito sono gestiti secondo i seguenti protocolli di sicurezza e riservatezza.',
			privacy: [
				'Tipologia Dati Trattati: Nome, username, indirizzo email, contenuto del messaggio.',
				"Modalità di Trasmissione: Inoltro automatico esclusivamente all'indirizzo",
				'Archiviazione: Assenza di memorizzazione su server locali o database intermedi.',
				"Finalità: Elaborazione esclusiva della richiesta dell'utente.",
				'Comunicazione a Terzi: Nessuna condivisione esterna, salvo obblighi di legge.',
				"Conservazione e Cancellazione: Eliminazione permanente e irreversibile tramite processo automatico entro 30 giorni dall'invio.",
				'Base Giuridica: Conformità alle normative vigenti in materia di protezione dei dati personali.',
			],
			bottom:
				"Per ulteriori dettagli o richieste specifiche riguardanti i dati personali, è possibile contattare il titolare del trattamento attraverso l'apposito modulo di contatto.",
		},
		title: 'Informativa sulla privacy',
	},
	curriculum: {
		title: 'Curriculum Vitae',
		education: 'Istruzione',
		experiences: 'Esperienze lavorative',
		download: 'Scarica CV',
		terms: {
			top: "Prima di procedere con il download del mio curriculum vitae in formato PDF, ti invito a leggere attentamente i seguenti termini e condizioni. Il documento è fornito esclusivamente per scopi informativi e professionali, e il suo utilizzo è soggetto alle condizioni qui riportate. Accettando le seguenti condizioni mediante la spunta della checkbox, l'utente riconosce e accetta quanto segue:",
			items: [
				"Finalità e Destinazione d'Uso: Il documento PDF fornito è destinato esclusivamente a finalità di consultazione personale e professionale. Ne è vietata la riproduzione, distribuzione o divulgazione non autorizzata.",
				"Riservatezza: L'utente si impegna a trattare le informazioni contenute nel presente curriculum vitae come strettamente confidenziali. È fatto divieto di diffondere o utilizzare i dati ivi riportati per scopi estranei alla finalità della candidatura.",
				"Informativa Privacy: Ai sensi dell'Art. 13 del D.Lgs. 196/2003 e dell'Art. 13 del Regolamento UE 2016/679 (GDPR), l'utente prende atto che il trattamento dei dati personali contenuti nel documento è finalizzato unicamente alla gestione del processo di selezione o alla valutazione professionale.",
				"Giurisdizione e Foro Competente: Il presente accordo è regolato dalla legge italiana. Qualsiasi controversia derivante dall'interpretazione o dall'esecuzione dei presenti termini sarà di competenza esclusiva del foro di residenza del titolare dei dati.",
				"Accettazione: L'utente dichiara di aver letto, compreso e accettato integralmente i termini sopra indicati, assumendosi la piena responsabilità per qualsiasi violazione degli stessi.",
			],
		},
		cancel: 'Annulla',
		accept: 'Accetto i termini e condizioni e desidero procedere al download',
	},
	quiz: {
		popup: {
			title: 'Quiz completato!',
			message:
				'Grazie per aver partecipato! Puoi ripetere il quiz per esplorare altre opzioni.',
			buttons: {
				reset: 'Ripeti il quiz',
				close: 'Torna indietro',
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
	not_found: {
		title: 'Pagina non trovata',
		message: 'La pagina che stai cercando sembra essere sparita nel nulla.',
		button: 'Torna alla Home',
	},
	maintenance: {
		title: 'Sito in manutenzione',
		message:
			"Stiamo lavorando per migliorare l'esperienza di navigazione. Torneremo presto!",
		button: 'Ricarica pagina',
	},
}

export default dictionary
