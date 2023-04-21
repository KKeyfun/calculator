import generateUI from './modules/buildUI';
import operate from './modules/math';
import './style.css';

let mode = null;
let clearScreenFlag = false;

generateUI();
addListeners();

const display = {
  current: '0',
  stored: '',
  showInput(str) {
    document.querySelector('.current').textContent = str;
  },
  showStored(str) {
    document.querySelector('.stored').textContent = str;
  },
  checkClear() {
    if (clearScreenFlag) {
      display.clearInput();
      clearScreenFlag = false;
    }
  },
  clearInput() {
    document.querySelector('.current').textContent = '0';
    this.current = '0';
  },
  clearAll() {
    document.querySelector('.current').textContent = '0';
    document.querySelector('.stored').textContent = '';
    this.current = '0';
    this.stored = '0';
    mode = null;
  },
};

function insert(a) {
  // let tempCurrent = display.currentNumber;// used for screen display

  switch (a) {
    case 'AC':
      display.clearAll();
      break;
    case 'C':
      display.clearInput();
      break;
    case '.':
      display.checkClear();
      handleDecimal();
      break;
    case '=':
      if (mode && display.stored) {
        display.showStored(`${display.stored} ${mode} ${display.current} =`);
        display.stored = operate(mode, display.current, display.stored).toString();
        display.showInput(`${display.stored}`);
        display.current = display.stored;
        mode = null;
      }
      break;
    case '+':
    case '-':
    case 'x':
    case '÷':
    case '%':
      if (mode && clearScreenFlag) { // Handles operator change
        display.showStored(`${display.stored} ${a}`);
        mode = a;
        console.log('should only change symbol');
      } else if (mode) { // Calculates when user presses an operator button instead of equals
        display.stored = operate(mode, display.current, display.stored).toString();
        display.showStored(`${display.stored} ${a}`);
        display.showInput(`${display.stored}`);
        mode = a;
        clearScreenFlag = true;
      } else { // Update display and mode/operator
        display.stored = display.current;
        mode = a;
        display.showStored(`${display.stored} ${mode}`);
        clearScreenFlag = true;
      }
      break;
    default:
      display.checkClear();
      if (display.current === '0') { // Handle number inputs
        display.current = a;
        display.showInput(`${a}`);
      } else {
        display.current += a;
        display.showInput(display.current);
      }
  }
}

function handleDecimal() { // Check if decimal already exists, or handle numbers between -1/1
  if (display.current === '0') {
    display.current = '0.';
  } else if (!display.current.includes('.')) {
    display.current += '.';
  }
  display.showInput(`${display.current}`);
}

function addListeners() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', () => { insert(button.textContent); });
  });
}
