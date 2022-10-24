import React from "react";


const ScrollableAreaX = ({children}) => {
    return(
        <div className="overflow-x-scroll w-fit h-full flex flex-row">
            {children}
        </div>
    )
}

export default ScrollableAreaX;