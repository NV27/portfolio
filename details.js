
const myModel = document.querySelector(".model");
const myImageViewer = document.querySelector(".image-viewer");
const modelTop = document.querySelector(".model-top");
const modelContent = document.querySelector(".model-content");
const c1 = document.getElementById("c1-content");
const c2 = document.getElementById("c2-content");
const c3 = document.getElementById("c3-content");


let imageViewerOpen = 0;
let modelOpen = 0;

//Goes after data is loaded
function addModelOpen(){
    e0 = document.querySelectorAll(".ePic");
    am = document.getElementById("about-me");
    cm = document.getElementById("contact-me");

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

    am.addEventListener("click", () => {
        if (modelOpen == 0){
            modelOpen = 1;
            
            myModel.classList.remove("hidden");
            populateModel(am.dataset.key);
        }
    });

    cm.addEventListener("click", () => {
        if (modelOpen == 0){
            modelOpen = 1;
            
            myModel.classList.remove("hidden");
            populateModel(cm.dataset.key);
            console.log("cm click")
        }
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

    //FOR CONTACT ME PAGE
    if (myInfo.id == -1){
        modelTop.innerHTML = `
        <div id="model-date"></div>
        <div id="model-title">Contact Me</div>
        <a class="close-button"><i class="fa-solid fa-skull"></i></a>
        `

        modelContent.innerHTML = `
        <div class="model-form-box">
            <form class="contact-form">
                <div class="contact-name form-item">
                    <b class="form-label">Name: </b>
                    <input class="text-input" id="text-input-name" type="text"/>
                </div>
                <div class="contact-email form-item">
                    <b class="form-label">Email: </b>
                    <input class="text-input" type="email"/>
                </div>
                <div class="contact-info form-item">
                    <b class="form-label">What you sayin' punk? </b>
                    <textarea class="text-input"></textarea>
                </div>
                <input class="submit-box" type="submit" value="SEND">
                <b>Doesn't actually send anything yet - Just email me at lprotanogames@gmail.com</b>
            </form>
        <div>
        `
    }
    else{ //FOR EVERY OTHER MODEL
    modelTop.innerHTML = `
        <div id="model-date">${myInfo.releaseDate}</div>
        <div id="model-title">${myInfo.title}</div>
        <a class="close-button"><i class="fa-solid fa-skull"></i></a>
        `
    modelContent.innerHTML = `
    <div class="model-left">
        <button class="model-image-button" id="#ib1" data-image=${myInfo.image1} data-info="${myInfo.image1Info}" alt="${myInfo.image1Alt}"><img class="model-image" src=${myInfo.image1}></button>
        <div class="model-image-extra-box">
            <button class="model-image-extra-button" id="#ib2" data-image=${myInfo.image2} data-info="${myInfo.image2Info}" alt="${myInfo.image2Alt}"><img class="model-image-extra" src=${myInfo.image2}></button>
            <button class="model-image-extra-button" id="#ib3" data-image=${myInfo.image3} data-info="${myInfo.image3Info}" alt="${myInfo.image3Alt}"><img class="model-image-extra" src=${myInfo.image3}></button>
        </div>
    </div>
    <div class="model-right">
        <div class="model-info">${myInfo.info}</div>
        <a class="model-anchor" href=${myInfo.link}><button class="model-link">${myInfo.linkTitle}</button></a>
    </div>
    `
    }

    document.querySelector(".close-button").addEventListener("click", () => {
            modelOpen = 0;
            myModel.classList.add("hidden");
    })

    let ib1 = document.getElementById("#ib1");
    let ib2 = document.getElementById("#ib2");
    let ib3 = document.getElementById("#ib3");
    const ibList = [ib1, ib2, ib3];

    ibList.forEach(imageButton => {
        imageButton.addEventListener("click", () => {
            if (imageViewerOpen == 0){
                imageViewerOpen = 1;
                
                console.log("imageViewer Open");
    
                document.querySelector(".image-viewer-image-box").innerHTML =
                `<img class="image-viewer-image" src=${imageButton.dataset.image}>`
    
                document.querySelector(".image-viewer-info").textContent = imageButton.dataset.info;

                myImageViewer.classList.remove("hidden");
            }
        })
    })

    document.querySelector(".image-viewer-close").addEventListener("click", () => {
        imageViewerOpen = 0;

        console.log("imageViewer Close");
        myImageViewer.classList.add("hidden");
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
                itemsP.push({key: item.id, title: item.title, image: item.image0})
            }
            else if (item.section == "games"){
                itemsG.push({key: item.id, title: item.title, image: item.image0})
            }
            else if (item.section == "art"){
                itemsA.push({key: item.id, title: item.title, image: item.image0})
            }
            else{
                console.log(`Project missing section`);
            }
        })

        populateColumn(c1, itemsP);
        populateColumn(c2, itemsG);
        populateColumn(c3, itemsA);

        addModelOpen();
    })
}

loadJson();