const userItem = document.getElementById("userInput");
const addBtn = document.getElementById("addBtn");
const ulDiv = document.querySelector(".item-list");
const serachItem = document.getElementById("searchItem");
const liDiv = document.querySelectorAll(".item");


addBtn.addEventListener("click", (event)=>{
    
    event.preventDefault();
    const userInput =userItem.value;
    userItem.value = null
    const div = document.createElement("li");
    const text = document.createTextNode(userInput);
    div.appendChild(text);
    div.classList.add("item");
    ulDiv.appendChild(div);
     
})
    
serachItem.addEventListener("keyup", () =>{
    
    var searchItem = serachItem.value.toUpperCase();
    for(let i=0; i<liDiv.length; i++){
        var liItem = liDiv[i].innerText.toUpperCase();
        if(liItem.includes(searchItem)){
            liDiv[i].style.display = "block";
        }else{
            liDiv[i].style.display = "none";
        }
    }

})