//Conectar com a API utilizando FETCH

fetch('dados.json').then(resposta => resposta.json()).then(corpo => {
    console.log(corpo)

    document.getElementById('imagem').innerHTML =corpo.image;
    document.getElementById('nome').innerHTML =corpo.nome;
    document.getElementById('titulo').innerHTML =corpo.titulo;
    document.getElementById('estilo').innerHTML =corpo.estilo;
    document.getElementById('preco').innerHTML =corpo.preco
    

})