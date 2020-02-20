import Wall1 from "./Wall1.js";
import {tileSize} from "../constants/tileConstants.js"
import Tile from "./tile.js";

const TileFactory = (() => {
    let instance;

    function createInstance() {
        return {
            tileTable: new Map(),
            getTile: (name, row, col) => {
                const temp = instance.tileTable.get(name);
                const newClone = Object.assign(new Tile(), temp);

                newClone.row = row * tileSize;
                newClone.col = col * tileSize;
                return newClone;
            }
        };
    }

    function loadCache() {
        const defaultRow = 0, defaultCol = 0;
        const wall1 = new Wall1("wall1", defaultRow * tileSize, defaultCol * tileSize, tileSize, tileSize);
        instance.tileTable.set(wall1.name, wall1);
        // console.log(wall1);
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
                loadCache();
            }
            return instance;
        },
    }

})();

export default TileFactory;