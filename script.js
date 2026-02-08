//Logica del DarkMode
const html = document.documentElement;
const modebutton = document.getElementById('dark');
const logo_darkmode = document.getElementById('svg');
const icon = document.querySelector("link[rel~='icon']");
const savedTheme = localStorage.getItem("theme");


function setTheme(isDark)
{
    html.toggleAttribute("data-theme", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
    icon.href = isDark? "assets/moon.svg" : "assets/sun.svg";
    logo_darkmode.src = isDark? "assets/sun-darkmode.svg" : "assets/moon.svg";
    
}

if (savedTheme === "dark") {
    setTheme(true);
} else {
    setTheme(false);
}

modebutton.addEventListener("click", () => {
    const isDark = html.hasAttribute("data-theme");
    setTheme(!isDark);
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

