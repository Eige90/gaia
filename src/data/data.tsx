import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hello World, my name is Daniel.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Bavarian based <strong className="text-stone-100">DevOps engineer</strong>, currently trying to get my step in the IT world.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Gym</strong>,
        <strong className="text-stone-100"> painting</strong>, playing my <strong className='text-stone-100'>guitar</strong>, or exploring {' '}
        <strong className="text-stone-100">beautiful places around the world</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a DevOps engineer specializing in cloud infrastructure, automation, and CI/CD pipelines. I enjoy working with Docker, Jenkins, Ansible, and Terraform. In my free time, I like playing soccer, reading books, and listening to music.`,
  aboutItems: [
    {label: 'Location', text: 'Regen, Germany', Icon: MapIcon},
    {label: 'Age', text: '34', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Austrian living in Germany', Icon: FlagIcon},
    {label: 'Interests', text: 'Soccer, Books, Music', Icon: SparklesIcon},
    {label: 'Study', text: 'Technische Hochschule Mittelhessen in Giessen', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'German',
        level: 10,
      },
      {
        name: 'English',
        level: 7,
      },
      {
        name: 'Spanish',
        level: 4,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 6,
      },
      {
        name: 'Bootstrap',
        level: 7,
      },
      {
        name: 'Next.js',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 7,
      },
      {
        name: 'Github Actions',
        level: 7,
      },
      {
        name: 'Terrafom',
        level: 6,
      },
      {
        name: 'Ansible',
        level: 5,
      },
      
    ],
  },
  {
    name: 'Programming languages',
    skills: [
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'C++',
        level: 7,
      },
      {
        name: 'Javascript',
        level: 6,
      },
      {
        name: 'YAML',
        level: 4,
      },
      
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Calculator App',
    description: "This project is a web-based calculator application designed to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. The application features a user-friendly interface, responsive design, and is built using modern web technologies like React and JavaScript. It aims to provide a seamless and efficient user experience for quick and accurate calculations.",
    url:    "Calculator.html",
    image: porfolioImage1,
  },
  {
    title: 'Recipe Book',
    description: "This project is a web-based recipe book application that allows users to browse, search, and save their favorite recipes. The application features a clean and intuitive interface, making it easy to find recipes by category, ingredients, or cuisine. Built with modern web technologies like React and Node.js, it offers a seamless user experience for cooking enthusiasts and home chefs alike.",
    url:    "RecipeBook.html",
    image: porfolioImage8,
  },
  {
    title: 'Watch Analog',
    description: 'Give a short description of your project here.',
    url: "WatchAnalog.html",
    image: porfolioImage4,
  },
  {
    title: 'Watch Digital',
    description: 'Give a short description of your project here.',
    url: 'WatchDigital.html',
    image: porfolioImage9,
  },
  {
    title: 'Web Scraping',
    description: 'Give a short description of your project here.',
    url: "WebScraping.html",
    image: porfolioImage2,
  },
  {
    title: 'Google Maps',
    description: 'Give a short description of your project here.',
    url: <a href="GoogleMaps.html"></a>,
    image: porfolioImage6,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'July 2023',
    location: 'Techstarter GmbH',
    title: 'AWS Certified Cloud Practioner',
    content: <p></p>,
  },

  {
    date: 'March 2024',
    location: 'Techstarter GmbH',
    title: 'Professional Scrum Master I',
    content: (
      <p></p>
    ),
  },

  {
    date: 'April 2024',
    location: 'Techstarter GmbH',
    title: 'Linux Essentials- LPIC-101',
    content: (
      <p>
      </p>
    ),
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2023 - May 2024',
    location: 'Techstarter GmbH',
    title: 'DevOps & Cloud Engineer',
    content: (
      <p>
        Completed a comprehensive 12-month training program focused on DevOps and cloud engineering. Gained hands-on experience with cloud platforms such as AWS, and developed skills in automation, CI/CD pipelines, and infrastructure as code using tools like Docker, Jenkins, Ansible and Terraform. Worked on various projects that involved setting up and managing cloud infrastructure, automating deployment processes, and improving system reliability and scalability.
      </p>
    ),
  },

  {
    date: 'September 2006 - December 2022',
    location: 'Various companies',
    title: 'Production technician & Mechanical engineer',
    content: (
      <p>
            Worked in various roles as a production technician and mechanical engineer, focusing on the optimization of manufacturing processes and machinery maintenance. Led several projects aimed at improving production efficiency and reducing downtime. Utilized technologies such as CAD software for designing mechanical components, and implemented automation solutions to streamline production workflows. Notable achievements include the successful implementation of a predictive maintenance system and the redesign of a key production line that resulted in a 20% increase in output.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Mirjam S.',
      text: "Working with Daniel has been an absolute pleasure. His expertise in DevOps and cloud infrastructure is unparalleled. He consistently delivers high-quality solutions and is always willing to go the extra mile to ensure project success. Daniel's ability to automate processes and streamline workflows has significantly improved our team's efficiency. I highly recommend him for any DevOps-related projects.",
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Michaela M.',
      text: "During his internship at our pharmacy, Daniel demonstrated exceptional IT skills and professionalism. He efficiently managed our IT infrastructure, ensuring all systems were running smoothly and securely. Daniel's proactive approach and problem-solving abilities greatly benefited our team of six. His contributions were invaluable, and I highly recommend him for any IT-related role.",
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Adrian R.',
  text: "Daniel played a crucial role in migrating our website to the cloud, ensuring a seamless transition with minimal downtime. His expertise in cloud infrastructure and DevOps practices was evident throughout the project. Additionally, Daniel's proficiency with GitHub significantly improved our version control and collaboration processes. His dedication and technical skills make him an invaluable asset to any team.",
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: "Feel free to reach out to me for any DevOps-related inquiries or collaboration opportunities.",
  items: [
    {
      type: ContactType.Email,
      text: 'eigner.daniel90@gmail.com',
      href: 'mailto:eigner.daniel90@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Regen, Germany',
      href: 'https://www.google.de/maps/place/94209+Regen/@48.9675379,12.965128,11z/data=!3m1!4b1!4m6!3m5!1s0x477522c238c1ee2b:0x41d25a40937c570!8m2!3d48.9696953!4d13.1267534!16zL20vMDdsdjIz?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      type: ContactType.Instagram,
      text: '@kinged1801',
      href: 'https://www.instagram.com/kinged1801/',
    },
    {
      type: ContactType.Github,
      text: '@Eige90',
      href: 'https://github.com/Eige90',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Eige90'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/eignerdaniel/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/kinged1801/'},
];
