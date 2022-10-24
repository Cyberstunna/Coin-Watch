import {React, useState, useEffect} from "react";
import axios from "axios";

const WatchList = () => {

    const [watchlist, setWatchList] = useState([]);

    return(
        (watchlist.length !== 0)?
        <div></div> : <div className="m-auto font-light"><p>You haven't started watching any crypto's.</p></div>
    )
};

export default WatchList;