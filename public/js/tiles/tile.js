import {loadImage} from "../utils/loader.js";

export default class Tile {
    constructor(name, x, y, width, height) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height
        this.solid = true;
    }

    render(context, image) {
        context.drawImage(image, this.x, this.y, this.width, this.height);
    }
}