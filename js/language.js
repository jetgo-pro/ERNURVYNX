const translations = {
    kz: {
        explore: "Зерттеу",
        contact: "Байланыс",

        aboutTitle: "ERNURVYNX туралы",
        aboutText:
            "ERNURVYNX сайтына қош келдіңіз. Жасанды интеллект, технология, дизайн, веб-сайттар, қосымшалар және шығармашылық инновацияларға арналған платформа. Мұнда сіз оқулықтар, жобалар, құралдар және заманауи цифрлық шешімдер табасыз. Үйрен. Жаса. Дамы.",

        servicesTitle: "Қызметтер",

        aiTitle: "🥷 AI және Технология",
        aiText:
            "Жасанды интеллект, автоматтандыру және болашақ технологиялары.",

        webTitle: "💻 Веб-сайттар • Қосымшалар • Ойындар",
        webText:
            "Веб-сайт жасау, мобильді қосымшалар және ойын жобалары.",

        designTitle: "🎬 AI Бейнелер • Дизайн",
        designText:
            "AI арқылы жасалған видеолар, графика, логотиптер және брендинг.",

        learnTitle: "📚 Үйрен • Жаса • Дамы",
        learnText:
            "Білім беру контенті, оқулықтар және шығармашылық даму.",

        statsTitle: "Статистика",

        projects: "Жобалар",
        designs: "Дизайндар",
        visitors: "Келушілер",
        support: "Қолдау",

        workTitle: "Бірге жұмыс істейік",
        workText:
            "Веб-сайттар, AI шешімдері, дизайн немесе серіктестік қызықтырса, WhatsApp арқылы хабарласыңыз.",

        contactBtn: "💬 Байланысу",

        footerText: "AI • Технология • Шығармашылық",
        footerGrow: "Үйрен • Жаса • Дамы 🚀"
    },

    en: {
        explore: "Explore",
        contact: "Contact",

        aboutTitle: "About ERNURVYNX",
        aboutText:
            "Welcome to ERNURVYNX. A platform dedicated to Artificial Intelligence, Technology, Design, Websites, Apps and Creative Innovation. Here you will discover tutorials, projects, tools and modern digital solutions. Learn. Create. Grow.",

        servicesTitle: "Services",

        aiTitle: "🥷 AI & Technology",
        aiText:
            "Artificial Intelligence, automation and future technologies.",

        webTitle: "💻 Websites • Apps • Games",
        webText:
            "Website development, mobile apps and gaming projects.",

        designTitle: "🎬 AI Videos • Design",
        designText:
            "AI generated videos, graphics, logos and branding.",

        learnTitle: "📚 Learn • Create • Grow",
        learnText:
            "Educational content, tutorials and creative learning.",

        statsTitle: "Statistics",

        projects: "Projects",
        designs: "Designs",
        visitors: "Visitors",
        support: "Support",

        workTitle: "Let's Work Together",
        workText:
            "Interested in websites, AI solutions, design or collaboration? Contact me directly on WhatsApp.",

        contactBtn: "💬 Contact Me",

        footerText: "AI • Technology • Creativity",
        footerGrow: "Learn • Create • Grow 🚀"
    },

    ru: {
        explore: "Исследовать",
        contact: "Связаться",

        aboutTitle: "О ERNURVYNX",
        aboutText:
            "Добро пожаловать в ERNURVYNX. Платформа, посвященная искусственному интеллекту, технологиям, дизайну, сайтам, приложениям и цифровым инновациям. Здесь вы найдете уроки, проекты, инструменты и современные цифровые решения. Учись. Создавай. Развивайся.",

        servicesTitle: "Услуги",

        aiTitle: "🥷 AI и Технологии",
        aiText:
            "Искусственный интеллект, автоматизация и технологии будущего.",

        webTitle: "💻 Сайты • Приложения • Игры",
        webText:
            "Разработка сайтов, мобильных приложений и игровых проектов.",

        designTitle: "🎬 AI Видео • Дизайн",
        designText:
            "Видео, графика, логотипы и брендинг, созданные с помощью AI.",

        learnTitle: "📚 Учись • Создавай • Развивайся",
        learnText:
            "Обучающий контент, уроки и творческое развитие.",

        statsTitle: "Статистика",

        projects: "Проекты",
        designs: "Дизайны",
        visitors: "Посетители",
        support: "Поддержка",

        workTitle: "Давайте работать вместе",
        workText:
            "Интересуют сайты, AI-решения, дизайн или сотрудничество? Свяжитесь со мной напрямую через WhatsApp.",

        contactBtn: "💬 Связаться",

        footerText: "AI • Технологии • Креативность",
        footerGrow: "Учись • Создавай • Развивайся 🚀"
    }
};

const languageSwitcher = document.getElementById("language-switcher");

languageSwitcher.addEventListener("change", () => {
    const lang = languageSwitcher.value;
    const t = translations[lang];

    // Hero buttons
    document.querySelectorAll(".hero-buttons .btn")[0].textContent = t.explore;
    document.querySelectorAll(".hero-buttons .btn")[1].textContent = t.contact;

    // About
    document.querySelector("#about h2").textContent = t.aboutTitle;
    document.querySelector("#about p").textContent = t.aboutText;

    // Services
    document.querySelector("#services h2").textContent = t.servicesTitle;

    const cards = document.querySelectorAll(".card");

    cards[0].querySelector("h3").textContent = t.aiTitle;
    cards[0].querySelector("p").textContent = t.aiText;

    cards[1].querySelector("h3").textContent = t.webTitle;
    cards[1].querySelector("p").textContent = t.webText;

    cards[2].querySelector("h3").textContent = t.designTitle;
    cards[2].querySelector("p").textContent = t.designText;

    cards[3].querySelector("h3").textContent = t.learnTitle;
    cards[3].querySelector("p").textContent = t.learnText;

    // Stats
    document.querySelector("#stats h2").textContent = t.statsTitle;

    const stats = document.querySelectorAll("#stats .stats-grid p");

    stats[0].textContent = t.projects;
    stats[1].textContent = t.designs;
    stats[2].textContent = t.visitors;
    stats[3].textContent = t.support;

    // Contact
    document.querySelector("#contact h2").textContent = t.workTitle;
    document.querySelector("#contact p").textContent = t.workText;
    document.querySelector("#contact .btn").textContent = t.contactBtn;

    // Footer
    document.querySelectorAll("footer p")[0].textContent = t.footerText;
    document.querySelectorAll("footer p")[1].textContent = t.footerGrow;

    localStorage.setItem("language", lang);
});

// Save selected language
window.addEventListener("load", () => {
    const savedLang = localStorage.getItem("language") || "kz";
    languageSwitcher.value = savedLang;
    languageSwitcher.dispatchEvent(new Event("change"));
});
