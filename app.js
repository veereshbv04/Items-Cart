const userItem = document.getElementById("userInput");
const addBtn = document.getElementById("addBtn");
const parentDiv = document.querySelector(".item-list");

addBtn.addEventListener("click", (event)=>{
    
    event.preventDefault();
    const userInput =userItem.value;
    userItem.value = null
    const div = document.createElement("li");
    const text = document.createTextNode(userInput);
    div.appendChild(text);
    div.classList.add("item");
    parentDiv.appendChild(div);
     
})
    
