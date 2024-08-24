function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content-section').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar conteúdo:', error));
}
