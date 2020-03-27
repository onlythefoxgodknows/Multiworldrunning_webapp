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
const wallNamesMap = { x: "wall1", m: "wall2", "-": "woodBridge", "^": "trap1", "o": "fireTrap"}
function loadObjects(gameMap) {
    //load background image to buffer
    backgroundBuffer.img = graphics.getImage("background");
    for (let row = 0; row < gameMap.length; row++) {
        for (let col = 0; col < gameMap[row].length; col++) {
            const c = gameMap[row][col];
            if (c === "p") {
                player.setLocation(row * tileSize, col * tileSize);
            }
            else if (c ==="x" || c === "m" || c === "-"){
                const wall = tileFactory.getTile(wallNamesMap[c], row * tileSize, col * tileSize);
                allTiles.addTile(wall);
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
    ctx.drawImage(backgroundBuffer.img, 0, 0, backgroundBuffer.width, backgroundBuffer.height);
    allTiles.renderAllTiles(ctx, graphics, tileSize);
    player.render(ctx, graphics.getImage(player.name), tileSize);
}

function updateLogic(){
    player.update();
}

function prepareKeyEvents(){
    document.addEventListener('keypress', (event) => {
        const key = event.code;
        if(key == 'KeyD') player.isMovingRight = true;
        else if(key == 'KeyA') player.isMovingLeft = true;
        if(key == 'Space' && !player.isJumping){
            player.vel.row = -15;
            player.isJumping = true; 
            // console.log("jumping")
        }
    });
    document.addEventListener('keyup', (event) => {
        const key = event.code;
        if(key == 'KeyD') player.isMovingRight = false;
        if(key == 'KeyA') player.isMovingLeft = false;
        // if(key == 'Space') player.isJumping = false;
    });
}

export default ctx;



