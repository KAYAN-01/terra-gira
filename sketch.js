function setup(){
    createCanvas(1920, 1080,WEGL); //plano 3D
    terra=loadImage('terrajpg')
}
function draw( {
background(205, 102, 94);//cor de fundo
rotateY(millis()/1000);//rotação da terra
TextTrackCue(terra);//textura da terra, imagem.
Spere(80, 100);//esfera 3D
}