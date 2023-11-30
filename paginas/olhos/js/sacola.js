const sacolaVazia = document.querySelector('.paginas')
const saloca = document.querySelector('.produto')

const produtos = [
    {
        id: 1,
        name: 'Deliniador lápis preto',
        img : 'img/delineador.png',
        preco: "R$ 29,50"
    },
    {
        id: 2,
        name: 'Sombra 4 cores terrosos',
        img : 'img/sombra.png',
        preco: "R$ 69,50"
    },
    {
        id: 3,
        name: 'Rímel mais volume rosé',
        img : 'img/paleta-rimel.png',
        preco: "R$ 35,50"
    },
    {
        id: 4,
        name: 'Rímel framboesa',
        img : 'img/rimel.png',
        preco: "R$ 19,99"
    },   
    {
        id: 5,
        name: 'Rímel transparente aumenta cílios',
        img : 'img/serum.png',
        preco: "R$ 22,50"
    },
    {
        id: 6,
        name: 'Batom Rose Matte',
        img : 'img/serum.png',
        preco: "R$ 39,50"
    },
    {
        id: 7,
        name: 'Batom Rose Matte',
        img : 'img/rimel.png',
        preco: "R$ 39,50"
    },

    {
        id: 8,
        name: 'Kit Gloss Rosé Iluminador',
        img : 'img/rimel.png',
        preco: "R$ 110,50"
    },

    {
        id: 9,
        name: 'Batom Rose Matte',
        img : 'img/paleta-rimel.png',
        preco: "R$ 39,50"
    },
    {
        id: 10,
        name: 'Deliniador lápis preto',
        img : 'img/delineador.png',
        preco: ">R$ 89,50"
    }

]

function adicionarItemSacola(idProduto){
    console.log(idProduto)
    localStorage.setItem("sacola", {})
    for (let i = 0; i < produtos.length; i++) {
        if(produtos[i].id == idProduto){
            const produto = produtos[i]
            console.log(produto)
            //salvar no local storage os pacotes
            localStorage.setItem('sacola', JSON.stringify(produto))
            
        } 
    }
    criarCarrinho(idProduto)
}

    function criarCarrinho(idProduto){
        showModal()
    sacolaVazia.style.display = 'none'
    saloca.style.display = 'flex'
    //buscar no local storage os produtos da sacolas
    const produtos = JSON.parse(localStorage.getItem('sacola'))
    console.log(produtos)
    //criar os pacotes
    const produto = createSacola(idProduto,produtos)
    //adicionar os pacotes na tela
    saloca.appendChild(produto)
}

function createSacola(idProduto,produto){
    const pacoteDiv = document.createElement('div')
    const idsacola = idProduto + 'saloca'
    pacoteDiv.classList.add('saloca')
    pacoteDiv.id = idsacola
    pacoteDiv.innerHTML = `
        <img class="prod-img" src="${produto.img}" alt="">
        <div>
        <p class="name">${produto.name}</p>
        <p class="preco">${produto.preco}</p>
        </div>
        <button id='${idsacola}' onclick="excluirProduto(this.id)" >X</button>
    `
    return pacoteDiv
 }

 function excluirProduto(idProduto){
    const pacote = document.getElementById(idProduto)
    pacote.remove()
    if(saloca.children.length === 2){
        saloca.style.display = 'none'
        sacolaVazia.style.display = 'flex'
    }
}




