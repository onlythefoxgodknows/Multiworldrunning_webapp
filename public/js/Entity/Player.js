import Entity from "./Entity.js";

export default class Player extends Entity {

    constructor(name, row, col, width, height, solid) {
        super(name, row, col, width, height, solid);
    }
}