document.addEventListener("DOMContentLoaded", function () {
  fetch("/Dados/loja.json") //ele pega o json
    .then((response) => response.json()) // ele le o aquivo e escreve no json
    .then((data) => { // ele atribiu a data
      console.log(data);
      produtos = data;
      const produtosContainer =
        document.getElementById("produtos-container");

      produtos.forEach((produto, index) => {  // criando html em js
        const card = document.createElement("div");
        card.className = "card";
        card.style.width = "100px";
        card.style.marginRight = "10px";
        card.style.objectFit = 'cover'
        

        const imagem = document.createElement("img");
        imagem.src = produto.imagem;
        imagem.className = "card-img-top";
        imagem.style.width = '90%'

        const disponivel = document.createElement("div");
        disponivel.className = "disponivel";
        if(produto.status == 'true')
        {
           disponivel.style.backgroundColor = "green"
        }
        else{

          disponivel.style.backgroundColor = "red"
        }

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.textContent = produto.descricao;

        const cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.textContent = "Preço: $" + produto.preco.toFixed(2);

        const btnAdicionarAoCarrinho = document.createElement("a");
        btnAdicionarAoCarrinho.href = "#";
        btnAdicionarAoCarrinho.className =
          "btn btn-primary btn-adicionar-ao-carrinho";
        btnAdicionarAoCarrinho.textContent = "Adicionar ao Carrinho";
        btnAdicionarAoCarrinho.setAttribute("data-indice", index);

        cardBody.appendChild(cardTitle); // criar uma coisa dentro de outra
        cardBody.appendChild(cardText);
        cardBody.appendChild(btnAdicionarAoCarrinho);

        card.appendChild(disponivel);
        card.appendChild(imagem);
        card.appendChild(cardBody);
        

        produtosContainer.appendChild(card);
      });
    })

    .catch((error) => console.error("Erro ao carregar o arquivo JSON", error)); // como se fosse um else

  $("#produtos-container").on(
    "click",
    ".btn-adicionar-ao-carrinho",
    function () {
      const indexDoProduto = $(this).data("indice");
      const produtoSelecionado = produtos[indexDoProduto];
      let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
      carrinho.push(produtoSelecionado);
      localStorage.setItem("carrinho", JSON.stringify(carrinho));
    }
  );
});