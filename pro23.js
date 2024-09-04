const kits= ["snare","kick","crash","toms"] 
//we want to create the buttons using js dynamiclly 
const  containerEL = document.querySelector(".container")
kits.forEach(kit => {
const btnEL = document.createElement("button");
btnEL.classList.add("btn")
btnEL.innerText = kit;
btnEL.style.backgroundImage = "url(imgs/"+ kit+ ".png )"

containerEL.appendChild(btnEL)
})

