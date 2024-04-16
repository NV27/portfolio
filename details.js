
myModel = document.querySelector(".model");
closeButton = document.querySelector(".close-button");
c2 = document.getElementById("c2-content");

var modelOpen = 0;

var title = "bloop";
var image = "images/art/ghastlies/helenite.png";

c2.innerHTML = "";
for(i=0;i<3;i++){
    c2.innerHTML += 
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