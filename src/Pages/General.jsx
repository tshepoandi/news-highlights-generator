import { useEffect, useState } from "react"
import { NewsItem } from "../Components/NewsItem";
import { useParams } from "react-router-dom";


const General = () => {
  const [articles,setArticles] = useState([]);
    console.log(useParams())
   useEffect(()=>{
   let url = `https://newsapi.org/v2/top-headlines?category=general&apiKey=3e7cffa2867b40c5be3720dcaae42198`
   fetch(url)
   .then(response => response.json())
   .then(data=>setArticles(data.articles))
  },[])

  return (
    <div>
      <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
      <p className="fw-bold"> Here is Our <span className="text-indigo-400">General</span> Highlights</p>
      {articles.map((news,index)=>{
        return <NewsItem key={index} 
        title={news.title} 
        description={news.description} 
        src={news.urlToImage} 
        url={news.url} 
        author={news.author}/>
      })
      }
    </div>
  )
}

export default General