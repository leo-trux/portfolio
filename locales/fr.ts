export default {
    home: {
        available_for_hire: "Disponible pour embauche",
        web_developer: "Développeur web.",
        intro: "Je m'appelle Léo Trux, et je suis un développeur français passionné par la création d'applications. Actuellement en dernière année d'un diplôme en informatique à l'Université Lyon 1.",
        skills: "J'ai une solide expérience en PHP, notamment avec le framework Symfony. J'élargis actuellement mes compétences en apprenant Next.js et Docker, afin de maîtriser les technologies modernes pour le développement fullstack.",
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
            link: "/project/argu-ai",
            date: "2024",
            description: "Argu Ai est une plateforme qui aide les utilisateurs à comprendre les arguments dans les textes qu'ils soumettent.",
        },
        leitlearn: {
            title: "Leitlearn",
            link: "/project/leitlearn",
            date: "2025",
            description: "Leitlearn est une plateforme d'apprentissage en ligne permettant aux utilisateurs d'acquérir des connaissances en utilisant des flashcards."
        }
    },

    footer: {
        collaborate: "Collaborons ensemble !",
        contact_info: "Vous pouvez me contacter par email en remplissant ce formulaire.",
        copyright: "© 2025 - Léo Trux.",
        tech_stack: "Développé avec Next.js, déployé avec Vercel.",
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

    modal: {
        title: "Statut du formulaire",
        error: {
            subTitle: "Veuillez me contacter plus tard.",
            message: "Pour éviter le spam de messages, vous pourrez me contacter à nouveau dans une heure.",
            button: "Je comprends",
        },
        serverError: {
            subTitle: "Une erreur est survenue.",
            message: "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer plus tard.",
            button: "Je comprends",
        },
        success: {
            subTitle: "Merci de m'avoir contacté !",
            message: "Un email m'a été envoyé, je vous réponds au plus vite.",
            button: "Retour",
        },
    },
    back_btn: "Retour à la page d'accueil",
    docs_title: "Documents liés au projet",
    argu_ai: {
        intro: "ArguAI est une plateforme en ligne que j’ai eu la chance de développer durant mon stage de 10 semaines en deuxième année de BUT. Elle automatise le processus d’analyse argumentative grâce à des modèles d’intelligence artificielle.",
        s1: {
            title: "Contexte du projet",
            p1: "Ce projet a été réalisé dans le cadre de mon stage de deuxième année de BUT Informatique, d’une durée de 10 semaines. J’ai été chargé de concevoir et de développer seul une plateforme web nommée ArguAI, permettant l’analyse automatique d’arguments à partir de textes, à l’aide de modèles d’intelligence artificielle.",
            p2: "L’objectif principal était de créer un outil capable d’analyser un raisonnement argumentatif dans un texte, d’en extraire les composantes (position, arguments, contre-arguments, etc.) et de les présenter de manière lisible et structurée à l’utilisateur."
        },
        s2: {
            title: "Mise en œuvre technique",
            p1: "Le projet repose sur une architecture web complète, combinant une interface développée en React avec le framework Next.js et une API backend construite avec Flask en Python. Le frontend offre une navigation fluide et une interface responsive grâce à l’utilisation de Tailwind CSS. Le backend, quant à lui, gère la logique métier et l’appel aux trois modèles d’intelligence artificielle développés pour analyser automatiquement la structure argumentative des textes. Les échanges entre les deux parties se font via des requêtes HTTP, permettant une communication efficace entre l’interface utilisateur et les traitements réalisés par les modèles IA.",
        },
        s3: {
            title: "Utilisation des modèles d'IA",
            p1: "Dans le cadre de l'automatisation du processus d'analyse argumentative, plusieurs modèles d'intelligence artificielle ont été utilisés pour traiter et analyser les textes de manière structurée. Tout d'abord, j'ai utilisé la bibliothèque Spacy accompagnée du modèle en_core_web_sm pour la segmentation du texte. Ce modèle permet de diviser un texte en segments significatifs, comme des phrases ou des unités de sens, ce qui est essentiel pour comprendre la structure générale de l'argumentation.",
            p2: "Ensuite, pour identifier le type de chaque segment (par exemple, conclusion ou sous-conclusion), j'ai employé un classificateur RandomForest. Ce modèle a été entraîné pour reconnaître les différents types de segments dans l'argumentation, ce qui permet d'analyser plus précisément la construction argumentative et d'identifier les différentes parties du raisonnement.",
            p3: "Enfin, pour analyser les relations entre les segments, j'ai utilisé DistilBert, un modèle de langage de type transformer. DistilBert est capable de déterminer quelles propositions soutiennent d'autres et quel est le type de relation entre elles, qu'il s'agisse de soutien, de contradiction, ou d'une autre forme de lien argumentatif. Ce modèle permet donc d'apporter une couche supplémentaire d'analyse, en comprenant les interactions complexes entre les différentes parties d'un argument. Si vous souhaitez plus de détails sur ce projet, un rapport de stage est disponible en bas de la page.",
        },
        intership_report: "Rapport de stage"
    },
    leitlearn: {
        intro: "LeitLearn est une plateforme d’apprentissage en ligne qui permet aux utilisateurs d’acquérir des connaissances tout en s’amusant. Le principe repose sur l’utilisation de flashcards, des cartes virtuelles recto-verso avec une question d’un côté et la réponse de l’autre, favorisant la mémorisation active et ludique. Les utilisateurs peuvent créer, personnaliser et réviser leurs propres cartes, rendant l’apprentissage interactif, motivant et efficace.",
        s1: {
            title: "Contexte du projet",
            p1: "Le projet Leitlearn a débuté au début de l’année 2023. À l’origine, il s’agissait d’un projet académique d’une durée d’un an, dont l’objectif était de concevoir et développer une application web de A à Z. Nous avons démarré le développement en équipe de trois personnes, d’abord en PHP natif, avant de migrer vers le framework CakePHP pour structurer davantage notre code et faciliter l’évolution de l’application."
        },
        s2: {
            title: "Mise en œuvre technique",
            p1: "Le site web Leitlearn est développé avec Next.js, déployé sur Vercel, et repose sur l’utilisation de TypeScript et React. Ce choix technologique reflète notre volonté commune d’utiliser des outils modernes de l’écosystème JavaScript, tout en nous permettant d’apprendre et de nous familiariser avec des technologies récentes et largement utilisées dans le développement web actuel.",
            p2: "Afin de structurer efficacement notre travail en équipe, nous avons mis en place une méthodologie agile. Chaque tâche était définie à travers la création de tickets, puis développée dans une branche dédiée via une pull request. Chaque fonctionnalité faisait ensuite l’objet d’une relecture de code par un autre membre de l’équipe avant d’être intégrée, ce qui a permis d’assurer la qualité du projet tout en favorisant les échanges techniques et la montée en compétences collective.",
        },
        team: "L'équipe"
    }
} as const;
