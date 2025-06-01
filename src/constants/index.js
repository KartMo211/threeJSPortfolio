export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Internship at Prop Mission',
    desc: 'My role involved developing and executing comprehensive strategies to build and maintain strong relationships with key clients in the real estate industry.',
    subdesc:
      'I regularly reported on progress toward revenue targets and provided actionable insights and recommendations for continuous improvement. My responsibilities were integral to driving the business forward and ensuring our continued success in the real estate market.',
    href: '',
    texture: '/textures/project/prop_certificate.mp4',
    spotlight: '/assets/spotlight1.png',
  },
  {
    title: 'Internship at Golden Barrel',
    desc: 'Marketing & Promotions Experience',
    subdesc:
      'I served as the Marketing and Promotions Manager, where I planned and executed strategies such as happy hours, social media campaigns, and event promotions. I conducted market research to better understand customer preferences and improve footfall. Additionally, I managed partnerships with influencers and local businesses. ',
    href: '',
    texture: '/textures/project/golden_barrel_certificate.mp4',
    spotlight: '/assets/spotlight1.png',
  }
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Mahindra University',
    pos: 'Digital Technology in Marketing',
    duration: '2022-2025',
    title: "I am currently pursuing a degree in Digital Technology in Marketing at Mahindra University. This program equips me with the skills and knowledge to excel in the rapidly evolving digital landscape, focusing on marketing strategies and technologies.",
    icon: '',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Oakridge International School',
    pos: '11th Grade and 12th Grade',
    duration: '2020 - 2022',
    title: "I completed my 11th and 12th grades at Oakridge International School, where I received a well-rounded education. This experience helped me develop critical thinking skills and a strong foundation in various subjects, preparing me for future challenges.",
    icon: '',
    animation: 'clap',
  },
  {
    id: 3,
    name: 'Silver Oak International School',
    pos: 'Junior School',
    duration: '2010 - 2020',
    title: "I completed my junior school education at Silver Oak International School. This formative experience instilled in me a love for learning and a strong sense of curiosity, laying the groundwork for my academic journey.",
    icon: '',
    animation: 'salute',
  },
];
