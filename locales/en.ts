export default {
    home: {
        available_for_hire: "Available for hire",
        web_developer: "Developer.",
        intro: "Léo Trux, a work-study developer at CCSD, where I contribute to the HALiance project. I'm also completing an engineering degree in computer science and communication networks at CPE Lyon.",
        skills: "I have solid experience in PHP, particularly with the Symfony framework, and I'm broadening my skills with Docker and Next.js (React/TypeScript) to grow into other technologies.",
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
            date: "2024",
            description: "Argu Ai is a platform that helps users understand arguments in the texts they provide.",
        },
        leitlearn: {
            title: "Leitlearn (legacy)",
            date: "2023",
            description: "Leitlearn is an e-learning platform that enables users to acquire knowledge using flashcards."
        },
        mt_compo: {
            title: "Mt Compo",
            date: "2026",
            description: "Mt Compo is an online platform for selling sheet music."
        }
    },

    footer: {
        collaborate: "Contact me",
        contact_info: "You can contact me by email by filling this form.",
        copyright: "© 2025 - Léo Trux",
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

    toast: {
        error: {
            title: "Please contact me later.",
            message: "To avoid message spamming, you will be able to contact me again in one hour.",
        },
        serverError: {
            title: "Something went wrong.",
            message: "An error occurred while sending your message. Please try again later.",
        },
        success: {
            title: "Thank you for contacting me!",
            message: "An email has been sent to me.",
        },
    },
} as const;
