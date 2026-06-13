```javascript
const switcher = document.getElementById("language-switcher");

const translations = {
  kz: {
    title: "ERNURVYNX | AI және Технология",

    heroH2: "🥷 AI және технология",
    heroP: `💻 Веб-сайттар • Қосымшалар • Ойындар<br>
🎬 AI Бейнелер • Дизайн<br>
📚 Үйрен • Жаса • Дамы 🚀`,

    explore: "Қарау",
    contactNav: "Байланыс",

    aboutTitle: "ERNURVYNX туралы",
    aboutText: `ERNURVYNX сайтына қош келдіңіз.<br><br>
Жасанды интеллект, технология, дизайн, веб-сайттар және цифрлық инновацияларға арналған платформа.<br><br>
Мұнда заманауи цифрлық шешімдер мен пайдалы ақпарат табасыз.<br><br>
Үйрен. Жаса. Дамы.`,

    servicesTitle: "Қызметтер",

    card1h: "🥷 AI және технология",
    card1p: "Жасанды интеллект, автоматтандыру және болашақ технологиялары.",

    card2h: "💻 Веб-сайттар • Қосымшалар • Ойындар",
    card2p: "Веб-сайт жасау, мобильді қосымшалар және ойын жобалары.",

    card3h: "🎬 AI Бейнелер • Дизайн",
    card3p: "AI арқылы жасалған видеолар, графика және логотиптер.",

    card4h: "📚 Үйрен • Жаса • Дамы",
    card4p: "Оқу материалдары мен шығармашылық даму.",

    statsTitle: "Статистика",

    projects: "Жобалар",
    designs: "Дизайндар",
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
    contactNav: "Contact",

    aboutTitle: "About ERNURVYNX",
    aboutText: `Welcome to ERNURVYNX.<br><br>
A platform dedicated to Artificial Intelligence, Technology, Design, Websites and Creative Innovation.<br><br>
Discover modern digital solutions and useful resources.<br><br>
Learn. Create. Grow.`,

    servicesTitle: "Services",

    card1h: "🥷 AI & Technology",
    card1p: "Artificial Intelligence, automation and future technologies.",

    card2h: "💻 Websites • Apps • Games",
    card2p: "Website development, mobile apps and gaming projects.",

    card3h: "🎬 AI Videos • Design",
    card3p: "AI generated videos, graphics and logo creation.",

    card4h: "📚 Learn • Create • Grow",
    card4p: "Educational content and creative learning.",

    statsTitle: "Statistics",

    projects: "Projects",
    designs: "Designs",
    visitors: "Visitors",
    support: "Support",

    contactTitle: "Let's Work Together",
    contactText: "Interested in websites, AI solutions or design? Contact me on WhatsApp.",
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
    contactNav: "Контакты",

    aboutTitle: "О ERNURVYNX",
    aboutText: `Добро пожаловать в ERNURVYNX.<br><br>
Платформа об искусственном интеллекте, технологиях, дизайне и цифровых инновациях.<br><br>
Здесь вы найдете современные цифровые решения и полезные материалы.<br><br>
Учись. Создавай. Развивайся.`,

    servicesTitle: "Услуги",

    card1h: "🥷 ИИ и технологии",
    card1p: "Искусственный интеллект, автоматизация и технологии будущего.",

    card2h: "💻 Сайты • Приложения • Игры",
    card2p: "Разработка сайтов, мобильных приложений и игровых проектов.",

    card3h: "🎬 AI Видео • Дизайн",
    card3p: "AI видео, графика и создание логотипов.",

    card4h: "📚 Учись • Создавай • Развивайся",
    card4p: "Обучающие материалы и творческое развитие.",

    statsTitle: "Статистика",

    projects: "Проекты",
    designs: "Дизайны",
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
  document.querySelectorAll(".hero-buttons .btn")[1].innerHTML = lang.contactNav;

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

  document.querySelector("#stats h2").innerHTML = lang.statsTitle;

  const stats = document.querySelectorAll("#stats p");

  stats[0].innerHTML = lang.projects;
  stats[1].innerHTML = lang.designs;
  stats[2].innerHTML = lang.visitors;
  stats[3].innerHTML = lang.support;

  document.querySelector("#contact h2").innerHTML = lang.contactTitle;
  document.querySelector("#contact p").innerHTML = lang.contactText;
  document.querySelector("#contact .btn").innerHTML = lang.contactBtn;

  document.querySelectorAll("footer p")[0].innerHTML = lang.footer1;
  document.querySelectorAll("footer p")[1].innerHTML = lang.footer2;
});
```
