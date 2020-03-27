import Entity from "./Entity.js";
import {tileSize} from "../constants/tileConstants.js";
import TileHandler from "../tiles/TileHandler.js";
// import contextDebugger from "../main.js"
const allTiles = TileHandler.getInstance().tiles;
const Player = (() => {
    class PlayerInstance extends Entity {
        constructor(name, row, col, width, height, solid) {
            super(name, row, col, width, height, solid);
            this.isJumping = false;
            this.animate = false;
            this.frame = 0;
        }
        update(){
            super.update();
            // this.vel.row += this.gravity;

            let walkFrameDelay = 0, swimFrameDelay = 0;
            // this.isMovingRight = true;

            this.animate = (this.isMovingLeft || this.isMovingRight || this.isSwimming);
            if(this.animate){
                if(!this.isSwimming){
                    if(walkFrameDelay == 0){
                        this.frame = (this.frame + 1) % 3;
                    }
                    walkFrameDelay = (walkFrameDelay + 1) % 4;
                }
                else{
                    if(swimFrameDelay == 0){
                        this.frame = (this.frame + 1) % 5;
                    }
                    swimFrameDelay = (swimFrameDelay + 1) % 11;
                }
            }
            this.isSwimming = false;
            allTiles.forEach(t => {
                this.tileColldingCheck(t);
            });
            
            if(this.vel.row < 25)
                this.vel.row += this.gravity;

        }
        tileColldingCheck(t){
            if(t.name === "waterWall" && !t.isSolid){
                if(this.intersectsTile(t)){
                    this.isSwimming = true;
                }
                return;
            }
            if (this.intersectsTopTile(t)) {
                this.row = t.row - this.height;
                this.vel.row = 0.1;
                this.isJumping = false;
            }

            if (this.intersectsBottomTile(t)) {
                this.row = t.row + this.height;
                // console.log("bottom");
            }
            if (this.intersectsRightTile(t)) {
                this.col = t.col + t.width;
                this.vel.col = 0;
                // console.log("right");
            }
            if (this.intersectsLeftTile(t)) {
                this.col = t.col - t.width;
                this.vel.col = 0;
                // console.log("left");
            }
        }
        //overried render method
        render(ctx, spriteSheet, tileSize) {
            // ctx.fillStyle = 'green';
            // ctx.fillRect(this.col, this.row, this.width, this.height);
            if(this.facing == 0){
                if(!this.isJumping){
                    if(this.isMovingLeft){
                        if(!this.isSwimming){
                            console.log("walking left");
                            ctx.drawImage(spriteSheet[this.frame + 5],this.col , this.row , this.width, this.height);
                        }
                        else{
                            console.log("swimming left");
                            ctx.drawImage(spriteSheet[this.frame + 8],this.col, this.row , this.width, this.height);
                        }
                    }
                    else{
                        if (!this.isSwimming) {
                            if (this.isShooting) {
                                ctx.drawImage(spriteSheet[21],this.col, this.row, this.width, this.height);
                            } else {
                                ctx.drawImage(spriteSheet[4], this.col , this.row, this.width, this.height);
                            }
                        } else {
                            ctx.drawImage(spriteSheet[this.frame + 8],this.col, this.row, this.width, this.height);
                        }
                    }
                }
                else{
                    ctx.drawImage(spriteSheet[5],this.col, this.row, this.width, this.height);
                }
            }
            else{
                if (!this.isJumping) {
                    if (this.isMovingRight) {
                        if (!this.isSwimming) {
                            console.log("walking right");
                            ctx.drawImage(spriteSheet[this.frame + 1], this.col, this.row, this.width, this.height);
                        } else {
                            console.log("swimming right");
                            ctx.drawImage(spriteSheet[this.frame + 15],this.col, this.row, this.width, this.height);
                        }
    
                    } else {
                        if (!this.isSwimming) {
                            if (this.isShooting) {
                                ctx.drawImage(spriteSheet[20], this.col, this.row, this.width, this.height);
                            } else {
                                ctx.drawImage(spriteSheet[0],this.col, this.row, this.width, this.height);
                            }
                        } else {
                            ctx.drawImage(spriteSheet[this.frame + 15], this.col , this.row, this.width, this.height);
                        }
                    }
                } 
                else {
                    ctx.drawImage(spriteSheet[1],this.col, this.row , this.width, this.height);
                }
            }
        }
    }

    let instance;

    function createInstance() {
        return new PlayerInstance("player", 0, 0, tileSize, tileSize, true)
    }

    return {
        getInstance: () => {
            if (!instance)
                instance = createInstance();
            return instance;
        }
    }

})();
export default Player;