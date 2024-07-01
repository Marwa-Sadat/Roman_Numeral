document.getElementById('convert-btn').onclick = function() {
    const numberInput = document.getElementById('number').value;
    const outputDiv = document.getElementById('output');
    const number = parseInt(numberInput);

    if (isNaN(numberInput) || numberInput.trim() === "") {
        outputDiv.textContent = "Please enter a valid number";
        return;
    }
    
    if (number < 1) {
        outputDiv.textContent = "Please enter a number greater than or equal to 1";
        return;
    }
    
    if (number >= 4000) {
        outputDiv.textContent = "Please enter a number less than or equal to 3999";
        return;
    }

    outputDiv.textContent = convertToRoman(number);