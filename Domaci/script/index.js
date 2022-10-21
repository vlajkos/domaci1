let ime = document.querySelector("#ime");
let adresa = document.querySelector("#adresa");
let napomena = document.querySelector("#napomena");
let dugme = document.querySelector("#dugme");
let kod = document.querySelector("#kod");




dugme.addEventListener("click", function (event) {
    if (ime.value === "") {
        ime.setAttribute("placeholder", "Polje je obavezno!");
        event.preventDefault();
        ime.classList.add("upozorenje");
    }
    if (adresa.value === "") {
        adresa.setAttribute("placeholder", "Polje je obavezno!");
        event.preventDefault();
        adresa.classList.add("upozorenje");
    }
    if (kod.value === "") {
        kod.setAttribute("placeholder", "Polje je obavezno!");
        event.preventDefault();
        kod.classList.add("upozorenje");
    }
    dugme.setAttribute("href", `mailto:kaleidoskop@gmail.com?subject=Porudžbina&body=${ime.value}%0D%0A${adresa.value}%0D%0A${kod.value}%0D%0A${napomena.value}`);
});

ime.addEventListener("mouseover", function () {
    ime.classList.remove("upozorenje");

})
adresa.addEventListener("mouseover", function () {
    adresa.classList.remove("upozorenje");

})
kod.addEventListener("mouseover", function () {
    kod.classList.remove("upozorenje");

})
