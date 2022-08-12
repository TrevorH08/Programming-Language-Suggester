// Business Logic

function questionSet() {
  const nameInput = document.getElementById("nameInput").value;
  const userField = document.getElementById("userField").value;
  const userClass = document.getElementById("userClass").value;
  const osInput = document.querySelector("input[name='OS']:checked").value;
  const workplaceInput = document.querySelector("input[name='workplace']:checked").value;

  document.querySelector("span#name1a").innerText = nameInput;
  document.querySelector("span#field1a").innerText = userField;
  document.querySelector("span#class1a").innerText = userClass;
  document.querySelector("span#os1a").innerText = osInput;
  document.querySelector("span#workplace1a").innerText = workplaceInput;
  
}

function setFormSubmissionEventHandler(event) {
  event.preventDefault();
  questionSet();
  outcome.setAttribute("class", "hidden")
  invalid.setAttribute("class", "hidden")
}

window.addEventListener("load", function(event) {
  let form = document.getElementById("questionSet");
  form.addEventListener("submit", setFormSubmissionEventHandler)
});