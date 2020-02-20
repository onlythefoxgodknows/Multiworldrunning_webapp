import {loadImage} from "../utils/loader.js";

const wallsConfig = [
    {name: "wall1", imagePath: "./img/bricks_1.png"},
    {name: "wall2", imagePath: "./img/bricks_2.png"},
    {name: "wall3", imagePath: "./img/bricks_1.png"},
];

export default class GraphicsFactory {
    constructor() {
        this.graphicMap = new Map();
    }

    loadAllGraphics() {
        this.loadWallImages(wallsConfig);
        this.loadEntitiesGraphics();
    }

    loadWallImages(wallsConfig) {
        wallsConfig.forEach(wall => {
            loadImage(wall.imagePath).then(img => {
                this.graphicMap.set(wall.name, img);
            });
        });
    }

    getImage(name) {
        return this.graphicMap.get(name);
    }

    loadEntitiesGraphics() {
        const playerSprite = [];
        for (let i = 0; i <= 23; i++) {
            loadImage(`./img/player${i}.png`).then(img => {
                playerSprite.push(img);
            });
            this.graphicMap.set("player", playerSprite);
        }
    }
}