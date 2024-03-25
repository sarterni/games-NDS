
// const monstre = {
//      "name": "demo",
//      "life": 4,
//      "money": 1,
//      "awake": true 
//    };



//   const monstre: {
//     name: string;
//     life: number;
//     money: number;
//     awake: boolean;
// }
"use strict";
window.addEventListener("load", () => {
    console.log("hello");

    const monstre = new Object();
    monstre.name = "Cerbère";
    monstre.life = 4;
    monstre.money = 1;
    monstre.awake = true;

    function init(n, l, m, a) {
        monstre.name = n;
        monstre.life = l;
        monstre.money = m;
        monstre.awake = a;
    }
    // ça marche 
    function showme() {
        alert("name: " + monstre.name + "\nlife: " + monstre.life + "\nmoney: " + monstre.money + "\nawake: " + monstre.awake);


    }
    const start = document.getElementById("helpbtn");
    start.addEventListener("click", () => {
        showme();
    }
    )





    function hasard(min, max) { // fonction qui retourne un nombre aléatoire entre min et max 
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function log(message) {

        const actionbox = document.getElementById("actionbox");
        const newp = document.createElement("p");
        newp.innerHTML = message;
        actionbox.insertBefore(newp, actionbox.firstChild);
    }

    function displayStatus() {
        const statusbox = document.getElementById("statusbox");
        statusbox.innerHTML = "name: " + monstre.name + "<br>life: " + monstre.life + "<br>money: " + monstre.money + "<br>awake: " + monstre.awake;
        changeColor(monstre.life);
    }

    document.addEventListener("click", run);
    document.addEventListener("click", fight);
    document.addEventListener("click", work);
    document.addEventListener("click", eat);
    document.addEventListener("click", sleep);
    document.addEventListener("click", show);
    document.addEventListener("click", newlife);
    document.addEventListener("click", kill);
    document.addEventListener("click", darkmode);




    function run() {
        const startbtn = document.getElementById("runbtn");
        startbtn.addEventListener("click", () => {
            init("Cerbère", 4, 1, true);
            log("C'est parti");
            displayStatus();
        });
    }






    function fight() {
        const fightbtn = document.getElementById("fightbtn");
        fightbtn.addEventListener("click", () => {
            const damage = hasard(1, 3);
            monstre.life -= damage;
            log("Le monstre a subi " + damage + " dégâts");
            if (monstre.life <= 0) {
                log("Le monstre est mort");
                monstre.awake = false;
            }
            displayStatus();
        });
    }



    function work() {
        const workbtn = document.getElementById("workbtn");
        workbtn.addEventListener("click", () => {
            if (monstre.awake) {
                const gain = hasard(1, 3);
                monstre.money += gain;
                log("Le monstre a gagné " + gain + " pièces d'or");
            } else {
                log("Le monstre est mort");
            }
            displayStatus();
        });
    }



    function eat() {
        const eatbtn = document.getElementById("eatbtn");
        eatbtn.addEventListener("click", () => {
            if (monstre.money >= 2) {
                monstre.money -= 2;
                monstre.life += 2;
                log("Le monstre a mangé et gagné 2 points de vie");
            } else {
                log("Le monstre n'a pas assez d'argent");
            }
            displayStatus();
        });
    }




    function sleep() {
        const sleepbtn = document.getElementById("sleepbtn");
        sleepbtn.addEventListener("click", () => {
            if (monstre.awake) {
                monstre.life += 1;
                log("Le monstre a gagné 1 point de vie");
            } else {
                log("Le monstre est mort");
            }
            displayStatus();
        });
    }
    
    function show() {
        const showbtn = document.getElementById("showbtn");
        showbtn.addEventListener("click", () => {
            init("Cerbère", 4, 1, true);
            showme();
        });
    }
    

    function newlife() {
        const newlifebtn = document.getElementById("newlife-btn");
        newlifebtn.addEventListener("click", () => {
            init("Cerbère", 4, 1, true);
            log("C'est parti");
            displayStatus();
        });
    }

    function kill() {
        const killbtn = document.getElementById("kill-btn");
        killbtn.addEventListener("click", () => {
            monstre.life = 0;
            monstre.awake = false;
            log("Le monstre est mort");
            displayStatus();
        });
    }
    

    function darkModeFunction() {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }
    
    function darkmode() {
        const darkmodebtn = document.getElementById("darkmode-btn");
        darkmodebtn.addEventListener("click", () => {
            darkModeFunction();
        });
    }

    
    function changeColor(life) {
        if (life <= 0) {
            document.getElementById("monster").style.backgroundColor = "red";
        }
        else if (life <= 2) {
            document.getElementById("monster").style.backgroundColor = "orange";
        }
        else if (life <= 4) {
            document.getElementById("monster").style.backgroundColor = "yellow";
            document.getElementById("text").style.color = "black";
        }
        else if (life <= 6) {
            document.getElementById("monster").style.backgroundColor = "green";
        }
    }






    // permet de jouer au jeu au clavier
    document.addEventListener("keypress", function (event) {
        if (event.key === "h") {
            event.preventDefault();
            document.getElementById("helpbtn").click();
        }
        if (event.key === "r") {
            event.preventDefault();
            document.getElementById("runbtn").click();
        }
        if (event.key === "f") {
            event.preventDefault();
            document.getElementById("fightbtn").click();
        }
        if (event.key === "w") {
            event.preventDefault();
            document.getElementById("workbtn").click();
        }
        if (event.key === "e") {
            event.preventDefault();
            document.getElementById("eatbtn").click();
        }
        if (event.key === "s") {
            event.preventDefault();
            document.getElementById("sleepbtn").click();
        }
        if (event.key === "n") {
            event.preventDefault();
            document.getElementById("newlife-btn").click();
        }
        if (event.key === "k") {
            event.preventDefault();
            document.getElementById("kill-btn").click();
        }

        if (event.key === "d") {
            event.preventDefault();
            document.getElementById("darkmode-btn").click();
        }


    })

});