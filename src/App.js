import {React, useState, useEffect, useRef} from "react";
import CryptoSearch from "./components/CryptoSearch";
import NavigationBar from "./components/NavigationBar";
import NewsFeed from "./components/NewsFeed";
import Others from "./components/Others";
import Trending from "./components/Trending";
import WatchList from "./components/WatchList";
import { WatchListMap } from "./mutations/WatchListMap";

function App() {

  const [watchList, setWatchList] = useState([]);
  const sessionWatchList = useRef(new WatchListMap())

  // useEffect(()=>{
  // },)

  const addToMap = (id) => {
    if(watchList.length === 0){setWatchList([id])}
    else if(watchList.length > 0){setWatchList([id, ...watchList])}
    console.log(sessionWatchList.current.addKey(id));

  }

  return (
    <div className="mx-auto w-10/12">
      <div className="flex flex-col flex-wrap h-screen">
        <div>
          <NavigationBar />
        </div>
        <div className="mt-14 border bg-white bg-opacity-75 rounded-md p-2 flex flex-col h-1/6 w-full">
          <h2 className="text-2xl font-light">Todays News</h2>
          <NewsFeed />
        </div>
        <div className="mt-14 h-3/5 w-full flex flex-row flex-wrap place-content-between">
          <div className="bg-white border bg-opacity-75 rounded-md p-2 flex flex-col h-full w-1/3">
            <h2 className="text-2xl font-light">Currently Watching</h2>
            <WatchList sessionWatchList={sessionWatchList} />
          </div>
          <div className="bg-white border bg-opacity-75 rounded-md p-2 flex flex-col h-full w-1/3">
            <h2 className="text-2xl font-light">CryptoSearch</h2>
            <CryptoSearch addToMap={addToMap} />
          </div>
          <div className="flex flex-col w-1/6 h-full place-content-between flex-wrap">
            <div className="bg-white border bg-opacity-75 rounded-md flex flex-col p-2 h-2/5 w-full">
              <h2 className="text-2xl font-light">Trending</h2>
              <Trending  />
            </div>
            <div className="bg-white border bg-opacity-75 rounded-md flex flex-col p-2 h-3/6 w-full">
              <h2 className="text-2xl font-light">Others are Watching</h2>
              <Others />
            </div>
          </div>
        </div>
        
      </div>
      <div className="mt-5">
          <h2 className="text-2xl font-light">More News</h2>
      </div>
      <div className="mx-auto text-center font-light text-slate-400 bg-white bg-opacity-75">
        <footer><p>Engineered by Nennii Cally-Ntete</p></footer>
      </div>
    </div>
  );
}

export default App;
