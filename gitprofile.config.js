// gitprofile.config.js

const config = {
  github: {
    username: 'omeryusufsorhun', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'ömer-yusuf-sorhun-242045211',
    instagram: 'omeryusufsrhn',
    website: 'https://arifszn.github.io',
    phone: '+905383610702',
    email: 'omersorgun34@hotmail.com',
  },
  resume: {
    fileUrl: 'resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'HTML5',
    'CSS',
    'Bootstrap',
    'React.js',
    'Vue.js',
    'JavaScript',
    'Node.js',
    'Express.js',
    'Mongo',
    'Git',
    'Tailwind',
    'C++',
    'Python',
  ],
  experiences: [
    {
      company: 'Digigarson',
      position: 'Flutter Intern',
      from: '2020 January',
      to: '2020 September',
      companyLink: 'https://www.digigarson.com/',
    },
    {
      company: 'isteCenter',
      position: 'Cyber Security Intern',
      from: 'July 2022',
      to: 'August 2022',
      companyLink: 'https://www.istka.org.tr/',
    },
    {
      company: 'sarjagi',
      position: 'Frontend Developer Intern',
      from: 'July 2022',
      to: 'November 2022',
      companyLink: 'https://sarjagi.com/',
    },
    {
      company: 'badiworks',
      position: 'Frontend Developer Intern',
      from: 'November 2022',
      to: 'Present',
      companyLink: 'https://badiworks.com/',
    },
  ],
  education: [
    {
      institution: 'Mehmet Niyazi Altug',
      degree: 'Highschool',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Istanbul University-Cerrahpasa',
      degree: 'College',
      from: '2019',
      to: '2023',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)

  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'business',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
