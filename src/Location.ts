import { Directions } from "./constants/Directions";
import { Point } from "./Point";

export class Location {
    point: Point;
    direction: Directions;
    constructor(point: Point, direction: Directions) {
        this.point = point;
        this.direction = direction;
    }
    toString() {
        return `(${this.point.x},${this.point.y}) ${this.direction}`
    }
}