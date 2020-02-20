export default class Entity {
    constructor(name, row, col, width, height, solid) {
        this.row = row;
        this.col = col;
        this.width = width;
        this.height = height;
        this.name = name;
        this.solid = solid;
    }

    //implement tick method later
    render(ctx, spriteSheet, tileSize) {
        ctx.drawImage(spriteSheet[0], this.col * tileSize, this.row * tileSize, this.width, this.height);
    }

    setLocation(row, col) {
        this.row = row;
        this.col = col;
    }
}