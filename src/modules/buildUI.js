function generateUI() {
  const container = document.createElement('div');
  container.classList.add('container');

  const header = document.createElement('h1');
  header.textContent = 'Calculator';
  container.appendChild(header);

  const calculator = document.createElement('div');
  calculator.classList.add('calculator');

  calculator.appendChild(makeScreen());
  calculator.appendChild(makeButtons());

  container.appendChild(calculator);
  document.body.appendChild(container);
}

function makeScreen() {
  const screen = document.createElement('div');
  screen.classList.add('screen');

  const stored = document.createElement('div');
  stored.classList.add('stored');
  screen.appendChild(stored);

  const current = document.createElement('div');
  current.classList.add('current');
  current.textContent = '0';
  screen.appendChild(current);

  return screen;
}

function makeButtons() {
  const buttonsArray = [['AC', 'C', '%', '÷'], [7, 8, 9, 'x'], [4, 5, 6, '-'], [1, 2, 3, '+'], [0, '.', '=']];
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('buttonContainer');

  buttonsArray.forEach((row) => {
    // const buttonRow = document.createElement('div');
    // buttonRow.classList.add('buttonRow');
    row.forEach((e) => {
      const button = document.createElement('button');
      button.textContent = e;
      if (e === '=') {
        button.classList.add('equalsButton');
      }
      buttonContainer.appendChild(button);
    });
  });
  return buttonContainer;
}

export default generateUI;
