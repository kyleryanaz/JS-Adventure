const prompter = document.getElementById('prompter');
const entry = document.getElementById('entry');
const submit = document.getElementById('submit');

let position = 'greeting';

let inventory = [];

const greeting = 'Welcome. Are you ready to play?';

const greetingPrompts = [
  'Goodbye.',
  'You are just outside the town of Hoban. To \
  the North is the town gate. To the South is a \
  dirt road leading away from the town. To the \
  East and West is a forest of pine trees. What \
  do you do?'
];

const startPrompts = [
  'You approach the gate. An armored guard stands \
  on each side of the gate.',
  'You head into the woods East of the road. You are \
  surrounded by pine trees.',
  'You turn around and start walking away from the \
  town. The forest surrounds you on both sides of the \
  road.',
  'You head into the woods West of the road. You are \
  surrounded by pine trees. A gold coin lies at the \
  base of one of the trees.'
];

var pDex = 0;

let promptWriter = (prompt) => {
  if (pDex < prompt.length) {
    prompter.innerHTML += prompt.charAt(pDex);
    pDex++;
    setTimeout(() => promptWriter(prompt), 75);
  }else{
    pDex = 0;
  }
}

$(document).ready(function(){
  promptWriter(greeting);
});

let collectEntry = () => {
  let uInput = entry.value.toLowerCase();
  switch(position){
    case 'greeting':
      switch (uInput) {
        case 'no':
          prompter.innerHTML = '';
          promptWriter(greetingPrompts[0]);
          position = 'goodbye';
        break;
        case 'yes':
          prompter.innerHTML = '';
          promptWriter(greetingPrompts[1]);
          position = 'start';
        break;
        default:
          alert('input not recognized');
      }
    break;
    case 'start':
      switch (uInput){
        case 'go north':
        case 'walk north':
          prompter.innerHTML = '';
          promptWriter(startPrompts[0]);
          position = 'gate';
        break;
        case 'go east':
        case 'walk east':
          prompter.innerHTML = '';
          promptWriter(startPrompts[1]);
          position = 'woodsEast';
        break;
        case 'go south':
        case 'walk south':
          prompter.innerHTML = '';
          promptWriter(startPrompts[2]);
          position = 'roadSouth';
        break;
        case 'go west':
        case 'walk west':
          prompter.innerHTML = '';
          promptWriter(startPrompts[3]);
          position = 'woodsWest';
        break;
        default:
          alert('input not recognized');
      }
    break;
    default:
      alert('position problem');
  }
  entry.value = '';
  console.log(position);
  return false;
};
