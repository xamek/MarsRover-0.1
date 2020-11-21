import { Directions } from "../src/constants/Directions";
import { Location } from "../src/Location";
import { MarsRover } from "../src/MarsRover";

test("should get correct location when deployed", () => {
    const startLocation = { x: 0, y: 0 };
    const marsRover = new MarsRover();
    const location = new Location(startLocation, Directions.NORTH);
    marsRover.deploy(location);
    expect(marsRover.getCurrentLocation().toString()).toBe("(0,0) NORTH");
})