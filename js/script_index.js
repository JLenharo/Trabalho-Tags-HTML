function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content-section').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar conteúdo:', error));
}

// Carrega o conteúdo inicial ao abrir a página
window.onload = function() {
    loadContent('index.html');
};