import {React, useState, useEffect, useRef} from "react";
import axios from "axios";

const WatchList = ({sessionWatchList}) => {
  const keys = Object.keys(sessionWatchList.current.list)

  useEffect(()=>{}, [sessionWatchList.current.list])

  return(
      (keys.length === 0)?
      <div className="m-auto font-light">
        {/* {console.log(sessionWatchList.current)} */}
        <p>You haven't started watching any crypto's.</p>
      </div> :
      <div className="mx-auto mt-5 font-light">
        {keys.map((key, index) =>{
          return(
            <Tab data={{key, val: sessionWatchList.current.list[key].value}} sessionWatchList={sessionWatchList} />
          )
        })}
      </div>
       
  )
};

const Tab = ({data, sessionWatchList}) => {

  const handleDelete = (event) => {
    console.log(event.target.id)
    console.log(sessionWatchList.current.removeKey(event.target.id));
  }

  const comparator = (arr) => {
    if(arr[0][1] > arr[1][1]){
      return(
        <div className="flex flex-row place-content-between items-center">
          <p className="">{Math.round((arr[0][1] + Number.EPSILON) * 100) / 100}</p>
          <div className="flex flex-col pl-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-green-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
            </svg>
            <p className="text-xs text-gray-500">{Math.round((arr[1][1] + Number.EPSILON) * 100) / 100}</p>
          </div>
        </div>
      )}
      else if(arr[0][1] < arr[1][1]){
        return(
          <div className="flex flex-row place-content-between items-center">
            <p className="text-xl">{Math.round((arr[0][1] + Number.EPSILON) * 100) / 100}</p>
            <div className="flex flex-col pl-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-red-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
              </svg>
              <p className="text-xs text-gray-500">{Math.round((arr[1][1] + Number.EPSILON) * 100) / 100}</p>
            </div>
          </div>
        )}
  }

  return(
    <div className="flex flex-row bg-white w-96 my-4 p-3 border rounded-xl" key={data.val[0][0]}>
    {console.log(data)}
      <div className="text-left mb-1 flex flex-col w-7/12">
        <button onClick={handleDelete}>
          <svg id={data.key} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="w-2/3">
          <span className="font-bold">{data.key.toUpperCase()}</span>
        </div>
      </div>
      <div className="flex flex-row w-4/12 items-center">
        <div className="w-full">
          {comparator(data.val)}
        </div>
      </div>
    </div>
  )
}



export default WatchList;