const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
   body.classList.toggle('light-mode'); //Prende y apaga el modo claro y oscuro

   if(body.classList.contains('light-mode')){
      themeToggle.classList.remove('fa-sun');
      themeToggle.classList.add('fa-moon');//Cambia a Luna el Icono
   }else{
      themeToggle.classList.remove('fa-moon');
      themeToggle.classList.add('fa-sun');
   }
});