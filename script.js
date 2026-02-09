import {moon, sun} from "./svgscript.js";

//Logica del DarkMode
const html = document.documentElement;
const modebutton = document.getElementById('dark');
const logo_darkmode = document.getElementById('svgcontainer');
let theme = localStorage.getItem("theme");

function setDarkTheme(isDark)
{        
    theme = isDark? "dark" : "light";
    html.setAttribute("theme",theme);
    localStorage.setItem("theme",theme);    
    logo_darkmode.innerHTML = isDark ? sun : moon;
}

if (theme === "dark") {
    setDarkTheme(true);
} else {
    setDarkTheme(false);
}

modebutton.addEventListener("click", () => {  
    setDarkTheme(html.getAttribute("theme") === "dark" ? false : true);
});


//Logica de la caja
let caja = document.getElementById('caja');
let boton = document.getElementById('cambiacolor');

function ObtenerRGB()
{
    return Math.floor(Math.random() * 256)
}

boton.addEventListener("click", () => {
    let code1,code2,code3;
    code1 = ObtenerRGB(); code2 = ObtenerRGB(); code3 = ObtenerRGB();

    caja.style.backgroundColor = `rgb(${code1},${code2},${code3})`;

    console.log("La caja cambio exitosamente al color: \t " + `https://rgb.to/${code1},${code2},${code3}`);
})

