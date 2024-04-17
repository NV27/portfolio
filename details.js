
myModel = document.querySelector(".model");
modelContent = document.querySelector(".model-content");
closeButton = document.querySelector(".close-button");
c1 = document.getElementById("c1-content");
c2 = document.getElementById("c2-content");
c3 = document.getElementById("c3-content");

var itemsP = [];
var itemsG = [];
var itemsA = [];

var modelOpen = 0;
closeButton.addEventListener("click", () => {
    if (modelOpen == 1){
        modelOpen = 0;
        
        myModel.classList.add("hidden");
    }
})

//Goes after data is loaded
function addModelOpen(){
    e0 = document.querySelectorAll(".ePic");

    e0.forEach(element => {
        element.addEventListener("click", () => {
            if (modelOpen == 0){
                modelOpen = 1;
                
                myModel.classList.remove("hidden");
                console.log(`My Key: ${element.dataset.key}`)
                populateModel(element.dataset.key);
            }

            
        })
    });
}

function populateColumn(cNumber, array){
    for(i=0;i<array.length;i++){
        console.log(`myID: ${array[i].id}`)
        cNumber.innerHTML += 
        `
        <div class="display-box">
            <h3>${array[i].title}</h3>
            <button class="expander e3 ePic" data-key=${array[i].id}><img class="base-image" src=${array[i].image}></button>
        </div>
        `
        console.log(`HTML: ${cNumber.innerHTML}`);
    }
}

function populateModel(key){

    fetch("projects.json").then(response => {
        return response.json()
    }).then(data => {
        console.log(data);
        d = data.data;
        var myInfo;

        d.forEach((item) => {
            if (item.id == key){
                myInfo = item;
                console.log(`myInfo: ${myInfo}`);
            }
        })

    

    modelContent.innerHTML = `
    <div>INFOROMATION AND PICTURES AND STUFF</div>
    `;
    })

}

function loadJson(){
    fetch("projects.json").then(response => {
        return response.json()
    }).then(data => {
        console.log(data);
        d = data.data;

        d.forEach((item) => {
            if (item.section == "programming"){
                itemsP.push({key: item.id, title: item.title, image: item.image})
            }
            if (item.section == "games"){
                itemsG.push({key: item.id, title: item.title, image: item.image})
            }
            if (item.section == "art"){
                itemsA.push({key: item.id, title: item.title, image: item.image})
            }
        })

        populateColumn(c1, itemsP);
        populateColumn(c2, itemsG);
        populateColumn(c3, itemsA);

        addModelOpen();
    })
}

loadJson();

//TEST DATA
// var title = "Helenite";
// var image = "images/art/ghastlies/helenite.png";

// var images = [
//     "images/art/ghastlies/helenite.png",
//     "images/art/ghastlies/liberty-anim.gif",
//     "images/art/popsicle-pals/pp-eggplant.png",
//     "images/games/neon-parasite-cover.png"
// ]

// var items = [
//     {key: "0", title: "blueberry", image: "images/art/popsicle-pals/pp-blueberry.png"},
//     {key: "1", title: "lime", image: "images/art/popsicle-pals/pp-lime.png"}
// ]

// c1.innerHTML = "";
// for(i=0;i<items.length;i++){
//     c1.innerHTML += 
//     `
//     <div class="display-box">
//         <h3>${items[i].title}</h3>
//         <button class="expander e3 ePic"><img class="base-image" src=${items[i].image}></button>
//     </div>
//     `
// }

// console.log("c1.innerHTML");

// c2.innerHTML = "";
// for(i=0;i<4;i++){
//     c2.innerHTML += 
//     `
//     <div class="display-box">
//         <h3>${title}</h3>
//         <button class="expander e3 ePic"><img class="base-image" src=${images[i]}></button>
//     </div>
//     `
// }

// for(i=0;i<1;i++){
//     c3.innerHTML += 
//     `
//     <div class="display-box">
//         <h3>${title}</h3>
//         <button class="expander e3 ePic"><img class="base-image" src=${image}></button>
//     </div>
//     `
// }