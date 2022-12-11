import Door from "../components/Door";
import { Storage } from "../services/storage";

export const Home = () => {
    const doors = Storage.getDoors();

    return (
        <div>
            {doors.map(d => <Door door={d}></Door>)}
        </div>
    );
}
