const slider = document.querySelector(".offers-con");

let circuleone = document.getElementsByClassName("circuleone");
let circuletwo = document.getElementsByClassName("circuletwo");
let circulethree = document.getElementsByClassName("circulethree");

document.querySelector(".btn2").onclick = () => {
    slider.scrollBy({ left: slider.clientWidth, behavior: "smooth" });
	setTimeout(circleUpdate, 350);
};

document.querySelector(".btn1").onclick = () => {
    slider.scrollBy({ left: -slider.clientWidth, behavior: "smooth" });
	setTimeout(circleUpdate, 350);
};


function circleUpdate(){
    let current = slider.scrollLeft;
    let width = slider.clientWidth;

    circuleone.classList.remove("white");
    circuletwo.classList.remove("white");
    circulethree.classList.remove("white");


    if(current < width * 0.5){
        circuleone.classList.add("white");
    }

    else if(current < width * 1.5){
        circuletwo.classList.add("white");
    }

	else{
        circulethree.classList.add("white");
    }
}