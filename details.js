
const myModel = document.querySelector(".model");
const modelTop = document.querySelector(".model-top");
const modelContent = document.querySelector(".model-content");
const c1 = document.getElementById("c1-content");
const c2 = document.getElementById("c2-content");
const c3 = document.getElementById("c3-content");



let modelOpen = 0;


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
        console.log(`myID: ${array[i].key}`)
        cNumber.innerHTML += 
        `
        <div class="display-box">
            <h3>${array[i].title}</h3>
            <button class="expander e3 ePic" data-key=${array[i].key}><img class="base-image" src=${array[i].image}></button>
        </div>
        `
        console.log(array);
        console.log(`HTML: ${cNumber.innerHTML}`);
    }
}

function populateModel(key){

    fetch("projects.json").then(response => {
        return response.json()
    }).then(data => {
        console.log(data);
        d = data.data;
        let myInfo;

        d.forEach((item) => {
            if (item.id == key){
                myInfo = item;
                console.log(`myInfo: ${myInfo.title}`);
            }
        })

    
    modelTop.innerHTML = `
        <div id="model-date">${myInfo.releaseDate}</div>
        <div id="model-title">${myInfo.title}</div>
        <a class="close-button"><i class="fa-solid fa-skull"></i></a>
        `
    // modelContent.innerHTML = `
    // <div>INFOROMATION AND PICTURES AND STUFF</div>
    // `;

    document.querySelector(".close-button").addEventListener("click", () => {
        if (modelOpen == 1){
            modelOpen = 0;
            
            myModel.classList.add("hidden");
        }
    })

    })

}

function loadJson(){
    fetch("projects.json").then(response => {
        return response.json()
    }).then(data => {
        console.log(data);
        d = data.data;
        const itemsP = [];
        const itemsG = [];
        const itemsA = [];

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