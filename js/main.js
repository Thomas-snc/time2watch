const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

btn1.onclick = () => document.body.style.backgroundColor = "#2F2F2F";
btn2.onclick = () => document.body.style.backgroundColor = "#dadada";
let btn, nom, prenom, email, ville, pays;
btn = document.getElementsByTagName("input")[3];
nom = document.getElementsByTagName("input")[0].value;
prenom = document.getElementsByTagName("input")[1].value;
email = document.getElementsByTagName("input")[2].value;
ville = document.getElementsByTagName("select")[0].value;
pays = document.getElementsByTagName("select")[1].value;
btn.addEventListener("click", e => {
    e.preventDefault();
    Formulaire();
});
let Formulaire = () => {
    btn = document.getElementsByTagName("input")[3];
    nom = document.getElementsByTagName("input")[0].value;
    prenom = document.getElementsByTagName("input")[1].value;
    email = document.getElementsByTagName("input")[2].value;
    ville = document.getElementsByTagName("select")[0].value;
    pays = document.getElementsByTagName("select")[1].value;
    console.log(nom, prenom, email, ville, pays);
    if (nom === "" || prenom === "" || email === "" || ville === "" || pays === "") {
        el.innerText = "Veuillez remplir tous les champs ";
        el.classList.remove("success");
        el.classList.add("error");
    } else {
        el.innerText = "Votre formulaire a bien été envoyé";
        el.classList.remove("error");
        el.classList.add("success");
        localStorage.setItem("user", nom + " | " + prenom + " | " + email + " | " + ville + " | " + pays);
        sessionStorage.setItem("user", "sessionid");

    }
};
