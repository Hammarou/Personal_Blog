// DECLARE VARIABLES
let btn = document.getElementById("colorBtn")
let isColorChanged = false
// DECLARE EVENT LISTENER
btn.addEventListener("click", function(){
    // CHECK TO SEE IF BOOLIEAN VARIABLE IS FALSE
    console.log("check:", isColorChanged)
    if(isColorChanged == false)
    {
        // CHANGE COLOR OF BODY TO BLACK
        document.body.style.backgroundColor = "black"
        // GET DIVS FROM DOM AND STORE THEM IN TO AN ARRAY
        // CREATE FOR LOOP TO LOOP THROUGH OBJECTS AND ACCESS/CHANGE CSS

        let b = document.getElementsByTagName("div")
        for(let i = 0; i < b.length; i++)
        {
            b[i].style.borderColor = "white"
            b[i].style.color = "black"
        }
        let para = document.getElementsByTagName("p")
        for(let i = 0; i < para.length; i++)
        {
            para[i].style.color = "white"
        }

        document.querySelector("#txtOne").style.color = "black";
        document.querySelector("#colorBtn").style.backgroundColor = "black";

        let btnSubmit = document.getElementById("btn")
        btnSubmit.style.backgroundColor = "white"
        btnSubmit.style.color = "black"
        let lbl = document.getElementsByTagName("label")
        for(let i = 0; i < lbl.length; i++)
        {
            lbl[i].style.color = "white"
        }
        
        isColorChanged = true
    }
    else  if(isColorChanged == true)
        {
            document.body.style.backgroundColor = "white"
            let b = document.getElementsByTagName("div")
        for(let i = 0; i < b.length; i++)
        {
            b[i].style.borderColor = "black"
             b[i].style.color = "white"
        }
            let para = document.getElementsByTagName("p")
        for(let i = 0; i < para.length; i++)
        {
            para[i].style.color = "black"
        }
        
        document.querySelector("#txtOne").style.color = "white";
        document.querySelector("#colorBtn").style.backgroundColor = "white";
        let lbl = document.getElementsByTagName("label")
        for(let i = 0; i < lbl.length; i++)
        {
            lbl[i].style.color = "black"
        }
        let btnSubmit = document.getElementById("btn")
        btnSubmit.style.backgroundColor = "black"
           btnSubmit.style.color = "white"
            
           isColorChanged = false
        }
})