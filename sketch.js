//variáveis necessárias
var mario, marioImgD , marioImgE;
var nuvens , nuvens2
var ground,groundImg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score = 0;
var MariojumpD , MariojumpE
var Princesa
var jumpSound , dieSound , backgroundSound



//carregamento de Animações e images
function preload() {
    marioImgD = loadAnimation("./assets/mario1.png","./assets/mario2.png","/assets/mario3.png","/assets/mario4.png");
    marioImgE = loadAnimation("./assets/mario1E.png","./assets/mario2E.png","/assets/mario3E.png","/assets/mario4E.png");
    MariojumpE = loadImage ("./assets/MarioPulandoE.png");
    MariojumpD = loadImage ("./assets/MarioPulandoD.png"); 
    jumpSound = loadsound ("jump.mp3");
    dieSound = loadsound ("die.mp3");
    backgroundsound = loadsound ("background.mp3")
    nuvens = loadImage ("Nuvens.png")
    nuvens2 = loadImage ("Nuvens2.jpg")
    //Princesa = loadImage   ("./assets/Pricess.png");
}
  
    function setup() {
    //canvas
    createCanvas(windowWidth, windowHeight);

    //sprite do mário
    mario = createSprite(50, height -92, 20, 50);
    mario.addAnimation("mario1D",marioImgD);
    mario.addAnimation("mario1E",marioImgE);

    //sprite da peach
    Princesa = createSprite (100,height -93,20,50);
    
    //Sprite do chão
    ground = createSprite (width/2 ,height - 10,width,20)
    ground.shapeColor = "limegreen"

    //configuração dos botões
   


}

function draw() {
    //cor de fundo
    background("lightblue");
    fill ("gold");
    stroke (5)
    textSize(24)
    text ("Score: "+score, width-145,50);
    if (gameState === PLAY) {
        ground.velocityX = -4;
    
        score = score + Math.round(getFrameRate() / 60);
    
        if (ground.x < 0) {
          ground.x = ground.width / 2;
        }
    
        //if do pulo
        //verificar se teclou ou apertou espaço
        if (touches.length > 0 || keyDown("space")) {
          if (mario.y >= height - 40) {
            mario.velocityY = -10;
            jumpSound.play();
            touches = [];
          }
        }
    
        mario.velocityY = mario.velocityY + 0.5;
    
        //criarNuvem();
        nuvens = createSprite(width + 10, height - 100, 10, 10);
        //nuvens.y = Math.round(random(height - 150, height - 100));
        //nuvens.addImage("nuvem",);
        //nuvens.scale = 0.5;
        //nuvens.velocityX = -5;

        //criarobstaculos();
    
        /*if (obstaculoG.isTouching(trex)) {
          gameState = END;
          dieSound.play();
        }*/
      }
    

    //desenhando sprites
    drawSprites();
}