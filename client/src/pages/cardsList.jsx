import AddButton from "../components/addButton";
import ListElement from "../components/listElement";
import { useEffect, useState } from "react";
import { getCards } from "../utils/utils-function";
import CardContext from "../contexts/cardContext";

function CardsList() {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        async function fetchAllTweets(){
          const CardsList = await getCards()
          setCards(CardsList)
          //console.log(cards)
        }
        fetchAllTweets()
      }, [])
      console.log(cards);
    return ( 
        <div className="flex h-[auto] w-[100%]  items-center justify-center bg-[#141625] text-white">
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
                <ul className="flex flex-col gap-4 mt-7">
                    {
                        cards.map((card, index) => {
                            return (
                                <CardContext.Provider value={card} key={index}>
                                    <ListElement />
                                </CardContext.Provider>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
     );
}

export default CardsList;