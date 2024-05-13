

window.addEventListener('load' , () => {
  const resultInput = document.querySelector('#result');
  const additionBtn = document.querySelector('#addition');
  const substractionBtn = document.querySelector('#substraction');
  const divisionBtn = document.querySelector('#division');
  const multiplicacionBtn = document.querySelector('#multiplicacion');
  const clearBtn = document.querySelector('#clear');
  const processBtn = document.querySelector('#process');
  console.log(resultInput)


  const addToResult = (value) => {
    resultInput.value += value;
  }
  
  const handlenumber = (number) => {
    addToResult(number);
  }
  
  const buttons = document.querySelectorAll('.number');

  buttons.forEach(Btn => btn.addEventListener('click', () => handleNumber(btn.textContent)));

  processBtn.addEventListener('click', () => {
    resultInput.vale = eval(resultInput.value);
  });

  additionBtn.addEventListener('click, () => {
    addToResult('+');
  });

  substractionBtn.addEventListener('click, () => {
      addToResult('-');
  });
  multiplicationBtn.addEventListener('click, () => {
      addToResult('*');
  });
  divisionBtn.addEventListener('click, () => {
    addToResult('/');
  });                            
});
