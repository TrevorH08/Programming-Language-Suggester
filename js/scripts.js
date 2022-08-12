// Business Logic

function questionSet() {
  const nameInput = document.getElementById("nameInput").value;
  const userField = document.getElementById("userField").value;
  const userClass = document.getElementById("userClass").value;
  const osInput = document.querySelector("input[name='OS']:checked").value;
  const workplaceInput = document.querySelector("input[name='workplace']:checked").value;

  document.queryselector("span#name1a").innerText = nameInput
  document.queryselector("span#field1a").innerText = userField
  document.queryselector("span#class1a").innerText = userClass
  document.queryselector("span#os1a").innerText = osInput
  document.queryselector("span#workplace1a").innerText = workplaceInput
  
}