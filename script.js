//Projet, Quizz Mathématique
/*
function quizzMath() {
  let pointTotal = 0;
  let phraseFinal = '';
  for (let i = 1; i <= 10; i++) {
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    let trueAnswer;
    let signOperatorRandom = Math.floor(Math.random() * 3);
    const signOperator = ['+', '-', '*', '/'];
    const signReturn = signOperator[signOperatorRandom];
    switch (signReturn) {
      case '+':
        trueAnswer = num1 + num2;
        break;
      case '-':
        trueAnswer = num1 - num2;
        break;
      case '*':
        trueAnswer = num1 * num2;
        break;
      case '/':
        trueAnswer = num1 / num2;
        break;

      default:
        trueAnswer = 'Error';
        break;
    }
    let question = `${num1} ${signReturn} ${num2}`;
    let userAns = parseInt(prompt(`Question N°${i}: \n${question}`));
    if (trueAnswer === userAns) {
      alert('Correct');
      pointTotal += 1;
    } else {
      alert('Incorrect');
    }
  }

  switch (pointTotal) {
    case 0:
      phraseFinal = `Niveau: Vous devez reprendre l'école primaire.`;
      break;
    case 1:
      phraseFinal = `Niveau: Travailler encore plus.`;
      break;
    case 2:
      phraseFinal = `Niveau: Encore un peu d'effort.`;
      break;
    case 3:
      phraseFinal = `Niveau: Pas mal.`;
      break;
    case 4:
      phraseFinal = `Niveau: Felicitations.`;
      break;
    default:
      phraseFinal = `Niveau: Une erreur s'est produite, veuillez nous excuser.`;
      break;
  }
  console.log(`Total de ${pointTotal} point(s)/10`);
  console.log(phraseFinal);
}
console.log(quizzMath());
*/
