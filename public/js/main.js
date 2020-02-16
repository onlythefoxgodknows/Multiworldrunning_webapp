// import Wall1 from "./tiles/Wall1.js";
// import {loadImage} from "./utils/loader.js";
//
// const canvas = document.getElementById('screen');
// const ctx = canvas.getContext('2d');
//
// //load all images
// let map = new Map();
// const wall1 = new Wall1("wall1", 0, 0, 40, 40);
// const wallImagesPath = ["./img/bricks_1.png"];
//
// let countLoadImages = 0;
// wallImagesPath.forEach(path => {
//     loadImage(path).then(img => {
//         countLoadImages++;
//         map.set(wall1.name, img);
//
//         if (countLoadImages === wallImagesPath.length) {
//             wall1.render(ctx, img);
//         }
//     });
//
// });

const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');

import Wall1 from "./tiles/Wall1.js";
import {loadImage} from "./utils/loader.js";

//load all images
let map = new Map();

const configs = [
    {name: "wall1", imagePath: "./img/bricks_1.png"}
];

function loadAllGraphics(configs){
    let countLoadImages = 0;
    configs.forEach(obj => {
        loadImage(obj.imagePath).then(img => {
            countLoadImages++;
            map.set(obj.name, img);
            if (countLoadImages === configs.length) {
                main();
            }
        });
    });
}
loadAllGraphics(configs);

function main() {
    const wall1 = new Wall1("wall1", 0, 0, 40, 40);
    wall1.render(ctx, map.get(wall1.name));
}



