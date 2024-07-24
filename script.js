const textarea = document.getElementById("textarea");
const totalchar = document.getElementById("total");
const remainchar =  document.getElementById("remaining");

textarea.addEventListener("keyup",
    () =>{
        updatecounter();
    }
)

function updatecounter(){
    totalchar.innerText = textarea.value.length;
    remainchar.innerText = textarea.getAttribute("maxlength") - textarea.value.length;
}