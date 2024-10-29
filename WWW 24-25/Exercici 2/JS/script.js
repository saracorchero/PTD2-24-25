let llistajugadors = [];

// así creamos un vector/array vacío

function afegirjugador(){
    
    let jugador = document.getElementById("camp_nom").value;

    document.getElementById("jugadors").innerHTML += `${jugador} <br>` 

    llistajugadors.push(jugador);
}

function nextplayer(){

    document.getElementById("jugador_actual").innerHTML = llistajugadors[0];

    let jugador_actual = llistajugadors.shift();

    llistajugadors.push(jugador_actual)

    document.getElementById("jugadors").innerHTML = " ";

    for (let i=0;i<llistajugadors.length;i++) {
        document.getElementById("jugadors").innerHTML += `${llistajugadors[i]} <br>` ;
    }

}