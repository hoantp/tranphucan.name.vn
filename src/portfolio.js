const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://tranphucan.name.vn',
  title: 'Cute Kid',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Trần Phúc An',
  role: 'Em bé Xoài',
  description:
    'Em bé Xoài là em của mẹ, em của mẹ thì rất cute...',
  resume: 'https://tranphucan.name.vn',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Steame Garten',
    description:
      'Đi học mầm non',
    stack: ['STEM'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'TBD',
    stack: ['TBD'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'TBD',
    stack: ['TBD'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Ăn vạ',
  'Khóc nhè',
  'Hay hát',
  'Nhớ dai',
  'Nghịch ngợm',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'phuchoantran@gmail.com',
}

export { header, about, projects, skills, contact }
