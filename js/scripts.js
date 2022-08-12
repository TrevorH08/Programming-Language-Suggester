// Business Logic

const lang1Description = "C++ is primarily used in Game Development. It is the most widely used language in that regard. The language is also used for GUI based applications, operating systems, and many other cases."
const lang2Description = "C# is used for a wide range of things. Such as developing web applications and services, desktop applications, and it is also used to make games in the Unity engine."
const lang3Description = "JavaScript is mainly used for adding more interactive and animated behavior to websites, building servers, creating apps, and even game development."
const lang1 = "C++"
const lang2 = "C#"
const lang3 = "JavaScript"

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
  const outcome = document.getElementById("outcome");
  const invalid = document.getElementById("invalid");
  const workplaceInput = document.querySelector("input[name='workplace']:checked").value;
  const osInput = document.querySelector("input[name='OS']:checked").value;


  outcome.setAttribute("class", "hidden")
  invalid.setAttribute("class", "hidden")


  if (workplaceInput === "Bungie", userField === "Game Development") {
    document.querySelector("span#language").innerText = lang1
    document.querySelector("span#languageDescription").innerText = lang1Description
    outcome.removeAttribute("class");
  } else if (userField === "Web and App Development", userField === "Software Engineer", osInput === "Windows", workplaceInput === "Google") {
    document.querySelector("span#language").innerText = lang2
    document.querySelector("span#languageDescription").innerText = lang2Description
    outcome.removeAttribute("class");
  } else if ( osInput === "MacOS", workplaceInput === "Apple", userField === "Web and App Development", userField === "Software Engineer") {
    document.querySelector("span#language").innerText = lang2
    document.querySelector("span#languageDescription").innerText = lang2Description
    outcome.removeAttribute("class");
  } else if (userField === "Data Science", userField === "Learning For Fun") {
    document.querySelector("span#language").innerText = lang3
    document.querySelector("span#languageDescription").innerText = lang3Description
    outcome.removeAttribute("class");
  }
}


window.addEventListener("load", function(event) {
  let form = document.getElementById("questionSet");
  form.addEventListener("submit", setFormSubmissionEventHandler)
  });
