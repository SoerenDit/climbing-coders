import data from "../data/doors.json";
import { IDoor } from "../models/IDoor";

export class Storage {
    static getDoors(): IDoor[] {
        return data.doors;
    }
}