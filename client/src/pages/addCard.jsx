import BackCard from "../components/backCard";
import Form from "../components/form";
import FrontCard from "../components/frontCard";

function AddCardPage() {
    return ( 
        <div className="w-[100%] h-[100%] min-h-[100vh]">
            <div className="w-[40%] ml-[9rem] my-[8rem] h-[60%] z-1 absolute text-white flex flex-col justify-between gap-6">
                <FrontCard />
                <BackCard />
            </div>  
            <div className="flex h-[100%] w-[100%]">
                <div className="border border-black w-[30%] h-[100%] bg-gradient-to-br from-[#230a31] via-[#4e1e48] to-[#1b0828]"></div>
                <div className="w-[70%] flex items-center justify-center">
                    <Form />
                </div>
            </div>
        </div>
     );
}

export default AddCardPage;