const menu = document.getElementById("menu")
const carrinhoBtn = document.getElementById("carrinho-btn")
const carrinhoModal = document.getElementById("carrinho-modal")
const itemCarrinho = document.getElementById("itens-carrinho")
const carrinhoTotal = document.getElementById("carrinho-total")
const finalizarBtn = document.getElementById("finalizar-btn")
const fecharModalBtn = document.getElementById("fechar-modal-btn")
const contadorItem = document.getElementById("contador-item")
const endereco = document.getElementById("endereco")
const atencaoEndereco = document.getElementById("atencao-endereco")



let carrinho = [];



//ABRIR MODAL CARRINHO
carrinhoBtn.addEventListener("click", function(){
    carrinhoAtualizado()
    carrinhoModal.style.display = "flex"
})



//FECHAR MODAL CLICANDO FORA E/OU NO BOTAO FECHAR
carrinhoModal.addEventListener("click", function(event){
    if(event.target === carrinhoModal){
        carrinhoModal.style.display = "none"
    }
})

fecharModalBtn.addEventListener("click", function(){
    carrinhoModal.style.display = "none"
})



//MENU
menu.addEventListener("click", function(event){
    let addAoCarrinho = event.target.closest("#add-ao-carrinho")
        if(addAoCarrinho){
            const nome = addAoCarrinho.getAttribute("data-name")
            const preco = parseFloat(addAoCarrinho.getAttribute("data-price"))

            
            addCarrinho(nome, preco)
        }
})



//FUNÇÃO PARA ADD ITENS AO CARRINHO
function addCarrinho(nome, preco){
    const itemExistente = carrinho.find(item => item.nome === nome)

    if(itemExistente){
        //SE O ITEM JÁ EXISTIR, QUANTIDADE AUMENTA +1
        itemExistente.quantidade += 1;
    } else{
        
        carrinho.push({
            nome,
            preco,
            quantidade: 1,
        })
    }

    carrinhoAtualizado()
}



//ATUALIZA O CARRINHO
function carrinhoAtualizado(){
    itemCarrinho.innerHTML = ``;
    let total = 0;

    carrinho.forEach(item => {
        const elementosCarrinho = document.createElement("div");
        itemCarrinho.classList.add("flex", "justify-between", "mb-4", "flex-col")

        elementosCarrinho.innerHTML = `
            <div class="flex item-center justify-between">
                <div>
                    <p class="font-bold">${item.nome}</p>
                    <p>Quantidade: ${item.quantidade}</p>
                    <p class="font-medium mb-6">R$ ${item.preco.toFixed(2)}</p>
                </div>

                <button>Remover</button>
            </div>
        `

        total += item.preco * item.quantidade;

        itemCarrinho.appendChild(elementosCarrinho)

    })

    carrinhoTotal.textContent = total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });


    contadorItem.innerHTML = carrinho.length;
    
}