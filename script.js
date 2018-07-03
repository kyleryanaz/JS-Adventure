const prompter = document.getElementById("prompter");
const entry = document.getElementById("entry");
const submit = document.getElementById("submit");

let position = 0;

const prompts = [
  "Goodbye.",
  "You are just outside the town of Hoban. To \
  the North is the town gate. To the South is a \
  dirt road leading away from the town. To the \
  East and West is a forest of pine trees. What \
  do you do?"
];

const inventroy = [];

let collectEntry = () => {
  let uInput = entry.value.toLowerCase();
  if (position === 0) {
    switch (uInput) {
      case "no":
        prompter.innerHTML = prompts[0];
        position++;
        break;
      case "yes":
        prompter.innerHTML = prompts[1];
        position++;
        break;
      default:
        alert("input not recognized");
    }
  } else {
    console.log("position problem");
  }
};

submit.addEventListener("click", collectEntry);
