// Seleziono contenitore

const contenitore = document.getElementById("main-container");
console.log(contenitore);




// cicliamo le operazioni di creazione e di output
for(let i = 1; i <= 1000; i++) {
    
    // creiamo nuovo elemento
    const quadrato = document.createElement('span');
    // Voglio aggiungere una classe ad ogni span 
    quadrato.classList.add("square");

    // inseriamo il valore all'interno ell'elemento creato
    quadrato.append(i);

    // aggiungiamo al contenitore 'elemento creato
    contenitore.append(quadrato);



    // aggiungiamo la condizione che se i è multiplo di 3, allora invece del numero vedrò scritto FIX
        {
            if (i / 3 === 3)
            console.log("FIX");
        }
}