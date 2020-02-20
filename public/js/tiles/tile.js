export default class Tile {
    constructor(name, row, col, width, height) {
        this.name = name;
        this.row = row;
        this.col = col;
        this.width = width;
        this.height = height
        this.solid = true;
    }

    render(context, image, tileSize) {
        context.drawImage(image, this.col * tileSize, this.row * tileSize, this.width, this.height);
    }
}