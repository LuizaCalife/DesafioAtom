document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
  const searchButton = document.querySelector('button') as HTMLButtonElement;
  const menuLinks = document.querySelectorAll('nav ul li a');
  const articles = document.querySelectorAll('article');

  // Função de busca
  searchButton.addEventListener('click', () => {
    alert(`Buscando por: ${searchInput.value}`);
  });

  // Função de scroll. 
  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      if (e.target instanceof HTMLAnchorElement) {
        const targetId = e.target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId!);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Animação ao rolar a página
  const handleScroll = () => {
    articles.forEach(article => {
      const rect = article.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        article.classList.add('animate-fadeIn');
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Para animações iniciais

  // Animação ao passar o mouse
  articles.forEach(article => {
    article.addEventListener('mouseenter', () => {
      article.classList.add('shadow-custom-heavy', 'transition-transform', 'transform', 'scale-105');
    });
    article.addEventListener('mouseleave', () => {
      article.classList.remove('shadow-custom-heavy', 'transition-transform', 'transform', 'scale-105');
    });
  });
});
