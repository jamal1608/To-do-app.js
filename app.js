let inputId = document.getElementById('input');
let list = document.getElementById('list');

inputId.addEventListener("keyup", function(event){
if(event.key == "Enter"){
    addItem(this.value)
    this.value = ""
}
})
let addItem = (inputId) => {
    let listItem = document.createElement("li");
    listItem.innerHTML =`${inputId}<i></i>`;

    

    listItem.addEventListener("click", function(){
        this.classList.toggle('done');
    })
    listItem.querySelector("i").addEventListener("click", function(){
        listItem.remove();

    })
    

    list.appendChild(listItem);
}