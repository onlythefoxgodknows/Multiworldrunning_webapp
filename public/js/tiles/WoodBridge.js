import tile from "./tile.js";

export default class WoodBridge extends tile {
    constructor(name, row, col, width, height) {
        super(name, row, col, width, height);
    }

    render(ctx, image, tileSize){
        ctx.drawImage(image, this.col , this.row, this.width, this.height * 4);
    }
}