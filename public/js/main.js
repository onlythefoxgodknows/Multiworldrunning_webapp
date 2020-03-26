import GraphicsFactory from "./graphics/GraphicsFactory.js";
import GameMap from "./mapGame/gameMap.js";
import TileFactory from "./tiles/TileFactory.js";
import {tileSize} from "./constants/tileConstants.js";
import Player from "./Entity/Player.js";

const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');

const backgroundBuffer = document.createElement('canvas');
backgroundBuffer.width = tileSize * 40; //40 objects
backgroundBuffer.height = tileSize * 40;

//load all images
const graphics = new GraphicsFactory();
const tileFactory = TileFactory.getInstance();
const allWalls = [];
function loadGraphics() {
    graphics.loadAllGraphics();
    setTimeout(() => {
        main();
    }, 2000);
}
const player = Player.getInstance();
loadGraphics();
function drawWalls(){
    allWalls.forEach(w => {
        w.render(ctx, graphics.getImage(w.name), tileSize);
    })
}
function loadObjects(gameMap) {
    for (let row = 0; row < gameMap.length; row++) {
        for (let col = 0; col < gameMap[row].length; col++) {
            const c = gameMap[row][col];
            if (c === "x") {
                const wall1 = tileFactory.getTile("wall1", row, col);
                allWalls.push(wall1);
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
    player.render(ctx, graphics.getImage(player.name), tileSize);
    drawWalls();
}

function updateLogic(){
    player.update();
}




