var taskbar = document.getElementsByClassName("taskbar")[0]
var startmenu = document.getElementsByClassName("startmenu")[0]
var google = document.getElementsByClassName("google")[0]
var edge = document.getElementsByClassName("edge")[0]

taskbar.addEventListener("click", ()=>{
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
});

google.addEventListener("click",()=>{
    alert("Sorry! Chrome services unavailable");
});

edge.addEventListener("click",()=>{
    alert("Sorry! Microsoft Edge services unavailable");
});

