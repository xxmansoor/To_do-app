let input = document.querySelector(".inpt");
let text = document.querySelector(".text");

function Add(){
    if (input.value == ""){
        alert("PLEASE WRITE SOMETHING FIRST")
    }else{
        let NewEle = document.createElement("ul");
        NewEle.innerHTML = `${input.value } <i class="fa-solid fa-xmark"></i>`;
         text.appendChild(NewEle);
         input.value = "";
         NewEle.querySelector("i").addEventListener("click",remove)
         function remove(){
            NewEle.remove()
         }
    }
}
