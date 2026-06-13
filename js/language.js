```javascript
/* ==========================
   LANGUAGE SYSTEM
========================== */

const langSwitcher =
document.getElementById(
"language-switcher"
);

/* ==========================
   TRANSLATIONS
========================== */

const translations = {

kz: {

about_title:
"ERNURVYNX туралы",

about_text:
"ERNURVYNX — жасанды интеллект, технология, дизайн және цифрлық шығармашылыққа арналған платформа.",

services:
"Қызметтер",

portfolio:
"Портфолио",

videos:
"Соңғы видеолар",

statistics:
"Статистика",

contact:
"Байланыс",

work:
"Бірге жұмыс жасайық",

contact_text:
"Сайт жасау, AI шешімдері немесе серіктестік үшін WhatsApp арқылы хабарласыңыз."

},

en: {

about_title:
"About ERNURVYNX",

about_text:
"ERNURVYNX is a platform dedicated to Artificial Intelligence, Technology, Design and Digital Innovation.",

services:
"Services",

portfolio:
"Portfolio",

videos:
"Latest Videos",

statistics:
"Statistics",

contact:
"Contact",

work:
"Let's Work Together",

contact_text:
"Interested in websites, AI solutions or collaboration? Contact me via WhatsApp."

},

ru: {

about_title:
"О ERNURVYNX",

about_text:
"ERNURVYNX — платформа, посвященная искусственному интеллекту, технологиям, дизайну и цифровому творчеству.",

services:
"Услуги",

portfolio:
"Портфолио",

videos:
"Последние видео",

statistics:
"Статистика",

contact:
"Контакты",

work:
"Давайте сотрудничать",

contact_text:
"Для создания сайтов, AI решений или сотрудничества свяжитесь через WhatsApp."

}

};


/* ==========================
   CHANGE LANGUAGE
========================== */

function setLanguage(lang){

    document
    .querySelectorAll("[data-lang]")
    .forEach(element => {

        const key =
        element.getAttribute(
        "data-lang"
        );

        if(
        translations[lang][key]
        ){

            element.innerHTML =
            translations[lang][key];

        }

    });

    localStorage.setItem(
    "language",
    lang
    );

}


/* ==========================
   SELECT EVENT
========================== */

langSwitcher.addEventListener(
"change",
(e)=>{

    setLanguage(
    e.target.value
    );

});


/* ==========================
   LOAD SAVED LANGUAGE
========================== */

const savedLanguage =
localStorage.getItem(
"language"
) || "kz";

langSwitcher.value =
savedLanguage;

setLanguage(
savedLanguage
);

console.log(
"Language System Loaded"
);
```
