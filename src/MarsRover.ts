import { Location } from "./Location";
import { Directions } from "./constants/Directions";

export class MarsRover {

    currentlocation!: Location;
    commands!: Map<string, Function>;

    constructor() {
        this.loadCommands();
    }

    loadCommands() {
        this.commands = new Map<string, Function>();
        this.commands.set("F", () => { this.moveForward() });
        this.commands.set("B", () => { this.moveBackward() });
        this.commands.set("L", () => { this.turnLeft() });
        this.commands.set("R", () => { this.turnRight() });
    }

    turnRight() {
        const turnRightMap = {
            [Directions.NORTH]: () => {
                this.currentlocation.direction = Directions.EAST;
            },
            [Directions.SOUTH]: () => {
                this.currentlocation.direction = Directions.WEST;
            },
            [Directions.EAST]: () => {
                this.currentlocation.direction = Directions.SOUTH;
            },
            [Directions.WEST]: () => {
                this.currentlocation.direction = Directions.NORTH;
            }
        }
        turnRightMap[this.currentlocation.direction]();
    }

    turnLeft() {
        const turnLeftMap = {
            [Directions.NORTH]: () => {
                this.currentlocation.direction = Directions.WEST;
            },
            [Directions.SOUTH]: () => {
                this.currentlocation.direction = Directions.EAST;
            },
            [Directions.EAST]: () => {
                this.currentlocation.direction = Directions.NORTH;
            },
            [Directions.WEST]: () => {
                this.currentlocation.direction = Directions.SOUTH;
            }
        }
        turnLeftMap[this.currentlocation.direction]();
    }

    moveBackward() {
        const moveBackwardMap = {
            [Directions.NORTH]: () => {
                this.currentlocation.point.y--
            },
            [Directions.SOUTH]: () => {
                this.currentlocation.point.y++;
            },
            [Directions.EAST]: () => {
                this.currentlocation.point.x--;
            },
            [Directions.WEST]: () => {
                this.currentlocation.point.x++;
            }
        }
        moveBackwardMap[this.currentlocation.direction]();
    }

    moveForward() {
        const moveForwardMap = {
            [Directions.NORTH]: () => {
                this.currentlocation.point.y++;
            },
            [Directions.SOUTH]: () => {
                this.currentlocation.point.y--;
            },
            [Directions.EAST]: () => {
                this.currentlocation.point.x++;
            },
            [Directions.WEST]: () => {
                this.currentlocation.point.x--;
            }
        }
        moveForwardMap[this.currentlocation.direction]();
    }

    deploy(location: Location) {
        this.currentlocation = location;
    }
    getCurrentLocation() {
        return this.currentlocation;
    }

    executeCommands(commandString: string) {
        [...commandString].forEach((key: string) => {
            const command = this.commands.get(key);
            command != undefined ? command() : null;
        });
    }
}