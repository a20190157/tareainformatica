let fin = parseInt(prompt("Cuántos elementos tiene el arreglo?"));
    var d = [];
    for(let e=0; e<=fin-1;e++){
        var ele = prompt("Ingresa el elemento " + e);
        d[e]=ele;
    }
    for(let f=0; f<=fin-1;f++){
        console.log(d[f]);
    }
