let btnTop = document.getElementById("btnTop");

document.addEventListener("scroll", () =>{
    let positionScroll = document.documentElement.scrollTop;   //posicion del scroll
    //console.log(positionScroll);              
    let positionElement = btnTop.offsetTop;  //posicion elemento   369  
    //console.log(positionElement)
    if(positionScroll > positionElement - 200){    //169
        btnTop.classList.add("btnTop_JS")
        btnTop.style.transition = "0.5s"
    }else{
        btnTop.classList.remove("btnTop_JS");
    }
    
})