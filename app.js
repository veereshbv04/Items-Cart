const userItem = document.getElementById("userInput");
const addBtn = document.getElementById("addBtn");
const parentDiv = document.querySelector(".item-list");

addBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    const userInput =userItem.value;
    const div = document.createElement("div");
    const text = document.createTextNode(userInput);
    div.appendChild(text);
    parentDiv.appendChild(div);
     
})
    
