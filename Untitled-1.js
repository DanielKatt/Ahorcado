let words = ["violeta", "gato", "perro"];
let word = words[Math.floor(Math.random()*words.length)];


const wordSplit = word.split("");

let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

let letras = word.length;

while (letras > 0) {
      (answerArray.join(" "));
      let attempt = prompt("Adivina una letra");
      if (attempt === null) {
        break;
      } else if (attempt.length !== 1) {
        alert("Por favor escribe una sola letra");
      } else {
        for (let x = 0; x < word.length; x++) {
        if (word[x] === attempt) {
        answerArray[x] = attempt;
        letras--;
          }
        }
      }
    }

alert(`¡Adivinaste! la palabra era ${word}`)
