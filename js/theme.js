```javascript
/* ==========================
   THEME SYSTEM
========================== */

const themeButton =
document.getElementById(
"theme-toggle"
);

/* ==========================
   LOAD SAVED THEME
========================== */

const savedTheme =
localStorage.getItem(
"theme"
);

if(savedTheme === "light"){

    enableLightMode();

}
else{

    enableDarkMode();

}


/* ==========================
   BUTTON CLICK
========================== */

themeButton.addEventListener(
"click",
() => {

    if(
    document.body.classList.contains(
    "light-mode"
    )
    ){

        enableDarkMode();

    }
    else{

        enableLightMode();

    }

});


/* ==========================
   LIGHT MODE
========================== */

function enableLightMode(){

    document.body.classList.add(
    "light-mode"
    );

    document.body.classList.remove(
    "dark-mode"
    );

    themeButton.innerHTML =
    "☀️";

    localStorage.setItem(
    "theme",
    "light"
    );

}


/* ==========================
   DARK MODE
========================== */

function enableDarkMode(){

    document.body.classList.add(
    "dark-mode"
    );

    document.body.classList.remove(
    "light-mode"
    );

    themeButton.innerHTML =
    "🌙";

    localStorage.setItem(
    "theme",
    "dark"
    );

}


/* ==========================
   FUTURE AUTO THEME
========================== */

// Кейін қалауың болса:

// const prefersDark =
// window.matchMedia(
// "(prefers-color-scheme: dark)"
// );

// арқылы автоматты анықтауға болады.


console.log(
"Theme System Loaded"
);
```
