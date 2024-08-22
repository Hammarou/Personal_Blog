// DECLARE VARIABLES
let nme = document.getElementById("name")
let title = document.getElementById("title")
let content = document.getElementById("txtA")
let btn2 = document.getElementById("btn")
let refreshBtn = document.getElementById("refresh")
let count = 0
// CREATE EVENT LISTENER FOR SUBMIT BUTTON
btn2.addEventListener("click", function() {
    // IF STATEMENT TO CHECK IF FORM IS COMPLETED
    if(nme.value!=""&&this.title.value!=""&&content.value!="")
    {
        // IF STATEMENT TO CHECK IF LOCAL STORAGE HAS A COUNT OBJECT
        if(localStorage.getItem("count") == null)
        {
         count++
        }
        else
        {
            // GET VALUE OF COUNT VARIABLE AND STORE IT IN INTERGER VARIABLE
            count = localStorage.getItem("count")
            count++
        }
        // SET LOCAL STORAGE OBJECTS
        localStorage.setItem("count", count)
        localStorage.setItem("name" + count, nme.value)
        localStorage.setItem("title" + count, title.value)
        localStorage.setItem("content" + count, content.value)
        
    }
    else
    {
        // STOP SUBMIT BUTTON FROM CALLING EVENT
        event.preventDefault()
        alert("Please complete all form fields")
    }
  
})
// CREATE EVENT LISTENER FOR REFRESH BUTTON
refreshBtn.addEventListener("click", function() {
    // CLEAR LOCAL STORAGE
   localStorage.clear()
  
})