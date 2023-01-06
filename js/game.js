//Created by John Campbell and River Chubb
var canvasDiv = CreateElement('div', {id: "AllCanvs"}, '#main');

var renderer = new Renderer(CreateElement('canvas', {id: "mainCanvas"}, canvasDiv));
var game = new Game();
var camera = new Camera(0, 0, renderer);
var player = new Player(0, 0, 40, 70, 0, 0, 40, 70);
var particles = new ParticleArray();
var platforms = new PlatformArray();
var scale = 50;
var death = false;
var deathboxesblownup = [];
var countdownDS = 0;
var boxtoblow = [];
var Level = 1;
var destroyblocks = []
  // x: ,  y: ,  size: ,  blocksdestroyed: ,  hitstoblowup: ,
var hitdeathbox = false;
var deathticks = 0;

class Connection
{
  weight;
  deltaWeight;
}

  platforms.Invert();
  platforms.SetScale(scale);

if (Level == 1) {
  var winblock = {
    x: -101,
    y: -101,
    size: 2,
  }
  platforms.Add(winblock.x, winblock.y, winblock.x + winblock.size, winblock.y + winblock.size, 8);
  destroyblocks.push([-21, -5, 2, 2, 5]);
  destroyblocks.push([-17, -3, 2, 2, 5]);
  destroyblocks.push([-13, -1, 2, 2, 5]);
  destroyblocks.push([-9, 1, 2, 2, 5]);
  destroyblocks.push([-5, 3, 2, 2, 5]);
  destroyblocks.push([1, 5, 2, 3, 5]);
  destroyblocks.push([9, -3, 2, 3, 5]);
  destroyblocks.push([17, 1, 2, 5, 6]);

   // = [[-21, -5, 2, 2, 5], [-17, -3, 2, 2, 5], [-13, -1, 2, 2, 5], [-9, 1, 2, 2, 5], [-5, 3, 2, 2, 5], [1, 5, 2, 3, 5], [9, -3, 2, 3, 5], [17, 1, 2, 5, 6]]
  var hitdeadblocks = [[-91, -3, 2], [-11, -3, 2], [-3, 5, 2]]
  // platforms.Add(-150, 4, 100, 5, 1);
  platforms.Add(-40, -9, 100, -10, 1);
  platforms.Add(-player.MaxPos, player.MaxPos, (-player.MaxPos) - 1, -player.MaxPos, 7);
  platforms.Add(-player.MaxPos, player.MaxPos, player.MaxPos, player.MaxPos + 1, 7);
  platforms.Add(player.MaxPos, player.MaxPos, player.MaxPos + 1, -player.MaxPos, 7);
  platforms.Add(-player.MaxPos, -player.MaxPos, player.MaxPos, (-player.MaxPos) - 1, 7);
  drawletters(-100, 100, "J", 2, 2);
  drawletters(-80, 100, "O", 2, 2);
  drawletters(-60, 100, "H", 2, 2);
  drawletters(-40, 100, "N", 2, 2);
  drawletters(-100, 50, "C", 2, 2);
  drawletters(-80, 50, "A", 2, 2);
  drawletters(-60, 50, "M", 2, 2);
  drawletters(-40, 50, "P", 2, 2);
  drawletters(-20, 50, "B", 2, 2);
  drawletters(0, 50, "E", 2, 2);
  drawletters(20, 50, "L", 2, 2);
  drawletters(40, 50, "L", 2, 2);
  var num2 = -200;


  // drawletters(-100, -100, "S", 2, -1);
  // drawletters(-80, -100, "E", 2, -1);
  // drawletters(-60, -100, "B", 2, -1);
  // drawletters(-40, -100, "A", 2, -1);
  // drawletters(-20, -100, "S", 2, -1);
  // drawletters(0, -100, "T", 2, -1);
  // drawletters(20, -100, "I", 2, -1);
  // drawletters(40, -100, "A", 2, -1);
  // drawletters(60, -100, "N", 2, -1);

  // drawletters(-160, -100, "C", 2, 2);
  // drawletters(-140, -100, "D", 2, 2);
  // drawletters(-100, -100, "F", 2, 2);
  // drawletters(-80, -100, "G", 2, 2);
  // drawletters(-60, -100, "H", 2, 2);
  // drawletters(-40, -100, "I", 2, 2);
  // drawletters(-20, -100, "J", 2, 2);
  // drawletters(0, -100, "K", 2, 2);
  // drawletters(20, -100, "L", 2, 2);
  // drawletters(40, -100, "M", 2, 2);
  // drawletters(60, -100, "N", 2, 2);
  // drawletters(80, -100, "O", 2, 2);
  // drawletters(100, -100, "P", 2, 2);
  // drawletters(120, -100, "Q", 2, 2);
  // drawletters(140, -100, "R", 2, 2);
  // drawletters(180, -100, "T", 2, 2);
  // drawletters(200, -100, "U", 2, 2);
  // drawletters(220, -100, "V", 2, 2);
  // drawletters(240, -100, "W", 2, 2);
  // drawletters(260, -100, "X", 2, 2);
  // drawletters(280, -100, "Y", 2, 2);
  // drawletters(300, -100, "Z", 2, 2);
  // drawSquareArt(20, 10, emojy1, 8, 2, 2);
  // drawletters(-80, -100, "J", 2, 1);
  // drawletters(-60, -100, "A", 2, 2);
  // drawletters(-40, -100, "M", 2, -1);
  // drawletters(-20, -100, "E", 2, 8);
  // drawletters(0, -100, "S", 2, 7);



  for (var i = destroyblocks.length - 1; i >= 0; i--) {
    platforms.Add(destroyblocks[i][0], destroyblocks[i][1], (destroyblocks[i][0] + destroyblocks[i][2]), (destroyblocks[i][1] + destroyblocks[i][2]), -1);
  }
  for (var i = hitdeadblocks.length - 1; i >= 0; i--) {
    platforms.Add(hitdeadblocks[i][0], hitdeadblocks[i][1], (hitdeadblocks[i][0] + hitdeadblocks[i][2]), (hitdeadblocks[i][1] + hitdeadblocks[i][2]), 7);
  }

  // platforms.Add(-1, -7, 1, -9, -1);
  for(var y = -2.5; y < 2.5; y++)
  {
    for(var x = -12.5; x < 12.5; x++)
    {
      if(RandomInt(0, 5) != 0)
      {
        if(x != -0.5 || y != -0.5)
        {
          var bool = false;
          for (var i = 0; i < destroyblocks.length; i++) {
            if(x == destroyblocks[i][0]/2 && y == destroyblocks[i][1]/2)
            {
              bool = true;
            }
          }
          for (var i = 0; i < hitdeadblocks.length; i++) {
            if(x == hitdeadblocks[i][0]/2 && y == hitdeadblocks[i][1]/2)
            {
              bool = true;
            }
          }
          if (bool == false) {
            platforms.Add(x * 2, y * 2, x * 2 + 2, y * 2 + 2, 2);
          }
        }
      }
    }
  }
}

if (Level == 2) {
  var winblock = {
    x: -101,
    y: -101,
    size: 2,
  }
  platforms.Add(winblock.x, winblock.y, winblock.x + winblock.size, winblock.y + winblock.size, 8);
  // destroyblocks.push([-1, -5, 2, 2, 5]);
  // destroyblocks.push([-3, -3, 2, 2, 5]);
  // destroyblocks.push([1, -3, 2, 2, 5]);


   // = [[-21, -5, 2, 2, 5], [-17, -3, 2, 2, 5], [-13, -1, 2, 2, 5], [-9, 1, 2, 2, 5], [-5, 3, 2, 2, 5], [1, 5, 2, 3, 5], [9, -3, 2, 3, 5], [17, 1, 2, 5, 6]]
  var hitdeadblocks = [[5, -4, 2], [7, -4, 2], [9, -4, 2], [39, -5, 2], [51, -3, 2], [64, -4, 2], [66, -4, 2], [68, -4, 2], [70, -4, 2],]
  // platforms.Add(-150, 4, 100, 5, 1);
  var num2 = -200;
  // drawletters(-1, -5, "level3", 2, -1);
  var level3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
                0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
drawSquareArt(-1, -7, level3, 48, 2, 2);
  // platforms.Add(-player.MaxPos, player.MaxPos, (-player.MaxPos) - 1, -player.MaxPos, 7);
  platforms.Add(-player.MaxPos, 11, player.MaxPos, 12, 7);
  // platforms.Add(player.MaxPos, player.MaxPos, player.MaxPos + 1, -player.MaxPos, 7);
  // platforms.Add(-player.MaxPos, -player.MaxPos, player.MaxPos, (-player.MaxPos) - 1, 7);


  for (var i = destroyblocks.length - 1; i >= 0; i--) {
    platforms.Add(destroyblocks[i][0], destroyblocks[i][1], (destroyblocks[i][0] + destroyblocks[i][2]), (destroyblocks[i][1] + destroyblocks[i][2]), -1);
  }
  for (var i = hitdeadblocks.length - 1; i >= 0; i--) {
    platforms.Add(hitdeadblocks[i][0], hitdeadblocks[i][1], (hitdeadblocks[i][0] + hitdeadblocks[i][2]), (hitdeadblocks[i][1] + hitdeadblocks[i][2]), 7);
  }

}

if (Level == 3) {
  // platforms.Add(winblock.x, winblock.y, winblock.x + winblock.size, winblock.y + winblock.size, 8);
  // destroyblocks.push([-21, -5, 2, 2, 5]);
  // destroyblocks.push([-17, -3, 2, 2, 5]);
  // destroyblocks.push([-13, -1, 2, 2, 5]);
  // destroyblocks.push([-9, 1, 2, 2, 5]);
  // destroyblocks.push([-5, 3, 2, 2, 5]);
  // destroyblocks.push([1, 5, 2, 3, 5]);
  // destroyblocks.push([9, -3, 2, 3, 5]);
  // destroyblocks.push([17, 1, 2, 5, 6]);

   // = [[-21, -5, 2, 2, 5], [-17, -3, 2, 2, 5], [-13, -1, 2, 2, 5], [-9, 1, 2, 2, 5], [-5, 3, 2, 2, 5], [1, 5, 2, 3, 5], [9, -3, 2, 3, 5], [17, 1, 2, 5, 6]]
  // var hitdeadblocks = [[-91, -3, 2], [-11, -3, 2], [-3, 5, 2]]
  // platforms.Add(-150, 4, 100, 5, 1);
  drawletters(-100, -100, "A", 2, -1);



  drawletters(-100, -100, "S", 2, -1);
  // drawletters(-80, -100, "E", 2, -1);
  // drawletters(-60, -100, "B", 2, -1);
  // drawletters(-40, -100, "A", 2, -1);
  // drawletters(-20, -100, "S", 2, -1);
  // drawletters(0, -100, "T", 2, -1);
  // drawletters(20, -100, "I", 2, -1);
  // drawletters(40, -100, "A", 2, -1);
  // drawletters(60, -100, "N", 2, -1);

  // drawletters(-160, -100, "C", 2, 2);
  // drawletters(-140, -100, "D", 2, 2);
  // drawletters(-100, -100, "F", 2, 2);
  // drawletters(-80, -100, "G", 2, 2);
  // drawletters(-60, -100, "H", 2, 2);
  // drawletters(-40, -100, "I", 2, 2);
  // drawletters(-20, -100, "J", 2, 2);
  // drawletters(0, -100, "K", 2, 2);
  // drawletters(20, -100, "L", 2, 2);
  // drawletters(40, -100, "M", 2, 2);
  // drawletters(60, -100, "N", 2, 2);
  // drawletters(80, -100, "O", 2, 2);
  // drawletters(100, -100, "P", 2, 2);
  // drawletters(120, -100, "Q", 2, 2);
  // drawletters(140, -100, "R", 2, 2);
  // drawletters(180, -100, "T", 2, 2);
  // drawletters(200, -100, "U", 2, 2);
  // drawletters(220, -100, "V", 2, 2);
  // drawletters(240, -100, "W", 2, 2);
  // drawletters(260, -100, "X", 2, 2);
  // drawletters(280, -100, "Y", 2, 2);
  // drawletters(300, -100, "Z", 2, 2);
  // drawSquareArt(20, 10, emojy1, 8, 2, 2);
  // drawletters(-80, -100, "J", 2, 1);
  // drawletters(-60, -100, "A", 2, 2);
  // drawletters(-40, -100, "M", 2, -1);
  // drawletters(-20, -100, "E", 2, 8);
  // drawletters(0, -100, "S", 2, 7);



  // for (var i = destroyblocks.length - 1; i >= 0; i--) {
  //   platforms.Add(destroyblocks[i][0], destroyblocks[i][1], (destroyblocks[i][0] + destroyblocks[i][2]), (destroyblocks[i][1] + destroyblocks[i][2]), -1);
  // }
  // for (var i = hitdeadblocks.length - 1; i >= 0; i--) {
  //   platforms.Add(hitdeadblocks[i][0], hitdeadblocks[i][1], (hitdeadblocks[i][0] + hitdeadblocks[i][2]), (hitdeadblocks[i][1] + hitdeadblocks[i][2]), 7);
  // }
}

var index = [];
for (var i = platforms.platforms.length - 1; i >= 0; i--) {
  if (platforms.platforms[i].type == -1) {
    index.push(platforms.platforms[i]);
  }
}

game.StartUpdateFunction(Update);

function Update(ts)
{
    game.Update(ts);

    if(GetKeyState(Keys.space))
    {
      segments ++;
      segments = segments % 5;
    }

    ReplaceInnerHTML("title", "FPS: " + Math.round(game.FPS))

    renderer.ResetColor();
    renderer.FullScreen();
    renderer.FillScreen();

    camera.MoveTo_Soft(player.x, player.y, renderer, game);
    particles.Update(platforms, renderer, camera, game);
    player.Update(platforms, particles, renderer, camera, game);

    particles.Draw(renderer, camera);
    platforms.Draw(renderer, camera);
    player.Draw(renderer, camera);

    if(GetKeyState(Keys.space))
    {
      var x = SnapToGrid((Mouse.x + camera.x), 25);
      var y = SnapToGrid((Mouse.y + camera.y), 25);
      if(!platforms.Collision(x, y, 15, 15, renderer, camera)) // && DistToRect(Mouse.x + camera.x, Mouse.y + camera.y, {x1: player.x + player.bbx - player.bbw / 2, y1: player.y + player.bby - player.bbh / 2, x2: player.x + player.bbw, y2: player.y + player.bbh}) > 100)
      {
        platforms.Invert();
        platforms.Add(x / scale, y / scale, (x + 25) / scale, (y + 25) / scale, 5);
        platforms.Invert();
      }
    }
    if (countdownDS > 0) {
      countdownDS--;
      if (countdownDS == 0) {boom(boxtoblow[0], boxtoblow[1], boxtoblow[2], boxtoblow[3]);}
    }

    Mouse.Update();
    game.RecallUpdate();
}

// var arr = [1, 1, 1, 1, 1, 1, 1,
//            0, 0, 0, 1, 0, 0, 0,
//            0, 0, 0, 1, 0, 0, 0,
//            0, 0, 0, 1, 0, 0, 0,
//            0, 0, 0, 1, 0, 0, 0,
//            1, 1, 1, 1, 0, 0, 0,]
// drawSquareArt(-100, -100, arr, 7, 2, 2)
