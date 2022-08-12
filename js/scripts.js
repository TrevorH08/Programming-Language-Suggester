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
  
  console.log(workplaceInput);
}

function setFormSubmissionEventHandler(event) {
  event.preventDefault();
  questionSet();
  const outcome1 = document.getElementById("outcome1");
  const outcome2 = document.getElementById("outcome2");
  const outcome3 = document.getElementById("outcome3");
  const invalid = document.getElementById("invalid");

  outcome1.setAttribute("class", "hidden")
  outcome2.setAttribute("class", "hidden")
  outcome3.setAttribute("class", "hidden")
  invalid.setAttribute("class", "hidden")


  if (userField === "Game Development", workplaceInput === "Bungie") {
    outcome1.removeAttribute("class");
  } else if (userField === "Web and App Development", userField === "Software Engineer", workplaceInput === "Google", workplaceInput === "Apple") {
    outcome2.removeAttribute("class")
  } else (userField === "Data Science", userField === "Learning For Fun") 
    outcome3.removeAttribute("class");
}


window.addEventListener("load", function(event) {
  let form = document.getElementById("questionSet");
  form.addEventListener("submit", setFormSubmissionEventHandler)
  });
