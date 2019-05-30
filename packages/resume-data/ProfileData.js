/**
 * @author chaitanyaK
 * @date 4/27/17
 * @description
 *
 * */

export const ProfileData = {
  title: 'Chaitanya Kumar Kamatham',
  subtitle: 'I build things',
  email: 'you@kchaitanya.com',
  phone: '(516) 637 - 6456',
  summary: [
    'Diversified skill set covering application and framework development. ',
    'Hands-on Involvement in both Front-end and Back-end development. ',
    'Diverse experience and deep knowledge of multiple programming languages. ',
    'Quick learner and can easily adopt new languages and technologies.'
  ],
  description:
    'Hi I’m Chaitanya. Front End Engineer from 2008. ' +
    'Experienced with all stages of the development cycle for dynamic web applications. Having an in-depth knowledge including advanced HTML5, ' +
    'CSS3, SASS, Java, ES6, Typescript, React, Angular. Contributed to open source projects.',
  profilePic: 'Assets/ProfilePic.png',
  social: [
    {
      name: 'twitter',
      url: 'https://twitter.com/gangaraju4u',
      icon: 'fa-twitter'
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/chaitanya-kamatham',
      icon: 'fa-linkedin'
    },
    {
      name: 'github',
      url: 'https://github.com/kamthamc',
      icon: 'fa-github'
    }
  ],
  projectList: [],
  educationList: [
    {
      begin: '2012-12-01',
      end: '2013-12-12',
      university: 'Indiana University - Purdue University, Indianapolis',
      universityUrl: 'http://iupui.edu',
      gpa: 3,
      location: 'Indianapolis, Indiana',
      degree: 'Masters in Computer & Information Science',
      description: 'Pursued Computer and Information Science.'
    },
    {
      begin: '2006-09-01',
      end: '2010-05-01',
      university: 'CVR College of Engineering',
      universityUrl: 'http://cvr.ac.in',
      gpa: 3,
      location: 'Hyderabad, India',
      degree: 'Bachelors in Computer Science & Engineering',
      description: 'Pursued Computer Science.'
    }
  ],
  languageList: [
    {
      name: 'PHP',
      rating: 6
    },
    {
      name: 'CSS',
      rating: 7
    },
    {
      name: 'Typescript',
      rating: 8
    },
    {
      name: 'Swift',
      rating: 4
    },
    {
      name: 'Java',
      rating: 6
    },
    {
      name: 'HTML',
      rating: 8
    },
    {
      name: 'Javascript',
      rating: 8
    }
  ],
  frameworkList: [
    {
      name: 'React',
      rating: 9
    },
    {
      name: 'Angular 7',
      rating: 6
    },
    {
      name: 'Redux',
      rating: 8
    }
  ],
  skillList: [
    {
      name: 'java'
    }
  ],
  experienceList: [
    {
      begin: 1498892400000,
      company: 'ShiftLeft',
      companyUrl: 'https://shiftleft.io',
      role: 'UI Engineer',
      location: 'Santa Clara, CA',
      noteList: [
        'Responsible for creating react web components with internationalization support',
        'Responsible for creating end to end tests for the UI (using puppeteer) and micro-services (using python)',
        'Involved in developing a NodeJS runtime agent'
      ]
    },
    {
      begin: 1488355200000,
      end: 1496300400000,
      company: 'Pearson',
      companyUrl: 'http://pearson.com',
      role: 'Software Developer',
      location: 'Fremont, CA',
      noteList: [
        'Responsible for creating responsive react components with internationalisation & accessibility support.',
        'Responsible for integrating various react components into main application.'
      ]
    },
    {
      begin: 1475305200000,
      end: 1485936000000,
      company: 'Connect',
      companyUrl: 'http://connect.com',
      role: 'Web Developer',
      location: 'San Francisco, CA',
      noteList: [
        'A Social Platform to get people together with event planning and saving ideas to revisit in future.',
        'Worked on mobile optimized responsive web app using AngularJS.',
        'Used Rest services for authentication and updating plan information and chat messages.',
        'Implemented an auto refresh chat window and event plan details using web sockets from Pusher.',
        'Implemented multiple analytics tools for tracking various user actions.',
        'Integrated multiple third party apps.',
        'Acted as lead for team of 3 people in India(Out sourcing the company website and maintenance of the app).'
      ]
    },
    {
      begin: 1412146800000,
      end: 1475305200000,
      company: 'Captora',
      companyUrl: 'https://captora.com',
      role: 'Software Engineer',
      location: 'Mountain View, CA',
      noteList: [
        'Worked on the Platform(Backend) to create rest APIs using Spring framework.',
        'Helped in migrating from a huge service into micro services.',
        'Worked with various services like Amazon Container Service and DynamoDB. Helped in improving the core content intelligence project.',
        'Worked on Front-end using AngularJS and Angular Material Frameworks.',
        'I was responsible for building the internal app individually and also responsible for developing few components in the customer facing application .'
      ]
    },
    {
      begin: 1404198000000,
      end: 1409554800000,
      company: 'Apple',
      companyUrl: 'https://apple.com',
      location: 'Sunnyvale, CA',
      role: 'Front End Developer',
      noteList: [
        'Worked on internal website using canJS, RequireJS and NodeJS.',
        'Worked on developing javascript controls and extending them.',
        'Worked on displaying large sets of Data and attaching events without any performance issues.',
        'Involved in developing excel like table for editing, creating on the website front end.',
        'Worked on developing font end interface to update the UI frequently based on the updates from the server without any issues.'
      ]
    },
    {
      begin: 1367391600000,
      end: 1385884800000,
      company: 'Indiana University',
      companyUrl: 'https://www.indiana.edu/',
      role: 'Research Assistant and Web Developer',
      location: 'Indianapolis, IN',
      noteList: [
        'Worked on representing the historical Data using maps, tables and pictorials.',
        'Worked on revamping the project with the new architecture and frameworks in Javascript (KnockoutJS).',
        'Developed search engine of the website for retrieving historical Data from oracle database and represent pictorial Data to the end users.',
        'Created dynamic filters and custom crystal reports and exporting them to the desktop in various formats.',
        'Developed custom components for reusing them in various parts of the website.'
      ]
    },
    {
      begin: 1325404800000,
      end: 1367391600000,
      company: 'Indiana University School of Medicine',
      companyUrl: 'https://www.indiana.edu/',
      role: 'Research Assistant and Web Developer',
      location: 'Indianapolis, IN',
      noteList: [
        'Analyzed Data provided by researchers to design website.',
        `Developed dashboards for the researchers to analyze the Data which is collected from the pilots and the people involved in the case study and crystal reports were generated for the filtered Data.`,
        'Worked on development of both the mobile and desktop versions of the website.',
        'Developed custom components for the company in .NET for future websites.',
        'Involved in a complete overhaul of project designing and have implemented new architecture and frameworks.'
      ]
    },
    {
      begin: 1277967600000,
      end: 1296547200000,
      company: 'Electronic Arts',
      companyUrl: 'https://ea.com',
      role: 'Associate software engineer',
      location: 'Hyderabad, India',
      noteList: [
        'Analyzed the engines, their workflows for various games.',
        'Ported the mobile games to various devices and fixed several bugs while porting.',
        'Worked on development of various games on Android and Symbian platforms.'
      ]
    }
  ]
};
