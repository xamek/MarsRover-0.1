import { Request, Response } from "express";
import { Directions } from "../constants/Directions";
import { Location } from "../models/Location";
import { MarsRover } from '../models/MarsRover';
import { Point } from "../models/Point";

export const deployAndMove = (req: Request, res: Response) => {
    try {
        const coords = req.query.start?.toString().split('.')
        const x = Number(coords ? coords[0] : 0);
        const y = Number(coords ? coords[1] : 0);
        const direction: string = req.query.direction as string;
        const command: string = req.query.command as string;
        const startLocation = new Point(x, y);
        const marsRover = new MarsRover();
        const location = new Location(startLocation, Directions[direction as Directions]);
        marsRover.deploy(location);
        marsRover.executeCommands(command);
        res.send(marsRover.getStatus());
    } catch (error) {
        res.send(error.message);
    }

}
