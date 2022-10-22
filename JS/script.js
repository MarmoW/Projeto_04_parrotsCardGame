let numcartas, mesa, mostrar, esconder,cobrejogo,reiniciar, timer1, codtimer, flipador1, flipador2;
let deck = [];
let random = [];
let recente1 = null;
let recente2 = null;
let jogadas = 0;
let segundos = 00;
cobrejogo = document.querySelector('.cobrejogo'); //pega a div que cobre a tela enquanto a função não acabou de rodar pra evitar multiplos clicks
mesa = document.querySelector('.jogo');           //pega a div da area onde as cartas ficam


comecar();

function comecar() {
numcartas = prompt("Escolha o número de cartas desejado, o número deve ser entre 4 e 14")
if(numcartas >= 4 && numcartas <= 14){
    if(numcartas%2 == 1){
        //alert("O número precisa ser par."); 
        comecar();    
    }
        else {
           // alert("O jogo vai começar");
            codtimer = setInterval(timer2, 1000); //timer começa
            darcartas();
         } 
        
    }
    else {
        //alert("O número precisa ser entre 4 e 14")
        comecar();
    }
}

function darcartas() { //coloca as cartas na mesa
    for(let i = 0; i < numcartas; i++ ){
    random[i] = Math.floor(i/2);    
    }
    random.sort(comparador);
    random.sort(comparador);
    for(let i = 0; i < numcartas; i++ ){
    mesa.innerHTML += `<li class="cartas" onclick="revelar1(this)"><img class="parrot p${random[i]}" src="Imgs/parrot${random[i]}.gif"/><img class="back" src="Imgs/back.png"/></li>`;}
}
function revelar1(parent) { 
    cobrejogo.classList.add('on');
    mostrar = parent.querySelector(".parrot");
    esconder = parent.querySelector(".back");
    flip();
    jogadas++;
    if(recente1 === null){ // revelar a primeira carta
        recente1 = mostrar;
        recente2 = esconder;
        cobrejogo.classList.remove('on');
      } 

    else{
        revelar(parent); // revelar a segunda carta
    }
}
function flip(){ // revela a carta *redundante por enquanto
    mostrar.classList.add('display');
    esconder.classList.add('sumiu');
    mostrar.parentNode.classList.add('flipada');
    

}
function revelar(parent) { // revela carta e se não tiver nada nas cartas anteriores adiciona antes de guardar a carta clicada agora
    if(recente1 === null){
        recente1 = mostrar;
        recente2 = esconder;
        flipador1 = flipador2;
     }  

    mostrar = parent.querySelector(".parrot"); 
    esconder = parent.querySelector(".back");
    flip();
    
    
    if(mostrar.classList.value === recente1.classList.value){
        recente1 = null; //limpa a carta guardada antes caso acerte
        recente2 = null; 
        flipador1 = null;
        flipador2 = null;
        cobrejogo.classList.remove('on');
        
        if(document.querySelectorAll('.display').length == numcartas){ //encerra o jogo quando revelar todas cartas
            
            alert(`Você venceu o jogo em ${jogadas} jogadas e seu tempo foi ${Math.floor(segundos/60)}:${segundos%60}`);
            clearInterval(codtimer); //timer para
            recomecar();
            
        }
    }
    else {
    setTimeout(hide, 1000); 
    
    }
   }
function recomecar() {
    reiniciar = prompt("Gostaria de jogar outra partida?")
    if(reiniciar === 'sim'){
        mesa.innerHTML = "";// limpa a mesa
        random = [];        // limpa o array random
        segundos = 0;       // zera o timer
        comecar();
    }
    else if(reiniciar ==='não'){
            }
    else {
        recomecar();
    }
}
function hide() { //esconde a carta
mostrar.classList.remove('display');
esconder.classList.remove('sumiu');
recente1.classList.remove('display');
recente2.classList.remove('sumiu');
recente1.parentNode.classList.remove('flipada');
mostrar.parentNode.classList.remove('flipada');
recente1 = null;
recente2 = null;

cobrejogo.classList.remove('on');

}

function comparador() { //função pra randomizar o array com as cartas
	return Math.random() - 0.5; 
}
   
function timer2() { //função do timer
    segundos++;
    timer1 = document.querySelector(".timer");
    timer1.innerHTML = `${Math.floor(segundos/60)}:${segundos%60}`;
      
}