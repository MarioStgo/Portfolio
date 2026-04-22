//Header cambia de color al dar scroll
var header = document.getElementById('Header')

window.addEventListener('scroll', ()=>{
   var scroll = window.scrollY
   if(scroll>10){
      header.classList.add('scrolled');
   }else{
      header.classList.remove('scrolled');
   }
});

//Otro menú hamburguesa
var toggle = document.getElementById('toggle');
var navLinks = document.querySelectorAll('.navigation ul li a');

document.addEventListener('click', function(event){

   var clicEnMenu = event.target.closest('.navigation');
   var clicEnBoton = event.target.closest('label[for="toggle"]');
   var clicEnCheckbox = event.target.id === 'toggle';

   if(toggle.checked && !clicEnMenu && !clicEnBoton && !clicEnCheckbox){
      toggle.checked = false;
   }
});

navLinks.forEach(function(link){
   link.addEventListener('click', function(){
      toggle.checked = false;
   });
});


//Efecto h1 "Hola Soy Mario Santiago!!"
const titulo1 = document.querySelector('.hero-text h1');

const texto1 = "Hola Soy Mario";

if(titulo1){
   titulo1.textContent = "";

   let letraActual1 = 0;

   function escribirH1(){
      if (letraActual1 < texto1.length) {
         titulo1.textContent +=
         texto1.charAt(letraActual1);
         letraActual1++;

         setTimeout(escribirH1, 100);
      }
   }
   escribirH1();
}

//Efecto h2 "Lic. Informatica Administrativa"
const titulo2 = document.querySelector('.hero-text h2');

const roles = [
   "Lic. Informática Administrativa",
   "Desarrollador Web",
   "Diseñador Grafico",
   "Analista de Seguridad"
];

if (titulo2) {
   let indiceActual = 0;

   function rotarTexto(){
      titulo2.classList.add('fade-out');
      setTimeout(() =>{
      indiceActual++;

      if (indiceActual >= roles.length) {
         indiceActual = 0;
      }
       titulo2.textContent = roles[indiceActual];
      titulo2.classList.remove('fade-out');
   }, 500);
   }
   setInterval(rotarTexto, 4000);
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("Skills");
    if(skills){
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("canva");
        habilidades[4].classList.add("wordpress");
        habilidades[5].classList.add("paqueteriaoffice");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("trabajoequipo");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("dedicacion");
        habilidades[10].classList.add("pensamientoanalitico");
        habilidades[11].classList.add("eticaprofesional");
    }
}
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

//Modo claro y Modo Oscuro
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const temaGuardado = localStorage.getItem('temaPortafolio');

if(temaGuardado === 'claro'){
   body.classList.add('light-mode');
   themeToggle.classList.remove('fa-sun');
   themeToggle.classList.add('fa-moon');
}

themeToggle.addEventListener('click', () =>{
   body.classList.toggle('light-mode');

   if(body.classList.contains('light-mode')){
      themeToggle.classList.remove('fa-sun');
      themeToggle.classList.add('fa-moon');

      localStorage.setItem('temaPortafolio', 'claro');
   }else{
      themeToggle.classList.remove('fa-moon');
      themeToggle.classList.add('fa-sun')

      localStorage.setItem('temaPortafolio', 'oscuro');
   }
});

//Particles-js
particlesJS("particles-js",{
   "particles":{
      "number":{
         "value":100,
         "density":{
            "enable":true,
            "value-area":800
         }
      },
      "color":{
         "value":"#ffffff"
      },
      "shape":{
         "type":"circle",
      },
      "opacity":{
         "value":0.5,
         "random":true,
      },
      "size":{
         "value":4,
         "random":true,
      },
      "line_linked":{
         "enable":false
      },
      "move":{
         "enable":true,
         "speed":2,
         "direction":"bottom",
         "random":false,
         "straight":false,
         "out_mode":"out",
         "bounce":false,
      }
   },
   "interactivity":{
      "detect_on":"canvas",
      "events":{
         "onhover":{
            "enable":true,
            "mode":"repulse"
         },
         "onclick":{
            "enable":true,
            "mode":"push"
         },
         "resize":true
      }
   },
   "retina_detect":true
});