const menorValor = 1;
const maiorValor = 1000;

const numeroSecreto = geraNumeroAletorio();

function geraNumeroAletorio() {
   return parseInt(Math.random() * maiorValor + 1);
}

console.log("Numero Secreto é:", numeroSecreto);

const elementoMenorValor = document.getElementById("menor-valor");
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById("maior-valor");
elementoMaiorValor.innerHTML = maiorValor;
