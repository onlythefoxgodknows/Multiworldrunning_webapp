export default class Tile {
    constructor(name, row, col, width, height) {
        this.name = name;
        this.row = row;
        this.col = col;
        this.width = width;
        this.height = height
        this.solid = true;
    }

    render(context, image) {
        context.drawImage(image, this.col, this.row, this.width, this.height);
    }
}