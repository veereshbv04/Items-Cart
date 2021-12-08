const userItem = document.getElementById("userInput");
const addBtn = document.getElementById("addBtn");
const ulDiv = document.querySelector(".item-list");
const serachItem = document.getElementById("searchItem");
const liDiv = document.querySelectorAll(".item");
const spanDiv = document.querySelectorAll("span");
const itemList = document.getElementById("allItems");

addBtn.addEventListener("click", (event)=>{
    
    event.preventDefault();
    const userInput =userItem.value;
    userItem.value = null
    const div = document.createElement("li");
    const text = document.createTextNode(userInput);
    div.appendChild(text);
    div.classList.add("item");
    ulDiv.appendChild(div);

    const span = document.createElement("span");
    const spanText = document.createTextNode("X");
    span.appendChild(spanText);
    span.classList.add("delete")
    div.appendChild(span);
     
})
  

itemList.addEventListener("click", (event) => {
    if(event.target.classList.contains("delete")){
        if(confirm("Are You Sure? This Action cannot be undone")){
            var li = event.target.parentElement;
            itemList.removeChild(li);
        }
    }
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