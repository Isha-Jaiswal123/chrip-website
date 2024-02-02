let dropdown1=document.querySelector(".dropdown-nav ul");
let show=true;
function dropdown(){
    if(show){
        dropdown1.style.display="flex";
        show=false;
    }else{
        dropdown1.style.display="none"; 
        show=true;
    }  
}