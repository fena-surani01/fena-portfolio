// All portfolio content lives here. Edit this file to update the site.
// Items marked TODO need your real details.

export const profile = {
  name: 'Fena Surani',
  role: 'Full Stack Developer',
  tagline:
    'I turn ideas into fast, reliable web applications. From robust Laravel and Node.js back ends to clean, responsive React interfaces, I build products end to end and use AI-assisted development to ship faster without cutting corners.',
  location: 'India', // TODO: add your city, e.g. "Ahmedabad, Gujarat"
  email: 'suranifena@gmail.com',
  phone: '+91 70165 71043',
  photo: '/profile.webp',
  resumeUrl: '', // TODO: put resume.pdf in /public and set this to "/resume.pdf"
  socials: {
    linkedin: 'https://www.linkedin.com/in/your-profile-id', // TODO: your LinkedIn profile id
  },
};

export const about = {
  intro:
    "I'm a Full Stack Developer at Inextrix Technologies with 1.5 years of hands-on experience. I started as an intern, grew into a Junior Developer role, and now hold a senior position on the ViciDial project, building and maintaining applications used in production.",
  // icon: code | database | sparkles | chat | phone | palette
  highlights: [
    {
      icon: 'code',
      title: 'Full Stack Development',
      text: 'Back-end logic in PHP, Laravel and Node.js, with dynamic front ends in React and AJAX.',
    },
    {
      icon: 'database',
      title: 'Databases & APIs',
      text: 'Data modelling in MySQL and MongoDB, and clean REST APIs that connect everything.',
    },
    {
      icon: 'sparkles',
      title: 'AI-Assisted Development',
      text: 'I use vibe coding to prototype, debug and refactor faster, then review the output for production quality.',
    },
    {
      icon: 'chat',
      title: 'Client Communication',
      text: '6 months of gathering requirements, sharing progress updates and turning feedback into clear tasks.',
    },
    {
      icon: 'phone',
      title: 'Telephony & VoIP',
      text: 'Working knowledge of Asterisk and VoIP from building ViciDial call-center solutions.',
    },
    {
      icon: 'palette',
      title: 'Beyond Code',
      text: "I'm also an artist, and I built Fenaria to share my artwork online.",
    },
  ],
};

// Shown as the "Personal details" card in the About section.
export const details = [
  { label: 'Name', value: 'Fena Surani' },
  { label: 'Role', value: 'Full Stack Developer' },
  { label: 'Designation', value: 'Junior Developer' },
  { label: 'Company', value: 'Inextrix Technologies' },
  { label: 'Experience', value: '1.5 Years' },
  { label: 'Education', value: 'BCA' },
  { label: 'Location', value: 'India' }, // TODO: your city
  { label: 'Email', value: 'suranifena@gmail.com' },
  { label: 'Phone', value: '+91 70165 71043' },
];

export const skills = [
  {
    title: 'Back End',
    items: ['PHP', 'Laravel', 'Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Front End',
    items: ['React', 'JavaScript', 'AJAX', 'HTML5', 'CSS3'],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'MongoDB'],
  },
  {
    title: 'Telephony',
    items: ['Asterisk (basic)', 'VoIP (basic)', 'ViciDial'],
  },
  {
    title: 'AI & Productivity',
    items: ['AI-assisted development', 'Vibe coding', 'Prompt engineering', 'Claude Code'],
  },
  {
    title: 'Professional',
    items: ['Client communication', 'Requirement gathering', 'Team collaboration'],
  },
];

// TODO: confirm the dates below.
export const experience = [
  {
    role: 'Junior Developer',
    company: 'Inextrix Technologies',
    period: 'Apr 2026 – Present',
    points: [
      'Working on 3–4 company projects across PHP / Laravel and MERN stacks.',
      'Holding a senior position on the ViciDial project: owning features, reviewing work and guiding implementation.',
      'Handling client communication: requirement discussions, progress updates and feedback.',
      'Building and integrating REST APIs with MySQL and MongoDB.',
      'Using AI-assisted development (vibe coding) to speed up feature delivery, debugging and code reviews.',
    ],
  },
  {
    role: 'Developer Intern',
    company: 'Inextrix Technologies',
    period: 'Apr 2025 – Apr 2026',
    points: [
      'Learned production development with PHP, Laravel, MySQL and the MERN stack.',
      'Built features, fixed bugs and wrote AJAX-driven interfaces for live projects.',
      'Got hands-on exposure to Asterisk and VoIP-based applications.',
    ],
  },
];

// Projects are shown in this order. The one with `featured: true` gets the large card.
export const projects = [
  {
    title: 'Fenaria',
    type: 'Personal Project',
    featured: true,
    status: 'Work in progress',
    statusNote: 'Built fully in Node.js, now being migrated to the MERN stack.',
    description:
      'An online art platform for selling artwork and handling custom art orders, with three dedicated portals for admins, artists and customers.',
    portals: [
      {
        name: 'Admin Portal',
        points: [
          'Add and manage artworks',
          'Manage orders, customers and their status',
          'Receive custom art requests and assign them to artists',
          'Monitor artist dashboards and attendance',
        ],
      },
      {
        name: 'Artist Portal',
        points: [
          'Mark attendance: check in / out, breaks and leave',
          'Get notified when a custom art request is assigned',
          'Update the status of artwork in progress',
        ],
      },
      {
        name: 'Customer Portal',
        points: [
          'Secure sign up and login',
          'Add to cart, purchase and track orders',
          'Request custom artwork',
          'Customer care and feedback',
        ],
      },
    ],
    integrations: ['Telegram automation', 'Email notifications'],
    tech: ['Node.js', 'Express.js', 'MERN (in progress)'], // TODO: add your database / template engine
    link: '', // TODO: Fenaria website link
    linkLabel: 'Explore Fenaria',
  },
  {
    title: 'ViciDial',
    type: 'Office Project · Senior Role',
    description:
      'Customisation and integration work on ViciDial, the open-source call-center platform, for company clients.',
    points: [
      'Built custom features to match each client’s requirements',
      'Designed a dynamic theme for the open-source platform',
      'Connected ViciDial with Vapi (AI voice agent), handling the APIs and the customer call flow',
    ],
    tech: ['PHP', 'MySQL', 'Asterisk', 'VoIP', 'Vapi', 'AJAX'],
  },
  {
    title: 'Pet Shop Website',
    type: 'College Project',
    description: 'A pet shop website with separate admin and customer portals.',
    points: [
      'Admin: add and manage pet products',
      'Admin: manage appointment slots',
      'Customer: buy pet products online',
      'Customer: book appointment slots',
    ],
    tech: ['PHP', 'MySQL', 'HTML', 'CSS'], // TODO: confirm the stack
  },
];

// TODO: add the years.
export const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    period: '', // TODO: e.g. '2021 – 2024'
  },
  {
    degree: 'Higher Secondary (12th)',
    period: '', // TODO: e.g. '2021'
  },
];
