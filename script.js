// Variables
const form = document.getElementById("form");
const inputElements = document.querySelectorAll(".text-box");

//Functions
form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputElements.forEach((input) => {
    const inputError = document.getElementById(`${input.id}-error`);
    const iconError = document.getElementById(`${input.id}-icon`);
    if (!input.value) {
      inputError.classList.remove("hidden");
      iconError.classList.remove("hidden");
      input.classList.remove("grey-border");
      input.placeholder = "";
    } else {
      inputError.classList.add("hidden");
      iconError.classList.add("hidden");
      input.classList.add("grey-border");
    }
    if (input.id === "email") {
      let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
      let isCorrect = regex.test(input.value);
      if (!isCorrect) {
        inputError.classList.remove("hidden");
        iconError.classList.remove("hidden");
        input.classList.remove("grey-border");
        input.placeholder = "email@example/com";
      }
      else {
        inputError.classList.add("hidden");
        iconError.classList.add("hidden");
        input.classList.add("grey-border");
      }
    }
  });
});
