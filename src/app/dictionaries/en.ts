const dictionary = {
  language: 'English',
  navbar: {
    blog: 'Blog',
    skills: 'Skills',
    todolist: 'Todo',
    contacts: 'Contacts',
    application: 'App',
    curriculum: 'Curriculum',
    theme: 'Theme',
    more: 'More',
  },
  todolist: {
    listitem: {
      title: 'Task List',
      edit: 'Edit',
      delete: 'Delete',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      completedAt: 'Completed at',
      dueDateAt: 'Due date',
      expired: 'Expired',
      no_task: 'No tasks available',
      priority: {
        label: 'Select priority',
        items: {
          urgent: 'Urgent',
          high: 'High',
          medium: 'Medium',
          low: 'Low',
        },
      },
      filter: {
        label: 'Filter by',
        all: 'All',
        completed: 'Completed',
        uncompleted: 'Uncompleted',
        overdue: 'Overdue',
        not_overdue: 'Not overdue',
        buttons: {
          message: 'What operation do you want to do?',
          clear_completed: {
            label: 'Clear completed tasks',
            message: 'Are you sure you want to delete the completed tasks?',
          },
          clear_expired: {
            label: 'Clear expired tasks',
            message: 'Are you sure you want to delete the expired tasks?',
          },
          clear_all: {
            label: 'Clear all tasks',
            message: 'Are you sure you want to delete all tasks?',
          },
        },
      },
    },
    addTask: {
      name: 'Task Title',
      title: 'Add a Task',
      description: 'Enter the task to be completed',
      label: 'Description',
      confirm: 'Do you confirm the addition of the task?',
      error: 'The task cannot be empty',
      placeholder: "e.g. 'buy milk'",
      submit: 'Add',
      cancel: 'Cancel',
      due_date: 'Due date',
    },
    editTask: {
      title: 'Edit Task',
      description: 'Do you want to edit the selected task?',
      submit: 'Edit',
      cancel: 'Cancel',
    },
    deleteTask: {
      title: 'Delete Task',
      description: 'Are you sure you want to delete this task?',
      delete: 'Delete',
      cancel: 'Cancel',
    },
  },
  home: {
    links: {
      skills: 'my skills',
      blog: 'my blog',
      portfolio: 'my portfolio',
      contacts: 'my contacts',
    },
    title: 'Who am I and what do I do?',
    message:
      "Hi, i'm a fullstack developer, i love coding and i'm always looking for new challenges.",
  },
  dashboard: {
    form: {
      title: 'Add a new article',
      it: {
        title: {
          label: 'Titolo IT',
          required: 'Il Titolo è obbligatorio',
          placeholder: "Inserisci il titolo dell'articolo in Italiano",
        },
        content: {
          label: 'Contenuto IT',
          required: 'Il contenuto è obbligatorio',
          placeholder: "Inserisci il contenuto dell'articolo in Italiano",
        },
      },
      en: {
        title: {
          label: 'Titolo EN',
          required: 'Il Titolo è obbligatorio',
          placeholder: "Inserisci il titolo dell'articolo in Inglese",
        },
        content: {
          label: 'Contenuto EN',
          required: 'Il contenuto è obbligatorio',
          placeholder: "Inserisci il contenuto dell'articolo in Inglese",
        },
      },
      link: {
        label: 'Link',
        placeholder: 'Inserisci un link',
      },
      loading: 'Submitting...',
      buttons: {
        submit: 'Send',
      },
    },
  },
  login: {
    form: {
      title: 'Access to Reserved Area',
      login: 'Login',
      logout: 'Logout',
      username: {
        value: 'Username',
        label: 'Username',
        required: 'Username is required',
        placeholder: 'Insert your username',
      },
      password: {
        value: 'Password',
        label: 'Password',
        required: 'Password is required',
        placeholder: 'Insert your password',
      },
      loading: 'Login in progress...',
      buttons: {
        submit: 'Login',
      },
    },
  },
  contacts: {
    title: 'Information',
    firstName: 'First Name',
    lastName: 'Last Name',
    age: 'Age',
    birthDate: 'Birth Date',
    nazionality: 'Nazionality',
    job: 'Job',
    email: 'Email',
    phone: 'Phone',
    address: 'Address',
    website: 'Website',
    social: 'My contacts',
    buttons: {
      sendEmail: 'Send a message',
      linkedin: 'Linkedin',
      facebook: 'Facebook',
      github: 'Github',
      storeLink: {
        button: 'Go',
        content: {
          linkedin:
            'You will be redirected to Linkedin on my public profile. You can send me a message only if you are in my network, so you have to ask for the connection.',
          facebook:
            'You will be redirected to Facebook on my public profile. You can send me a message also through the "Whatsapp" button but you have to have an active account.',
          github:
            'You will be redirected to Github on my public profile. You cannot send me a message but you can view my public repositories and click on "Follow".',
        },
      },
    },
    modal: {
      title: 'Send a message',
      content:
        "Your message will arrive directly on my phone on the Telegram app. You can leave me your username and I'll reply immediately, otherwise via email as soon as possible!",
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
      },
      username: {
        value: 'Username',
        label: 'Username',
        placeholder: 'Insert your Telegram username',
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
    languages: 'Languages',
    frontends: 'Frontends',
    frameworks_frontend: 'Frameworks Frontend',
    database: 'Database',
    frameworks_backend: 'Frameworks Backend',
    tools: 'Tools',
    platforms: 'Platforms',
    soft: 'Soft',
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
    card: {
      postedAt: 'Posted at',
    },
    article: {
      link: 'Source link',
      postedAt: 'Posted at',
      buttons: {
        back: 'Back',
      },
    },
    buttons: {
      create: 'Create Article',
    },
  },
  cookies: {
    content:
      'This website does not use cookies or other tracking technologies to collect information about users. Your browsing is completely unrestricted and not monitored. No personal data or browsing behavior is recorded or analyzed for marketing, profiling, or statistical purposes. Browse with peace of mind, knowing that no first-party or third-party cookies are installed during your visit, nor are any tracking tools used that could compromise your privacy or collect information about your online preferences. For any questions or clarification regarding privacy management, feel free to contact me.',
    title: 'Cookie Policy',
  },
  privacy: {
    content:
      'The data transmitted through this website is treated with the utmost confidentiality and security, in compliance with the applicable data protection regulations. The information provided, including email, name, username, and message content, will be automatically forwarded to my mobile device via the Telegram app. Such data will not be stored on local servers, but will only reside on my personal device. The collected data will be used solely for the purpose of responding to your inquiries and will never be shared with third parties, unless required by law. Furthermore, within 30 days of sending the message, the data will be permanently and irreversibly deleted, without any possibility of recovery, through an automatic process. We are committed to ensuring that your data is handled securely and responsibly. Should you need further details or have any questions regarding the management of your data, please do not hesitate to contact me.',
    title: 'Data Protection Notice',
  },
  curriculum: {
    title: 'Curriculum Vitae',
    education: 'Education',
    experiences: 'Experience',
    download: 'Download CV',
    terms:
      'By checking the checkbox below, you agree to the following terms and conditions. The pdf is provided for personal use only. I authorize the processing of personal data contained in this curriculum vitae in accordance with art. 13 of Legislative Decree 196/2003 and art. 13 of the European Regulation UE 2016/679 on the protection of natural persons with regard to the processing of personal data. You may not use the data for commercial or illegal purposes. All content, including text, images and logos, is protected by copyright and may not be reproduced without my consent. You undertake not to disclose confidential information that you may obtain through this pdf, including my personal data. These Terms and Conditions are governed by Italian law and any dispute will be resolved before a court.',
    cancel: 'Cancel',
  },
  application: {
    title: 'My App',
    description:
      'Visit my site in seconds, without the need for a browser and optimized for smartphones.',
    terms:
      'By using this app, you agree to the following terms and conditions. If you do not agree to these terms, please do not use the app.\nThe app is provided for your personal use only. You may not use the app for any commercial or illegal purposes, nor attempt to interfere with its functionality or security. All content in the app, including text, images, logos and software, is protected by copyright and may not be reproduced without my consent. I am not responsible for any direct or indirect damages arising from the use of the app. Use of the app is at your sole risk. I reserve the right to modify, suspend or discontinue temporarily or permanently the app or any of its features without notice. You undertake not to disclose any confidential information that you may obtain through the app, including my personal data. These Terms and Conditions are governed by Italian law and any dispute will be resolved before a court.',
    cancel: 'Cancel',
    requirements: 'Requirements',
    compatibility: 'Android 8.0 or higher',
    download: 'Download App',
  },
}

export default dictionary
