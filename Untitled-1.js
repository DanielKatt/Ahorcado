// Variables
const palabraJuego = "teclado";
let palabraTamaño = palabraJuego.length;
let letraEvaluar   = "";
//let erroresMaximo = palabraJuego.length;
const erroresMaximo = 6;
 
let intentos = 0;
let errores = 0;
  // DOM ( elementos de HTML )
 
  let input = document.getElementById("input-letra");
  let boton = document.getElementById("evaluarletra");
 
  jugada()
 
function jugada() {
  boton.addEventListener("click",()=>{
    if (errores < erroresMaximo) {
      letraEvaluar = input.value;
      if ( letraEvaluar.length == 1 ) {
     
        if ( palabraJuego.includes(letraEvaluar) ) {
          alert("si tiene la letra")
        }else{
          errores ++;
          alert("no la tiene "+ errores)
        }
        intentos ++;
      }else{
        alert("Porfa escribe solo una letra jeje");
      }
    }else{
      alert("je murio")
    }
  });  
}
 
