import AddButton from "../components/addButton";
import ListElement from "../components/listElement";
import axios from 'axios'

function CardsList() {
    
    return ( 
        <div className="flex h-[100%] w-[100%] max-h-[100%] items-center justify-center bg-[#141625] text-white">
            <div className="h-[80%] w-[60%] flex flex-col">
                <div className="flex justify-between items-center px-7"> {/*Header */}
                    <div>
                        <h1 className="text-[1.7rem] font-bold">Cards</h1>
                        <p>There are X total cards</p>
                    </div>
                    <div className="h-[80%]">
                        <AddButton />
                    </div>
                </div>
                <ul className="flex flex-col gap-4 mt-7 overflow-y-scroll">
                    <ListElement />
                    <ListElement />
                    <ListElement />
                    <ListElement />
                    <ListElement />
                    <ListElement />
                    <ListElement />
                    <ListElement />
                    <ListElement />
                    <ListElement />
                    <ListElement />
                    <ListElement />
                </ul>
            </div>
        </div>
     );
}

export default CardsList;