import tile from "./tile.js";

export default class Wall1 extends tile {
    constructor(name, x, y, width, height) {
        super(name, x, y, width, height);
    }

    render(context, image) {
        context.drawImage(image, this.x, this.y, this.width, this.height);
    }
}