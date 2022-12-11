import { IDoor } from "../models/IDoor";
import data from "../data/doors.json";

export class Storage {
    static getDoors(): IDoor[] {
        return data.doors;
    }
}