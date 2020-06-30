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

}
var query = ' ';

function Homepage() {
    query = 'br';
    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${query}&apiKey=${API_KEY}`);
    xhr.send();

    let divtitulo = document.getElementById('titulo');
    let textotitulo = `<p><font size="5">Top notícias Brasil</font></p>`;
    divtitulo.innerHTML = textotitulo;

}

function executaPesquisa() {
    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET', `http://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
    xhr.send();

    let divtitulo = document.getElementById('titulo');
    let textotitulo = `<p><font size="5">${query}</font></p>`;
    divtitulo.innerHTML = textotitulo;
}

function executaPesquisaa() {
    query = document.getElementById('txtPesquisa').value;
    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET', `http://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
    xhr.send();

    let divtitulo = document.getElementById('titulo');
    let textotitulo = `<p><font size="5">${query}</font></p>`;
    divtitulo.innerHTML = textotitulo;
}

function executaPesquisa2() {
    query = "Esportes";
    executaPesquisa();
}

function executaPesquisa3() {
    query = "Tecnologia";
    executaPesquisa();
}

function executaPesquisa4() {
    query = "Jogos";
    executaPesquisa();
}

function executaPesquisa5() {
    query = "Musicas";
    executaPesquisa();

}

window.onload = function() {
    document.getElementById('btnPesquisa').addEventListener('click', executaPesquisaa);

    document.getElementById('esportes').addEventListener('click', executaPesquisa2);

    document.getElementById('Tecnologia').addEventListener('click', executaPesquisa3);

    document.getElementById('jogos').addEventListener('click', executaPesquisa4);

    document.getElementById('musica').addEventListener('click', executaPesquisa5);

    document.getElementById('esportes1').addEventListener('click', executaPesquisa2);

    document.getElementById('Tecnologia1').addEventListener('click', executaPesquisa3);

    document.getElementById('jogos1').addEventListener('click', executaPesquisa4);

    document.getElementById('musica1').addEventListener('click', executaPesquisa5);

    // document.getElementById('salvar').addEventListener('click', );
    Homepage();
    // mostraDados();

    document.getElementById('salvaMenu').addEventListener('click', pegaDados);

    document.getElementById('exibir').addEventListener('click', mostraDados);


    // console.log(JSON.parse(localStorage.getItem('data')));

    console.log(localStorage.data);


};

var dados = [];
if (localStorage.getItem('data') != null) dados = JSON.parse(localStorage.getItem('data'));

function pegaDados() {
    JSON.parse(dados.push({ menu: tituloMenu.value, pesquisa: tituloPesquisa.value }));
    localStorage.setItem('data', JSON.stringify(dados));

}

var teste = localStorage.getItem('data');

function mostraDados() {

    let divTopicos = document.getElementById('sidebar');

    let itenNovo = '';
    for (i = 0; i < localStorage.length; i++) {
        itenNovo = itenNovo + `
   
    <nav class="sidebar" id="">
    <ul class="nav flex-column">
     <li class="nav-item">
         <a class="nav-link" href="#" id="menu${i}">
             <font size="7" color="white">${JSON.parse(teste)[i].menu}</font>
         </a>
     </li>
     <li class="nav-item">
         <a class="nav-link" onclick="query = JSON.parse(teste)[${i}].pesquisa; executaPesquisa();" href="#" id="pesquisa${i}">
             <font size="6" color="white">${JSON.parse(teste)[i].pesquisa}</font>
         </a>
     </li>
     </ul>
     </nav>`
        divTopicos.innerHTML = itenNovo;

    }
}