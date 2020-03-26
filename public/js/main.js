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

function loadGraphics() {
    graphics.loadAllGraphics();
    setTimeout(() => {
        main();
    }, 2000);
}

loadGraphics();

function loadObjects(gameMap) {
    for (let row = 0; row < gameMap.length; row++) {
        for (let col = 0; col < gameMap[row].length; col++) {
            const c = gameMap[row][col];
            if (c === "x") {
                const wall1 = tileFactory.getTile("wall1", row, col);
                wall1.render(ctx, graphics.getImage(wall1.name), tileSize);
            } else if (c === "p") {
                const player = Player.getInstance();
                player.setLocation(row, col);
                // player.render(ctx, graphics.getImage(player.name), tileSize);
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
            const player = Player.getInstance();
            ctx.clearRect(player.col * tileSize, player.row * tileSize, player.width, player.height);
            player.col += 1;
            player.render(ctx, graphics.getImage(player.name), tileSize);
        }
        frameDelay = (frameDelay + 1) % 8;
        requestAnimationFrame(update);
    }

    update();
}





