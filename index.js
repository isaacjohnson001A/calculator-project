// javascript calculator

    // upper output is for showing the expression
    let outputUpper = document.querySelector('#upper');
    // lower output is for showing the result
    let outputLower = document.querySelector('#lower');

    // function to get number input
    function pressNum(e) {
//this is for checking strictly to make sure our outputLower is in String
// format and is equal to zero
// if it is equal to zero it will run the if function but if it is not
// then it will run the else function
      if (outputLower.innerHTML === '0') {
        outputLower.innerHTML = e.innerHTML;
      } 
      else {
        outputLower.innerHTML += e.innerHTML;
      }
    }

    // clear all
    function pressAllClear() {
// Pressing the AllClear button will return our expression to an empty string
// And our result to zero
      outputUpper.innerHTML = '';
      outputLower.innerHTML = '0';
    }

    // clear one
    function pressClear() {
// Pressing the clear button will slice(or remove one value from the end of
// the input)
      outputLower.innerHTML = outputLower.innerHTML.slice(0, -1);
    }

    // calculate button
    // Pressing the equal button will replace the expression with the result 
    function pressEqual() {
      let exp = outputLower.innerHTML;
      outputUpper.innerHTML = exp;
      exp = exp.replace(/×/g, '*').replace(/÷/g, '/');
      let result;
      try {
// The try method 
        result = eval(exp);
        // if decimal number more than 4 decimal places
        if (result.toString().indexOf('.') !== -1) {
          result = result.toFixed(4);
        }
      } catch (e) {
// If the input doesn't meet the requirements for evaluation, it will display 
// an error code
        result = 'Error' ;
      }
      outputLower.innerHTML = result;
    }

    function pressOperator(e) {
      // check last operator
      let lastOperator = outputLower.innerHTML.slice(-1);
      if (lastOperator.includes('+', '-', '×', '÷')) {
        output.innerHTML = outputLower.innerHTML.slice(0, -1) + e.innerHTML;
      } else {
        outputLower.innerHTML += e.innerHTML;
      }
    }

    function pressDot() {
// Pressing the dot button will display a dot
      outputLower.innerHTML += '.';
    }

    // function pressBracket(e) {
    //   outputLower.innerHTML += e.innerHTML;
    // }

    // attach keyboard event
    document.addEventListener('keydown', function (e) {
      switch (e.key) {
        case '0':
          pressNum(document.querySelector('button:nth-child(2)'));
          break;
        case '1':
          pressNum(document.querySelector('button:nth-child(5)'));
          break;
        case '2':
          pressNum(document.querySelector('button:nth-child(6)'));
          break;
        case '3':
          pressNum(document.querySelector('button:nth-child(7)'));
          break;
        case '4':
          pressNum(document.querySelector('button:nth-child(9)'));
          break;
        case '5':
          pressNum(document.querySelector('button:nth-child(10)'));
          break;
        case '6':
          pressNum(document.querySelector('button:nth-child(11)'));
          break;
        case '7':
          pressNum(document.querySelector('button:nth-child(13)'));
          break;
        case '8':
          pressNum(document.querySelector('button:nth-child(14)'));
          break;
        case '9':
          pressNum(document.querySelector('button:nth-child(15)'));
          break;
        case '+':
          pressOperator(document.querySelector('button:nth-child(4)'));
          break;
        case '-':
          pressOperator(document.querySelector('button:nth-child(8)'));
          break;
        case '*':
          pressOperator(document.querySelector('button:nth-child(12)'));
          break;
        case '/':
          pressOperator(document.querySelector('button:nth-child(16)'));
          break;
        case '.':
          pressDot();
          break;
        case '(':
          pressBracket(document.querySelector('button:nth-child(18)'));
          break;
        case ')':
          pressBracket(document.querySelector('button:nth-child(19)'));
          break;
        case 'Enter':
          // prevent default action
          e.preventDefault();
          pressEqual();
          break;
        case 'Backspace':
          pressClear();
          break;
        case 'Escape':
          pressAllClear();
          break;
      }
    });