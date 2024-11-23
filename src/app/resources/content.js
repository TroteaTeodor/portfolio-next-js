import { InlineCode } from "@/once-ui/components";
import { Analytics } from "@vercel/analytics/react";

const person = {
    firstName: 'Teodor',
    lastName:  'Trotea',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Applied Computer Science student',
    avatar:    '/images/avatar_me.jpg',
    location:  'Europe/Brussels',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Romanian']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/TroteaTeodor',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/trotea-teodor-138b072b1/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:teodor.trotea@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Applied Computer Science student</>,
    subline: <>I'm Teodor, a student at <InlineCode>Karel de Grote Hogeschool</InlineCode>, where I learn software engineering.<br/>After courses, I build my own projects.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com/trotea-teodor/30min'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>I'm Trotea Teodor, an Applied Computer Science student at Karel de Grote Hogeschool in Antwerp, Belgium, with a strong background in C++ and Java. I’ve led a robotics team during high school, gaining hands-on experience in teamwork, project management, and cutting-edge technologies like OpenCV. I’m passionate about software development and always eager to learn and grow. Explore my site to learn more about my projects and skills, and feel free to get in touch!</>
    },
    work: {
        display: false, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'FLY',
                timeframe: '2022 - Present',
                role: 'Senior Design Engineer',
                achievements: [
                    <>Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.</>,
                    <>Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Karel de Grote Hogeschool',
                description: <>Studies Applied Computer Science.</>,
                images: [
                    {
                        src: '/images/kdglogo.png',
                        alt: 'Protected image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Java',
                description: <>I am currently studying Java at Karel de Grote Hogeschool since 2024</>,
                images: [
                    {
                        src: '/images/java.png',
                        alt: 'Project image',
                        width: 16,
                        height: 12
                    },
                ]
            },
            {
                title: 'Python',
                description: <>I am currently studying Python on my own and posting my projects on Github</>,
                images: [
                    {
                        src: '/images/python.png',
                        alt: 'Project image',
                        width: 16,
                        height: 12
                    },
                ]
            },
            {
                title: 'C++',
                description: <>I studied C++ for 3 years at National Collage "Spiru Haret" from 2021 to 2024</>,
                images: [
                    {
                        src: '/images/cplus.png',
                        alt: 'Project image',
                        width: 16,
                        height: 12
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase since 2024</>,
                images: [
                    {
                        src: '/images/nextjs.png',
                        alt: 'Project image',
                        width: 16,
                        height: 12
                    },
                ]
            },
            {
                title: 'PostgreSQL',
                description: <>I am currently learning and using PostgreSQL at Karel de Grote University</>,
                images: [
                    {
                        src: '/images/postgresql.png',
                        alt: 'Project image',
                        width: 16,
                        height: 12
                    },
                ]
            },
            {
                title: 'React',
                description: <>I created my personal portfolio website using React, showcasing my skills and projects with a responsive, user-friendly design and dynamic features.</>,
                images: [
                    {
                        src: '/images/react.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 12
                    },
                ]
            },
            {
                title: 'Github',
                description: <>Experienced in using github to manage and colaborate on projects remotely.</>,
                images: [
                    {
                        src: '/images/github.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 12
                    },
                ]
            },
            {
                title: 'Typescript',
                description: <>I am currently learning and following diferent courses on Typescript on my own</>,
                images: [
                    {
                        src: '/images/typescript.png',
                        alt: 'Project image',
                        width: 16,
                        height: 12
                    },
                ]
            },
            {
                title: 'Linux System Administration',
                description: <>I am currently learning and following Red Hat System Administration course at Karel de Grote University</>,
                images: [
                    {
                        src: '/images/redhat.png',
                        alt: 'Project image',
                        width: 16,
                        height: 12
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work/Projects',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };