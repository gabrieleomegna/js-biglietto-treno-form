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
        let ticketPrice = 0.1976 * userKilometers;
        let outputInPage = document.querySelector('div.output');
        outputInPage.innerHTML ='Il prezzo del biglietto è:' + ticketPrice.toFixed(2);
        if (userAge < 18) {
            ticketPrice = ticketPrice - ((ticketPrice / 100) * 17.65);
            outputInPage.innerHTML += '<br>Età minore di 18 anni, ticket ridotto:' + ticketPrice.toFixed(2);
        } else if (userAge >= 65) {
            ticketPrice = ticketPrice - ((ticketPrice / 100) * 53.2);
            outputInPage.innerHTML += '<br>Età maggiore di 65 anni, ticket ridotto:' + ticketPrice.toFixed(2);
        } else {
            outputInPage.innerHTML += '<br>Non sono applicabili riduzioni di prezzo';
        }
    }
)
