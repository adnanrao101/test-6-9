 // Take input from user
    let input = prompt("Enter a number for multiplication table (default is 5):");

    // Convert to number and set default to 5 if input is empty or invalid
    let number = parseInt(input);
    if (isNaN(number)) {
      number = 5;
    }

    // Display the table on browser
    document.write("<h2>Multiplication Table of " + number + "</h2>");
    for (let i = 1; i <= 10; i++) {
      document.write(number + " x " + i + " = " + (number * i) + "<br>");
    }