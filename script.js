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

/*let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);
const question = document.querySelectorAll('.question');
question.innerHTML = num1 + num2;
document.getElementById('form').addEventListener('submit', (event) => {
  const userName = document.getElementById('userName').value;

  let num1 = Math.floor(Math.random() * 10);
  let num2 = Math.floor(Math.random() * 10);

  event.preventDefault();
  console.log(userName);
})
*/

let question1 = document.querySelectorAll('.question1');
let question2 = document.querySelectorAll('.question2');
let question3 = document.querySelectorAll('.question3');
let question4 = document.querySelectorAll('.question4');
let question5 = document.querySelectorAll('.question5');



const genererNouvelleQuestion = (ques) => {
  let num1 = Math.floor(Math.random() * 10);
  let num2 = Math.floor(Math.random() * 10);
  let trueAnswer;
  let signOperatorRandom = Math.floor(Math.random() * 4);
  const signOperator = ['+', '-', '*', '/'];
  const signReturn = signOperator[signOperatorRandom];
  switch (signReturn) {
    case '+':
      for (let i = 0; i < ques.length; i++) {
        ques[i].innerHTML = `${num1} + ${num2} = ${num1 + num2}`;
        trueAnswer = `${num1 + num2}`;
      }

      break;
    case '-':
      for (let i = 0; i < ques.length; i++) {
        ques[i].innerHTML = `${num1} - ${num2} = ${num1 - num2}`;
      }
      break;
    case '/':
      for (let i = 0; i < ques.length; i++) {
        ques[i].innerHTML = `${num1} / ${num2} = ${num1 / num2}`;
      }
      break;
    case '*':
      for (let i = 0; i < ques.length; i++) {
        ques[i].innerHTML = `${num1} * ${num2} = ${num1 * num2}`;
      }
      break;

    default:
      trueAnswer = 'Error';
      break;
  }

}

genererNouvelleQuestion(question1);
genererNouvelleQuestion(question2);
genererNouvelleQuestion(question3);
genererNouvelleQuestion(question4);
genererNouvelleQuestion(question5);


/*Fonction pour me génerer des réponses de supposition */
/*
let ansSupo1_Qcm1 = document.querySelectorAll('.ansSupo1-Qcm1');
let ansSupo2_Qcm1 = document.querySelectorAll('.ansSupo2-Qcm1');
let ansSupo3_Qcm1 = document.querySelectorAll('.ansSupo3-Qcm1');
let ansSupo4_Qcm1 = document.querySelectorAll('.ansSupo4-Qcm1');
let ansSupo5_Qcm1 = document.querySelectorAll('.ansSupo5-Qcm1');

const genererNouvelleReponseSupposer = (ansSupo) => {
  switch (signReturn) {
    case '+':
      for (let i = 0; i < ansSupo.length; i++) {
        trueAnswer = `${num1 + num2}`;
        ansSupo[i].innerHTML = trueAnswer;
      }

      break;
    case '-':
      for (let i = 0; i < ansSupo.length; i++) {
        trueAnswer = `${num1 - num2}`;
        ansSupo[i].innerHTML = trueAnswer;
      }
      break;
    case '*':
      for (let i = 0; i < ansSupo.length; i++) {
        trueAnswer = `${num1 * num2}`;
        ansSupo[i].innerHTML = trueAnswer;
      }
      break;
    case '/':
      for (let i = 0; i < ansSupo.length; i++) {
        trueAnswer = `${num1 / num2}`;
        ansSupo[i].innerHTML = trueAnswer;
      }
      break;

    default:
      trueAnswer = 'Error';
      break;
  }
}

genererNouvelleReponseSupposer(ansSupo1_Qcm1);
*/
