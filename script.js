const prompter = document.getElementById('prompter');
const entry = document.getElementById('entry');
const submit = document.getElementById('submit');

let position = 0;

const greeting = 'Welcome. Are you ready to play?';

const p00Prompts = [
  'Goodbye.',
  'You are just outside the town of Hoban. To \
  the North is the town gate. To the South is a \
  dirt road leading away from the town. To the \
  East and West is a forest of pine trees. What \
  do you do?'
];

const p01Prompts = [
  'You approach the gate. An armored guard stands \
  on each side of the gate. As you approach, one \
  of them steps forward and asks, "What is your \
  business in Hoban?"',
  'You head into the woods East of the road.',
  'You turn around and start walking away from the town.',
  'You head into the woods West of the road.'
];

var pDex = 0;

let promptWriter = (prompt) => {
    if (pDex < prompt.length) {
      prompter.innerHTML += prompt.charAt(pDex);
      pDex++;
      setTimeout(() => promptWriter(prompt), 75);
    }else{
      pDex=0;
    }
  }

$(document).ready(function(){
  promptWriter(greeting);
});

let collectEntry = () => {
  let uInput = entry.value.toLowerCase();
  if (position === 0) {
    switch (uInput) {
      case 'no':
      prompter.innerHTML = '';
        promptWriter(p00Prompts[0]);
        position++;
        break;
      case 'yes':
      prompter.innerHTML = '';
        promptWriter(p00Prompts[1]);
        position++;
        break;
      default:
        alert('input not recognized');
    }
  } else if (position === 1) {
    switch (uInput){
      case 'go north':
      case 'walk north':
      prompter.innerHTML = '';
        promptWriter(p01Prompts[0]);
        position++;
        break;
      case 'go east':
      case 'walk east':
      prompter.innerHTML = '';
        promptWriter(p01Prompts[1]);
        position++;
        break;
      case 'go south':
      case 'walk south':
      prompter.innerHTML = '';
        promptWriter(p01Prompts[2]);
        position++;
        break;
      case 'go west':
      case 'walk west':
      prompter.innerHTML = '';
        promptWriter(p01Prompts[3]);
        position++;
        break;
      default:
        alert('position problem');
    }
  } else {
    console.log('position problem');
  }
  entry.value = '';
  return false;
};

// submit.addEventListener('click', collectEntry);
