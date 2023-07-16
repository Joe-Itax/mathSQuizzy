const toggleBtn = document.getElementById("toggleBtn");
const body = document.querySelector("body");
const boxMain = document.querySelectorAll(".boxMain");
const numerotationQuesion = document.querySelectorAll(".numerotationQuesion");

const userName = document.querySelector('.userName');
const radioBtn = document.querySelectorAll("input[type='radio']");

toggleBtn.onchange = function() {
  toggleBtn.classList.toggle('active');
  body.classList.toggle('bodyActive');
  boxMain.forEach(function(element) {
    element.classList.toggle('boxMainActive');
  })

  radioBtn.forEach(function(element) {
    element.classList.toggle('radioBtnActive');
  })

  numerotationQuesion.forEach(function(element) {
    element.classList.toggle('numerotationQuesionActive');
  })
  userName.classList.toggle('userNameActive');
}
