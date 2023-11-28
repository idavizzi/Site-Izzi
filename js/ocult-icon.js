window.addEventListener('scroll', function () {
   var logo = document.getElementById('logo');

   if (window.scrollY > 0) {
      logo.style.display = 'none'; // Esconde a imagem quando a página é rolada
   } else {
      logo.style.display = 'block'; // Mostra a imagem quando a página está no topo
   }
});
