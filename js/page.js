function formSubmitted() {


    validateEmail2()
  }
  


function validateEmail2() {
    var emailID = document.getElementById('entry.1293249477').value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
       alert("Please enter correct email ID")
       document.getElementById('entry.1293249477').focus() ;
       return false;
    }
    var Message = document.getElementById('entry.1226908809').value;
    if (String(Message) < 1) {
        alert("Missing or incorrect input")
        document.getElementById('entry.1226908809').focus() ;
        return false;
     }
    // return(true);
    return(true , setTimeout(formSubmittedclear,1000) );
    
 }

 
function formSubmittedclear() {
    // Get the submission message container
  var messageContainer = document.getElementById("submission-message");

  // Display a success message
  messageContainer.innerHTML = "Your message has been submitted successfully!";
  messageContainer.style.display = "block";  // Make it visible
    
    // Clear form fields
    document.getElementById("entry.1788447504").value = "";
    document.getElementById("entry.1293249477").value = "";
    document.getElementById("entry.1226908809").value = "";

    // Add additional code here if you want to execute more actions after form submission
} 


// Attach formSubmitted function to the form's submit event
document.getElementById("gform").addEventListener("submit", formSubmitted);





