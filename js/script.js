// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.1976 € al km)
// va applicato uno sconto del 17.65% per i minorenni
// va applicato uno sconto del 53.27% per gli over 65.


const buttonElement = document.querySelector('button');

buttonElement.addEventListener ('click', 
    function () {
        const userKilometers = parseFloat(document.querySelector('input#kilometers').value);
        // console.log(userKilometers);
        const userAge = parseFloat (document.querySelector('input#user-age').value);
        
    }
)
