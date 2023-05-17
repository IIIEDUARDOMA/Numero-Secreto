function verificaChuteValido(chute) {
   const numero = +chute;

   if (chuteValido(numero)) {
      if (chute.toUpperCase() === "GAME OVER") {
         document.body.innerHTML = `
            <h2>Game Over!!!</h2>
            <h3>Pressione o botão para jogar novamente</h3>
            <button id="btn" class="btn" >Jogar novamente</button>
            `;
         document.body.style.backgroundColor = "black";
      } else {
         elementoChute.innerHTML += "<div>Valor Inválido</div>";
      }
   }
   if (verificaNumeroMenorOuMaior(numero)) {
      elementoChute.innerHTML += `<div>
            Valor inválido: O numero tem que ser entre ${menorValor} e $
            {maiorValor}
         </div>`;
      return;
   }
   if (numero === numeroSecreto) {
      document.body.innerHTML = `
      <h2><strong>Parabéns!!</strong>Você acertou o número!</h2>
      <h3>O número secreto era ${numeroSecreto}</h3>
      <button id="btn" class="btn"><i class="fa-regular fa-circle-play" style="color: #050561;"></i> Jogar novamente</button>
      `;
   } else if (numero > numeroSecreto) {
      elementoChute.innerHTML += `
      <div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>
      `;
   } else {
      elementoChute.innerHTML += `
      <div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>
      `;
   }
}

function chuteValido(numero) {
   return Number.isNaN(numero);
}

function verificaNumeroMenorOuMaior(numero) {
   return numero < menorValor || numero > maiorValor;
}

document.body.addEventListener("click", (e) => {
   if (e.target.id == "btn") {
      window.location.reload();
   }
});
