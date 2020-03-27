import GraphicsFactory from "./graphics/GraphicsFactory.js";
import GameMap from "./mapGame/gameMap.js";
import TileFactory from "./tiles/TileFactory.js";
import {tileSize} from "./constants/tileConstants.js";
import Player from "./Entity/Player.js";
import TileHandler from "./tiles/TileHandler.js"

const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');

const backgroundBuffer = document.createElement('canvas');
backgroundBuffer.width = tileSize * 40; //40 objects
backgroundBuffer.height = tileSize * 40;

//load all images
const graphics = new GraphicsFactory();
const tileFactory = TileFactory.getInstance();
const allTiles = TileHandler.getInstance();
function loadGraphics() {
    graphics.loadAllGraphics();
    setTimeout(() => {
        main();
    }, 2000);
}
const player = Player.getInstance();
loadGraphics();
function loadObjects(gameMap) {
    for (let row = 0; row < gameMap.length; row++) {
        for (let col = 0; col < gameMap[row].length; col++) {
            const c = gameMap[row][col];
            if (c === "x") {
                const wall1 = tileFactory.getTile("wall1", row, col);
                // allWalls.push(wall1);
                allTiles.addTile(wall1);
            } else if (c === "p") {
                player.setLocation(row, col);
            }
        }
    }
}

function main() {
    const map = new GameMap();

    const gameMap = map.getMap1();
    loadObjects(gameMap);

    prepareKeyEvents();

    let frameDelay = 0;
    function update() {
        if (frameDelay === 0) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            updateLogic();
            //redraw 
            redraw();
        }
        frameDelay = (frameDelay + 1) % 4;
        requestAnimationFrame(update);
    }
    update();
}
function redraw(){
    allTiles.renderAllTiles(ctx, graphics, tileSize);
    player.render(ctx, graphics.getImage(player.name), tileSize);
}

function updateLogic(){
    player.update();
}

function prepareKeyEvents(){
    document.addEventListener('keypress', (event) => {
        const key = event.code;
        console.log(key);
        if(key == 'KeyD') player.isMovingRight = true;
        else if(key == 'KeyA') player.isMovingLeft = true;
        if(key == 'Space') player.isJumping = true;
    });
    document.addEventListener('keyup', (event) => {
        const key = event.code;
        if(key == 'KeyD') player.isMovingRight = false;
        if(key == 'KeyA') player.isMovingLeft = false;
        if(key == 'Space') player.isJumping = false;
    });
}




