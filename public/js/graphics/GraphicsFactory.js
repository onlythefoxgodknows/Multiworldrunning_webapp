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
    }

    loadWallImages(wallsConfig) {
        let countLoadImages = 0;

        wallsConfig.forEach(wall => {
            loadImage(wall.imagePath).then(img => {
                countLoadImages++;
                this.graphicMap.set(wall.name, img);
            });
        });
    }

    getImage(name) {
        return this.graphicMap.get(name);
    }
}