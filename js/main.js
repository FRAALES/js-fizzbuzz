// Seleziono contenitore

const contenitore = document.getElementById("main-container");
console.log(contenitore);




// cicliamo le operazioni di creazione e di output
for(let i = 1; i <= 100; i++) {

    // creiamo nuovo elemento
    const quadrato = document.createElement('span');
    // Voglio aggiungere una classe ad ogni span 
    quadrato.classList.add("square");

    // Imposto il testo del quadrato in base al valore corrente
    if (i % 3 === 0 && i % 5 === 0) {
        quadrato.textContent = "fixbux";
        quadrato.classList.add("red");
    } else if (i % 3 === 0) {
        quadrato.textContent = "fix";
        quadrato.classList.add("blue");
    } else if (i % 5 === 0) {
        quadrato.textContent = "bux";
        quadrato.classList.add("yellow");
    } else {
        quadrato.textContent = i;
        quadrato.classList.add("color");
    }

    // aggiungiamo al contenitore elemento creato
    contenitore.append(quadrato);
}
