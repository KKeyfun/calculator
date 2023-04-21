function add(a, b) {
  return (+(a) + +(b));
}

function subtract(a, b) {
  return (+(a) - +(b));
}

function multiply(a, b) {
  return (+(a) * +(b));
}

function divide(a, b) {
  if (b === '0') {
    alert('Can\'t divide by zero');
    return null;
  } return (+(a) / +(b));
}

function modulus(a, b) {
  return (+(a) % +(b));
}

function operate(operator, current, stored) {
  switch (operator) {
    case '+':
      return round(add(stored, current));

    case '-':
      return round(subtract(stored, current));

    case 'x':
      return round(multiply(stored, current));

    case '÷':
      return round(divide(stored, current));

    case '%':
      return round(modulus(stored, current));
  }
}

function round(num) {
  return Math.round(num * 100) / 100;
}

export default operate;
