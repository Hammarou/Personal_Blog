// DECLARE VARIABLES
let count = localStorage.getItem("count")
let btn = document.getElementById("colorBtn")
let isColorChanged = false
// CREATE EVENT LISTENER
btn.addEventListener("click", function(){
    if(isColorChanged == false)
    {// CHANGE COLOR OF BODY TO BLACK
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
        document.querySelector("#colorBtn").style.backgroundColor = "black";

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
        document.querySelector("#colorBtn").style.backgroundColor = "white";

          // IF BOOLEAN VARIABLE IS TRUE, SET IT TO FALSE
            isColorChanged = false
        }
})
// LOOP THROUGH THE COUNT VARIABLE
for(let i = 0; i < count; i++){
    // CREATE TEXT NODES FROM LOCAL STORAGE OBJECTS
    let txt1 = document.createTextNode("Posted by: " + localStorage.getItem("name"+(i+1)))
    let txt2 = document.createTextNode(localStorage.getItem("title"+(i+1)))
    let txt3 = document.createTextNode(localStorage.getItem("content"+(i+1)))
// CREATE ELEMENTS
    let blogTitle = document.createElement("div")
    blogTitle.classList.add("blogBox")
    let title = document.createElement("p")
    let content = document.createElement("p")
    let userName = document.createElement("p")
    // APPEND ELEMENTS
    title.appendChild(txt2)
    content.appendChild(txt3)
    userName.appendChild(txt1)
    blogTitle.appendChild(title)
    blogTitle.appendChild(content)
    blogTitle.appendChild(userName)
    document.querySelector("main").append(blogTitle)
}