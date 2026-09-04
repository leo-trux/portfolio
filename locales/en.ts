export default {
    home: {
        available_for_hire: "Available for hire",
        web_developer: "Web developer.",
        intro: "My name is Léo Trux, and I am a developer from France with a passion for application development. I'm currently in my final year of a computer science degree at Lyon 1 University.",
        skills: "I have a solid experience in PHP, particularly with the Symfony framework. I'm currently broadening my skills by learning Next.js and Docker, to master modern technologies for fullstack development.",
    },
    career: {
        title: "Career",
        ccsd: {
            label: "CCSD",
            title: "Work-study Developer",
            organisation: "Centre for Direct Scientific Communication",
            date: "2024 - Present",
            location: "Lyon, France",
            description: "I'm working on the HALiance project.",
        },
        rgu: {
            label: "RGU",
            title: "Student Researcher",
            organisation: "Robert Gordon University",
            date: "April 2024 - July 2024",
            location: "Aberdeen, Scotland",
            description: "I was working on the creation of AI models to automate the argumentative analysis process.",
        },
    },

    studies: {
        title: "Studies",
        cpe: {
            label: "CPE Lyon",
            title: "Engineering degree in Computer Science",
            organisation: "CPE Lyon",
            date: "2025 - 2028",
            location: "Villeurbanne, France",
        },
        lyon: {
            label: "University Lyon 1",
            title: "Bachelor’s degree in Computer Science",
            organisation: "Claude Bernard Lyon 1 University",
            date: "2022 - 2025",
            location: "Bourg-en-Bresse, France",
        },
    },

    projects: {
        title: "Projects",
        argu_ai: {
            title: "Argu Ai",
            link: "/project/argu-ai",
            date: "2024",
            description: "Argu Ai is a platform that helps users understand arguments in the texts they provide.",
        },
        leitlearn: {
            title: "Leitlearn",
            link: "/project/leitlearn",
            date: "2025",
            description: "Leitlearn is an e-learning platform that enables users to acquire knowledge using flashcards."
        }
    },

    footer: {
        collaborate: "Let's collaborate!",
        contact_info: "You can contact me by email by filling this form.",
        copyright: "© 2025 - Léo Trux.",
        tech_stack: "Developed with Next.js, deployed with Vercel.",
    },


    form: {
        fields: {
            name: "Name",
            email: "Email",
            message: "Message",
            submit: "Submit",
        },
        message: {
            name: "The name must contain at least 3 characters.",
            email: "Please enter a valid e-mail address.",
            message: "The message cannot be empty.",
        }
    },

    modal: {
        title: "Form Status",
        error: {
            subTitle: "Please contact me later.",
            message: "To avoid message spamming, you will be able to contact me again in one hour.",
            button: "I understand",
        },
        serverError: {
            subTitle: "Something went wrong.",
            message: "An error occurred while sending your message. Please try again later.",
            button: "I understand",
        },
        success: {
            subTitle: "Thank you for contacting me!",
            message: "An email has been sent to me, I will reply as soon as possible.",
            button: "Back",
        },
    },
    back_btn: "Back to the home page",
    docs_title: "Project documents",
    argu_ai: {
        intro: "ArguAI is an online platform that I had the chance to develop during my 10-week internship in my second year of my Bachelor's degree in Computer Science. It automates the process of argumentative analysis using artificial intelligence models.",
        s1: {
            title: "Project Context",
            p1: "This project was done as part of my second-year internship in Computer Science, lasting 10 weeks. I was tasked with designing and developing a web platform called ArguAI, which allows the automatic analysis of arguments from texts, using artificial intelligence models.",
            p2: "The main goal was to create a tool capable of analyzing an argumentative reasoning in a text, extracting its components (position, arguments, counterarguments, etc.) and presenting them in a readable and structured way to the user."
        },
        s2: {
            title: "Technical Implementation",
            p1: "The project relies on a complete web architecture, combining a frontend developed in React with the Next.js framework and a backend API built with Flask in Python. The frontend provides smooth navigation and a responsive interface thanks to the use of Tailwind CSS. The backend manages the business logic and calls the three artificial intelligence models developed to automatically analyze the argumentative structure of texts. Communication between the two parts is done via HTTP requests, allowing efficient interaction between the user interface and the processing done by the AI models."
        },
        s3: {
            title: "Use of AI Models",
            p1: "As part of automating the argumentative analysis process, several artificial intelligence models were used to process and analyze texts in a structured manner. First, I used the Spacy library along with the en_core_web_sm model for text segmentation. This model breaks down a text into meaningful segments, such as sentences or units of meaning, which is essential for understanding the overall structure of the argument.",
            p2: "Next, to identify the type of each segment (e.g., conclusion or sub-conclusion), I used a RandomForest classifier. This model was trained to recognize the different types of segments in the argumentation, allowing for more precise analysis of the argumentative structure and identifying the different parts of the reasoning.",
            p3: "Finally, to analyze the relationships between the segments, I used DistilBert, a transformer-type language model. DistilBert is capable of determining which propositions support others and what type of relationship exists between them, whether it be support, contradiction, or another form of argumentative link. This model thus adds an additional layer of analysis by understanding the complex interactions between the different parts of an argument. If you would like more details on this project, an internship report is available at the bottom of the page."
        },
        intership_report: "Intership report"
    },
    leitlearn: {
        intro: "LeitLearn is an online learning platform that allows users to gain knowledge while having fun. The concept is based on the use of flashcards—virtual two-sided cards with a question on one side and the answer on the other—promoting active and enjoyable memorization. Users can create, customize, and review their own cards, making learning interactive, motivating, and effective.",
        s1: {
            title: "Project Background",
            p1: "The LeitLearn project began at the start of 2023. Originally, it was an academic project lasting one year, with the goal of designing and developing a web application from scratch. We started development as a team of three, initially using native PHP, before migrating to the CakePHP framework to better structure our code and support the application’s evolution."
        },
        s2: {
            title: "Technical Implementation",
            p1: "The LeitLearn website is built with Next.js, deployed on Vercel, and uses TypeScript and React. This technological stack reflects our shared intention to work with modern tools from the JavaScript ecosystem, while allowing us to learn and become familiar with recent and widely used web development technologies.",
            p2: "To effectively organize our teamwork, we adopted an agile methodology. Each task was defined through the creation of tickets, then developed in a dedicated branch via a pull request. Every feature was then reviewed by another team member before being merged, which helped ensure the project’s quality while fostering technical exchange and collective skill development.",
        },
        team: "The Team"
    }
} as const;
