import { Directions } from "../src/constants/Directions";
import { Location } from "../src/models/Location";
import { MarsRover } from "../src/models/MarsRover";
import { Point } from "../src/models/Point";

test("should get correct location when deployed", () => {
    const startLocation = new Point(0, 0);
    const marsRover = new MarsRover();
    const location = new Location(startLocation, Directions.NORTH);
    marsRover.deploy(location);
    expect(marsRover.getStatus()).toBe("(0,0) NORTH");
})
test("should get correct location when moved forward facing north", () => {
    const startLocation = new Point(0, 0);
    const marsRover = new MarsRover();
    const location = new Location(startLocation, Directions.NORTH);
    marsRover.deploy(location);
    marsRover.executeCommands("F");
    expect(marsRover.getStatus()).toBe("(0,1) NORTH");
})
test("should get correct location when moved forward facing south", () => {
    const startLocation = new Point(0, 0);
    const marsRover = new MarsRover();
    const location = new Location(startLocation, Directions.SOUTH);
    marsRover.deploy(location);
    marsRover.executeCommands("F");
    expect(marsRover.getStatus()).toBe("(0,-1) SOUTH");
})

test("should get correct location when moved forward facing east", () => {
    const startLocation = new Point(0, 0);
    const marsRover = new MarsRover();
    const location = new Location(startLocation, Directions.EAST);
    marsRover.deploy(location);
    marsRover.executeCommands("F");
    expect(marsRover.getStatus()).toBe("(1,0) EAST");
})

test("should get correct location when moved forward facing west", () => {
    const startLocation = new Point(0, 0);
    const marsRover = new MarsRover();
    const location = new Location(startLocation, Directions.WEST);
    marsRover.deploy(location);
    marsRover.executeCommands("F");
    expect(marsRover.getStatus()).toBe("(-1,0) WEST");
})

test("should get correct location when moved backword facing north", () => {
    const startLocation = new Point(0, 0);
    const marsRover = new MarsRover();
    const location = new Location(startLocation, Directions.NORTH);
    marsRover.deploy(location);
    marsRover.executeCommands("B");
    expect(marsRover.getStatus()).toBe("(0,-1) NORTH");
})

test("should get correct location when moved backword facing south", () => {
    const startLocation = new Point(0, 0);
    const marsRover = new MarsRover();
    const location = new Location(startLocation, Directions.SOUTH);
    marsRover.deploy(location);
    marsRover.executeCommands("B");
    expect(marsRover.getStatus()).toBe("(0,1) SOUTH");
})

test("should get correct location when moved backword facing east", () => {
    const startLocation = new Point(0, 0);
    const marsRover = new MarsRover();
    const location = new Location(startLocation, Directions.EAST);
    marsRover.deploy(location);
    marsRover.executeCommands("B");
    expect(marsRover.getStatus()).toBe("(-1,0) EAST");
})

test("should get correct location when moved backword facing west", () => {
    const startLocation = new Point(0, 0);
    const marsRover = new MarsRover();
    const location = new Location(startLocation, Directions.WEST);
    marsRover.deploy(location);
    marsRover.executeCommands("B");
    expect(marsRover.getStatus()).toBe("(1,0) WEST");
})

test("should get correct location when rotated left facing north", () => {
    const startLocation = new Point(0, 0);
    const marsRover = new MarsRover();
    const location = new Location(startLocation, Directions.NORTH);
    marsRover.deploy(location);
    marsRover.executeCommands("L");
    expect(marsRover.getStatus()).toBe("(0,0) WEST");
})

test("should get correct location when rotated left facing east", () => {
    const startLocation = new Point(0, 0);
    const marsRover = new MarsRover();
    const location = new Location(startLocation, Directions.EAST);
    marsRover.deploy(location);
    marsRover.executeCommands("L");
    expect(marsRover.getStatus()).toBe("(0,0) NORTH");
})

test("should get correct location when rotated left facing south", () => {
    const startLocation = new Point(0, 0);
    const marsRover = new MarsRover();
    const location = new Location(startLocation, Directions.SOUTH);
    marsRover.deploy(location);
    marsRover.executeCommands("L");
    expect(marsRover.getStatus()).toBe("(0,0) EAST");
})

test("should get correct location when rotated left facing west", () => {
    const startLocation = new Point(0, 0);
    const marsRover = new MarsRover();
    const location = new Location(startLocation, Directions.WEST);
    marsRover.deploy(location);
    marsRover.executeCommands("L");
    expect(marsRover.getStatus()).toBe("(0,0) SOUTH");
})

test("should get correct location when rotated right facing north", () => {
    const startLocation = new Point(0, 0);
    const marsRover = new MarsRover();
    const location = new Location(startLocation, Directions.NORTH);
    marsRover.deploy(location);
    marsRover.executeCommands("R");
    expect(marsRover.getStatus()).toBe("(0,0) EAST");
})

test("should get correct location when rotated right facing east", () => {
    const startLocation = new Point(0, 0);
    const marsRover = new MarsRover();
    const location = new Location(startLocation, Directions.EAST);
    marsRover.deploy(location);
    marsRover.executeCommands("R");
    expect(marsRover.getStatus()).toBe("(0,0) SOUTH");
})

test("should get correct location when rotated right facing south", () => {
    const startLocation = new Point(0, 0);
    const marsRover = new MarsRover();
    const location = new Location(startLocation, Directions.SOUTH);
    marsRover.deploy(location);
    marsRover.executeCommands("R");
    expect(marsRover.getStatus()).toBe("(0,0) WEST");
})

test("should get correct location when rotated right facing west", () => {
    const startLocation = new Point(0, 0);
    const marsRover = new MarsRover();
    const location = new Location(startLocation, Directions.WEST);
    marsRover.deploy(location);
    marsRover.executeCommands("R");
    expect(marsRover.getStatus()).toBe("(0,0) NORTH");
})

test("should get correct location when using multiple commands", () => {
    const startLocation = new Point(0, 0);
    const marsRover = new MarsRover();
    const location = new Location(startLocation, Directions.NORTH);
    marsRover.deploy(location);
    marsRover.executeCommands("RFLFFFRFLB");
    expect(marsRover.getStatus()).toBe("(2,2) NORTH");
})

test("should get correct location when using multiple commands using provided sample", () => {
    const startLocation = new Point(4, 2);
    const marsRover = new MarsRover();
    const location = new Location(startLocation, Directions.EAST);
    marsRover.deploy(location);
    marsRover.executeCommands("FLFFFRFLB");
    expect(marsRover.getStatus()).toBe("(6,4) NORTH");
})

test("should stop and report correct location when facing an obstacle", () => {
    const startLocation = new Point(0, 0);
    const marsRover = new MarsRover();
    const location = new Location(startLocation, Directions.NORTH);
    marsRover.deploy(location);
    marsRover.executeCommands("RFLFFFF");
    expect(marsRover.getStatus()).toBe("(1,3) NORTH STOPPED");
})

test("should return exception when wrong command is executed", () => {
    const startLocation = new Point(0, 0);
    const marsRover = new MarsRover();
    const location = new Location(startLocation, Directions.NORTH);
    marsRover.deploy(location);
    marsRover.executeCommands("X");
    expect(marsRover.executeCommands).toThrowError("Invalid Command");
})
