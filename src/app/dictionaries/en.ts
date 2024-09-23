const dictionary = {
  language: 'English',
  navbar: {
    home: 'Home',
    blog: 'Blog',
    skills: 'Skills',
    contacts: 'Contacts',
    portfolio: 'Portfolio',
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
        'Here you can send me a message and it will arrive directly on Telegram. You can leave your username (with the @ prefix) and I will reply immediately! Otherwise via email as soon as possible!',
      message: 'Thank you for your message!!!',
    },
    form: {
      name: {
        value: 'Name',
        label: 'Name',
        placeholder: 'Insert your name (required)',
        required: 'Name is required',
      },
      email: {
        value: 'Email',
        label: 'Email',
        placeholder: 'Insert your email (optional)',
      },
      username: {
        value: 'Username',
        label: 'Username',
        placeholder: 'Insert your Telegram username (optional)',
      },
      message: {
        value: 'Message',
        label: 'Your Message',
        placeholder: 'Insert your message here... (required)',
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
    backends: 'Backends',
    frameworks_backend: 'Frameworks Backend',
    tools: 'Tools',
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
    card: {
      readMore: 'Read more',
      posted: 'Posted on',
      buttons: {
        close: 'Close',
      },
    },
  },
  cookies:
    'This site has no cookies or any technology to trace anyone! Browse freely on the site!',
  portfolio: {},
}

export default dictionary
