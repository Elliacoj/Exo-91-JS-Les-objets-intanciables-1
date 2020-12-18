let Personne = function (nom, prenom, age, sex) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.sex = sex;

    this.getIdentity = function () {
        return this.nom + " " + this.prenom + " a " + this.age + " et est un/une " + this.sex;
    }

    this.getChange = function (nom, prenom) {
        return (this.nom = nom) && (this.prenom = prenom);
    }

}

let john = new Personne("Doe", "John", "45 ans", "male");
let steve = new Personne("Air", "Steve", "25 ans", "male");

let propriete1 = document.getElementsByClassName("propriet1");
let propriete2 = document.getElementsByClassName("propriet2");
let propriete3 = document.getElementsByClassName("propriet3");
let propriete4 = document.getElementsByClassName("propriet4");
let method1 = document.getElementsByClassName("method1");
let method2 = document.getElementsByClassName("method2");

propriete1[0].innerHTML = john.nom;
propriete2[0].innerHTML = john.prenom;
propriete3[0].innerHTML = john.age;
propriete4[0].innerHTML = john.sex;

propriete1[1].innerHTML = steve.nom;
propriete2[1].innerHTML = steve.prenom;
propriete3[1].innerHTML = steve.age;
propriete4[1].innerHTML = steve.sex;

method1[0].innerHTML = john.getIdentity();
john.getChange("John", "Doe");
method2[0].innerHTML = john.getIdentity();

method1[1].innerHTML = steve.getIdentity();
steve.getChange("Steve", "Air");
method2[1].innerHTML = steve.getIdentity();