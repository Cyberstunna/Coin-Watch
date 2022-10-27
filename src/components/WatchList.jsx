import {React, useState, useEffect} from "react";
import axios from "axios";
import { WatchListMap } from "../mutations/WatchListMap";

const WatchList = () => {

    const [watchlist, setWatchList] = useState([]);

    const sessionWatchList = new WatchListMap();
    sessionWatchList.addKey("bitcoin");

    return(
        (watchlist.length !== 0)?
        <div></div> : <div className="m-auto font-light"><p>You haven't started watching any crypto's.</p><button onClick={()=>{console.log(sessionWatchList.list["bitcoin"].value.pop())}}>Test</button><button onClick={sessionWatchList.updateKey("bitcoin")}>Update</button></div>
    )
};

export default WatchList;