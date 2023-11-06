import { useEffect, useState } from "react"

export const NewsBoard = () => {
  const [articles,setArticles] = useState([]);

   useEffect(()=>{
   `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`
   })

  return (
    <div>
      <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
    </div>
  )
}
