
myModel = document.querySelector(".model");
closeButton = document.querySelector(".close-button");
c1 = document.getElementById("c1-content");
c2 = document.getElementById("c2-content");
c3 = document.getElementById("c3-content");

var modelOpen = 0;

var title = "Helenite";
var image = "images/art/ghastlies/helenite.png";

var images = [
    "images/art/ghastlies/helenite.png",
    "images/art/ghastlies/liberty-anim.gif",
    "images/art/popsicle-pals/pp-eggplant.png",
    "images/games/neon-parasite-cover.png"
]

c2.innerHTML = "";
for(i=0;i<4;i++){
    c2.innerHTML += 
    `
    <div class="display-box">
        <h3>${title}</h3>
        <button class="expander e3 ePic"><img class="base-image" src=${images[i]}></button>
    </div>
    `
}

for(i=0;i<1;i++){
    c3.innerHTML += 
    `
    <div class="display-box">
        <h3>${title}</h3>
        <button class="expander e3 ePic"><img class="base-image" src=${image}></button>
    </div>
    `
}

e0 = document.querySelector(".ePic");

e0.addEventListener("click", () => {
    if (modelOpen == 0){
        modelOpen = 1;
        
        myModel.classList.remove("hidden");
    }
})

closeButton.addEventListener("click", () => {
    if (modelOpen == 1){
        modelOpen = 0;
        
        myModel.classList.add("hidden");
    }
})