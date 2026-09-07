export default {
    home: {
        available_for_hire: "Disponible pour embauche",
        web_developer: "Développeur.",
        meta_description: "Développeur fullstack (PHP/Symfony, Next.js) en alternance chez CCSD, prépare un diplôme d'ingénieur à CPE Lyon.",
        intro: "Léo Trux, développeur en alternance au CCSD, où je contribue au projet HALiance. Je prépare en parallèle un diplôme d'ingénieur en informatique et réseaux de communications à CPE Lyon.",
        skills: "J'ai une solide expérience en PHP, notamment avec le framework Symfony, et j'élargis mes compétences avec Docker et Next.js (React/TypeScript) pour monter en compétence sur d'autres technologies.",
    },

    career: {
        title: "Parcours professionnel",
        ccsd: {
            label: "CCSD",
            title: "Développeur en alternance",
            organisation: "Centre pour la Communication Scientifique Directe",
            date: "2024 - Aujourd'hui",
            location: "Lyon, France",
            description: "Je travaille sur le projet HALiance.",
        },
        rgu: {
            label: "RGU",
            title: "Chercheur étudiant",
            organisation: "Université Robert Gordon",
            date: "Avril 2024 - Juillet 2024",
            location: "Aberdeen, Écosse",
            description: "J'ai travaillé sur la création de modèles d'IA pour automatiser le processus d'analyse argumentative.",
        },
    },

    studies: {
        title: "Études",
        cpe: {
            label: "CPE Lyon",
            title: "Diplôme d'ingénieur informatique",
            organisation: "CPE Lyon",
            date: "2025 - 2028",
            location: "Villeurbanne, France",
        },
        lyon: {
            label: "Université Lyon 1",
            title: "BUT Informatique",
            organisation: "Université Claude Bernard Lyon 1",
            date: "2022 - 2025",
            location: "Bourg-en-Bresse, France",
        },
    },

    projects: {
        title: "Projets",
        argu_ai: {
            title: "Argu Ai",
            date: "2024",
            description: "Argu Ai est une plateforme qui aide les utilisateurs à comprendre les arguments dans les textes qu'ils soumettent.",
        },
        leitlearn: {
            title: "Leitlearn (legacy)",
            date: "2023",
            description: "Leitlearn est une plateforme d'apprentissage en ligne permettant aux utilisateurs d'acquérir des connaissances en utilisant des flashcards."
        },
        mt_compo: {
            title: "Mt Compo",
            date: "2026",
            description: "Mt Compo est une plateforme de vente de partitions en ligne."
        }
    },

    footer: {
        collaborate: "Me contacter",
        contact_info: "Vous pouvez me contacter par email en remplissant ce formulaire.",
        copyright: "© 2025 - Léo Trux",
    },

    form: {
        fields: {
            name: "Nom",
            email: "Email",
            message: "Message",
            submit: "Envoyer",
        },
        message: {
            name: "Le nom doit contenir au moins 3 caractères.",
            email: "Veuillez entrer une adresse e-mail valide.",
            message: "Le message ne peut pas être vide.",
        }
    },

    toast: {
        error: {
            title: "Veuillez me contacter plus tard.",
            message: "Pour éviter le spam de messages, vous pourrez me contacter à nouveau dans une heure.",
        },
        serverError: {
            title: "Une erreur est survenue.",
            message: "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer plus tard.",
        },
        success: {
            title: "Merci de m'avoir contacté !",
            message: "Un email m'a été envoyé.",
        },
    },
} as const;
