const sacolaVazia = document.querySelector('.paginas')
const saloca = document.querySelector('.produto')

const produtos = [
    {
        id: 1,
        name: 'KIT BATONS TERROSOS MATTE',
        img : 'img/BATOM3.jpg',
        preco: "R$ 89,50"
    },
    {
        id: 2,
        name: 'KIT 4 BATONS',
        img : 'img/BATOM4.jpg',
        preco: "R$ 69,50"
    },
    {
        id: 3,
        name: 'HIDRATANTE LABIAL NUDE',
        img : 'img/BATOM3.jpg',
        preco: "R$ 29,50"
    },
    {
        id: 4,
        name: 'BATOM ROSÉ MATTE',
        img : 'img/BATOM4.jpg',
        preco: "R$ 39,50"
    },   
    {
        id: 5,
        name: 'Batom Rose Matte',
        img : 'Batom Rose Matte',
        preco: "R$ 39,50"
    },
    {
        id: 6,
        name: 'Batom Rose Matte',
        img : 'img/BATOM4.jpg',
        preco: "R$ 39,50"
    },
    {
        id: 7,
        name: 'Batom Rose Matte',
        img : 'img/BATOM3.jpg',
        preco: "R$ 39,50"
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




