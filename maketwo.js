const input = document.getElementById("classTitle");
const btn = document.getElementById("createBtn");

input.addEventListener("input",()=>{
  if(input.value.trim() !== ""){
    btn.disabled = false;
    btn.classList.add("active");
  }else{
    btn.disabled = true;
    btn.classList.remove("active");
  }
});

btn.onclick = function(){
  window.location.href = "makethree.html";
}   



  input.addEventListener('input', () => {
    btn.disabled = input.value.trim() === "";
  });

  btn.addEventListener('click', () => {
    const className = input.value.trim();
    if (className) {
      // Get existing classes from localStorage
      let classes = JSON.parse(localStorage.getItem('classNames')) || [];

      // Add the new one
      classes.push(className);

      // Save back to localStorage
      localStorage.setItem('classNames', JSON.stringify(classes));

      // Redirect back to dashboard
      window.location.href = "makethree.html";
    }
  });

