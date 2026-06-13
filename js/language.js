const switcher = document.getElementById("language-switcher");


switcher.addEventListener("change", ()=>{


let lang = switcher.value;


if(lang==="kz"){

document.querySelector(".glow-title").innerHTML="ERNURVYNX";

document.querySelector(".hero h2").innerHTML="🥷 AI және технология";


}


if(lang==="en"){


document.querySelector(".hero h2").innerHTML="🥷 AI & Technology";


}


if(lang==="ru"){


document.querySelector(".hero h2").innerHTML="🥷 ИИ и технологии";


}



});
