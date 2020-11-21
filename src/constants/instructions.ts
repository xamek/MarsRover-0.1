import { Location } from "../models/Location";
import { Directions } from "./Directions";

export const moveForwardMap = {
    [Directions.NORTH]: (nextLocation: Location) => {
        nextLocation.point.y++;
        return nextLocation;
    },
    [Directions.SOUTH]: (nextLocation: Location) => {
        nextLocation.point.y--;
        return nextLocation;
    },
    [Directions.EAST]: (nextLocation: Location) => {
        nextLocation.point.x++;
        return nextLocation;
    },
    [Directions.WEST]: (nextLocation: Location) => {
        nextLocation.point.x--;
        return nextLocation;
    }
}

export const moveBackwardMap = {
    [Directions.NORTH]: (nextLocation: Location) => {
        nextLocation.point.y--;
        return nextLocation;
    },
    [Directions.SOUTH]: (nextLocation: Location) => {
        nextLocation.point.y++;
        return nextLocation;
    },
    [Directions.EAST]: (nextLocation: Location) => {
        nextLocation.point.x--;
        return nextLocation;
    },
    [Directions.WEST]: (nextLocation: Location) => {
        nextLocation.point.x++;
        return nextLocation;
    }
}

export const turnLeftMap = {
    [Directions.NORTH]: (nextLocation: Location) => {
        nextLocation.direction = Directions.WEST;
        return nextLocation;
    },
    [Directions.SOUTH]: (nextLocation: Location) => {
        nextLocation.direction = Directions.EAST;
        return nextLocation;
    },
    [Directions.EAST]: (nextLocation: Location) => {
        nextLocation.direction = Directions.NORTH;
        return nextLocation;
    },
    [Directions.WEST]: (nextLocation: Location) => {
        nextLocation.direction = Directions.SOUTH;
        return nextLocation;
    }
}

export const turnRightMap = {
    [Directions.NORTH]: (nextLocation: Location) => {
        nextLocation.direction = Directions.EAST;
        return nextLocation;
    },
    [Directions.SOUTH]: (nextLocation: Location) => {
        nextLocation.direction = Directions.WEST;
        return nextLocation;
    },
    [Directions.EAST]: (nextLocation: Location) => {
        nextLocation.direction = Directions.SOUTH;
        return nextLocation;
    },
    [Directions.WEST]: (nextLocation: Location) => {
        nextLocation.direction = Directions.NORTH;
        return nextLocation;
    }
}
