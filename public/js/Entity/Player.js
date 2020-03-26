import Entity from "./Entity.js";
import {tileSize} from "../constants/tileConstants.js";


const Player = (() => {
    class PlayerInstance extends Entity {
        constructor(name, row, col, width, height, solid) {
            super(name, row, col, width, height, solid);
            this.isJumping = false;
            this.isSwiming = false;
            this.isMovingLeft = false;
            this.isMovingRight = false;
            this.animate = false;
            this.frame = 0;
        }
        update(){
            super.update();
            // this.vel.row += this.gravity;

            let walkFrameDelay = 0, swimFrameDelay = 0;
            // this.isMovingRight = true;

            this.animate = (this.isMovingLeft || this.isMovingRight || this.isSwiming);
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
                    swimFrameDelay = (swimFrameDelay + 1) % 10;
                }
            }

        }
        //overried render method
        render(ctx, spriteSheet, tileSize) {
            // ctx.drawImage(spriteSheet[this.imageFrame],this.col * tileSize, this.row * tileSize, this.width, this.height);
            if(this.facing == 0){
                if(!this.isJumping){
                    if(this.isMovingLeft){
                        if(!this.isSwiming){
                            ctx.drawImage(spriteSheet[this.frame + 5],this.col * tileSize, this.row * tileSize, this.width, this.height);
                        }
                        else{
                            ctx.drawImage(spriteSheet[this.frame + 8],this.col * tileSize, this.row * tileSize, this.width, this.height);
                        }
                    }
                    else{
                        if (!this.isSwimming) {
                            if (this.isShooting) {
                                ctx.drawImage(spriteSheet[21],this.col * tileSize, this.row * tileSize, this.width, this.height);
                            } else {
                                ctx.drawImage(spriteSheet[4], this.col * tileSize, this.row * tileSize, this.width, this.height);
                            }
                        } else {
                            ctx.drawImage(spriteSheet[this.frame + 8],this.col * tileSize, this.row * tileSize, this.width, this.height);
                        }
                    }
                }
                else{
                    ctx.drawImage(spriteSheet[5],this.col * tileSize, this.row * tileSize, this.width, this.height);
                }
            }
            else{
                if (!this.isJumping) {
                    if (this.isMovingRight) {
                        if (!this.isSwimming) {
                            ctx.drawImage(spriteSheet[this.frame + 1], this.col * tileSize, this.row * tileSize, this.width, this.height);
                        } else {
                            ctx.drawImage(spriteSheet[this.frame + 15],this.col * tileSize, this.row * tileSize, this.width, this.height);
                        }
    
                    } else {
                        if (!this.isSwimming) {
                            if (this.isShooting) {
                                ctx.drawImage(spriteSheet[20], this.col * tileSize, this.row * tileSize, this.width, this.height);
                            } else {
                                ctx.drawImage(spriteSheet[0],this.col * tileSize, this.row * tileSize, this.width, this.height);
                            }
                        } else {
                            ctx.drawImage(spriteSheet[this.frame + 15], this.col * tileSize, this.row * tileSize, this.width, this.height);
                        }
                    }
                } 
                else {
                    ctx.drawImage(spriteSheet[1],this.col * tileSize, this.row * tileSize, this.width, this.height);
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