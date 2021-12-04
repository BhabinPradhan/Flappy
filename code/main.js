import kaboom from "kaboom";

// initialize context
kaboom({
  widht: 1024,
  height: 768,
  stretch: true,
  letterbox: true,
});

const WIDTH = 1024;
const HIGHT = 768;

// load assets
loadSprite("flappy", "sprites/flappy.png");

loadSprite("bg", "sprites/bg.png");

// add a character to screen
scene ("main", () => {
  const JUMP_FORCE = 800;
  const PIPE_OPEN = 240;
  const PIPE_MIN = 60;
  const SPEED = 320;
  const CELLING = -55;

  layers(["bg", "obj", "ui"], "obj");

  gravity(3200);

  const flappy_ =add([
    // list of components
    sprite("flappy"),
    pos(WIDTH / 4, 0),
    area(),
    body(),
  ]);

  add([
    sprites("bg"),
    pos(0, 0),
    layer("bg"),
   
  ])
  mouseClick(() =>{
    flappy.jump(800);
  })

  flappy. action(()=>{
    if (flappy.pos.y >= HIGHT || flappy.pos.y <= CELLIN) {
      go("lose");
    }

  })

  function spawnPipw() {
    let h1= rand (PIPE_MIN, HEIGHT - PIPE_MIN - PIPE_OPEN);
    let h2 = HIGHT - h1 - PIPE_OPEN;

    add([
      pos(WIDTH, 0 ),
      rect(64, h1),
      color(111,187,49),
      area(),
      outline(4),
      move(LEFT, SPEED),
      cleanup(),
      "pipe"
    ])

    add([
      pos(WIDTH, H1 + PIPE_OPEN),
      rect(64, h1),
      color(111,187,49),
      area(),
      outline(4),
      move(LEFT, SPEED),
      cleanup(),
      "pipe"
    ])

    loop(1,()=> {
      spawnPipe();
    })

    flappy.collides("pipe", () =>{
      go("lose");
    })

    add([
      sprite("bg"),
      pos(0,0),
    ])

    add([
      sprite("flappy")

    ])
    add([
      text("GAME OVER"),


    ])
    mouseClick

  



  }


})
scene("lose", ()=> {

})
go("main");
