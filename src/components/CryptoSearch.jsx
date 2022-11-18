import {React, useState, Fragment} from "react";
import axios from "axios";


const CryptoSearch = ({addToMap}) => {

    const [query, setQuery] = useState();
    const [queryResult, setQueryResult] = useState();


    const setValue = (e) => {
        setQuery(e.target.value);
        searchQuery(query);
    }

    const searchQuery = (query) => {
        let marketSearch = async () => {
            try {
                const resp =  await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`);
                setQueryResult(resp.data);
            } catch (err) {
                // Handle Error Here
            }
        };
        marketSearch();
    }
    

    return(
        <div className="flex flex-col h-full mx-auto mt-5 w-5/6">
            <div className="h-fit flex flex-row border bg-white rounded-md p-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-slate-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input type="text" placeholder="Search for Crypto" className="w-11/12 h-full text-lg pl-2 outline-0 italic" onChange={setValue} />
            </div>
            {
                (query)?
                <div className="m-auto w-full h-5/6 overflow-y-auto">
                    {
                        (queryResult === undefined)? 
                        <div className=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 animate-spin">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg></div> :
                        <div>{queryResult.coins.slice(0, 6).map(result=>{
                            return <SearchCard  data={result} addFunction={addToMap} />
                        })}</div>
                    }
                </div> : <div className="m-auto font-light"><p>Empty Search</p></div>
            }
        </div>
    )
};

const SearchCard = ({data, addFunction}) => {

    const addToWatchList = (e) => {
        let id = e.target.id;
        addFunction(id);
    }

    return(
        <Fragment key={data.id}>
        <div className="w-full h-full flex flex-row my-1 bg-white place-content-between p-1 items-center border rounded-lg divide-x">
            <div className="h-full w-1/4 flex place-items-center"><img alt="thumbnail" src={data.thumb}  /></div>
            <div className="w-1/2"><p className="font-bold">{data.symbol}</p><span>{data.name}</span></div>
            <div className="text-green-500 font-light hover:cursor-pointer text-md" ><button onClick={addToWatchList} id={data.id}>+ Watch</button></div>
        </div>
        </Fragment>
    )
}

export default CryptoSearch;