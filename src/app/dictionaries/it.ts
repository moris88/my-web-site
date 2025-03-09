const dictionary = {
  language: 'Italiano',
  lang: 'it',
  navbar: {
    blog: 'Blog',
    experience: 'Esperienze',
    skills: 'Competenze',
    todolist: 'Compiti',
    contacts: 'Contatti',
    edit_blog: 'Gestione Blog',
    curriculum: 'Curriculum',
    profile: 'Profilo',
    theme: 'Tema',
  },
  todolist: {
    listitem: {
      title: 'Lista dei Compiti',
      edit: 'Modifica',
      delete: 'Elimina',
      detail: 'Dettaglio',
      createdAt: 'Creato il',
      updatedAt: 'Aggiornato il',
      completedAt: 'Completato il',
      dueDateAt: 'Scade il',
      expired: 'Scaduto',
      no_task: 'Nessun compito disponibile',
      priority: {
        label: 'Seleziona una priorità',
        items: {
          urgent: 'Urgente',
          high: 'Alta',
          medium: 'Media',
          low: 'Bassa',
        },
      },
      filter: {
        label: 'Filtra per',
        all: 'Tutti',
        completed: 'Completati',
        uncompleted: 'Non completati',
        overdue: 'Scaduti',
        not_overdue: 'Non scaduti',
        buttons: {
          message: 'Che operazione vuoi fare?',
          clear_completed: {
            label: 'Pulisci completati',
            message: 'Sei sicuro di voler eliminare i compiti completati?',
          },
          clear_expired: {
            label: 'Rimuovi compiti scaduti',
            message: 'Sei sicuro di voler eliminare i compiti scaduti?',
          },
          clear_all: {
            label: 'Rimuovi tutti i compiti',
            message: 'Sei sicuro di voler eliminare tutti i compiti?',
          },
        },
      },
    },
    addTask: {
      hiddenForm: 'Nascondi il form',
      name: 'Titolo del compito',
      title: 'Aggiungi un compito',
      description: 'Inserisci la descrizione del compito da completare',
      label: 'Descrizione',
      confirm: "Confermi l'aggiunta del compito?",
      error: 'Il compito non può essere vuoto',
      placeholder: 'esempio "compra il latte"',
      submit: 'Aggiungi',
      cancel: 'Annulla',
      due_date: 'Data di scadenza',
    },
    editTask: {
      title: 'Modifica compito',
      description: 'Vuoi modificare il compito selezionato?',
      submit: 'Modifica',
      cancel: 'Annulla',
    },
    deleteTask: {
      title: 'Elimina compito',
      description: 'Sei sicuro di voler eliminare questo compito?',
      delete: 'Elimina',
      cancel: 'Annulla',
    },
  },
  home: {
    links: {
      skills: 'le mie competenze',
      blog: 'il mio blog',
      portfolio: 'il mio portfolio',
      contacts: 'i miei contatti',
    },
    title: 'Chi sono e cosa faccio?',
    subtitle: 'In cosa sono specializzato?',
    message:
      'Ciao, sono un fullstack developer, amo programmare e sono sempre alla ricerca di nuove sfide.',
  },
  edit_blog: {
    table: {
      title: 'Lista degli Articoli',
      new: 'Nuovo articolo',
      no_article: 'Nessun articolo disponibile',
      header: {
        id: 'ID',
        title: 'Titolo',
        language: 'Lingua',
        actions: 'Azioni',
      },
    },
    form: {
      section: {
        new: 'Nuovo articolo',
        edit: 'Modifica articolo',
      },
      language: {
        label: 'Lingua',
        required: 'La lingua è obbligatoria',
        placeholder: 'Seleziona una lingua',
      },
      title: {
        label: 'Titolo',
        required: 'Il Titolo è obbligatorio',
        placeholder: 'Inserisci il titolo',
      },
      content: {
        label: 'Contenuto',
        required: 'Il contenuto è obbligatorio',
        placeholder: 'Inserisci il contenuto',
      },
      image: {
        label: 'Immagine',
        placeholder: "Inserisci un percorso dell'immagine",
      },
      link: {
        label: 'Link',
        placeholder: 'Inserisci un link',
      },
      loading: 'Invio in corso...',
      buttons: {
        submit: 'Invia',
        done: 'Indietro',
      },
    },
  },
  login: {
    form: {
      title: 'Accesso Area Riservata',
      login: 'Login',
      logout: 'Logout',
      username: {
        value: 'Username',
        label: 'Username',
        required: 'Lo username è obbligatorio',
        placeholder: 'Inserisci il tuo username',
      },
      password: {
        value: 'Password',
        label: 'Password',
        required: 'La password è obbligatorio',
        placeholder: 'Inserisci la tua password',
      },
      loading: 'Login in corso...',
      buttons: {
        submit: 'Accesso',
      },
    },
  },
  contacts: {
    social: 'I miei contatti',
    buttons: {
      sendEmail: 'Invia un messaggio',
      linkedin: 'Linkedin',
      facebook: 'Facebook',
      github: 'Github',
      telegram: 'Telegram',
      storeLink: {
        button: 'Vai',
        content: {
          linkedin:
            'Verrai reindirizzato su Linkedin sul mio profilo pubblico. Puoi mandarmi un messaggio solamente se sei nella mia rete, quindi dovrai chiedere la connessione.',
          facebook:
            "Verrai reindirizzato su Facebook sul mio profilo pubblico. Puoi mandarmi un messaggio solamente se sei mio amico, quindi dovrai chiedere l'amicizia.",
          github:
            'Verrai reindirizzato su Github sul mio profilo pubblico. Non puoi mandarmi un messaggio ma puoi visionare le mie repository pubbliche e cliccare su "Follow".',
          telegram:
            'Verrai reindirizzato su Telegram sul mio profilo pubblico. Puoi mandarmi un messaggio direttamente.',
        },
      },
    },
    modal: {
      title: 'Invia un messaggio',
      content:
        "Il tuo messaggio arriverà direttamente sul mio cellulare sull'app di Telegram. Puoi lasciarmi il tuo username e ti risponderò immediatamente, altrimenti via email appena possibile!",
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
      username: {
        value: 'Username',
        label: 'Username',
        placeholder: 'Inserisci il tuo username di Telegram',
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
    languages: 'Linguaggi',
    frontends: 'Frontend',
    frameworks_frontend: 'Frameworks Frontend',
    database: 'Database',
    frameworks_backend: 'Frameworks Backend',
    tools: 'Strumenti',
    platforms: 'Piattaforme',
    soft: 'Soft',
    legend: [
      {
        color: 'green',
        label: 'Avanzato/Ottimale',
      },
      {
        color: 'yellow',
        label: 'Intermedio/Buono',
      },
      {
        color: 'orange',
        label: 'Base/Adeguato',
      },
      {
        color: 'red',
        label: 'Sconosciuto',
      },
    ],
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
  cookies: {
    content:
      'Questo sito non utilizza cookie o altre tecnologie di tracciamento per raccogliere informazioni sugli utenti. La tua navigazione è completamente libera e non monitorata. Nessun dato personale o comportamento di navigazione viene registrato o analizzato per finalità di marketing, profilazione o statistiche. Naviga con tranquillità, sapendo che non vengono installati cookie di prima o terza parte durante la tua visita, né vengono utilizzati strumenti di tracciamento che potrebbero compromettere la tua privacy o raccogliere informazioni sulle tue preferenze online. Per qualsiasi domanda o chiarimento riguardo alla gestione della privacy, sentiti libero di contattarmi.',
    title: 'Informativa sui cookie',
  },
  privacy: {
    content:
      "I dati trasmessi attraverso questo sito sono trattati con la massima riservatezza e sicurezza, conformemente alle normative vigenti in materia di protezione dei dati personali. Le informazioni fornite, inclusi email, nome, username e contenuto del messaggio, verranno automaticamente inoltrate al mio dispositivo mobile tramite l'app Telegram attraverso API. Tali dati non verranno archiviati su server locali, ma saranno esclusivamente presenti sul mio dispositivo personale. I dati raccolti saranno utilizzati esclusivamente per finalità di risposta alle tue richieste e non verranno mai condivisi con terze parti, a meno che ciò non sia richiesto dalla legge. Inoltre, entro 30 giorni dall'invio del messaggio, i dati verranno eliminati in modo permanente e irreversibile, senza alcuna possibilità di recupero, mediante un processo automatico. Mi impegno a garantire che i tuoi dati siano trattati in modo sicuro e responsabile. Se desideri maggiori dettagli o hai domande riguardanti la gestione dei tuoi dati, non esitare a contattarmi.",
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
  profile: {
    confirmModal: {
      description: 'La nuova password è stata cambiata con successo',
      title: 'Password Cambiata',
    },
    form: {
      password: 'Cambia password',
      update_at: 'Utente aggiornato il',
      email: 'Email',
      id: 'ID',
      buttons: {
        submit: 'Invia',
        loading: 'Invio in corso...',
      },
    },
  },
}

export default dictionary
