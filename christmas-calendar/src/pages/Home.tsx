import Door from "../components/Door";
import { Storage } from "../services/storage";

export const Home = () => {
    const doors = Storage.getDoors();

    return (
        <div className="">
            {doors.map(d => <Door key={d.day} door={d}></Door>)}
        </div>
    );
}
