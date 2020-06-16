const API_KEY = 'e86b7c2ec9584cff9bf3eeb802515300';

function exibeNoticias() {
    let divTela = document.getElementById('tela');
    let texto = '';

    // Montar texto HTML das noticias
    let dados = JSON.parse(this.responseText);
    for (i = 0; i < dados.articles.length; i++) {
        let noticia = dados.articles[i];
        let data = new Date(noticia.publishedAt);

        texto = texto + `
        <div class="col-lg-12">
            <div class="box-noticia">
                <img src="${noticia.urlToImage}" alt="">
                <span class="titulo">${noticia.title}</span><br>
                <span class="creditos">${data.toLocaleDateString ()} - 
                    ${noticia.source.name} - 
                    ${noticia.author}</span><br>
                <span class="text">
                ${noticia.content} <a href="${noticia.url}" target="_blank" >Leia mais ...</a>
                </span>
            </div>
            </div>            
        `;
    }

    // Preencher a DIV com o texto HTML
    divTela.innerHTML = texto;
    console.log(texto);
}

function Homepage() {
    let query = 'br';

    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${query}&apiKey=${API_KEY}`);
    xhr.send();

    let divtitulo = document.getElementById('titulo');
    let textotitulo = `<p><font size="5">Top notícias Brasil</font></p>`;
    divtitulo.innerHTML = textotitulo;

}

function executaPesquisa() {
    let query = document.getElementById('txtPesquisa').value;

    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET', `http://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
    xhr.send();

    let divtitulo = document.getElementById('titulo');
    let textotitulo = `<p><font size="5">${query}</font></p>`;
    divtitulo.innerHTML = textotitulo;

}

function executaPesquisa2() {
    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET', `http://newsapi.org/v2/everything?q=esportes&apiKey=${API_KEY}`);
    xhr.send();
    let divtitulo = document.getElementById('titulo');
    let textotitulo = `<p><font size="5">Esportes</font></p>`;
    divtitulo.innerHTML = textotitulo;

}

function executaPesquisa3() {
    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET', `http://newsapi.org/v2/everything?q=tecnologia&apiKey=${API_KEY}`);
    xhr.send();
    let divtitulo = document.getElementById('titulo');
    let textotitulo = `<p><font size="5">Tecnologia</font></p>`;
    divtitulo.innerHTML = textotitulo;

}

function executaPesquisa4() {
    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET', `http://newsapi.org/v2/everything?q=games&apiKey=${API_KEY}`);
    xhr.send();
    let divtitulo = document.getElementById('titulo');
    let textotitulo = `<p><font size="5">Jogos</font></p>`;
    divtitulo.innerHTML = textotitulo;
}

function executaPesquisa5() {
    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET', `http://newsapi.org/v2/everything?q=musica&apiKey=${API_KEY}`);
    xhr.send();
    let divtitulo = document.getElementById('titulo');
    let textotitulo = `<p><font size="5">Musicas</font></p>`;
    divtitulo.innerHTML = textotitulo;
}
window.onload = function() {
    Homepage();
};

document.getElementById('btnPesquisa').addEventListener('click', Homepage);

document.getElementById('esportes').addEventListener('click', executaPesquisa2);

document.getElementById('Tecnologia').addEventListener('click', executaPesquisa3);

document.getElementById('jogos').addEventListener('click', executaPesquisa4);

document.getElementById('musica').addEventListener('click', executaPesquisa5);


document.getElementById('esportes1').addEventListener('click', executaPesquisa2);

document.getElementById('Tecnologia1').addEventListener('click', executaPesquisa3);

document.getElementById('jogos1').addEventListener('click', executaPesquisa4);

document.getElementById('musica1').addEventListener('click', executaPesquisa5);