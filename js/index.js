{/* <img src="/media/images/css-letter-a.png" alt="CSS A Image"></img>
<img src="/media/images/css-letter-b.png" alt="CSS B Image"></img>
<img src="/media/images/css-letter-c.png" alt="CSS C Image"></img> */}

//Images to pop-up ^^^^
const aText = document.querySelector(".a-text");
const bText = document.querySelector(".b-text");
const cText = document.querySelector(".c-text");

const aPopUp = document.querySelector(".pop-up-a");
const bPopUp = document.querySelector(".pop-up-b");
const cPopUp = document.querySelector(".pop-up-c");

const hideAText = document.querySelector(".hide-a-text");
const hideBText = document.querySelector(".hide-b-text");
const hideCText = document.querySelector(".hide-c-text");


hideAText.addEventListener("click", function(){
    if(aToggle){
        aPopUp.style.display = "none";
        aToggle = false;
    }
});


let aToggle = false;
aText.addEventListener("click", function(){
    if(!aToggle){;
        aPopUp.style.display = "flex";
        aToggle = true;
    }
});

hideBText.addEventListener("click", function(){
    if(bToggle){
        bPopUp.style.display = "none";
        bToggle = false;
    }
});


let bToggle = false;
bText.addEventListener("click", function(){
    if(!bToggle){;
        bPopUp.style.display = "flex";
        bToggle = true;
    }
});

hideCText.addEventListener("click", function(){
    if(cToggle){
        cPopUp.style.display = "none";
        cToggle = false;
    }
});


let cToggle = false;
cText.addEventListener("click", function(){
    if(!cToggle){;
        cPopUp.style.display = "flex";
        cToggle = true;
    }
});



