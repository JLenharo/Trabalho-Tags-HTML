function loadContent(page, cssFile) {
    // Caso seja a página index.html, carrega o conteúdo estático específico
    if (page === "index.html") {
        document.getElementById('content-section').innerHTML = `
            <b><h2>O que são as tags em HTML?</h2></b>
            <img src="Imagens/Imagem home.png" alt="Imagem exemplo de uma tabela com algumas tags utilizadas em html" width="249" height="221">
            <p>Elas são usadas para informar ao navegador a estrutura do site. Através delas é que o navegador irá interpretar o que é a estrutura e o conteúdo visual da sua página. Existem diferentes tipos de tags, cada um com suas particularidades e funções. Podemos citar:</p>
            <ol>
                <b>
                    <li>Estruturais</li>
                    <li>Título</li>
                    <li>Texto</li>
                    <li>Link</li>
                    <li>Multimídia</li>
                    <li>Lista</li>
                    <li>Estilos e Script</li>  
                </b>
            </ol>
            <p>Para saber mais sobre cada tipo de tag, utilize a barra de navegação acima.</p>
        `;

        // Alterar o CSS para o CSS da página inicial
        changeCSS(cssFile);
        return;
    }

    // Carregar conteúdo de outras páginas
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content-section').innerHTML = data;

            // Alterar o CSS com base na página carregada
            changeCSS(cssFile);
        })
        .catch(error => console.error('Erro ao carregar conteúdo:', error));
}

// Função para alterar o CSS da página
function changeCSS(cssFile) {
    let oldLink = document.querySelector('link[rel="stylesheet"]');
    let newLink = document.createElement('link');
    newLink.rel = 'stylesheet';
    newLink.href = cssFile;

    // Substituir o CSS antigo pelo novo
    document.head.replaceChild(newLink, oldLink);
}

// Exemplo de uso para carregar a página index.html e seu respectivo CSS
loadContent('index.html', 'css/index.css');
