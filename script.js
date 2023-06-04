
// let cinque = '';

// let numeri= document.getElementById('numeri');


// let timer =  document.getElementById('timer');

// let tempo = 0;

// // recupero il bottone per generare i 5 numeri


// let random_button  = document.getElementById('bottone');


// // al click del bottone genero i 5 numeri 

// random_button.addEventListener('click', function(){
//     for(i=0; i<5; i++){


//         cinque =  parseInt(Math.random()*100) ;  

        

//         numeri.innerHTML += cinque;

        
        
//     }
    
//     timer = setInterval(function(){

//     timer.innerText = tempo;

//     tempo++;
        
//     }, s);
//  });


// FUNZIONE CHE  GENERA I NUMERI CASUALI

function NumeriCasuali(min, max){
    return Math.floor(Math.random() * (max - min + 1 ) + min);
}


// CREO UNA LISTA DOVE INSERIRE I NUMERI CASUALI

let Numeri = [];


// CICLO FOR PER GENERARE 5 NUMERI CASUALI
 
for(let i=0; i<5; i++){

    let numero = NumeriCasuali(1,100);   //RICHIAMO LA FUNZIONE 

    Numeri.push(numero);   //INSERISCO I 5 NUEMRI INELLA LISTA

    
}

document.getElementById('numeri_casuali').innerHTML = Numeri;   //STAMPO



// TEMPO DI 3 SECONDI 
setTimeout(function(){
    document.getElementById('numeri_casuali').innerHTML = '';
    

},3000);


// FUNZIONE PER INSERIRE NUMERI ALL'UTENTE 

function numeri_utente(){

    let utente_numeri=[];

    while(utente_numeri.length < 5){
        let inserimento = parseInt(prompt('inserisci i numeri che ti ricordi'));

        if(!utente_numeri.includes(inserimento)){
            utente_numeri.push(inserimento);
        }
    }
    return utente_numeri;
}


setTimeout(function(){

   let utente_numeri = numeri_utente();
   let punteggio =0;
   let numeri_indovinati=[];

   for(let i=0; i<utente_numeri.length; i++){
        if(Numeri.includes(utente_numeri[i])){
            numeri_indovinati.push(utente_numeri[i]);
            punteggio++;
    }
   }
   document.getElementById('finale').innerHTML= `Hai indovinato ${punteggio} numeri.`

},3100);