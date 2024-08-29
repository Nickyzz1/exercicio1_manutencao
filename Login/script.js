var el = document.getElementById('alerta');

function login() {
  var nome = $("#nome").val();
  var senha = $("#senha").val();

  if (nome && senha && nome === "admin" && senha === "admin") {
    const user = {
      name: nome,
      dataEntrada: new Date(),
      id: Math.floor(Math.random() * 100000),
    };

    localStorage.setItem("usuario", JSON.stringify(user));

    window.location.href = "../Loja/loja.html";
  } else {
      renderThats(el);
  }
}

function exit() {

  el.style.display = "none";

}

function renderThats(el) {
  if (el.style.display === "none" || el.style.display === "") {
    el.style.display = "block";
  }
}
