let numcartas, mesa, mostrar, esconder;
let deck = [];
let test = [];
let random = [];
let recente1 = null;
let recente2 = null;

test = document.querySelectorAll('.cartas');
mesa = document.querySelector('.jogo');
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
    for(let i = 0; i < numcartas; i++ ){
    random[i] = Math.floor(i/2);    
    }
    random.sort(comparador);
    random.sort(comparador);
    for(let i = 0; i < numcartas; i++ ){
    mesa.innerHTML += `<li class="cartas" onclick="revelar1(this)"><img class="parrot p${random[i]}" src="Imgs/parrot${random[i]}.gif"/><img class="back" src="Imgs/back.png"/></li>`;}
}
function revelar1(parent) {
    mostrar = parent.querySelector(".parrot");
    esconder = parent.querySelector(".back");
    mostrar.classList.add('display');
    esconder.classList.add('sumiu');
    if(recente1 === null){
        recente1 = mostrar;
        recente2 = esconder;  } 

    else{
        revelar(parent);
    }
}

function revelar(parent) {
    if(recente1 === null){
        recente1 = mostrar;
        recente2 = esconder;  }  

    mostrar = parent.querySelector(".parrot");
    esconder = parent.querySelector(".back");
    mostrar.classList.add('display');
    esconder.classList.add('sumiu');
    
    
    if(mostrar.classList.value === recente1.classList.value){
        recente1 = null;
        recente2 = null;
    }
    else {
    setTimeout(hide, 1000); 
   
    }
   }

function hide() { 
mostrar.classList.remove('display');
esconder.classList.remove('sumiu');
recente1.classList.remove('display');
recente2.classList.remove('sumiu');
recente1 = null;
recente2 = null;

}

function comparador() { 
	return Math.random() - 0.5; 
}
    //const ultima = document.querySelector(".parrot .display");
    
   // if ( ultima !== null){
    //rango.classList.remove("selecionado");}