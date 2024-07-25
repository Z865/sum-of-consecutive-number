document.getElementById('calculateBtn').addEventListener('click', function() {
    // Get the input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    // Check if both inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers in both fields.');
        return;
    }

    // Ensure num1 is smaller than num2
    if (num1 > num2) {
        alert('The first number must be smaller than the second number.');
        return;
    }

    // Calculate the sum of consecutive numbers
    let total = 0;
    for (let i = num1; i <= num2; i++) {
        total += i;
    }

    // Display the result in the DOM
    document.getElementById('result').textContent = total;
});