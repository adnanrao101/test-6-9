// a) Take three subject names from the user
let subject1 = prompt("Enter the name of first subject:");
let subject2 = prompt("Enter the name of second subject:");
let subject3 = prompt("Enter the name of third subject:");

// b) Total marks for each subject
let totalMarks = 100;

// c) Take obtained marks for the first subject
let obtainedMarks1 = +prompt("Enter obtained marks for " + subject1 + ":");

// Display values (optional)
document.write("Subject 1: " + subject1 + "<br>");
document.write("Subject 2: " + subject2 + "<br>");
document.write("Subject 3: " + subject3 + "<br>");
document.write("Total Marks (per subject): " + totalMarks + "<br>");
document.write("Obtained Marks in " + subject1 + ": " + obtainedMarks1 + "<br>");
