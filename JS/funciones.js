// Función para verificar si el elemento está visible en la pantalla
function isElementVisible(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Función para manejar el scroll y hacer aparecer los proyectos
  function revealProjectsOnScroll() {
    const projectCards = document.querySelectorAll('.project-card');
  
    projectCards.forEach(card => {
      if (isElementVisible(card)) {
        card.classList.add('visible');
      }
    });
  }
  
  // Escuchar el evento de scroll
  window.addEventListener('scroll', revealProjectsOnScroll);
  
  // Efecto de clic con rebote
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.add('bounce');
  
      // Remover el efecto después de que termine la animación
      setTimeout(() => {
        card.classList.remove('bounce');
      }, 300); // Duración de la animación
    });
  });
  
  // Inicializar la animación en la carga de la página
  document.addEventListener('DOMContentLoaded', revealProjectsOnScroll);
  




  