import { Location } from "./Location";
import { Directions } from "./constants/Directions";
import { Point } from "./Point";

export class MarsRover {

    currentlocation!: Location;
    commands!: Map<string, Function>;

    constructor() {
        this.loadCommands();
    }

    getObstacles() {
        return [new Point(1, 4), new Point(3, 5), new Point(7, 4)];
    }

    loadCommands() {
        this.commands = new Map<string, Function>();
        this.commands.set("F", () => { return this.moveForward() });
        this.commands.set("B", () => { return this.moveBackward() });
        this.commands.set("L", () => { return this.turnLeft() });
        this.commands.set("R", () => { return this.turnRight() });
    }

    turnRight() {
        let nextLocation = this.cloneLocation(this.currentlocation);
        const turnRightMap = {
            [Directions.NORTH]: () => {
                nextLocation.direction = Directions.EAST;
                return nextLocation;
            },
            [Directions.SOUTH]: () => {
                nextLocation.direction = Directions.WEST;
                return nextLocation;
            },
            [Directions.EAST]: () => {
                nextLocation.direction = Directions.SOUTH;
                return nextLocation;
            },
            [Directions.WEST]: () => {
                nextLocation.direction = Directions.NORTH;
                return nextLocation;
            }
        }
        return turnRightMap[this.currentlocation.direction]();
    }

    turnLeft() {
        let nextLocation = this.cloneLocation(this.currentlocation);
        const turnLeftMap = {
            [Directions.NORTH]: () => {
                nextLocation.direction = Directions.WEST;
                return nextLocation;
            },
            [Directions.SOUTH]: () => {
                nextLocation.direction = Directions.EAST;
                return nextLocation;
            },
            [Directions.EAST]: () => {
                nextLocation.direction = Directions.NORTH;
                return nextLocation;
            },
            [Directions.WEST]: () => {
                nextLocation.direction = Directions.SOUTH;
                return nextLocation;
            }
        }
        return turnLeftMap[this.currentlocation.direction]();
    }

    moveBackward() {
        let nextLocation = this.cloneLocation(this.currentlocation);
        const moveBackwardMap = {
            [Directions.NORTH]: () => {
                nextLocation.point.y--;
                return nextLocation;
            },
            [Directions.SOUTH]: () => {
                nextLocation.point.y++;
                return nextLocation;
            },
            [Directions.EAST]: () => {
                nextLocation.point.x--;
                return nextLocation;
            },
            [Directions.WEST]: () => {
                nextLocation.point.x++;
                return nextLocation;
            }
        }
        return moveBackwardMap[this.currentlocation.direction]();
    }

    moveForward() {
        let nextLocation = this.cloneLocation(this.currentlocation);
        const moveForwardMap = {
            [Directions.NORTH]: () => {
                nextLocation.point.y++;
                return nextLocation;
            },
            [Directions.SOUTH]: () => {
                nextLocation.point.y--;
                return nextLocation;
            },
            [Directions.EAST]: () => {
                nextLocation.point.x++;
                return nextLocation;
            },
            [Directions.WEST]: () => {
                nextLocation.point.x--;
                return nextLocation;
            }
        }
        return moveForwardMap[this.currentlocation.direction]();
    }
    cloneLocation(location: Location) {
        return new Location(new Point(this.currentlocation.point.x, this.currentlocation.point.y), Directions[this.currentlocation.direction]);
    }

    deploy(location: Location) {
        this.currentlocation = location;
    }
    getCurrentLocation() {
        return this.currentlocation;
    }

    executeCommands(commandString: string) {
        for (const commandKey of commandString) {
            const command = this.commands.get(commandKey);
            if (command) {
                const nextLocation = command();
                if (this.isObstacle(nextLocation)) {
                    this.currentlocation.isStopped = true;
                    break;
                }
                else {
                    this.currentlocation = nextLocation;
                }
            }
        }
    }

    isObstacle(location: Location) {
        for (let index = 0; index < this.getObstacles().length; index++) {
            const obstacle = this.getObstacles()[index];
            if (location.point.x == obstacle.x && location.point.y == obstacle.y) {
                return true;
            }
        }
        return false;
    }
}