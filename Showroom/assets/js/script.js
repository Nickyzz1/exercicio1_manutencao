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

        const imagem = document.createElement("img");
        imagem.src = produto.imagem;
        imagem.className = "card-img-top";

        const disponivel = document.createElement("div");
        disponivel.className = "disponivel";
        disponivel.style.margin= '20px'
        if(produto.status == 'true')
        {
           disponivel.style.backgroundColor = "green"
           disponivel.textContent = "Disponível"
        }
        else{

          disponivel.style.backgroundColor = "red"
           disponivel.textContent = "Indiponível"
        }

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.textContent = produto.descricao;

        const cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.textContent = "Preço: $" + produto.preco.toFixed(2);


        cardBody.appendChild(cardTitle); // criar uma coisa dentro de outra
        cardBody.appendChild(cardText);

        card.appendChild(disponivel);
        card.appendChild(imagem);
        card.appendChild(cardBody);
        

        produtosContainer.appendChild(card);
      });
    })

    .catch((error) => console.error("Erro ao carregar o arquivo JSON", error)); // como se fosse um else

});