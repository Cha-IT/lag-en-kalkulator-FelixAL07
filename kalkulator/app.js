const tall1 = document.getElementById("tall1");
const tall2 = document.getElementById("tall2");
const svarboks = document.getElementById("svarboks");

function addisjon() {
    let svar = Number(tall1.value) + Number(tall2.value);
    svarboks.innerText = svar;
}

function subtrahering() {
    let svar = Number(tall1.value) - Number(tall2.value);
    svarboks.innerText = svar;
}

function multiplikasjon() {
    let svar = Number(tall1.value) * Number(tall2.value);
    svarboks.innerText = svar;
}

function divisjon() {
    let svar = Number(tall1.value)/Number(tall2.value);
    svarboks.innerText = svar;
}