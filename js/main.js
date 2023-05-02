// Seleziono contenitore

const contenitore = document.getElementById("main-container");




// cicliamo le operazioni di creazione e di output
for(let i = 0; i <= 1000; i++) {
    
    // creiamo nuovo elemento
    const quadrato = document.createElement('span');

    // inseriamo il valore all'interno ell'elemento creato
    quadrato.append(i);

    // aggiungiamo al contenitore 'elemento creato
    contenitore.append(quadrato)
}