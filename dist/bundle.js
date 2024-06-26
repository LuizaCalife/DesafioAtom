"use strict";
document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.querySelector('input[type="text"]');
    var searchButton = document.querySelector('button');
    searchButton.addEventListener('click', function () {
        alert("Buscando por: ".concat(searchInput.value));
    });
});
