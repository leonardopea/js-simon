let cinque = '';

let numeri= document.getElementById('numeri');


let timer =  document.getElementById('timer');

let tempo = 0;

// recupero il bottone per generare i 5 numeri


let random_button  = document.getElementById('bottone');


// al click del bottone genero i 5 numeri 

random_button.addEventListener('click', function(){
    for(i=0; i<5; i++){


        cinque =  parseInt(Math.random()*100) ;  

        

        numeri.innerHTML += cinque;

        
        
    }
    
    timer = setInterval(function(){

    timer.innerText = tempo;

    tempo++;
        
    }, s);
});


