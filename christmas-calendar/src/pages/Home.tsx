import Door from "../components/Door";
import { Storage } from "../services/storage";

export const Home = () => {
    const doors = Storage.getDoors();

    const customStyle = {
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    };

    return (
        <div style={customStyle} className="grid m-4 gap-4">
            {doors.sort(() => Math.random() - 0.5).map(d => <Door key={d.day} door={d}></Door>)}
        </div>
    );
}


