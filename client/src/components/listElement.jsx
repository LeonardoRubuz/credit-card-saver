import { useContext } from "react";
import Badge from "../components/badge";
import CardContext from "../contexts/cardContext";

function ListElement() {
    const card = useContext(CardContext)
    return ( 
        <li className="rounded-md bg-[#1f203a] flex px-7 h-[3.8rem] items-center justify-between">
            <p className="font-semibold">{card.cvc}</p>
            <p className="font-light text-[0.9rem]">{card.holder}</p>
            <p className="font-light text-[0.9rem] text-center">{card.expiryMonth}-{card.expiryYear}</p>
            <p className="font-semibold text-center">{card.money}</p>
            <Badge status="Active" />
        </li>
     );
}

export default ListElement;