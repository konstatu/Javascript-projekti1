//Projekti 1 script-tiedosto


// Etsii elementit tag-nimien mukaan ja piilottaa ne.
document.getElementsByTagName("div")[1].style.visibility = "hidden";
document.getElementsByTagName("div")[5].style.visibility = "hidden";
document.getElementsByTagName("button")[1].style.visibility = "hidden";
document.getElementsByTagName("table")[0].style.visibility = "hidden";

// Etsii painikkeen ja luo siitä muuttujan
var tehdä = document.getElementById("avata");
//Vaihtaa rungon värin keltaiseksi
	document.body.style.background = "yellow";
//Vaihtaa fontin värin siniseksi
	document.body.style.color = "blue";

// Lisää elementtiin tapahtumaluettelon
// Funktio näyttää ja piillottaa elementtejä ja niiden sisältöä.
tehdä.addEventListener("click", function () {
    // Luo valintaruutumuuttujan
    var consent = document.getElementById("Muokata");
    var refuse = document.getElementById("Katsoa");
    // Jos valitaan muokata-vaihtoehto
    if (consent.checked == true && refuse.checked == false) {
        // Muutetaan elementtien ja niiden sisältöjen näkyvyysasetuksia
        document.getElementsByTagName("div")[1].style.visibility = "visible";
        document.getElementsByTagName("div")[2].style.display = "none";
        document.getElementsByTagName("div")[3].style.display = "none";
        document.getElementsByTagName("div")[5].style.visibility = "hidden";
        document.getElementsByTagName("button")[1].style.visibility = "visible";
        document.getElementsByTagName("table")[0].style.visibility = "visible";
        // Jos valitaan katsoa-vaihtoehto
    } else if (refuse.checked == true && consent.checked == false) {
        document.getElementsByTagName("div")[1].style.visibility = "hidden";
        var ending = document.getElementsByTagName("div")[2];
        ending.innerHTML = "Tästä voit katsoa tehtävälistaasi";
        document.getElementsByTagName("div")[3].style.display = "none";
        document.getElementsByTagName("div")[4].style.display = "none";
        document.getElementsByTagName("div")[5].innerHTML = "Continue";
        document.getElementsByTagName("table")[0].style.visibility = "visible";
        document.getElementsByTagName("button")[1].style.visibility = "visible";
        document.getElementsByTagName("button")[1].innerHTML = "Palaa alkuun";
        var palaa = document.getElementsByTagName("button")[1];
        // Luo tapahtuman elementille
        palaa.addEventListener("click", function () {
            // Lataa sivun uudestaan eli palaa alkuun
            location.reload();
        });
        // Jos valitaan molemmat vaihtoehdot eli katsoa ja muokata   
    } else {
        // Ilmaisee ongelman hälyytysruudulla
        alert("Valintaasi ei voida suorittaa!!")
    }
});
// Etsii painike-elementin Tag-nimen mukaan ja luo siitä muuttujan.
var element = document.getElementsByTagName("button")[1];

//Lisää elementtiin tapahtumaluettelon
// Funktio luo uuden rivin, jossa on syöttökentät ja pudotusvalinnat taulukko
element.addEventListener("click", function () {

    // Etsii painikeelementin taginimen mukaan ja piilottaa sen.
    document.getElementsByTagName("button")[1].style.display = "none";
    // Etsii taulukkoelementin taginimen mukaan ja luo muuttujan.
    var table = document.getElementsByTagName("table")[0];
    // Lisää taulukkoon rivin
    var row = table.insertRow(-1);
    // Lisää riville 3 solua
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    // Lisää syöttökentät kahteen ensimmäiseen soluun. Ensimmäisessä solussa on myös tyhjä lomake-elementti, jonka tunnus on "feedback". 
    cell1.innerHTML = "<form name='firstform' class='form'><input type='text' name='Mitä'></input></form><span id='feedback'></span>";
    cell2.innerHTML = "<form name='secondform' class='form'><input type='text' name='Päivämäärä'></input></form><span id='feedback'></span>";
    //Lisää pudotusvalinnan kolmanteen soluun
    cell3.innerHTML = "<form name='firstselect' class='form'><select name='prioriteetti'><option value='Ei määritelty'>Ei määritelty<option value='Ei kiireellinen'>Ei kiireellinen<option value='Kiireellinen'>Kiireellinen<option value='Tärkeä'>Tärkeä</select></form>";
//Luo uuden painikkeen
    var accept = document.createElement('button');
    // Asettaa id-attribuutin elementille.
    accept.setAttribute('id', 'accept');
    // Muuttaa HTML-sisältöä.
    accept.innerHTML = "Lisää tehtävä taulukkoon";
    // Liittää luodun elementin valittuun HTML-sisältöön.
    document.getElementById("emptyplace").appendChild(accept);
    // Luo muuttujan painike-elementille.
    var databutton = document.getElementById('accept');
    // Lisää elementtiin tapahtumaluettelon napsautustapahtumalla.
    // Toiminto tarkistaa, onko ensimmäinen syöttökenttä tyhjä, ja muuttaa HTML-sisältöä syötetiedoilla.
    databutton.addEventListener("click", function () {
        // Luo muuttujan ensimmäiselle kirjoituskentän arvolle.
        var b = document.forms.firstform.Mitä.value;
        // Jos ensimmäisessä kentässä ei ole kirjoitettuja tietoja.
        if (b == "") {
            // Vaihtaa ensimmäisen syöttökentän reunan siniseksi.
            document.forms.firstform.Mitä.style.border = "solid blue";
            // Muuttaa ensimmäisen luodun solun lomake-elementin HTML-sisältöä.
            document.getElementById("feedback").innerHTML = "Lisää tehtävä";
			        alert("Virhe havaittu kohdassa tehtävä!")

            // Jos ensimmäisessä kentässä on kirjoitettuja tietoja.
        } else {
            // Muuttaa näkyvän div-elementin.
            document.getElementsByTagName("div")[5].style.visibility = "visible";
            // Vaihtaa ensimmäisen solun HTML-sisällön kirjoitettuihin tietoihin.
            document.forms.firstform.innerHTML = document.forms.firstform.Mitä.value;
            // Muuttaa palautelomakkeen HTML-sisällön tyhjäksi.
            document.getElementById("feedback").innerHTML = "";
            // Vaihtaa toisen solun HTML-sisällön kirjoitetuksi dataksi.
            document.forms.secondform.innerHTML = document.forms.secondform.Päivämäärä.value;
            // Luo muuttujia pudotusvalikoihin.
            var x = document.forms.firstselect.prioriteetti.value;
            // Vaihtaa HTML-sisällön ensimmäiseksi avattavaksi soluksi arvon mukaan.
            if (x == "Ei määritelty") {
                document.forms.firstselect.innerHTML = "Ei määritelty";
            } else if (x == "Ei kiireellinen") {
                document.forms.firstselect.innerHTML = "Ei Kiireellinen";
            } else if (x == "Kiireellinen") {
                document.forms.firstselect.innerHTML = "Kiireellinen";
            } else if (x == "Tärkeä") {
                document.forms.firstselect.innerHTML = "Tärkeä";
            }
            // Poistaa luodun painikeelementin HTML-sisällöstä.
            document.getElementById("emptyplace").removeChild(databutton);
        }
    });
});
// Etsii painike-elementin tunnuksen perusteella.
var TyhjäSivu = document.getElementById("painike2");
// Lisää elementtiin tapahtumaluettelon napsautustapahtumalla.
TyhjäSivu.addEventListener("click", function () {
// Funktio piilottaa elementtejä tai niiden sisältöjä.
    document.getElementsByTagName("div")[1].style.visibility = "hidden";
    document.getElementsByTagName("div")[5].style.visibility = "hidden";
    document.getElementsByTagName("button")[0].style.display = "none";
    document.getElementsByTagName("table")[0].style.display = "none";
    // Etsii div-elementin taginimen mukaan ja luo muuttujan.
    var lopetus = document.getElementsByTagName("div")[4];
    // Muuttaa näkyvän div-elementin ja muuttaa sen HTML-sisältöä.
    lopetus.style.visibility = "visible";
	//Vaihtaa rungon taustavärin mustaksi
	document.body.style.background = "black";

    lopetus.innerHTML = "Nyt voit sulkea selaimen!";
});

