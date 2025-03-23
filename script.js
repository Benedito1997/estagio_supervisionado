document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("load1");

  button.addEventListener("click", function (event) {
      event.preventDefault();

      button.innerHTML = "<i class='fa fa-circle-o-notch fa-spin'></i> Processando...";
      button.disabled = true;

      setTimeout(() => { //animação de carregamento do botão
          window.open("https://wa.me/5527998018695", "_blank");
          button.innerHTML = "Agende seu Horário"; 
          button.disabled = false;
      }, 2000);
  });
});