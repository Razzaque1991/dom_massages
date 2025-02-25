let subBtn = document.getElementById("btn");
subBtn.addEventListener("click", function () {
   let textMass = document.getElementById("text");
   const mass = textMass.value;
    let containerBox = document.getElementById("container");
    let textp = document.createElement("p");
    textp.classList.add("iteam");            
    textp.innerText = mass;  
    containerBox.appendChild(textp); 
    textMass.value = "";
})