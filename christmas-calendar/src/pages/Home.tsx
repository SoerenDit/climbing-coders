import Door from "../components/Door";
import { Storage } from "../services/storage";

export const Home = () => {
    const doors = Storage.getDoors();

    const style = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    };

    return (
        <div style={style} className="m-4 gap-4">
            {doors.map(d => <Door key={d.day} door={d}></Door>)}
        </div>
    );
}
