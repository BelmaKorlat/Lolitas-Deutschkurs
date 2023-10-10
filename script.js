let kontej = document.getElementById("kontejner");

function klik1() {
    kontej.style.backgroundImage = "url(slika1.jpeg)";
    document.getElementById("dugme1").style.backgroundColor = "rgb(244, 243, 238)";
    document.getElementById("dugme2").style.backgroundColor = "rgb(89, 87, 88)";
    document.getElementById("dugme3").style.backgroundColor = "rgb(89, 87, 88)";
}

function klik2() {
    kontej.style.backgroundImage = "url(slika2.jpeg)";
    document.getElementById("dugme1").style.backgroundColor = "rgb(89, 87, 88)";
    document.getElementById("dugme2").style.backgroundColor = "rgb(244, 243, 238)";
    document.getElementById("dugme3").style.backgroundColor = "rgb(89, 87, 88)";
}

function klik3() {
    kontej.style.backgroundImage = "url(slika3.jpeg)";
    document.getElementById("dugme1").style.backgroundColor = "rgb(89, 87, 88)";
    document.getElementById("dugme2").style.backgroundColor = "rgb(89, 87, 88)";
    document.getElementById("dugme3").style.backgroundColor = "rgb(244, 243, 238)";
}

var brojac = 1;

function lijevo() {
    if (document.getElementById("dugme1").style.backgroundColor == "rgb(244, 243, 238)") {
        klik3();
    }

    else if (document.getElementById("dugme2").style.backgroundColor == "rgb(244, 243, 238)") {
        klik1();
    }

    else if (document.getElementById("dugme3").style.backgroundColor == "rgb(244, 243, 238)") {
        klik2();
    }
}

function desno() {
    if (document.getElementById("dugme1").style.backgroundColor == "rgb(244, 243, 238)") {
        klik2();
    }

    else if (document.getElementById("dugme2").style.backgroundColor == "rgb(244, 243, 238)") {
        klik3();
    }

    else if (document.getElementById("dugme3").style.backgroundColor == "rgb(244, 243, 238)") {
        klik1();
    }
}

klik1();