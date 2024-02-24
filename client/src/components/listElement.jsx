import Badge from "../components/badge";

function ListElement() {
    return ( 
        <li className="rounded-md bg-[#1f203a] flex m-7 px-7 h-[3.8rem] items-center justify-between">
            <p className="font-semibold">CVC</p>
            <p className="font-light text-[0.9rem]">Holder name</p>
            <p className="font-light text-[0.9rem]">Due Date</p>
            <p className="font-semibold">Amount of money</p>
            <Badge status="Active" />
        </li>
     );
}

export default ListElement;