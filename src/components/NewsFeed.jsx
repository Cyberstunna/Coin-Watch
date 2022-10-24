import {React, useState, useEffect, Fragment} from "react";
import axios from "axios";
import ScrollableAreaX from "../utils/Scroll";

const NewsFeed = () => {

    const [newsArticles, setNewsArticles] = useState();

    const getFeed = async (articles) => {
        try {
            const resp = await axios.get(`http://localhost:8000/api/getNews`);
            setNewsArticles(resp.data);
        } 
        catch (err) {
            console.error(err);
        }
    };

    useEffect(()=>{
        getFeed();
    }, []);

    return(
        (newsArticles)?
        <div className="flex flex-row h-full mt-1" >
            <div className="flex flex-row place-content-between h-full w-full overflow-clip">
            
            {
                newsArticles.slice(0, 6).map(article => {
                    return <ArticleTab  data={article} />
                })
            }
            
            </div> 
        </div>
        : <div className="m-auto font-light"><p>Nothing for you to see yet :/</p></div>
    )
};

const ArticleTab = ({data}) =>{

    const contentLabel = () => {
        if(data.kind === 'news'){
            return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
          </svg>          
        } else if(data.kind === 'media'){
            return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
          </svg>
          
        }
    }

    return(
        <Fragment key={data.id}>
        <div className="w-2/12 h-4/5 border bg-white p-2 rounded-xl mr-3">
            <a href={data.url} target='blank'>
                <div className="flex flex-col h-full divide-y divide-cyan-300">
                    <div className="h-1/3 pb-1">
                        {contentLabel()}
                    </div>
                    <div className="text-wrap h-2/3">
                        <p className="text-xs text-ellipsis overflow-hidden">{data.title}</p>
                    </div>
                </div>
            </a>
        </div>
        </Fragment>
    )
}

export default NewsFeed;