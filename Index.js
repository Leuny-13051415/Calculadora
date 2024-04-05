const Pantalla = document.querySelector(".Pantalla");
 const botones = document.querySelectorAll(".btn"); 

 botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

if (boton.id === "c") {

    Pantalla.textContent = "0";
    return;
}

    
if (boton.id === "borrar") {
   
    if (Pantalla.textContent.length === 1 || Pantalla.textContent === "ASÍ NO ANORMAL!") {
        Pantalla.textContent ="0";
    }
    else {
        Pantalla.textContent = Pantalla.textContent.slice(0,-1)
    }
    return;
}

if (boton.id === "Igual") {
 
    try {
    Pantalla.textContent = eval(Pantalla.textContent);
  } 
  catch {
        Pantalla.textContent = "ASÍ NO ANORMAL!"
 }
    return;
}


         if (Pantalla.textContent === "0" || Pantalla.textContent === "ASÍ NO ANORMAL!") {
            Pantalla.textContent = botonApretado;
         }
    
       else {

        Pantalla.textContent += botonApretado;

       }
      


    })
 });