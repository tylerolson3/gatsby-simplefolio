import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Tyler Olson',
  subtitle: 'FrontEnd Dev',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam architecto corporis eos deserunt assumenda explicabo modi odio, tenetur accusamus earum rem voluptatum maxime error ea voluptas, dolore unde saepe porro!',
  paragraphTwo:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ullam adipisci qui ad dolore obcaecati temporibus totam eligendi impedit possimus libero molestiae nihil vel ex provident suscipit voluptas, velit laboriosam.Harum inventore cupiditate quos, a porro velit dignissimos fugiat? Ratione ea eveniet qui odio voluptate cumque, exercitationem maxime nisi, repellendus, corrupti nam obcaecati asperiores culpa recusandae explicabo. Dolorum, officiis hic!',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
