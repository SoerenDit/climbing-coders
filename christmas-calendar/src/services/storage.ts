import { Door } from "../models/door";
import data from "../data/doors.json";

export class Storage {
    static getDoors(): Door[] {
        return data.doors;
    }
}