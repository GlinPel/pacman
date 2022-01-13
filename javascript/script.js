var world = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 2, 1, 2, 1, 1, 1, 0, 0, 1, 1, 1, 2, 1, 2, 1, 2, 1],
    [1, 2, 1, 2, 1, 2, 1, 1, 0, 0, 0, 0, 1, 1, 2, 1, 2, 1, 2, 1],
    [1, 0, 0, 2, 1, 2, 1, 1, 0, 0, 0, 0, 1, 1, 2, 1, 3, 0, 0, 1],
    [1, 1, 1, 2, 1, 2, 1, 1, 0, 0, 0, 0, 1, 1, 2, 1, 2, 1, 1, 1],
    [1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1],
    [1, 2, 1, 2, 3, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 3, 2, 1, 2, 1],
    [1, 2, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

// function generatewalls(worldLevel){
//     arrayrow=[]
//     for(var i=0; i<worldLevel+2; i++){
//         arrayrow.push(1);
//     }
//     world.push(arrayrow);
// }

// function generateWorld(worldLevel){
//     generatewalls(worldLevel);
//     generatewalls(worldLevel);
//     for(var column = 0; column<worldLevel; column++){
//         var arrayrow=[1];
//         for(var row = 0; row<worldLevel; row++){
//             arrayrow.push(Math.floor(Math.random() * (3 - 0)) + 0)
//         }
//         arrayrow.push(1);
//         world.push(arrayrow);
//     }
//     generatewalls(worldLevel);
// }

// generateWorld(10);

var worldDict = {
    0: 'blank',
    1: 'wall',
    2: 'coin',
    3: 'cherry'
}

function drawWorld(){
    output = "";
    for(var row=0; row<world.length; row++){
        output += "<div class='row'>";
        for (var x = 0; x < world[row].length; x++) {
            for(var x=0; x<world[row].length; x++){
                output += "<div class='"+worldDict[world[row][x]]+"'></div>"
            }
            
        }
        output += "</div>";
    }
    document.getElementById('world').innerHTML= output;
}

drawWorld();

var pacman = {
    x: 1,
    y: 2
};
var  pacmanPosition = 0;
var points = 0;

function drawPacman(){
    document.getElementById('pacman').style.top=pacman.y*40+'px';
    document.getElementById('pacman').style.left=pacman.x*40+'px';
    document.getElementById('pacman').style.transform = 'rotate('+pacmanPosition*90+'deg)';
}

drawPacman();

document.onkeydown= function(e){
    if(e.keyCode == 37){
        if(world[pacman.y][pacman.x - 1] != 1){
            pacman.x--;
            pacmanPosition = 2;
        }
    }
    else if(e.keyCode == 39){
        if(world[pacman.y][pacman.x + 1] != 1){
            pacman.x++;
            pacmanPosition = 0;
        }
    }
    else if(e.keyCode == 38){
        if(world[pacman.y-1][pacman.x] != 1){
            pacman.y--;   
            pacmanPosition = 3;
        }
    }
    else if(e.keyCode == 40){
        if(world[pacman.y+1][pacman.x] != 1){
            pacman.y++;
            pacmanPosition = 1;
        }
    }

    if(world[pacman.y][pacman.x] == 2){
        points++;
        document.getElementById('score').innerHTML= "<h2>Puntaje: "+points+"</h2>";
    }else if(world[pacman.y][pacman.x] == 3){
        points += 50;
        document.getElementById('score').innerHTML= "<h2>Puntaje: "+points+"</h2>";
    }

    world[pacman.y][pacman.x]=0;
    drawPacman();
    drawWorld();
}