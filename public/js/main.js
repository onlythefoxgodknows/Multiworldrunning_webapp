import GraphicsFactory from "./graphics/GraphicsFactory.js";
import GameMap from "./mapGame/gameMap.js";
import TileFactory from "./tiles/TileFactory.js";
import Player from "./Entity/Player.js";
import {tileSize} from "./constants/tileConstants.js";

const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');


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
                const player = new Player("player", row, col, tileSize, tileSize, true);
                player.render(ctx, graphics.getImage(player.name), tileSize);
                console.log(graphics.getImage(player.name));
            }
        }
    }
}

function main() {
    const map = new GameMap();

    const gameMap = map.getMap1();
    loadObjects(gameMap);
}



