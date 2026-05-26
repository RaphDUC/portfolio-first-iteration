import type { Lang } from './index'

type TranslationMap = Record<string, string>
type Translations = Record<Lang, TranslationMap>

export const translations: Translations = {
  en: {
    // Navigation
    nav_about: 'About me',
    nav_games: 'Games',
    nav_other: 'Other projects',
    nav_internship: 'Internship',
    nav_resume: 'Resume',
    nav_contact: 'Contact me',

    // Footer
    footer_credit: 'made this portfolio template!',
    footer_reach: 'Reach me at',
    footer_or: 'or',
    footer_through: 'through here',

    // Common
    close: 'Close',

    // About page
    about_title: "Hi. I'm just curious.",

    // Games page
    games_title: 'Games',
    games_subtitle: "Here are some games I've created or imagined — released, made during game jams, or built to showcase skills across various engines.",

    // Other projects page
    other_title: 'Other projects',
    other_subtitle: "The following are some apps, artworks, and other projects I've made or heavily contributed to.",

    // Internship projects page
    internship_title: 'Internship Projects',
    internship_subtitle: "Below is a project I worked on professionally during my internship at Avalon Digital (April–June 2022).",

    // Contact page
    contact_title: "Let's get in touch",
    contact_subtitle: 'Feel free to contact me about any opportunity!',

    // Resume page
    resume_title: 'Resume',
    resume_download_en: 'Download as PDF 🇬🇧',
    resume_download_fr: 'Download in French 🇫🇷',
    resume_internships: 'Internships',
    resume_skills: 'Skills',
    resume_education: 'Education',
    resume_languages: 'Languages',
    resume_hobbies: 'Hobbies',

    // Resume – internship
    internship_britannia_dev: 'C# development in Unity on the game',
    internship_britannia_i2l: 'Implementation of the localization asset I2Localization.',
    internship_britannia_auto: "Automation of the game's translations.",
    internship_britannia_blender: 'Introduction to Blender: creation of 3D pawns.',
    internship_britannia_fx: 'Addition of effects and animations, with the necessary scripts.',

    // Resume – skill categories
    resume_skill_lang: 'Languages & Frameworks',
    resume_skill_gamedev: 'Game Development',
    resume_skill_tools: 'Software & Tools',

    // Resume – language levels
    lang_en_level: 'C1 Level. I have traveled to several English-speaking countries. I speak English daily, including technical vocabulary, mostly online.',
    lang_es_level: 'B2 Level. I attended a European Section during my high school years.',
    lang_jp_level: "Basic common sentences; I've recently started learning with Duolingo and a \"For Dummies\" book.",
    lang_fr_level: 'This is my mother tongue.',
    lang_rc_level: "Ça lé aussi ma langue maternelle, oté ! (\"This is also my mother tongue!\")",

    // Resume – hobbies
    hobby_games_title: 'I ❤️ Video & Tabletop Games',
    hobby_games_1: 'Not only do I enjoy playing most of them, but also talking, debating, and studying their gameplay and artistic features. I also play board games — still a newcomer to strategy titles — and have been playing Tabletop RPGs for 12 years.',
    hobby_games_2: 'From unknown indies to AAAs, I like to expand my curiosity across genres, solo and multiplayer alike. Finding a single favourite is genuinely hard. I have a particular soft spot for Immersive Sims — especially the Deus Ex series, for their openness and multi-approach design — and for Fumito Ueda\'s games (Ico, Shadow of the Colossus, The Last Guardian, and Project Robot has caught my attention) for their world-building and minimalist game design.',
    hobby_drama_title: 'I 🧡 Drama, Dubbing & Arts',
    hobby_drama: 'I really like acting and playing characters. I participated in the Komidi Festival in 2016 and acted in "Big One" by Reunionese actor Sergio Grondin. I am also a big fan of voice acting and dubbing comedy, trying my hand at it with some video game parody editors. More broadly: music, films, series, books, and attempting to draw (emphasis on "attempting" :\'D).',
    hobby_sports_title: 'I 💛 Sports & Photography',
    hobby_sports: 'I often go out during my breaks and enjoy hiking, basketball, swimming, and kung fu. I also take photos on the go — especially during hikes.',
    hobby_trips_title: 'I 💚 Trips',
    hobby_trips: 'Australia and Ireland (with the BEST association), South Africa, Mauritius, Seychelles.',
    hobby_y2k_title: 'I 💙 Y2K Futurism & Aviation',
    hobby_y2k: 'Big fan of the "futuristic Y2K mood" — the way the late 90s and early 2000s imagined the future, across graphic interfaces, architecture, ambiance, music, and sound design. Aviation and space are also passions: I once dreamed of becoming a pilot, and now I have Flight Simulator and the machine to run it (that counts, right?...).',
  },

  fr: {
    // Navigation
    nav_about: 'À propos',
    nav_games: 'Jeux',
    nav_other: 'Autres projets',
    nav_internship: 'Stage',
    nav_resume: 'CV',
    nav_contact: 'Me contacter',

    // Footer
    footer_credit: 'a réalisé ce template de portfolio !',
    footer_reach: 'Contactez-moi à',
    footer_or: 'ou',
    footer_through: 'par ici',

    // Common
    close: 'Fermer',

    // About page
    about_title: 'Bonjour. Je suis juste curieux.',

    // Games page
    games_title: 'Jeux',
    games_subtitle: "Voici quelques jeux que j'ai créés ou imaginés — publiés, réalisés lors de game jams, ou développés pour illustrer mes compétences dans divers moteurs.",

    // Other projects page
    other_title: 'Autres projets',
    other_subtitle: "Voici quelques applications, œuvres artistiques et autres projets auxquels j'ai largement contribué ou que j'ai réalisés.",

    // Internship projects page
    internship_title: 'Projets de stage',
    internship_subtitle: "Voici un projet sur lequel j'ai travaillé professionnellement lors de mon stage chez Avalon Digital (avril–juin 2022).",

    // Contact page
    contact_title: 'Entrons en contact',
    contact_subtitle: "N'hésitez pas à me contacter pour toute opportunité !",

    // Resume page
    resume_title: 'CV',
    resume_download_en: 'Télécharger en anglais 🇬🇧',
    resume_download_fr: 'Télécharger en PDF 🇫🇷',
    resume_internships: 'Stages',
    resume_skills: 'Compétences',
    resume_education: 'Formation',
    resume_languages: 'Langues',
    resume_hobbies: 'Loisirs',

    // Resume – internship
    internship_britannia_dev: 'Développement C# sous Unity sur le jeu',
    internship_britannia_i2l: "Implémentation de l'asset de localisation I2Localization.",
    internship_britannia_auto: 'Automatisation des traductions du jeu.',
    internship_britannia_blender: 'Introduction à Blender : création de pions 3D.',
    internship_britannia_fx: "Ajout d'effets et d'animations, avec les scripts nécessaires.",

    // Resume – skill categories
    resume_skill_lang: 'Langages & Frameworks',
    resume_skill_gamedev: 'Développement de jeux',
    resume_skill_tools: 'Logiciels & Outils',

    // Resume – language levels
    lang_en_level: "Niveau C1. J'ai voyagé dans plusieurs pays anglophones. Je parle anglais au quotidien, y compris en vocabulaire technique, essentiellement en ligne.",
    lang_es_level: "Niveau B2. J'ai suivi une Section Européenne durant mes années de lycée.",
    lang_jp_level: "Phrases courantes de base ; j'ai récemment commencé à apprendre avec Duolingo et un livre « Pour les Nuls ».",
    lang_fr_level: "C'est ma langue maternelle.",
    lang_rc_level: "Ça lé aussi ma langue maternelle, oté ! (« C'est aussi ma langue maternelle ! »)",

    // Resume – hobbies
    hobby_games_title: "J'❤️ les Jeux Vidéo & de Société",
    hobby_games_1: "Je prends plaisir à y jouer, mais aussi à en parler, à les analyser, ou à étudier leurs mécaniques de gameplay et leurs partis pris artistiques. Je joue aussi aux jeux de société — encore tout novice en jeux de stratégie — et aux Tabletop RPGs depuis 12 ans.",
    hobby_games_2: "Des indés méconnus aux AAA, j'aime élargir ma curiosité dans tous les genres, en solo comme en multijoueur. Trouver un jeu favori est difficile. J'ai peut-être un amour particulier pour les Immersive Sims — surtout la saga Deus Ex, pour leur ouverture et leurs approches multiples — et pour les jeux de Fumito Ueda (Ico, Shadow of the Colossus, The Last Guardian, et Project Robot m'a intrigué) pour leurs univers et leur game design minimaliste.",
    hobby_drama_title: "J'🧡 le Théâtre, le Doublage & les Arts",
    hobby_drama: "J'aime beaucoup jouer des personnages. J'ai participé au Festival Komidi en 2016 et joué dans « Big One » de l'acteur réunionnais Sergio Grondin. Je suis aussi un grand fan de la comédie de doublage, et je m'y essaie avec certains monteurs de parodie de jeu vidéo. Plus largement : musique, films, séries, livres, et essayer de dessiner (j'ai bien dit « essayer » :'D).",
    hobby_sports_title: "J'💛 le Sport & la Photo",
    hobby_sports: "Je sors souvent pendant mes pauses et j'apprécie surtout la randonnée, le basketball, la natation et le kung fu. Je prends aussi des photos en chemin, notamment lors de mes randonnées.",
    hobby_trips_title: "J'💚 les Voyages",
    hobby_trips: "Australie et Irlande (avec l'association BEST), Afrique du Sud, Maurice, Seychelles.",
    hobby_y2k_title: "J'💙 le Futurisme Y2K & l'Aviation",
    hobby_y2k: "Grand fan du « mood Y2K futuriste » — la façon dont la fin des années 90 et le début des années 2000 imaginaient le futur : interfaces graphiques, architecture, ambiances, musiques, sound design. L'aviation et l'espace aussi : j'ai rêvé d'être pilote, et maintenant j'ai Flight Simulator et la machine pour le faire tourner (ça compte, non ?...).",
  },
}
