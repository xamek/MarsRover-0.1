import { Location } from "./Location";
import { Point } from "./Point";

export class ObstacleDetector {
    static getObstacles() {
        return [new Point(1, 4), new Point(3, 5), new Point(7, 4)];
    }
    static isObstacle(location: Location) {
        return this.getObstacles().some((obstacle) => { return location.point.x == obstacle.x && location.point.y == obstacle.y });
    }
}