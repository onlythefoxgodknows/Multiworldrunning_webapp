export default class GameMap {
    constructor() {

    }
    getMap1() {
        return [
            ["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"],
            ["x"," "," "," "," "," "," ","v"," ","v"," ","v"," ","v"," "," "," "," "," "," "," "," ","i"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","x"],
            ["x"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","i"," "," "," "," "," "," "," "," "," "," "," "," "," "," ","F","g","x"],
            ["x"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","i"," "," "," "," "," "," "," "," "," "," "," "," "," "," ","x","x","x"],
            ["x"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","i"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","x"],
            ["x"," "," "," "," "," "," "," "," "," "," "," "," "," "," ","m"," "," "," "," "," "," ","i"," "," "," "," "," "," "," "," "," "," "," ","m","m"," "," "," ","x"],
            ["x"," "," "," "," "," "," "," "," "," "," "," "," "," "," ","m","-"," "," "," "," "," ","m"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","x"],
            ["x"," "," "," "," "," "," "," "," "," "," "," "," "," "," ","m","o","o","o","o","o","o","m"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","h","x"],
            ["x"," "," "," ","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","x"],
            ["x"," "," "," "," "," "," "," "," "," "," "," "," ","v"," "," "," "," "," "," "," "," "," ","v"," "," ","v"," "," "," "," "," "," "," "," "," ","v"," "," ","x"],
            ["x"," "," ","m"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","FR"," "," "," "," "," "," ","x"],
            ["x"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","x"],
            ["x"," ","m","m"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","x"],
            ["x"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","i"," ","E"," "," "," ","E"," "," "," "," "," "," "," "," ","i"," "," "," "," ","x"],
            ["x"," "," "," "," "," "," ","-","-"," "," "," "," ","m","m","m"," "," "," "," ","m","m","m","m","m","m","m","m","m","m","m","m","m","m"," "," "," ","m"," ","x"],
            ["x"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","m","m"," "," "," ","x"],
            ["x"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","x"],
            ["x"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","m","m"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","m","m","m","x"],
            ["x"," "," "," "," "," "," "," "," "," ","-","-"," "," "," "," "," ","i"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","x"],
            ["x"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","F","m","m","m"," "," "," ","x"],
            ["x"," "," ","m"," "," "," "," "," ","m","m"," "," "," "," ","i"," "," "," "," "," ","i"," "," "," "," "," "," "," "," "," "," ","m"," "," "," "," "," "," ","x"],
            ["x"," "," "," "," "," "," "," "," ","m","m"," "," "," "," "," ","m","m","m","m","m"," ","i"," "," ","E"," "," "," "," "," "," "," "," "," "," "," "," "," ","x"],
            ["x","i"," "," "," "," ","-","-"," "," "," "," "," "," "," ","i"," "," "," "," "," "," "," ","m","m","m","m","m","m","m","m","m"," "," "," "," ","m","m","m","x"],
            ["x"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","x"],
            ["x","m"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","x"],
            ["x","m","m"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","FR"," "," "," "," "," "," "," "," "," "," "," "," ","x"],
            ["x"," ","i"," "," "," "," "," "," "," "," ","-","-"," "," ","i"," ","-","-"," ","i"," ","FR"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","x"],
            ["x"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","m","m","m"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","F","x"],
            ["x"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","m"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","x"],
            ["x"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","m","m","m","m","m","m","m"," "," "," "," "," "," "," "," "," "," ","x"],
            ["x"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","i"," "," "," "," "," "," "," "," "," "," "," ","x"],
            ["x"," "," "," "," "," "," "," "," "," ","m","m"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","i"," "," "," "," "," "," "," "," "," "," "," ","x"],
            ["x"," "," "," "," "," "," "," "," "," ","m","m"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","m","m","m","m"," "," "," "," "," "," "," ","x"],
            ["x"," "," "," "," "," "," "," "," "," ","m","m"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","i"," "," "," "," "," "," "," ","x"],
            ["x"," "," "," "," "," "," "," "," "," ","m","m"," ","-","-"," ","i"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","m","m","m","m","m","m","m","x"],
            ["x","p"," "," "," "," "," "," "," "," ","m","m","m","m","m","m"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","x"],
            ["x","m"," "," "," "," "," "," ","m","m","m","m","m","m","m","m"," ","i"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","x"],
            ["x","w","w","w","w","w","w","w","a","w","w","w","w","w","w","m"," ","m","-"," "," "," ","m","m","m","m"," ","-","-"," "," "," "," "," "," "," "," "," "," ","x"],
            ["x","w","w","w","w","w","w","w","a","w","w","w","w","w","w","a","a","m","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","x","x","x","x","x"],
            ["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"]
        ];
    }

}