let pelivuoro = 1;
let pelaajaMaara = 0;
let pisteet = 0;


/*PELLIN VALMISTAUTUMINEN*/

function syotteenTarkistus(event) {

    
    event.preventDefault();
    let saavutettavaPistemaara = document.getElementById("paamaara").value;
    let pelaaja1 = document.getElementById("p1").value;
    let pelaaja2 = document.getElementById("p2").value;
    let pelaaja3 = document.getElementById("p3").value;
    let pelaaja4 = document.getElementById("p4").value;


    if (pelaaja1 === "" && pelaaja2 === "" && pelaaja3 === "" && pelaaja4 === "") {
        alert("Tarvitaan ainakin yksi pelaaja!")
        return;


       //NÅYTTÄÄ TYHMÄLTÄ MUTTA TOIMII

    }
    if(pelaaja1 === "" && pelaaja2 !== "" && pelaaja3 === "" && pelaaja4 === ""){
        alert("Pelaajat tulee syöttää järjestyksessä vasemmalta oikealla.")
        location.reload("1noppapeli.html")
    }
    if(pelaaja1 === "" && pelaaja2 === "" && pelaaja3 !== "" && pelaaja4 === ""){
        alert("Pelaajat tulee syöttää järjestyksessä vasemmalta oikealla.")
        location.reload("1noppapeli.html")
    }
    if(pelaaja1 === "" && pelaaja2 === "" && pelaaja3 === "" && pelaaja4 !== ""){
        alert("Pelaajat tulee syöttää järjestyksessä vasemmalta oikealla.")
        location.reload("1noppapeli.html")
    }
    if(pelaaja1 === "" && pelaaja2 !== "" && pelaaja3 !== "" && pelaaja4 !== ""){
        alert("Pelaajat tulee syöttää järjestyksessä vasemmalta oikealla.")
        location.reload("1noppapeli.html")
    }
    if(pelaaja1 === "" && pelaaja2 === "" && pelaaja3 !== "" && pelaaja4 !== ""){
        alert("Pelaajat tulee syöttää järjestyksessä vasemmalta oikealla.")
        location.reload("1noppapeli.html")
    }
    if(pelaaja1 === "" && pelaaja2 !== "" && pelaaja3 === "" && pelaaja4 !== ""){
        alert("Pelaajat tulee syöttää järjestyksessä vasemmalta oikealla.")
        location.reload("1noppapeli.html")
    }
    if(pelaaja1 !== "" && pelaaja2 === "" && pelaaja3 !== "" && pelaaja4 === ""){
        alert("Pelaajat tulee syöttää järjestyksessä vasemmalta oikealla.")
        location.reload("1noppapeli.html")
    }
    if(pelaaja1 !== "" && pelaaja2 === "" && pelaaja3 !== "" && pelaaja4 !== ""){
        alert("Pelaajat tulee syöttää järjestyksessä vasemmalta oikealla.")
        location.reload("1noppapeli.html")
    }
    if(pelaaja1 !== "" && pelaaja2 === "" && pelaaja3 === "" && pelaaja4 !== ""){
        alert("Pelaajat tulee syöttää järjestyksessä vasemmalta oikealla.")
        location.reload("1noppapeli.html")
    }
    if(pelaaja1 === "" && pelaaja2 !== "" && pelaaja3 !== "" && pelaaja4 === ""){
        alert("Pelaajat tulee syöttää järjestyksessä vasemmalta oikealla.")
        location.reload("1noppapeli.html")
    }


    if (saavutettavaPistemaara === "0") {
        alert("Ei, ei, ei...")
        return;

    }
    if (pelaaja1 !== "") {
        pelaajaMaara++;
    }
    if (pelaaja2 !== "") {
        pelaajaMaara++;
    }
    if (pelaaja3 !== "") {
        pelaajaMaara++;
    }
    if (pelaaja4 !== "") {
        pelaajaMaara++;
    }

    if (saavutettavaPistemaara === "") {
        alert("Syötä saavutettava pistemäärä!")
        return;
    }
    if (saavutettavaPistemaara.match(/[^0-9]/)) {
        alert("Tuossa ei nyt kyllä ole mitään järkeä.")
        return;
    }


    if (saavutettavaPistemaara < 20) {
        alert("Minimipistemäärä on 20.")
        return;


    }
    document.getElementById("pelaaPelia").style.display = "block";
    document.getElementById("piilotaTiedot").style.display = "none";
}


function pelinAlku() {

    let pelaaja1 = document.getElementById("p1").value;
    let pelaaja2 = document.getElementById("p2").value;
    let pelaaja3 = document.getElementById("p3").value;
    let pelaaja4 = document.getElementById("p4").value;
    let pisteet = document.getElementById("paamaara").value;

    document.getElementById("pt1").textContent = pelaaja1;
    document.getElementById("pt2").textContent = pelaaja2;
    document.getElementById("pt3").textContent = pelaaja3;
    document.getElementById("pt4").textContent = pelaaja4;
    document.getElementById("pistetavoite").textContent = pisteet;
    document.getElementById("pt1").style.color = "blue";
    document.getElementById("pt2").style.color = "green";
    document.getElementById("pt3").style.color = "red";
    document.getElementById("pt4").style.color = "yellow";

    if (document.getElementById("pt1").textContent != "") {
        document.getElementById("pi1").textContent = "0";
    }
    if (document.getElementById("pt2").textContent != "") {
        document.getElementById("pi2").textContent = "0";
    }
    if (document.getElementById("pt3").textContent != "") {
        document.getElementById("pi3").textContent = "0";
    }

    if (document.getElementById("pt4").textContent != "") {
        document.getElementById("pi4").textContent = "0";
    }

}


/* PELIN PELUU */


//let sattuma = Math.floor(Math.random() * 6) + 1;;

function nopanHeitto() {

    let vuoro = document.getElementById("pelivuoro");

    vuoro.textContent = "Pelaajan " + pelivuoro + " vuoro"

    let tulostus = document.getElementById("tulos");
    let sattuma = Math.floor(Math.random() * 6) + 1;
    let kuvat = ["d1.gif", "d2.gif", "d3.gif", "d4.gif", "d5.gif", "d6.gif"]
    let kuvaHaku = "grafiikat/" + kuvat[sattuma - 1];
    let kuva = new Image();
    kuva.src = kuvaHaku;
    tulostus.innerHTML = "";
    tulostus.appendChild(kuva);
    if (sattuma === 1) {
        pisteet = 0;
        pelivuoro = (pelivuoro % pelaajaMaara) + 1;
        vuoro.textContent = "Pelaajan " + pelivuoro + " vuoro"
    } else {
        pisteet = pisteet + sattuma;
    }
}

function pisteidenLisays() {

    let pistelisays = document.getElementById("pistetila");
    pistelisays.textContent = pisteet;


    let pelaaja;
    if (pelivuoro === 1) {
        pelaaja = document.getElementById("pt1");
        
    } else if (pelivuoro === 2) {
        pelaaja = document.getElementById("pt2");
    } else if (pelivuoro === 3) {
        pelaaja = document.getElementById("pt3");
    } else {
        pelaaja = document.getElementById("pt4");
    }

}

function lopetaHeitto() {

    

    let pelaaja;
    let pistelisays = document.getElementById("pistetila");
    let pelaajanPisteet;

    if (pelivuoro === 1) {
        pelaaja = document.getElementById("pi1");
    } else if (pelivuoro === 2) {
        pelaaja = document.getElementById("pi2");
    } else if (pelivuoro === 3) {
        pelaaja = document.getElementById("pi3");
    } else {
        pelaaja = document.getElementById("pi4");
    }

    pelaajanPisteet = parseInt(pelaaja.textContent);
    pelaajanPisteet += pisteet;
    pelaaja.textContent = pelaajanPisteet;


    pelivuoro = (pelivuoro % pelaajaMaara) + 1;

    let vuoro = document.getElementById("pelivuoro");

    vuoro.textContent = "Pelaajan " + pelivuoro + " vuoro"


    pisteet = 0;
    pistelisays.textContent = 0;   
}

function voitto(){

    let tavoite = parseInt(document.getElementById("pistetavoite").textContent);

    let piste1 = parseInt(document.getElementById("pi1").textContent);
    let piste2 = parseInt(document.getElementById("pi2").textContent);
    let piste3 = parseInt(document.getElementById("pi3").textContent);
    let piste4 = parseInt(document.getElementById("pi4").textContent);

    let pelaaja1 = document.getElementById("pt1").textContent;
    let pelaaja2 = document.getElementById("pt2").textContent;
    let pelaaja3 = document.getElementById("pt3").textContent;
    let pelaaja4 = document.getElementById("pt4").textContent;


    if(piste1 >= tavoite){
        alert(pelaaja1 + " voitti pelin!")
        location.reload("index.html")
    }
    if(piste2 >= tavoite){
        alert(pelaaja2 + " voitti pelin!")
        location.reload("index.html")
    }
    if(piste3 >= tavoite){
        alert(pelaaja3 + " voitti pelin!")
        location.reload("index.html")
    }
    if(piste4 >= tavoite){
        alert(pelaaja4 + " voitti pelin!")
        location.reload("index.html")
    }

}













