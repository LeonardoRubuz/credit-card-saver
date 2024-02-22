function BackCard() {
    return ( 
        <div className="h-[62%] w-[63%] rounded self-end bg-[#e4e5e9] flex flex-col justify-between gap-[1rem]">
            <div className="w-[100%] bg-black h-[3rem] mt-5"></div>
            <div className="w-[80%] self-center bg-[#acb7bf] rounded-md h-[2rem] flex flex-col justify-center">
                <div className="self-end flex gap-1 mr-3">
                    <span>0</span>
                    <span>0</span>
                    <span>0</span>
                </div>
            </div>
            <div></div>
        </div>
     );
}

export default BackCard;