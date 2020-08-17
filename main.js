import images from './images.js';

let myImg = document.getElementById("img-slider");
let myButtons = document.getElementById("toggole-img");
let next = document.getElementById("next");
let prevouse = document.getElementById("prevouse");

next.addEventListener('click', showNextImg);
prevouse.addEventListener('click', showPrevouseImg);
prevouse.disabled = true;
let currentImg = 1;
let btnArr;

function disableButtons(){
    currentImg > 1 ?  prevouse.disabled = false : prevouse.disabled = true;
    currentImg == images.length ? next.disabled = true : next.disabled = false;
}

function addActiveClass(){
    btnArr.map(btn => {
        if(btn.id == currentImg) btn.classList = 'w3-button w3-green btns';
        else btn.classList = 'w3-button w3-teal btns';
    })
}

function changeSliderImg(event) {
    currentImg = event.currentTarget.id;
    let img = images.filter(img => img.id == event.currentTarget.id);
    myImg.innerHTML = `<div class="img-info"> ${img[0].id}/${images.length} </div> <img src='${img[0].img}'>`;
    disableButtons();
    addActiveClass();
}

function showNextImg(){
    if(currentImg == images.length){
        next.disabled = true;
        return;
    }
    ++currentImg;
    let img = images.filter(img => img.id == currentImg);
    myImg.innerHTML = `<div class="img-info"> ${img[0].id}/${images.length} 
                       </div> <img src='${img[0].img}'>`;
    addActiveClass();
    disableButtons()
}

function showPrevouseImg(){
    if(currentImg == 1){
        prevouse.disabled = true;
        return;
    }
    --currentImg;
    let img = images.filter(img => img.id == currentImg);
    myImg.innerHTML = `<div class="img-info"> ${img[0].id}/${images.length} 
                       </div> <img src='${img[0].img}'>`;
    addActiveClass();
    disableButtons()
}

function showImagegs(){
    let out = '';
    let btn = 1;
    for(let img of images){
        out += `
            <button id="${img.id}" 
                    class="w3-button w3-teal btns">${btn}</button>
        `;
        btn +=1;
    }

    myImg.innerHTML = `<div class="img-info"> ${currentImg}/${images.length} </div> <img src='./img/food-01.jpg'>`;
    myButtons.innerHTML = out;
    btnArr = Array.from(document.getElementsByClassName('btns'));
    btnArr.map(btn => btn.addEventListener('click', changeSliderImg));
    debugger
    btnArr[0].classList = 'w3-button w3-green btns';
}

showImagegs();