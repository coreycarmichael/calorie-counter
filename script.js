function ageCalculator() {
var firstName = document.getElementById("fName").value;
var lastName = document.getElementById("lName").value;
var gender = document.querySelector(".form-check-input:checked").value;
var weight = document.getElementById("weight").value
var height = document.getElementById("height").value

console.log(firstName +" "+ lastName + " "+ gender+ " "+weight+" "+height)
 
    var userinput = document.getElementById("DOB").value;  
    var dob = new Date(userinput);  
    if(userinput==null || userinput=='') {  
      document.getElementById("message").innerHTML = "**Choose a date please!";    
      return false;   
    } else {  
      
    //calculate month difference from current date in time  
    var month_diff = Date.now() - dob.getTime();  
      
    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);   
      
    //extract year from date      
    var year = age_dt.getUTCFullYear();  
      
    //now calculate the age of the user  
    var age = Math.abs(year - 1970);  
      
    //display the calculated age  
   console.log(age)
    }  
    
} 

    
