import { useState, createContext } from "react";


//as the actual value
export const WatchListContext = createContext({
    watchList : [],
    setWatchList : () => null
})

export const WatchListProvider = ({ children }) =>{
    const [watchList, setWatchList] = useState([]);
    const value = {watchList, setWatchList}
    return <WatchListContext.Provider value={value} >{children}</WatchListContext.Provider>
}