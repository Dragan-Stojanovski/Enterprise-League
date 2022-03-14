let buttonOne=document.querySelector(".btn-news");
let buttonTwo=document.querySelector(".btn-news-2");

var click=document.querySelector(".ha11")
let titleOne=document.querySelector(".header-captin-1");
let titleTwo=document.querySelector(".header-captin-2");

let firstContent=document.querySelector(".box");
let secondContent=document.querySelector(".second-content");

let body=document.querySelector("body");
let popUp=document.querySelector(".pop-up");
let popBtnOne=document.querySelector(".pop-btn-1");
let popBtnTwo=document.querySelector(".pop-btn-2");
let time=10000;
popUp.classList.add("display-class");


titleTwo.style.visibility="hidden";
buttonOne.style.textDecoration="underline solid #48b2fb 5px";
buttonOne.style.textUnderlineOffset="8px";
buttonOne.addEventListener("click",function(){
    titleOne.style.visibility="visible";
    firstContent.classList.remove("display-class");
    titleTwo.style.visibility="hidden";
    secondContent.classList.add("display-class")
    buttonOne.style.textDecoration="underline solid #48b2fb 5px";
    
    buttonTwo.style.textDecoration="none";

});


buttonTwo.addEventListener("click",function(){
    secondContent.classList.remove("display-class")
    secondContent.classList.remove("second-content")
    titleOne.style.visibility="hidden";
    firstContent.classList.add("display-class");
    titleTwo.style.visibility="visible";
    buttonOne.style.textDecoration="none";
    buttonTwo.style.textDecoration="underline solid #48b2fb 5px";
    buttonTwo.style.textUnderlineOffset="8px";
})


setTimeout(function(){
    popUp.classList.remove("display-class");
    body.style.overflow="hidden";
    if ("key1" in localStorage) {
        popUp.classList.add("display-class");
        body.style.overflow="visible";
    }else if("key2" in localStorage){
        popUp.classList.add("display-class");
        body.style.overflow="visible";
    }
},time)


popBtnOne.addEventListener("click",function(){
    popUp.classList.add("display-class");
    localStorage.setItem("key1", "Theres no business");
    body.style.overflow="visible";

});


popBtnTwo.addEventListener("click",function(){
    popUp.classList.add("display-class");
    localStorage.setItem("key2", "Succes");
    body.style.overflow="visible";
});

