// Variables
const form = document.getElementById("form");
const firstName = document.getElementById("first-name")
const firstNameErrorMessage = document.getElementById("first-name-error")


//Functions
form.addEventListener('submit', (e) => {
  if(firstName.value === "" || firstName.value === null) {
    firstNameErrorMessage.className.add(".visiable");
  }
});