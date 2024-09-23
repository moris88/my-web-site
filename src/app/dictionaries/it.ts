const dictionary = {
  language: 'Italiano',
  navbar: {
    home: 'Home',
    blog: 'Blog',
    skills: 'Competenze',
    contacts: 'Contatti',
    portfolio: 'Portfolio',
  },
  home: {
    links: {
      skills: 'le mie competenze',
      blog: 'il mio blog',
      portfolio: 'il mio portfolio',
      contacts: 'i miei contatti',
    },
    title: 'Chi sono e cosa faccio?',
    message:
      'Ciao, sono un fullstack developer, amo programmare e sono sempre alla ricerca di nuove sfide.',
  },
  contacts: {
    title: 'Informazioni',
    firstName: 'Nome',
    lastName: 'Cognome',
    age: 'Età',
    birthDate: 'Data di nascita',
    nazionality: 'Nazionalità',
    job: 'Lavoro',
    email: 'Email',
    phone: 'Telefono',
    address: 'Indirizzo',
    website: 'Sito web',
    social: 'I miei contatti',
    buttons: {
      sendEmail: 'Invia un messaggio',
      linkedin: 'Linkedin',
      facebook: 'Facebook',
      github: 'Github',
      storeLink: {
        button: 'Vai',
        content: {
          linkedin: 'Verrai reindirizzato su Linkedin sul mio profilo pubblico. Puoi mandarmi un messaggio solamente se sei nella mia rete, quindi dovrai chiedere la connessione.',
          facebook: 'Verrai reindirizzato su Facebook sul mio profilo pubblico. Puoi mandarmi un messaggio anche tramite il pulsante "Whatsapp" ma dovrai avere un account attivo.',
          github: 'Verrai reindirizzato su Github sul mio profilo pubblico. Non puoi mandarmi un messaggio ma puoi visionare le mie repository pubbliche e cliccare su "Follow".',
        },
      },
    },
    modal: {
      title: 'Invia un messaggio',
      content: 'Qui puoi mandarmi un messaggio e mi arriverà direttamente su Telegram. Puoi lasciare il tuo username (con il prefisso @) e ti risponderò immediatamente! Altrimenti via email appena possibile!',
      message: 'Grazie per il tuo messaggio!!!',
    },
    form: {
      name: {
        value: 'Nome',
        label: 'Nome',
        placeholder: 'Inserisci il tuo nome (obbligatorio)',
        required: 'Il nome è obbligatorio',
      },
      email: {
        value: 'Email',
        label: 'Email',
        placeholder: 'Inserisci la tua email (facoltativo)',
      },
      username: {
        value: 'Username',
        label: 'Username',
        placeholder: 'Inserisci il tuo username di Telegram (facoltativo)',
      },
      message: {
        value: 'Messaggio',
        label: 'Il tuo messaggio',
        placeholder: 'Inserisci il tuo messaggio qui... (obbligatorio)',
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
    languages: 'Linguaggi',
    frontends: 'Frontend',
    frameworks_frontend: 'Frameworks Frontend',
    backends: 'Backend',
    frameworks_backend: 'Frameworks Backend',
    tools: 'Strumenti',
    soft: 'Soft',
    card: {
      level: 'Levello',
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
    card: {
      readMore: 'Leggi di più',
      posted: 'Pubblicato il',
      buttons: {
        close: 'Chiudi',
      },
    },
  },
  cookies:
    'Questo sito non ha cookie o tecnologie per tracciare nessuno! Naviga in tutta libertà nel sito!',
  portfolio: {},
}

export default dictionary
