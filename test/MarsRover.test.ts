import { Directions } from "../src/constants/Directions";
import { Location } from "../src/Location";
import { MarsRover } from "../src/MarsRover";
import { Point } from "../src/Point";

test("should get correct location when deployed", () => {
    const startLocation = new Point(0, 0);
    const marsRover = new MarsRover();
    const location = new Location(startLocation, Directions.NORTH);
    marsRover.deploy(location);
    expect(marsRover.getCurrentLocation().toString()).toBe("(0,0) NORTH");
})
test("should get correct location when moved forward facing north", () => {
    const startLocation = new Point(0, 0);
    const marsRover = new MarsRover();
    const location = new Location(startLocation, Directions.NORTH);
    marsRover.deploy(location);
    marsRover.executeCommands("F");
    expect(marsRover.getCurrentLocation().toString()).toBe("(0,1) NORTH");
})
test("should get correct location when moved forward facing south", () => {
    const startLocation = new Point(0, 0);
    const marsRover = new MarsRover();
    const location = new Location(startLocation, Directions.SOUTH);
    marsRover.deploy(location);
    marsRover.executeCommands("F");
    expect(marsRover.getCurrentLocation().toString()).toBe("(0,-1) SOUTH");
})

test("should get correct location when moved forward facing east", () => {
    const startLocation = new Point(0, 0);
    const marsRover = new MarsRover();
    const location = new Location(startLocation, Directions.EAST);
    marsRover.deploy(location);
    marsRover.executeCommands("F");
    expect(marsRover.getCurrentLocation().toString()).toBe("(1,0) EAST");
})

test("should get correct location when moved forward facing west", () => {
    const startLocation = new Point(0, 0);
    const marsRover = new MarsRover();
    const location = new Location(startLocation, Directions.WEST);
    marsRover.deploy(location);
    marsRover.executeCommands("F");
    expect(marsRover.getCurrentLocation().toString()).toBe("(-1,0) WEST");
})

test("should get correct location when moved backword facing north", () => {
    const startLocation = new Point(0, 0);
    const marsRover = new MarsRover();
    const location = new Location(startLocation, Directions.NORTH);
    marsRover.deploy(location);
    marsRover.executeCommands("B");
    expect(marsRover.getCurrentLocation().toString()).toBe("(0,-1) NORTH");
})

test("should get correct location when moved backword facing south", () => {
    const startLocation = new Point(0, 0);
    const marsRover = new MarsRover();
    const location = new Location(startLocation, Directions.SOUTH);
    marsRover.deploy(location);
    marsRover.executeCommands("B");
    expect(marsRover.getCurrentLocation().toString()).toBe("(0,1) SOUTH");
})

test("should get correct location when moved backword facing east", () => {
    const startLocation = new Point(0, 0);
    const marsRover = new MarsRover();
    const location = new Location(startLocation, Directions.EAST);
    marsRover.deploy(location);
    marsRover.executeCommands("B");
    expect(marsRover.getCurrentLocation().toString()).toBe("(-1,0) EAST");
})

test("should get correct location when moved backword facing west", () => {
    const startLocation = new Point(0, 0);
    const marsRover = new MarsRover();
    const location = new Location(startLocation, Directions.WEST);
    marsRover.deploy(location);
    marsRover.executeCommands("B");
    expect(marsRover.getCurrentLocation().toString()).toBe("(1,0) WEST");
})

test("should get correct location when rotated left facing north", () => {
    const startLocation = new Point(0, 0);
    const marsRover = new MarsRover();
    const location = new Location(startLocation, Directions.NORTH);
    marsRover.deploy(location);
    marsRover.executeCommands("L");
    expect(marsRover.getCurrentLocation().toString()).toBe("(0,0) WEST");
})
