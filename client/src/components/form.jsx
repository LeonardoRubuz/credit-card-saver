function Form() {
    return ( 
        <form className="h-[70%] w-[50%] flex flex-col justify-around px-[3rem] ml-[10rem] gap-[0.01rem]" action="">
            <div className="flex flex-col">
                <label className="font-bold">CARDHOLDER NAME</label>
                <input className="px-3 border-2 border-[#e4e5e9] h-[2.9rem] rounded-lg" type="text" placeholder="e.g. Jane Appleseed"/>
            </div>
            <div className="flex flex-col">
                <label className="font-bold">CARD NUMBER</label>
                <input className="px-3 border-2 border-[#e4e5e9] h-[2.9rem] rounded-lg" type="text" placeholder="e.g. 1234 5678 9123 0000 "/>
            </div>
            <div className="flex gap-4 justify-between">
                <div className="flex flex-col">
                    <label className="font-bold">EXP. DATE (MM / YY)</label>
                    <div className="flex gap-2">
                        <input className="px-3 border-2 border-[#e4e5e9] h-[2.9rem] rounded-lg w-[45%]" type="text" placeholder="MM"/>
                        <input className="px-3 border-2 border-[#e4e5e9] h-[2.9rem] rounded-lg w-[45%]" type="text" placeholder="YY"/>
                    </div>
                </div>
                <div className="flex flex-col">
                    <label className="font-bold">CVC</label>
                    <input className="px-3 border-2 border-[#e4e5e9] h-[2.9rem] rounded-lg" type="text" placeholder="e.g. 123"/>
                </div>
            </div>
            <button className="bg-black text-white h-[3rem] rounded-lg">Confirm</button>
        </form>
     );
}

export default Form;