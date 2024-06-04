import { Link }  from "react-router-dom"
import { FaHistory } from "react-icons/fa";

function Navbar() {
    return (
        <div className="absolute top-0 navbar bg-neutral text-neutral-content">
            <button className="text-xl btn btn-ghost">Phoenix Stride</button>
            <div className="ml-auto text-3xl">
                <Link to="/bets"> 
                    <FaHistory />
                </Link>
            </div>
        </div>
    );
}

export default Navbar;