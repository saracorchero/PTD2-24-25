function cambiar(){
    let info = document.getElementById("informacion");
    let info2 = document.getElementById("informacion2");

    if (info.style.display == "none") {
        info.style.display = "flex";
        info2.style.display = "none";
    } else {
        info.style.display = "none";
        info2.style.display = "flex";
    }
    
}

function cambiar2(){
    let info2 = document.getElementById("informacion2");

    if (info2.style.display == "none") {
        info2.style.display = "block";

    } else {
        info2.style.display = "none";
    }
}