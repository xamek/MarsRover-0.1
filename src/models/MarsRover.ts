import { Location } from "./Location";
import { moveForwardMap, moveBackwardMap, turnLeftMap, turnRightMap } from "../constants/instructions";
import { Point } from "./Point";

export class MarsRover {

    currentlocation!: Location;
    commands!: Map<string, Function>;
    isStopped: boolean = false;

    constructor() {
        this.loadCommands();
    }

    loadCommands() {
        this.commands = new Map<string, Function>();
        this.commands.set("F", () => { return this.moveForward() });
        this.commands.set("B", () => { return this.moveBackward() });
        this.commands.set("L", () => { return this.turnLeft() });
        this.commands.set("R", () => { return this.turnRight() });
    }

    turnRight() {
        let nextLocation = this.getCurrentLocation().cloneLocation();
        return turnRightMap[this.currentlocation.direction](nextLocation);
    }

    turnLeft() {
        let nextLocation = this.getCurrentLocation().cloneLocation();
        return turnLeftMap[this.currentlocation.direction](nextLocation);
    }

    moveBackward() {
        let nextLocation = this.getCurrentLocation().cloneLocation();
        return moveBackwardMap[this.currentlocation.direction](nextLocation);
    }

    moveForward() {
        let nextLocation = this.getCurrentLocation().cloneLocation();
        return moveForwardMap[this.currentlocation.direction](nextLocation);
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
                    this.isStopped = true;
                    break;
                }
                else {
                    this.isStopped = false;
                    this.currentlocation = nextLocation;
                }
            }
        }
    }

    getObstacles() {
        return [new Point(1, 4), new Point(3, 5), new Point(7, 4)];
    }
    isObstacle(location: Location) {
        return this.getObstacles().some((obstacle) => { return location.point.x == obstacle.x && location.point.y == obstacle.y });
    }

    getStatus() {
        const currentlocation = this.getCurrentLocation();
        return `(${this.currentlocation.point.x},${this.currentlocation.point.y}) ${this.currentlocation.direction}${this.isStopped ? " STOPPED" : ""}`;
    }
}