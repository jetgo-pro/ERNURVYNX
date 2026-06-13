const switcher = document.getElementById("language-switcher");

const translations = {
  kz: {
    title: "ERNURVYNX | AI және Технология",
    heroH2: "🥷 AI және технология",
    heroP: `💻 Веб-сайттар • Қосымшалар • Ойындар<br>
🎬 AI Бейнелер • Дизайн<br>
📚 Үйрен • Жаса • Дамы 🚀`,

    explore: "Қарау",
    portfolioBtn: "Портфолио",

    aboutTitle: "ERNURVYNX туралы",
    aboutText: `ERNURVYNX сайтына қош келдіңіз.<br><br>
Жасанды интеллект, технология, дизайн, веб-сайттар және цифрлық инновацияларға арналған платформа.<br><br>
Мұнда сабақтар, жобалар, бейнелер және заманауи шешімдер табасыз.<br><br>
Үйрен. Жаса. Дамы.`,

    servicesTitle: "Қызметтер",

    card1h: "🥷 AI және технология",
    card1p: "Жасанды интеллект, автоматтандыру және болашақ технологиялары.",

    card2h: "💻 Веб-сайттар • Қосымшалар • Ойындар",
    card2p: "Веб-сайт жасау, мобильді қосымшалар және ойын жобалары.",

    card3h: "🎬 AI Бейнелер • Дизайн",
    card3p: "AI арқылы жасалған видеолар, графика, логотиптер және брендтеу.",

    card4h: "📚 Үйрен • Жаса • Дамы",
    card4p: "Оқу материалдары, сабақтар және шығармашылық даму.",

    portfolioTitle: "Портфолио",

    p1: "Веб-сайт дизайны",
    p2: "AI Видео Жобасы",
    p3: "Мобильді Қосымша",
    p4: "Креативті Дизайн",

    videosTitle: "Соңғы Бейнелер",

    statsTitle: "Статистика",

    projects: "Жобалар",
    videos: "Бейнелер",
    visitors: "Келушілер",
    support: "Қолдау",

    contactTitle: "Бірге Жұмыс Істейік",
    contactText: "Веб-сайт, AI шешімдері немесе дизайн қажет пе? WhatsApp арқылы хабарласыңыз.",
    contactBtn: "💬 Байланысу",

    footer1: "AI • Технология • Шығармашылық",
    footer2: "Үйрен • Жаса • Дамы 🚀"
  },

  en: {
    title: "ERNURVYNX | AI & Technology",
    heroH2: "🥷 AI & Technology",
    heroP: `💻 Websites • Apps • Games<br>
🎬 AI Videos • Design<br>
📚 Learn • Create • Grow 🚀`,

    explore: "Explore",
    portfolioBtn: "Portfolio",

    aboutTitle: "About ERNURVYNX",
    aboutText: `Welcome to ERNURVYNX.<br><br>
A platform dedicated to Artificial Intelligence, Technology, Design, Websites, Apps and Creative Innovation.<br><br>
Discover tutorials, projects, videos and modern digital solutions.<br><br>
Learn. Create. Grow.`,

    servicesTitle: "Services",

    card1h: "🥷 AI & Technology",
    card1p: "Artificial Intelligence, automation and future technologies.",

    card2h: "💻 Websites • Apps • Games",
    card2p: "Website development, mobile apps and gaming projects.",

    card3h: "🎬 AI Videos • Design",
    card3p: "AI generated videos, graphics, logos and branding.",

    card4h: "📚 Learn • Create • Grow",
    card4p: "Educational content, tutorials and creative learning.",

    portfolioTitle: "Portfolio",

    p1: "Website Design",
    p2: "AI Video Project",
    p3: "Mobile Application",
    p4: "Creative Design",

    videosTitle: "Latest Videos",

    statsTitle: "Statistics",

    projects: "Projects",
    videos: "Videos",
    visitors: "Visitors",
    support: "Support",

    contactTitle: "Let's Work Together",
    contactText: "Interested in websites, AI solutions, design or collaboration? Contact me directly on WhatsApp.",
    contactBtn: "💬 Contact Me",

    footer1: "AI • Technology • Creativity",
    footer2: "Learn • Create • Grow 🚀"
  },

  ru: {
    title: "ERNURVYNX | ИИ и технологии",
    heroH2: "🥷 ИИ и технологии",
    heroP: `💻 Сайты • Приложения • Игры<br>
🎬 AI Видео • Дизайн<br>
📚 Учись • Создавай • Развивайся 🚀`,

    explore: "Обзор",
    portfolioBtn: "Портфолио",

    aboutTitle: "О ERNURVYNX",
    aboutText: `Добро пожаловать в ERNURVYNX.<br><br>
Платформа об искусственном интеллекте, технологиях, дизайне и цифровых инновациях.<br><br>
Здесь вы найдете уроки, проекты, видео и современные решения.<br><br>
Учись. Создавай. Развивайся.`,

    servicesTitle: "Услуги",

    card1h: "🥷 ИИ и технологии",
    card1p: "Искусственный интеллект, автоматизация и технологии будущего.",

    card2h: "💻 Сайты • Приложения • Игры",
    card2p: "Разработка сайтов, мобильных приложений и игровых проектов.",

    card3h: "🎬 AI Видео • Дизайн",
    card3p: "AI видео, графика, логотипы и брендинг.",

    card4h: "📚 Учись • Создавай • Развивайся",
    card4p: "Обучающие материалы и творческое развитие.",

    portfolioTitle: "Портфолио",

    p1: "Дизайн сайта",
    p2: "AI Видео Проект",
    p3: "Мобильное приложение",
    p4: "Креативный дизайн",

    videosTitle: "Последние Видео",

    statsTitle: "Статистика",

    projects: "Проекты",
    videos: "Видео",
    visitors: "Посетители",
    support: "Поддержка",

    contactTitle: "Давайте Работать Вместе",
    contactText: "Нужен сайт, AI решение или дизайн? Свяжитесь через WhatsApp.",
    contactBtn: "💬 Связаться",

    footer1: "ИИ • Технологии • Креативность",
    footer2: "Учись • Создавай • Развивайся 🚀"
  }
};

switcher.addEventListener("change", () => {
  const lang = translations[switcher.value];

  document.title = lang.title;

  document.querySelector(".hero h2").innerHTML = lang.heroH2;
  document.querySelector(".hero p").innerHTML = lang.heroP;

  document.querySelectorAll(".hero-buttons .btn")[0].innerHTML = lang.explore;
  document.querySelectorAll(".hero-buttons .btn")[1].innerHTML = lang.portfolioBtn;

  document.querySelector("#about h2").innerHTML = lang.aboutTitle;
  document.querySelector("#about p").innerHTML = lang.aboutText;

  document.querySelector("#services h2").innerHTML = lang.servicesTitle;

  const cards = document.querySelectorAll(".card");

  cards[0].querySelector("h3").innerHTML = lang.card1h;
  cards[0].querySelector("p").innerHTML = lang.card1p;

  cards[1].querySelector("h3").innerHTML = lang.card2h;
  cards[1].querySelector("p").innerHTML = lang.card2p;

  cards[2].querySelector("h3").innerHTML = lang.card3h;
  cards[2].querySelector("p").innerHTML = lang.card3p;

  cards[3].querySelector("h3").innerHTML = lang.card4h;
  cards[3].querySelector("p").innerHTML = lang.card4p;

  document.querySelector("#portfolio h2").innerHTML = lang.portfolioTitle;

  const portfolio = document.querySelectorAll(".portfolio-item h3");
  portfolio[0].innerHTML = lang.p1;
  portfolio[1].innerHTML = lang.p2;
  portfolio[2].innerHTML = lang.p3;
  portfolio[3].innerHTML = lang.p4;

  document.querySelector("#videos h2").innerHTML = lang.videosTitle;
  document.querySelector("#stats h2").innerHTML = lang.statsTitle;

  const stats = document.querySelectorAll("#stats p");
  stats[0].innerHTML = lang.projects;
  stats[1].innerHTML = lang.videos;
  stats[2].innerHTML = lang.visitors;
  stats[3].innerHTML = lang.support;

  document.querySelector("#contact h2").innerHTML = lang.contactTitle;
  document.querySelector("#contact p").innerHTML = lang.contactText;
  document.querySelector("#contact .btn").innerHTML = lang.contactBtn;

  document.querySelectorAll("footer p")[0].innerHTML = lang.footer1;
  document.querySelectorAll("footer p")[1].innerHTML = lang.footer2;
});
