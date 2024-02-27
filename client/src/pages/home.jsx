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

export default Home;