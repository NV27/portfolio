e0 = document.querySelector(".ePic");
myModel = document.querySelector(".model");
closeButton = document.querySelector(".close-button");

var modelOpen = 0;



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