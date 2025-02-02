function convertToRoman(num) {
  const romanNumeralMap = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' },
  ];

  return romanNumeralMap.reduce((acc, { value, numeral }) => {
    while (num >= value) {
      acc += numeral;
      num -= value;
    }
    return acc;
  }, '');
}

document.getElementById('convert-btn').onclick = function () {
  const numberInput = document.getElementById('number').value;
  const outputDiv = document.getElementById('output');
  const number = parseInt(numberInput, 10);

  if (Number.isNaN(number) || numberInput.trim() === '') {
    outputDiv.textContent = 'Please enter a valid number';
    return;
  }

  if (number < 1) {
    outputDiv.textContent = 'Please enter a number greater than or equal to 1';
    return;
  }

  if (number >= 4000) {
    outputDiv.textContent = 'Please enter a number less than or equal to 3999';
    return;
  }

  outputDiv.textContent = convertToRoman(number);
};
