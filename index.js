let scrollContainer=document.querySelector(".gallery");
let backBtn=document.getElementById("backBtn");
let nextBtn=document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel",(event)=>{
    event.preventDefault(); //down and up nu page scroll bandh karshe
    scrollContainer.scrollLeft +=event.deltaY;
    scrollContainer.style.scrollBehavior="auto";
})
nextBtn.addEventListener("click",(event)=>{
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft +=900;
})
backBtn.addEventListener("click",(event)=>{
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft -=300;
})