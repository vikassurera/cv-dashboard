import SectionModel, {CardType} from "./models/SectionModel";

const projects = [
    {
        title: 'ERP Alerts App',
        subtitle: 'Self Initiated Project',
        logo: 'imgs/erp_alerts_logo.png',
        duration: 'Nov 2022 - Dec 2022',
        data: 'Developed a push notifications app for all placement related notifications and updates for IIT Kharagpur students.',
        links: {
            github: 'https://github.com/Vikas-Surera/erp-alerts-app',
            website: 'https://oreo.vikassurera.com/notifications'
        }
    },
    {
        title: 'Buy an Oreo',
        subtitle: 'Self Initiated Project',
        logo: 'imgs/oreo_logo2.png',
        duration: 'Nov 2022 - Dec 2022',
        data: 'A central platform to buy subscription to all the apps and services of the products developed by Vikas Surera.',
        links: {
            github: 'https://github.com/Vikas-Surera/erp-alerts-app',
            website: 'https://oreo.vikassurera.com'
        }
    },
    {
        title: 'Optimal Path Navigator',
        subtitle: 'AIFA | IIT Kharagpur',
        logo: 'imgs/iit_kgp_logo.png',
        duration: 'Aug 2022 - Nov 2022',
        data: 'A web application that helps users find the optimal path to their destination based on A* (heuristic) search algorithm.',
        links: {
            github: 'https://github.com/Vikas-Surera/project_AIFA',
            website: 'https://aifa-2022.vikassurera.com/',
            youtube: 'https://youtu.be/njq03n2HIXs?list=PLe3yOhtTcUkCsOCrrvqphQ6FfkIaZrwWQ'
        }
    },
    {
        title: 'Parallel Jaw Plier Mechanism',
        subtitle: 'Mechanism Sessional | IIT Kharagpur',
        logo: 'imgs/iit_kgp_logo.png',
        duration: 'May 2020 - Present',
        data: 'Designed and simulated a parallel jaw plier mechanism using SolidWorks and performed analytical calculations and graphical analysis.',
        links: {
            youtube: 'https://youtu.be/yb3j_eGvBms'
        }
    }
]

const workExperience = [
    {
        title: 'Full-stack Developer',
        subtitle: 'OneTap',
        logo: 'imgs/onetap.png',
        duration: 'Apr 2021 - Jan 2022 & Apr 2022 - Present',
        data: [
            'Created CI/CD pipeline using Github Action, Docker with automatic slack notifications for tests and deployments',
            'Set up frontend automated UI testing - build, test and deploy using Jest and Puppeteer with scalable setup',
            'Frontend development - UI/UX (React, Bootstrap) and backend development (Express, Node Js, APIs)',
            'I was part of product planning discussions and responsible for the development of new features in productiongoDB.',
        ],
        links: {
            website: 'https://www.onetapcheckin.com/',
            certificate: 'https://drive.google.com/file/d/124-ThwJtnHn6Bcq63fXnxrzzgMMO6t9I/view?usp=share_link',
        }
    },
    {
        title: 'Frontend Developer',
        subtitle: 'Bitpack',
        logo: 'imgs/bitpack.jpeg',
        duration: 'Feb 2022 - Jul 2022',
        data: [
            'Flutter app and web development with razorpay payment gateway integration, REST API, Git and Github use',
            'React frontend app and UI designs implementation from designs provided via Adobe XD files',
        ],
        links: {
            website: 'https://bitpack.me/',
            certificate: 'https://drive.google.com/file/d/1jPk9VH1fzH8TVO405i1ZA7zqpSelADSn/view?usp=share_link'
        }
    },
    {
        title: 'Web Developer',
        subtitle: 'Assurance Technologies',
        logo: 'imgs/assurance2.png',
        duration: 'Apr 2021 - Jun 2021',
        data: [
            'Designed and developed complete website UI and deployed it on Express server on AWS ec2',
            'Developed automatic email delivery on form submission on website using Simple Email Service',
            'Developed a feature for administrators to get all forms submitted on website directly into their email inbox',
        ],
        links: {
            website: 'http://assurancevoice.com/',
            certificate: 'https://drive.google.com/file/d/10K-7MWf0rrLENiouV_EZvfV7gR_EBr7K/view?usp=share_link',
        }
    },
    {
        title: 'App Developer',
        subtitle: 'Escola Learning Management System',
        logo: 'imgs/test-logo2.png',
        duration: 'Dec 2020 - Jun 2021',
        data: [
            'Initiated the work on flutter (by Google) apps with tech specs REST API integration, Git and Github',
            'Developed 2 apps where teachers can assign homework to students and students can submit the same',
            'Implemented caching (image, files and data), UI and state management (used provider package)',
        ],
        links: {
            website: 'http://www.vishistbusinesssolutions.com/',
            certificate: 'https://drive.google.com/file/d/10N7iQiO7XeSaCI4xF0TDB2xzqKZdZSsC/view?usp=share_link'
        }
    }
]

const por = [
    {
        title: 'Web & Design Head',
        subtitle: 'Space Technology Student\' Society | IIT Kharagpur',
        logo: 'imgs/nssc-logo.jpeg',
        duration: 'Aug 2021 - Apr 2022',
        data: [
            'Managed a design and web team of 4 and 5 members respectively to successfully conduct NSSC 2021 online fest',
            'Designed and developed the NSSC 2021 fest (with registered participants of 900+) and spAts websites',
            'Led a design team to create and release audience-engaging posters for the NSSC 2021 (Photoshop &Illustrator)',
        ],
        links: {
            website: 'https://2021.nssc.in/',
            certificate: 'https://drive.google.com/file/d/1Kw1ky2ET3kTSESCkdoe7yN8FPZd9lu45/view?usp=share_link',
        }
    },
    {
        title: 'Sub-Head',
        subtitle: 'Space Technology Student\' Society | IIT Kharagpur',
        logo: 'imgs/spats-logo2.png',
        duration: 'Aug 2020 - Apr 2021',
        data: [
            'Responsible for management of the spAts and NSSC website (design, development and maintenance)',
            'Successfully designed and developed a quiz platform for Space Quiz event with participants of over 350+',
            'Designed and developed NSSC 20, a space-themed, user-friendly website on React.',
        ],
        links: {
            website: 'https://spats.co.in/',
            certificate: 'https://drive.google.com/file/d/1V7DtQUvd10cRN93YS-v_IO7vT6rWPw0r/view?usp=share_link'
        }
    },
]

const sections = [
    new SectionModel({
        id: 'projects',
        title: 'Projects',
        cardType: CardType.gridView2,
        data: projects,
    }),
    new SectionModel({
        id: 'work_experience',
        title: 'Work Experience',
        description:[
            'I have an experience of more than 2 years in the field of fullstack web development including 1.5 years at a US based startup.'
        ],
        cardType: CardType.timelineView,
        data: workExperience,
    }),
    new SectionModel({
        id: 'por',
        title: 'Positions of Responsibility',
        cardType: CardType.timelineView,
        data: por,
    }),
]

const data = {
    sections,
    projects,
    workExperience,
    por
}

export default data