import GraphicsFactory from "./graphics/GraphicsFactory.js";
import GameMap from "./mapGame/gameMap.js";
import TileFactory from "./tiles/TileFactory.js";

const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');


//load all images
const graphics = new GraphicsFactory();
const tileFactory = TileFactory.getInstance();

function loadGraphics() {
    graphics.loadAllGraphics();
    setTimeout(() => {
        main();
    }, 1000);
}

loadGraphics();

function loadObjects(gameMap) {
    for (let row = 0; row < gameMap.length; row++) {
        for (let col = 0; col < gameMap[row].length; col++) {
            if (gameMap[row][col] === "x") {
                const wall1 = tileFactory.getTile("wall1", col, row);
                wall1.render(ctx, graphics.getImage(wall1.name));
            }
        }
    }
}

function main() {
    const map = new GameMap();

    const gameMap = map.getMap1();
    loadObjects(gameMap);
}



