const dictionary = {
  language: 'English',
  lang: 'en',
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
    links: {
      skills: 'my skills',
      blog: 'my blog',
      portfolio: 'my portfolio',
      contacts: 'my contacts',
    },
    whoAmITitle: 'Who am I?',
    whatIDoTitle: 'What do I do?',
    whatISpecializeInTitle: 'What do I specialize in?',
    message:
      "Hi, i'm a fullstack developer, i love coding and i'm always looking for new challenges.",
  },
  contacts: {
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
            'You will be redirected to my public Facebook profile. You can only send me a message if you are my friend, so you will have to request friendship.',
          github:
            'You will be redirected to Github on my public profile. You cannot send me a message but you can view my public repositories and click on "Follow".',
        },
      },
    },
    modal: {
      title: 'Send a message',
      content:
        "Your message will arrive on my personal email. I'll answer you as soon as possible!",
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
    legend: [
      {
        color: 'green',
        label: 'Advanced/Optimal',
      },
      {
        color: 'yellow',
        label: 'Intermediate/Good',
      },
      {
        color: 'orange',
        label: 'Basic/Adequate',
      },
      {
        color: 'red',
        label: 'Unknown',
      },
    ],
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
      editedAt: 'Edited at',
      postedAt: 'Posted at',
    },
    article: {
      link: 'Source link',
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
    project: {
      link: 'Link webapp/package',
      github: 'Link at github repository',
      buttons: {
        back: 'Done',
      },
    },
  },
  cookies: {
    content:
      'This website does not use cookies or other tracking technologies to collect information about users. Your browsing is completely unrestricted and not monitored. No personal data or browsing behavior is recorded or analyzed for marketing, profiling, or statistical purposes. Browse with peace of mind, knowing that no first-party or third-party cookies are installed during your visit, nor are any tracking tools used that could compromise your privacy or collect information about your online preferences. For any questions or clarification regarding privacy management, feel free to contact me.',
    title: 'Cookie Policy',
  },
  privacy: {
    content:
      'The data transmitted through this site are treated with the utmost confidentiality and security, in accordance with current regulations on the protection of personal data. The information provided, including email, name, username and content of the message, will be automatically forwarded to my mailbox maurizio.tolomeo@outlook.it. Such data will not be stored on local servers, and all data collected will be used exclusively for the purpose of responding to your requests and will never be shared with third parties, unless required by law. Furthermore, within 30 days of sending the message, the data will be permanently and irreversibly deleted, without any possibility of recovery, through an automatic process. I am committed to ensuring that your data is treated in a safe and responsible manner. If you would like more details or have questions regarding the management of your data, do not hesitate to contact me.',
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
  quiz: {
    popup: {
      title: 'Quiz completed!',
      message:
        'Thanks for taking the quiz! You can retake it to explore other options.',
      buttons: {
        close: 'Take the quiz again',
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
}

export default dictionary
