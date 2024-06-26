"use strict";
document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.querySelector('input[type="text"]');
    var searchButton = document.querySelector('button');
    var menuLinks = document.querySelectorAll('nav ul li a');
    var articles = document.querySelectorAll('article');
    // Função de busca
    searchButton.addEventListener('click', function () {
        alert("Buscando por: ".concat(searchInput.value));
    });
    // Função de scroll suave
    menuLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            var _a;
            e.preventDefault();
            if (e.target instanceof HTMLAnchorElement) {
                var targetId = (_a = e.target.getAttribute('href')) === null || _a === void 0 ? void 0 : _a.substring(1);
                var targetElement = document.getElementById(targetId);
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
    var handleScroll = function () {
        articles.forEach(function (article) {
            var rect = article.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                article.classList.add('animate-fadeIn');
            }
        });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Para animações iniciais
    // Animação ao passar o mouse
    articles.forEach(function (article) {
        article.addEventListener('mouseover', function () {
            article.classList.add('shadow-custom-heavy');
        });
        article.addEventListener('mouseout', function () {
            article.classList.remove('shadow-custom-heavy');
        });
    });
});
