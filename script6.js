// // a) Taking 3 subject names from user
// let subject1 = prompt("Enter the name of first subject:");
// let subject2 = prompt("Enter the name of second subject:");
// let subject3 = prompt("Enter the name of third subject:");

// // b) Total marks for each subject is 100
// let totalMarksPerSubject = 100;

// // c) Take obtained marks for first subject from user
// let obtainedMarks1 = prompt("Enter obtained marks for " + subject1);

// // Displaying the results in browser
// document.write("Subject 1: " + subject1 + "<br>");
// document.write("Subject 2: " + subject2 + "<br>");
// document.write("Subject 3: " + subject3 + "<br>");
// document.write("Total Marks per Subject: " + totalMarksPerSubject + "<br>");
// document.write("Obtained Marks in " + subject1 + ": " + obtainedMarks1);

// a) Take three subjects name
        let subject1 = prompt("Enter name of 1st subject:");
        let subject2 = prompt("Enter name of 2nd subject:");
        let subject3 = prompt("Enter name of 3rd subject:");

        // b) Total marks for each subject
        let totalMarksPerSubject = 100;

        // c) Take obtained marks
        let obtained1 = +prompt("Enter obtained marks for " + subject1 + ":");
        let obtained2 = +prompt("Enter obtained marks for " + subject2 + ":");
        let obtained3 = +prompt("Enter obtained marks for " + subject3 + ":");

        // e) Calculate total and percentage
        let totalObtained = obtained1 + obtained2 + obtained3;
        let totalMarks = totalMarksPerSubject * 3;
        let percentage = (totalObtained / totalMarks) * 100;

        // Show result in table
        document.write("<h2>Marks Sheet</h2>");
        document.write("<table border='1' cellspacing='0' cellpadding='10'>");
        document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
        document.write("<tr><td>" + subject1 + "</td><td>100</td><td>" + obtained1 + "</td></tr>");
        document.write("<tr><td>" + subject2 + "</td><td>100</td><td>" + obtained2 + "</td></tr>");
        document.write("<tr><td>" + subject3 + "</td><td>100</td><td>" + obtained3 + "</td></tr>");
        document.write("<tr><th>Total</th><th>" + totalMarks + "</th><th>" + totalObtained + "</th></tr>");
        document.write("<tr><th colspan='2'>Percentage</th><th>" + percentage.toFixed(2) + "%</th></tr>");
        document.write("</table>");