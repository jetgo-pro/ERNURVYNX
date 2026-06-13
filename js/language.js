const switcher = document.getElementById("language-switcher");

const translations = {
kz: {
title: "ERNURVYNX | AI және Технология",
heroH2: "🥷 AI және технология",
heroP: `💻 Веб-сайттар • Қосымшалар • Ойындар<br>
🎬 AI Бейнелер • Дизайн<br>
📚 Үйрен • Жаса • Дамы 🚀`,

```
explore: "Қарау",
aboutTitle: "ERNURVYNX туралы",

aboutText: `ERNURVYNX сайтына қош келдіңіз.<br><br>
```

Жасанды интеллект, технология, дизайн және цифрлық инновацияларға арналған платформа.<br><br>
Үйрен. Жаса. Дамы.`,

```
servicesTitle: "Қызметтер",

card1h: "🤖 AI және технология",
card1p: "Жасанды интеллект, автоматтандыру және болашақ технологиялары.",

card2h: "💻 Веб-сайт жасау",
card2p: "Заманауи веб-сайттар мен цифрлық шешімдер.",

card3h: "🎨 Дизайн",
card3p: "Логотиптер, баннерлер және брендтеу.",

card4h: "📱 Қосымшалар",
card4p: "Веб және мобильді қосымшалар жасау.",

statsTitle: "Статистика",

projects: "Жобалар",
visitors: "Келушілер",
support: "Қолдау",
designs: "Дизайндар",

contactTitle: "📞 Байланыс",
contactText: "Веб-сайт немесе дизайн керек пе? WhatsApp арқылы хабарласыңыз.",
contactBtn: "💬 Байланысу",

footer1: "AI • Технология • Шығармашылық",
footer2: "Үйрен • Жаса • Дамы 🚀"
```

},

en: {
title: "ERNURVYNX | AI & Technology",
heroH2: "🥷 AI & Technology",
heroP: `💻 Websites • Apps • Games<br>
🎬 AI Videos • Design<br>
📚 Learn • Create • Grow 🚀`,

```
explore: "Explore",
aboutTitle: "About ERNURVYNX",

aboutText: `Welcome to ERNURVYNX.<br><br>
```

A platform dedicated to AI, Technology, Design and Digital Innovation.<br><br>
Learn. Create. Grow.`,

```
servicesTitle: "Services",

card1h: "🤖 AI & Technology",
card1p: "Artificial Intelligence and future technologies.",

card2h: "💻 Website Development",
card2p: "Modern websites and digital solutions.",

card3h: "🎨 Design",
card3p: "Logos, banners and branding.",

card4h: "📱 Applications",
card4p: "Web and mobile application development.",

statsTitle: "Statistics",

projects: "Projects",
visitors: "Visitors",
support: "Support",
designs: "Designs",

contactTitle: "📞 Contact",
contactText: "Need a website or design? Contact me via WhatsApp.",
contactBtn: "💬 Contact Me",

footer1: "AI • Technology • Creativity",
footer2: "Learn • Create • Grow 🚀"
```

},

ru: {
title: "ERNURVYNX | ИИ и технологии",
heroH2: "🥷 ИИ и технологии",
heroP: `💻 Сайты • Приложения • Игры<br>
🎬 AI Видео • Дизайн<br>
📚 Учись • Создавай • Развивайся 🚀`,

```
explore: "Обзор",
aboutTitle: "О ERNURVYNX",

aboutText: `Добро пожаловать в ERNURVYNX.<br><br>
```

Платформа об ИИ, технологиях, дизайне и цифровых инновациях.<br><br>
Учись. Создавай. Развивайся.`,

```
servicesTitle: "Услуги",

card1h: "🤖 ИИ и технологии",
card1p: "Искусственный интеллект и технологии будущего.",

card2h: "💻 Создание сайтов",
card2p: "Современные сайты и цифровые решения.",

card3h: "🎨 Дизайн",
card3p: "Логотипы, баннеры и брендинг.",

card4h: "📱 Приложения",
card4p: "Разработка веб и мобильных приложений.",

statsTitle: "Статистика",

projects: "Проекты",
visitors: "Посетители",
support: "Поддержка",
designs: "Дизайны",

contactTitle: "📞 Контакты",
contactText: "Нужен сайт или дизайн? Свяжитесь через WhatsApp.",
contactBtn: "💬 Связаться",

footer1: "ИИ • Технологии • Креативность",
footer2: "Учись • Создавай • Развивайся 🚀"
```

}
};

switcher.addEventListener("change", () => {
const lang = translations[switcher.value];

document.title = lang.title;

document.querySelector(".hero h2").innerHTML = lang.heroH2;
document.querySelector(".hero p").innerHTML = lang.heroP;

document.querySelectorAll(".hero-buttons .btn")[0].innerHTML = lang.explore;

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
