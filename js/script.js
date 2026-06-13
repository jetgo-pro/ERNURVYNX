```javascript
/* ==========================
   PAGE LOADED
========================== */

document.addEventListener("DOMContentLoaded", () => {

    revealElements();

    animateCounters();

    setupSmoothScroll();

});


/* ==========================
   REVEAL ON SCROLL
========================== */

const revealItems = document.querySelectorAll(
".card, .portfolio-item, .stats-grid div, #about, #contact"
);

function revealElements(){

    const windowHeight = window.innerHeight;

    revealItems.forEach(item => {

        const elementTop =
        item.getBoundingClientRect().top;

        const revealPoint = 120;

        if(elementTop < windowHeight - revealPoint){

            item.classList.add("active");

        }

    });

}

window.addEventListener(
"scroll",
revealElements
);


/* ==========================
   SMOOTH SCROLL
========================== */

function setupSmoothScroll(){

    document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
        "click",
        function(e){

            e.preventDefault();

            const target =
            document.querySelector(
            this.getAttribute("href")
            );

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

}


/* ==========================
   COUNTER ANIMATION
========================== */

function animateCounters(){

    const counters =
    document.querySelectorAll(
    ".stats-grid h3"
    );

    counters.forEach(counter => {

        const updateCounter = () => {

            const target =
            parseInt(
            counter.innerText
            );

            let current =
            Number(
            counter.getAttribute(
            "data-count"
            )
            ) || 0;

            const increment =
            target / 100;

            if(current < target){

                current += increment;

                counter.innerText =
                Math.ceil(current) + "+";

                counter.setAttribute(
                "data-count",
                current
                );

                requestAnimationFrame(
                updateCounter
                );

            }else{

                counter.innerText =
                target + "+";

            }

        };

        updateCounter();

    });

}


/* ==========================
   SCROLL PROGRESS BAR
========================== */

const progressBar =
document.createElement("div");

progressBar.id =
"scroll-progress";

document.body.appendChild(
progressBar
);

window.addEventListener(
"scroll",
() => {

    const scrollTop =
    document.documentElement.scrollTop;

    const scrollHeight =
    document.documentElement.scrollHeight
    -
    document.documentElement.clientHeight;

    const progress =
    (scrollTop / scrollHeight) * 100;

    progressBar.style.width =
    progress + "%";

});


/* ==========================
   NAVBAR SHADOW
========================== */

const navbar =
document.querySelector(".navbar");

window.addEventListener(
"scroll",
() => {

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 0 20px rgba(0,229,255,0.2)";

    }

    else{

        navbar.style.boxShadow =
        "none";

    }

});


/* ==========================
   PORTFOLIO HOVER EFFECT
========================== */

const portfolioItems =
document.querySelectorAll(
".portfolio-item"
);

portfolioItems.forEach(item => {

    item.addEventListener(
    "mouseenter",
    () => {

        item.style.transform =
        "scale(1.05)";

    });

    item.addEventListener(
    "mouseleave",
    () => {

        item.style.transform =
        "scale(1)";

    });

});


/* ==========================
   FUTURE READY
========================== */

// AI Widget

function launchAI(){

    console.log(
    "Future AI Assistant"
    );

}

// Telegram Widget

function launchTelegram(){

    console.log(
    "Future Telegram Bot"
    );

}

// WhatsApp Widget

function launchWhatsApp(){

    window.open(
    "https://wa.me/77716268766",
    "_blank"
    );

}
```
