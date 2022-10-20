let numcartas, mesa;
let deck = [];
let test = [];
test = document.querySelectorAll('.cartas')
mesa = document.querySelector('.jogo')
//<li class="cartas"><img src="Imgs/back.png"/></li>

comecar();
function comecar() {
numcartas = prompt("Escolha o número de cartas desejado, o número deve ser entre 4 e 14")
if(numcartas >= 4 && numcartas <= 14){
    if(numcartas%2 == 1){
        alert("O número precisa ser par."); 
        comecar();    
    }
        else {
            alert("O jogo vai começar");
            darcartas();
         } 
        
    }
    else {
        alert("O número precisa ser entre 4 e 14")
        comecar();
    }
}

function darcartas() {
    for(let i = 0; i < numcartas; i++ )
    mesa.innerHTML += `<li class="cartas"><img src="Imgs/back.png"/></li>`;
}