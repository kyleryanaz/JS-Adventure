const prompter = document.getElementById('prompter');
const entry = document.getElementById('entry');
const submit = document.getElementById('submit');

let position = 'greeting';

let availableItems = ['gold coin'];

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
  base of one of the trees.',
  'You head into the woods West of the road. You are \
  surrounded by pine trees.'
];

const woodsWestPrompts = [
  'You pick up the coin and put it in your bag. You \
  are surrounded by pine trees.',
  'You come to a brick wall that runs from from East \
  to West. You discern that this is the southern wall \
  of Hoban.',
  'You are surrounded by Pine Trees.'
]

const woodsEastPrompts = [
  'You come to a brick wall that runs from from East \
  to West. You discern that this is the southern wall \
  of Hoban.',
  'You are surrounded by Pine Trees.'
]

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
          prompter.innerHTML = '';
          promptWriter(startPrompts[0]);
          position = 'gate';
        break;
        case 'go east':
          prompter.innerHTML = '';
          promptWriter(startPrompts[1]);
          position = 'woodsEast';
        break;
        case 'go south':
          prompter.innerHTML = '';
          promptWriter(startPrompts[2]);
          position = 'roadSouth';
        break;
        case 'go west':
          if(availableItems.includes('gold coin')){
            prompter.innerHTML = '';
            promptWriter(startPrompts[3]);
            position = 'woodsWest';
          } else {
            prompter.innerHTML = '';
            promptWriter(startPrompts[4]);
            position = 'woodsWest';
          }
        break;
        default:
          alert('input not recognized');
      }
    break;
    case 'woodsEast':
      switch(uInput){
        case 'go north':
          prompter.innerHTML = '';
          promptWriter(woodsEastPrompts[0]);
          position = 'eastWall'
        break;
        case 'go south':
          prompter.innerHTML = '';
          promptWriter(woodsEastPrompts[1]);
          position = 'woodsSouthEast'
        break;
        case 'go west':
          prompter.innerHTML = '';
          promptWriter(greetingPrompts[1]);
          position = 'start';
        break;
      }
    break;
    case 'woodsWest':
      switch(uInput){
        case 'pick up coin':
          prompter.innerHTML = '';
          promptWriter(woodsWestPrompts[0]);
          availableItems.splice(0,1);
          inventory.push('gold coin');
          console.log(inventory, availableItems);
        break;
        case 'go north':
          prompter.innerHTML = '';
          promptWriter(woodsWestPrompts[1]);
          position = 'westWall'
        break;
        case 'go south':
          prompter.innerHTML = '';
          promptWriter(woodsWestPrompts[2]);
          position = 'woodsSouthWest'
        break;
        case 'go east':
          prompter.innerHTML = '';
          promptWriter(greetingPrompts[1]);
          position = 'start';
        break;
        default:
          alert('input not recognized');
      }
    break;
    case 'woodsSouthWest':
      switch(uInput){
        case 'go north':
        if(availableItems.includes('gold coin')){
          prompter.innerHTML = '';
          promptWriter(startPrompts[3]);
          position = 'woodsWest';
        } else {
          prompter.innerHTML = '';
          promptWriter(startPrompts[4]);
          position = 'woodsWest';
        }
        break;
        default:
          alert('input not recognized');
      }
    break;
    case 'woodsSouthEast':
      switch(uInput){
        case 'go north':
          prompter.innerHTML = '';
          promptWriter(woodsEastPrompts[1]);
          position = 'woodsEast';
        break;
        default:
          alert('input not recognized');
      }
    break;
    case 'westWall':
      switch(uInput){
        case 'go south':
          if(availableItems.includes('gold coin')){
            prompter.innerHTML = '';
            promptWriter(startPrompts[3]);
            position = 'woodsWest';
          } else {
            prompter.innerHTML = '';
            promptWriter(startPrompts[4]);
            position = 'woodsWest';
          }
        break;
        default:
          alert('input not recognized');
      }
    break;
    case 'eastWall':
      switch(uInput){
        case 'go south':
            prompter.innerHTML = '';
            promptWriter(startPrompts[1]);
            position = 'eastWest';
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
