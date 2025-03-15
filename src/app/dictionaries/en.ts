const dictionary = {
  language: 'English',
  lang: 'en',
  navbar: {
    blog: 'Blog',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    contacts: 'Contacts',
    edit_blog: 'Edit Blog',
    curriculum: 'Curriculum',
    profile: 'Profile',
    theme: 'Theme',
  },
  home: {
    links: {
      skills: 'my skills',
      blog: 'my blog',
      portfolio: 'my portfolio',
      contacts: 'my contacts',
    },
    title: 'Who am I and what do I do?',
    subtitle: 'What do I specialize in?',
    message:
      "Hi, i'm a fullstack developer, i love coding and i'm always looking for new challenges.",
  },
  edit_blog: {
    table: {
      title: 'Articles',
      new: 'New article',
      no_article: 'No articles available',
      header: {
        id: 'ID',
        title: 'Title',
        language: 'Language',
        actions: 'Actions',
      },
    },
    form: {
      section: {
        new: 'New article',
        edit: 'Edit article',
      },
      language: {
        label: 'Language',
        required: 'The language is required',
        placeholder: 'Select the language of the article',
      },
      title: {
        label: 'Title',
        required: 'The title is required',
        placeholder: 'Enter the title of the article',
      },
      content: {
        label: 'Content',
        required: 'The content is required',
        placeholder: 'Enter the content of the article',
      },
      image: {
        label: 'Image',
        placeholder: 'Enter the image path',
      },
      link: {
        label: 'Link',
        placeholder: 'Enter the source link of the article',
      },
      loading: 'Submitting...',
      buttons: {
        submit: 'Send',
        done: 'Done',
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
    social: 'My contacts',
    buttons: {
      sendEmail: 'Send a message',
      linkedin: 'Linkedin',
      facebook: 'Facebook',
      github: 'Github',
      telegram: 'Telegram',
      storeLink: {
        button: 'Go',
        content: {
          linkedin:
            'You will be redirected to Linkedin on my public profile. You can send me a message only if you are in my network, so you have to ask for the connection.',
          facebook:
            'You will be redirected to my public Facebook profile. You can only send me a message if you are my friend, so you will have to request friendship.',
          github:
            'You will be redirected to Github on my public profile. You cannot send me a message but you can view my public repositories and click on "Follow".',
          telegram: 'You will be redirected to Telegram on my public profile.',
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
      link: 'Link webapp',
      github: 'Link at repository',
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
  profile: {
    confirmModal: {
      description: 'The password has been changed successfully!',
      title: 'Password changed',
    },
    form: {
      password: 'Change password',
      update_at: 'Updated at',
      email: 'Email',
      id: 'ID',
      buttons: {
        submit: 'Submit',
        loading: 'Loading...',
      },
    },
  },
}

export default dictionary
