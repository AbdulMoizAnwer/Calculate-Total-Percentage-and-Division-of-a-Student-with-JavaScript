function myFunction(){
    var name1 = document.getElementById("s1").value; 
    var rollno1 = document.getElementById("r1").value; 
    var n1 = document.getElementById("p1").value; 
    var n2 = document.getElementById("c1").value; 
    var n3 = document.getElementById("ca1").value;
    var totalmarks = parseInt(n1) + parseInt(n2) + parseInt(n3);
    var percentage = (totalmarks/300) * 100;
    
    if(percentage >= 60 && n1 >= 40 && n2 >= 40 && n3 >= 40){
        document.write("Student name is " + name1 + "<br>")
        document.write("Student Roll No. is " + rollno1 + "<br>")
        document.write("Physics Marks: " + n1 + "<br>")
        document.write("Chemistry Marks: " + n2 + "<br>")
        document.write("Computer Application Marks: " + n3 + "<br>")
        document.write("Total Marks of the student are: " + totalmarks + " Out of 300." + "<br>")
        document.write("Percentage of the student is: " + Math.round(percentage) + "<br>")
        document.write("Division: First Division.")
    }else if(percentage >= 45 && n1 >= 40 && n2 >= 40 && n3 >= 40){
        document.write("Student name is " + name1 + "<br>")
        document.write("Student Roll No. is " + rollno1 + "<br>")
        document.write("Physics Marks: " + n1 + "<br>")
        document.write("Chemistry Marks: " + n2 + "<br>")
        document.write("Computer Application Marks: " + n3 + "<br>")
        document.write("Total Marks of the student are: " + totalmarks + " Out of 300." + "<br>")
        document.write("Percentage of the student is: " + Math.round(percentage) + "<br>")
        document.write("Division: Second Division.")
    }else if(percentage >= 33 && n1 >= 40 && n2 >= 40 && n3 >= 40){
        document.write("Student name is " + name1 + "<br>")
        document.write("Student Roll No. is " + rollno1 + "<br>")
        document.write("Physics Marks: " + n1 + "<br>")
        document.write("Chemistry Marks: " + n2 + "<br>")
        document.write("Computer Application Marks: " + n3 + "<br>")
        document.write("Total Marks of the student are: " + totalmarks + " Out of 300." + "<br>")
        document.write("Percentage of the student is: " + Math.round(percentage) + "<br>")
        document.write("Division: Third Division.")
    }else{
        document.write("Sorry, you did not pass the tests.")
    }
}
