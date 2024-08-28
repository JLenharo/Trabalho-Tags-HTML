function loadContent(page) {
    
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
        return;
    }

    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content-section').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar conteúdo:', error));
}
