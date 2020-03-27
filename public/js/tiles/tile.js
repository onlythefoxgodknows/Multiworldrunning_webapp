import Rectangle2D from "../utils/Rectangle2D.js"
import { tileSize } from "../constants/tileConstants.js";
export default class Tile {
    constructor(name, row, col, width, height) {
        this.name = name;
        this.row = row;
        this.col = col;
        this.width = width;
        this.height = height
        this.solid = true;
    }

    render(ctx, image, tileSize) {
        ctx.drawImage(image, this.col , this.row, this.width, this.height);
        // ctx.fillStyle = 'green';
        // ctx.fillRect(this.col + 10,this.row,this.width - 20 ,5);
    }

    //getBoundary
    getBoundary(){
        return new Rectangle2D(this.col, this.row, this.width, this.height);
    }
    getTopBoundary(){
        return new Rectangle2D(this.col + 10,this.row,this.width - 20 ,5);
    }
    getBottomBoundary(){
        return new Rectangle2D(this.col + 10,this.row + this.height - 5,this.width-20, 5);
    }
    getLeftBoundary(){
        return new Rectangle2D(this.col, this.row+ 10, 5, this.height-20);
    }
    getRightBoundary(){
        return new Rectangle2D(this.col + this.width - 5, this.row + 10, 5, this.height - 20);
    }
}