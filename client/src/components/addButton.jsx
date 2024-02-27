import { Link } from "react-router-dom";

function AddButton() {
    return ( 
        <button className="h-[100%]  bg-violet-600">
            <Link to="/add-card">
                Add card
            </Link>
        </button>
     );
}

export default AddButton;