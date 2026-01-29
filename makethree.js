const title = document.getElementById("title");
const btn = document.getElementById("typeBtn");

title.addEventListener("input", ()=>{
  if(title.value.trim() !== ""){
    btn.disabled = false;
    btn.classList.add("active");
  }else{
    btn.disabled = true;
    btn.classList.remove("active");
  }
});

btn.onclick = function(){
    window.location.href = "cards.html";    
}