import { Location } from "./Location";

export class MarsRover {
    currentlocation!: Location;


    deploy(location: Location) {
        this.currentlocation = location;
    }
    getCurrentLocation() {
        return this.currentlocation;
    }
}