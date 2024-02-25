function Badge({status}) {
    return ( 
        <div className="flex items-center justify-center gap-2 bg-green-900 h-[55%] w-[16%] rounded-md">
            <span className="h-[12px] w-[12px] bg-green-500 rounded-[50%]"></span>
            <p className=" text-green-500 ">{status}</p>
        </div>
     );
}

export default Badge;