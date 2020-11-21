import { Directions } from "./constants/Directions";
import { Point } from "./Point";

export class Location {
    point: Point;
    direction: Directions;
    isStopped: boolean = false;

    constructor(point: Point, direction: Directions) {
        this.point = point;
        this.direction = direction;
    }
    toString() {
        return `(${this.point.x},${this.point.y}) ${this.direction}${this.isStopped ? " STOPPED" : ""}`;
    }

    cloneLocation() {
        return new Location(new Point(this.point.x, this.point.y), Directions[this.direction]);
    }
}