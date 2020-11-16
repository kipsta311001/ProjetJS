

//largeur du canvas
let largeur = 1500;
// hauteur du canvas
let hauteur = 800;
let couleur="#DBDBDB";
// je dis que la forme de base est libre
var forme = "libre";
var epaisseur = 3 ;
var styleCouleur = "black" ;
var stylePCouleur = "#DBDBDB";


// J'initialise mon canvas avec la fonction initCanvas définie dans formes.js
canvas = initCanvas(largeur, hauteur, couleur);

// je recupere l'id des formes
var libre = document.getElementById("Libre");
var ligne = document.getElementById("Ligne");
var cercle = document.getElementById("Cercle");
var cercleplein = document.getElementById("CerclePlein");
var rectangle = document.getElementById("Rectangle");
var rectangleplein = document.getElementById("RectanglePlein");


libre.addEventListener("click",changeLibre,false);
ligne.addEventListener("click",changeLigne,false);
rectangle.addEventListener("click",changeRectangle,false);
cercle.addEventListener("click",changeCercle,false);
cercleplein.addEventListener("click",changeCerclePlein,false);
rectangleplein.addEventListener("click",changeRectanglePlein,false);



function changeRectanglePlein(){
     // alert("libre");
    forme = "rectangle";
    type = "plein";
}

function changeRectangle(){
    // alert("libre");
    forme = "rectangle";
    type = "nonPlein";

}

function changeLibre(){
   // alert("libre");
    forme = "libre";
}

function changeLigne(){
  //      alert("ligne");
    forme = "ligne";
}

function changeCercle(){
    // alert("libre");
    forme = "cercle";
    type = "nonPlein";

}

function changeCerclePlein(){
    // alert("libre");
    forme = "cercle";
    type = "plein";
}



// Je recupere l'id de l'epaisseur des lignes

var epai1 = document.getElementById("epai1");
var epai2 = document.getElementById("epai2");
var epai3 = document.getElementById("epai3");

epai1.addEventListener("click",changeEpai1,false);
epai2.addEventListener("click",changeEpai2,false);
epai3.addEventListener("click",changeEpai3,false);

function changeEpai1(){
    epaisseur = 1;

}

function changeEpai2(){
    epaisseur = 3;
}

function changeEpai3(){
    epaisseur = 5;
}

// Changer de couleurs

var red = document.getElementById("red");
var blue = document.getElementById("blue");
var green = document.getElementById("green");
var black = document.getElementById("black");
var white = document.getElementById("white");
var codeHexa = document.getElementById("codeHexa");
var codeHexa1 = document.getElementById("codeHexa1");


red.addEventListener("click",changeRed,false);
blue.addEventListener("click",changeBlue,false);
green.addEventListener("click",changeGreen,false);
black.addEventListener("click",changeBlack,false);
white.addEventListener("click",changeWhite,false);
codeHexa.addEventListener("click",changeCodeHexa,false);

function changeRed(){
    styleCouleur = "red";
}

function changeBlue(){
    styleCouleur = "blue";
}

function changeGreen(){
    styleCouleur = "green";
}

function changeBlack(){
    styleCouleur = "black";
}

function changeWhite(){
    styleCouleur = "white";
}

function changeCodeHexa(){
    styleCouleur = codeHexa1.value;
}



var pred = document.getElementById("pred");
var pblue = document.getElementById("pblue");
var pgreen = document.getElementById("pgreen");
var pblack = document.getElementById("pblack");
var pwhite = document.getElementById("pwhite");
var codePHexa = document.getElementById("codePHexa");
var codePHexa1 = document.getElementById("codePHexa1");


pred.addEventListener("click",changePRed,false);
pblue.addEventListener("click",changePBlue,false);
pgreen.addEventListener("click",changePGreen,false);
pblack.addEventListener("click",changePBlack,false);
pwhite.addEventListener("click",changePWhite,false);
codePHexa.addEventListener("click",changeCodePHexa,false);


function changePRed(){
    stylePCouleur = "red";
}

function changePBlue(){
    stylePCouleur = "blue";
}

function changePGreen(){
    stylePCouleur = "green";
}

function changePBlack(){
    stylePCouleur = "black";
}

function changePWhite(){
    stylePCouleur = "white";
}

function changeCodePHexa(){
    stylePCouleur = codePHexa1.value;
    console.log(codePHexa.value);
}



// Création d'un canvas
function initCanvas(largeur, hauteur, couleur){
    // Je créé un pointeur vers le canvas de la page HTML
    let canvas = document.getElementById('canvas');
    // Je précise la largeur du canvas
    canvas.setAttribute('width', largeur);
    // Je précise la longueur du canvas
    canvas.setAttribute('height', hauteur);
    // Je lance la fonction canvasMouseMove si je bouge la souris
    canvas.addEventListener('mousemove', e => canvasMouseMove(canvas, e), false);
    // Je lance la fonction canvasMouseDown si j'appuie sur le bouton gauche de la souris
    canvas.addEventListener('mousedown', e => canvasMouseDown(canvas, e), false);
    // Je lance la fonction canvasMouseUp si je relâche le bouton gauche de la souris
    canvas.addEventListener('mouseup', e => canvasMouseUp(canvas, e), false);
    // J'initialise le click à faux
    canvas.click = false;
    // Je récupère le contexte du canvas
    ctx = canvas.getContext('2d');
    // Je définis une couleur (passée en paramètre) pour le dessin
    ctx.fillStyle = couleur;
    // Je remplis la surface avec cette couleur
    ctx.fillRect(0,0, largeur, hauteur);
    // Je créé un canvas temporaire de la même taille que le canvas principal
    canvas.temporaire = document.createElement('canvas');
    canvas.temporaire.width = canvas.width;
    canvas.temporaire.height = canvas.height;
    // Je créé le pointeur vers le contexte du canvas temporaire
    canvas.temporaireCtx = canvas.temporaire.getContext('2d');
    // Je retourne le canvas

// Le contour du cadre

    ctx.lineWidth = 5;
    ctx.strokeStyle = "#000000";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(1500, 0);
    ctx.stroke();

    ctx.lineWidth = 5;
    ctx.strokeStyle = "#000000";
    ctx.beginPath();
    ctx.moveTo(1500, 0);
    ctx.lineTo(1500, 800);
    ctx.stroke();

    ctx.lineWidth = 5;
    ctx.strokeStyle = "#000000";
    ctx.beginPath();
    ctx.moveTo(1500, 800);
    ctx.lineTo(0, 800);
    ctx.stroke();

    ctx.lineWidth = 5;
    ctx.strokeStyle = "#000000";
    ctx.beginPath();
    ctx.moveTo(0, 800);
    ctx.lineTo(0, 0);
    ctx.stroke();


    return canvas;

}




function canvasMouseDown(canvas, e){
    canvas.click = true;

    if (forme == "ligne") {
        // Je garde en mémoire que j'ai cliqué et ensuite les coordonnées de mon premier point
        // Je récupère les coordonnées x du pointeur dans le canvas en retirant la position du canvas en left
        canvas.departX = e.clientX - canvas.getBoundingClientRect().left;
        // Je récupère les coordonnées y du pointeur dans le canvas en retirant la position du canvas en top
        canvas.departY = e.clientY - canvas.getBoundingClientRect().top;
        // Je garde en mémoire l'image actuelle du canvas et je la dessine dans le canvas temporaire
        canvas.temporaireCtx.drawImage(canvas, 0, 0);

    }else if(forme == "libre"){

        x = e.offsetX;
        y = e.offsetY;


    }else if(forme == "rectangle"){

        canvas.departX = e.clientX - canvas.getBoundingClientRect().left;
        // Je récupère les coordonnées y du pointeur dans le canvas en retirant la position du canvas en top
        canvas.departY = e.clientY - canvas.getBoundingClientRect().top;
        canvas.temporaireCtx.drawImage(canvas, 0, 0);



    }else if(forme == "cercle"){

        canvas.departX = e.clientX - canvas.getBoundingClientRect().left;
        // Je récupère les coordonnées y du pointeur dans le canvas en retirant la position du canvas en top
        canvas.departY = e.clientY - canvas.getBoundingClientRect().top;
        canvas.temporaireCtx.drawImage(canvas, 0, 0);



    }
}

function canvasMouseMove(canvas, e) {
    if (forme == "ligne") {

        // Lorsque je bouge la souris, je veux dessiner uniquement si j'ai appuyé sur le bouton
        if (canvas.click) {

            // Je récupère les coordonnées du 2 ème point
            x2 = e.clientX - canvas.getBoundingClientRect().left;
            y2 = e.clientY - canvas.getBoundingClientRect().top;
            // J'affiche sur le canvas, le canvas temporaire pour effacer ma ligne précédente
            drawImage(canvas, 0, 0, canvas.temporaire);
            // Je dessine ma nouvelle ligne
            drawLine(canvas, canvas.departX, canvas.departY, x2, y2);
            //   draw(canvas, canvas.departX, canvas.departY, x2, y2);


        }
    } else if (forme == "libre") {
        if (canvas.click) {
            drawManualLine(ctx, x, y, e.offsetX, e.offsetY);
            x = e.offsetX;
            y = e.offsetY;

        }
    } else if (forme == "rectangle") {
            if (canvas.click) {
                //alert("rectangle");
                x2 = e.clientX - canvas.getBoundingClientRect().left;
                y2 = e.clientY - canvas.getBoundingClientRect().top;
                drawImage(canvas, 0, 0, canvas.temporaire);
                drawRectangle(canvas, canvas.departX, canvas.departY, x2, y2);

       }


    }else if(forme == "cercle"){
        if (canvas.click) {

            x2 = e.clientX - canvas.getBoundingClientRect().left;
            y2 = e.clientY - canvas.getBoundingClientRect().top;
            drawImage(canvas, 0, 0, canvas.temporaire);
            drawCercle(canvas, canvas.departX, canvas.departY, x2, y2);
        }


    }
    }


function canvasMouseUp(canvas, e) {
    // Je ne suis plus en mode "cliqué""

    if (forme == "libre") {
        if (canvas.click) {
            drawManualLine(ctx, x, y, e.offsetX, e.offsetY);

        }
    }
    canvas.click = false;

}



//Dessine une ligne a mais levé
function drawManualLine(canvas, x1, y1, x2, y2){
    ctx.beginPath();
    ctx.strokeStyle = styleCouleur;
    ctx.lineWidth = epaisseur;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

//Dessine une ligne
function drawLine(canvas, x1, y1, x2, y2){
    ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.strokeStyle = styleCouleur;
    ctx.lineWidth = epaisseur;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

}

// Dessine une image
function drawImage(canvas, x, y, image){
    ctx = canvas.getContext('2d');
    ctx.drawImage(image, x, y);
}



function drawRectangle(canvas, x1, y1, x2, y2){
    ctx = canvas.getContext('2d');
    ctx.strokeStyle = styleCouleur;
    ctx.lineWidth = epaisseur;
    ctx.beginPath();
    ctx.rect(x1,y1,x2-x1,y2-y1);
    if (type == "plein"){
        ctx.fillStyle = stylePCouleur;
        ctx.fill();
    }
    ctx.stroke();

}

function drawCercle(canvas, x1, y1, x2, y2){
    ctx = canvas.getContext('2d');
    ctx.strokeStyle = styleCouleur;
    ctx.lineWidth = epaisseur;
    ctx.beginPath();
    uneLongueurCarre = (x2-x1)*(x2-x1);
    uneLargeurCarre = (y2-y1)*(y2-y1);
    resultat = Math.sqrt(uneLongueurCarre-uneLargeurCarre);
    resultat1 = Math.sqrt(uneLargeurCarre-uneLongueurCarre);
    ctx.arc(x1,y1, Math.abs(resultat), 0, 2 * Math.PI,false);
    if(Math.abs(x2-x1) >= Math.abs(y2-y1) ){
        ctx.arc(x1,y1, Math.abs(resultat), 0, 2 * Math.PI,false);
    }else{
        ctx.arc(x1,y1, Math.abs(resultat1), 0, 2 * Math.PI,false);
    }
    if (type == "plein"){
        ctx.fillStyle = stylePCouleur;
        ctx.fill();
    }
    ctx.stroke();
}









