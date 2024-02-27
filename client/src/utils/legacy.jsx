import { Link } from "react-router-dom";

function Home() {
    return ( 
        <div className="flex h-[100%] w-[100%] items-center justify-center bg-[#1f2631] ">
            <div className="text-white h-[60%] w-[40%] bg-[#323b4a] rounded-3xl flex flex-col text-center justify-between py-4">
                <p className="uppercase">Credit card saver app</p>
                <p className="text-[2rem]">Organize your cards informations in a single place!</p>
                <hr className="mx-[5rem]"/>
                <div className="flex gap-8 items-center justify-center mb-6">
                    <Link to="/add-card">
                        <button className="bg-[#623ef0] h-[4rem] w-[7rem] rounded-lg">Add a card</button>
                    </Link>
                    <Link to="/all-cards">
                        <button className="bg-white border border-[#623ef0] text-[#623ef0]  h-[4rem] w-[7rem] rounded-lg">See all cards</button>
                    </Link>
                </div>
            </div>
        </div>
     );
}


// List page

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
        <div className="flex h-[100%] w-[100%] max-h-[100%] items-center justify-center bg-[#141625] text-white min-h-[100vh]">
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


// Form page

import BackCard from "../components/backCard";
import Form from "../components/form";
import FrontCard from "../components/frontCard";

function AddCardPage() {
    return ( 
        <>
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
        </>
     );
}