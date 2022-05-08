const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://en.wikipedia.org/wiki/Moose',
  title: 'Moose.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Mustafa',
  role: 'SENG',
  uni: 'UNSW',
  description:
    "Welcome stalker, I'm a 4th year Software Engineering (Honours) student at UNSW.",
  description1: 
    "I have a passion for blockchain tech and UI/UX design. I try to wear many hats - from product development to fractional NFTs, I enjoy exploring the breadth and depth of all things tech related.",
  description2:  
    "An avid Formula 1 and soccer fan, I also enjoy DJing and am always on the hunt for good music on Spotify.",
  resume: 'https://drive.google.com/file/d/1GkxXW2rZsYyGRaL-N9hLjokdEGRlVgZV/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/mustafadohad/',
    github: 'https://github.com/Afats',
  },
}

const projs = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Virchu',
    description:
      "COVID-19 data and charity website. Features an interactive 3D choropleth globe.",
    description1:
      "The Optiver SENG3011 Prize Runner Up project, 2021.",
    stack: ['MERN stack', 'Postman', 'Swagger'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Gdwg',
    description:
      'Gdwg: Generic Directed Weighted Graph library. Ghraph-foo galore.',
    description1:
      "Leverages modern C++20, using a custom iterator.",
    stack: ['C++', 'Catch2'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Gloria Romanus',
    description:
      "A backend implementation spin-off of the popular strategy game Civilisation.",
    description1:
      "Sports battle resolvers, multiple factions, resources, etc.",
    stack: ['Java', 'OOP', 'Design Patterns'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: '1970s Chat Room',
    description:
      "A terminal-based application layer chat room & P2P messaging.",
    description1:
      "Mutli-user support, blocking, timeouts, offline messaging, etc.",
    stack: ['Python', 'Multithreading'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Squid Regression',
    description:
      "A study in predictive powers of different linear models.",
    description1:
      "Dataset for study is based on squid rostral (beak) lengths.",
    stack: ['R', 'Linear Regression', 'Cross Validation'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Generative Art',
    description:
      "Inspired by BAYC and the 'Generative Art' movement.",
    description1:
      "An Ethereum based NFT project. Built for Web3.",
    stack: ['Solidity', 'OpenZeppelin', 'Truffle Suite'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'NSW Transport',
    description:
      "A prototype for NSW Transport, built with SWE design practices.",
    description1:
      "Product development and user requirements.",
    stack: ['Figma', 'React Expo', 'UI/UX Design'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'MooseGit',
    description:
      "An implementation of a Git-like version control system.",
    description1:
      "Classic git-like commands including git init, add, commit, etc.",
    stack: ['Shell programming', 'Git', 'SHA256'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  }
]

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }

}

shuffle(projs);

const projects = projs.slice(0, 6);

const projects_intro = {
  desc: "Refresh the page to view a random set of my projects below!",
  plug_desc: "Alternatively, have a look at all of them at once ",
}

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'C++',
  'C',
  'Python',
  'Java',
  'R', 
  'Web Dev',
  'Figma, Maze, XD',
  'Haskell, Dafny',
  'Splunk',
  'Solidity',
  'SQL',
  'Perl, Bash',
  'Photoshop, Lightroom'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'mmdohad2000@gmail.com',
}

export { header, about, projects, projects_intro, skills, contact }
