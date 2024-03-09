import { Link } from "react-router-dom";

function AddButton() {
    return ( 
        <button className="h-[3rem] min-h-[3rem] w-[8rem] rounded-[30px]  bg-violet-600">
            <Link to="/add-card" className="flex justify-center gap-4">
                <div className="bg-white w-6 rounded-[50%] flex items-center justify-center">
                    <img className="h-4" src="/plus-solid.svg" alt="" />
                </div>
                <span>Add card</span>
            </Link>
        </button>
     );
}

export default AddButton;