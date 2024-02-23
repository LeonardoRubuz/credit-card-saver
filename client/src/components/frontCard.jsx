function FrontCard() {
    return ( 
        <div className="h-[62%] w-[63%] rounded bg-[#623ef0] flex flex-col justify-between p-5">
            <div className="h-12 flex gap-2">
                <div className="bg-white h-[50px] w-[50px] rounded-[50%]"></div>
                <div className="border border-white h-[27px] w-[27px] rounded-[50%] self-center"></div>
            </div>
            <div className="flex flex-col justify-between gap-4">
                <div className="flex gap-0 justify-between text-2xl items-start">
                    <span className="tracking-[0.25em]">0000</span>
                    <span className="tracking-[0.25em]">0000</span>
                    <span className="tracking-[0.25em]">0000</span>
                    <span className="tracking-[0.25em]">0000</span>
                </div>
                <div className="flex justify-between">
                    <p className="flex uppercase">jane appleseed</p>
                    <div><span>00</span>/<span>00</span></div>
                </div>
            </div>
        </div>
     );
}

export default FrontCard;