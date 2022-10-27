import {React, useState, useEffect, Fragment} from "react";
import {v4 as uuidv4} from "uuid";
import axios from "axios";


const Trending = () => {

    const [trendList, setTrendList] = useState();

    useEffect (()=>{
        let getData = async () => {
            try {
                const resp =  await axios.get(`https://api.coingecko.com/api/v3/search/trending`);
                setTrendList(resp.data);
            } catch (err) {
                // Handle Error Here
                console.error(err);
            }
        };
        getData();
    },[])


    return(
        (trendList)?
        <div className="w-full h-5/6 flex flex-row flex-wrap overflow-y-scroll no-scrollbar">
            {
                trendList.coins.map(item=>{
                    return <TrendIcons  data={item} key={item.id} />
                })
            }
        </div> :
        <div className="flex flex-row items-center font-light m-auto h-4/5 w-full italic"><span className="pr-2">We're loading this data</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 animate-spin">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg></div>
    )
}

const TrendIcons = ({data}) => {

    return(
        <Fragment key={data.id}>
            <div className="p-1 text-center">
            <img alt="thumbnail" src={data.item.small} className="w-5/6" />
            <span className="font-light">{data.item.symbol}</span>
            </div>
        </Fragment>
    )
}


export default Trending;