/**Descrizione:**
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
**NOTA**: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
**BONUS:**
- Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
- Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
Consigli del giorno:
>
> - Pensate prima in italiano.
> - Dividete in piccoli problemi la consegna.
> - Individuate gli elementi di cui avete bisogno per realizzare il programma.
> - Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"*/

let arrayNumeriCasuali = [];
let numeriInseritiHtml = document.getElementsByClassName('insertNumber');
const istruzione = document.getElementById('istruzione');
let counter = 30;
const timeout = setInterval(countdown, 1000);
const timer = document.getElementById("timer");
const button = document.getElementById('btnSubmit');
let numeriCorretti = [];
const risultato = document.getElementById('risultato')

for (let i = 0; arrayNumeriCasuali.length < 5; i++){
    let numCasuale= Math.floor((Math.random() * 99) + 1);
    if(!arrayNumeriCasuali.includes(numCasuale)){
        arrayNumeriCasuali.push(numCasuale);
    }
    
}
for (let j = 0; j< arrayNumeriCasuali.length; j++){
         numeriInseritiHtml[j].innerHTML=arrayNumeriCasuali[j];    
}

function countdown() {
    timer.innerHTML = counter;
    if(counter === 0){
        clearInterval(timeout);
        for (let k = 0; k < numeriInseritiHtml.length ; k++){
            numeriInseritiHtml[k].innerHTML='<input type="number" name="number" class="numeriScelti" min="1" max="99" required />'
        } 
        istruzione.innerText = "inserisci tutti i numeri che ricordi (l'ordine non è importante)"
        button.style.visibility = 'visible';
    } else {
        counter--
    }
}

button.addEventListener("click", function(event){
    event.preventDefault()
    numeriScelti= document.querySelectorAll('.numeriScelti');
    button.style.visibility = 'hidden';
    for (let a = 0; a < numeriInseritiHtml.length; a++){
        for (let b = 0; b < arrayNumeriCasuali.length; b++){
            if(parseInt(numeriScelti[a].value) === arrayNumeriCasuali[b]){
                numeriCorretti.push(arrayNumeriCasuali[b])
            } 
        }
    }
    risultato.innerText = "Hai indovinato "+numeriCorretti.length+" numeri! ("+numeriCorretti.join()+")" 
})


