import React, { useEffect, useState } from 'react'
import './index.css'

const App = () => {
    let [details,setDetails] = useState("")
    let [movie, setMovie] = useState('')
     let[error,setError]=useState("")


        let fetchApi = async() => {
            try{
                let apiKey = "35da2967"
                let url=`http://www.omdbapi.com/?apikey=${apiKey}&t=${movie}`;
                let data = await fetch(url)
                let finalData =await data.json()
                if(finalData.Response==="True"){
                  setDetails(finalData)
                  console.log(finalData)
                   }else{
                  setError("Movie not found")
                  alert(error)
                }
                
               }
              catch(error){
                alert(Error)
            }
        }
        useEffect(()=>{ },[])
    

  return (
    <div className='div1'>
        <h1 className='heading'>Movie App</h1>
        <div className='search'>
        <input  type="text"  placeholder='Enter Movie Name' value={movie} onChange={(e)=>{setMovie(e.target.value)}}  />
        <button  onClick={fetchApi} className='bn5'> Get Movie</button>
        </div>
        {
            details &&
                <div className='movie'>
                    
                  <div className='poster'><img src={details.Poster}></img></div>
                    <div className='details'>
                    <div>
                    <h1>{details.Title}</h1>
                    <h4>{details.Year}</h4>
                    <h5>{details.Plot}</h5>
                    </div>
                    <div className='actores'>
                    <h4>Actors:{details.Actors}</h4>
                    <h4>Director:{details.Director}</h4>
                    <h4>Ratings:{details.Ratings[0].Value}</h4>
                    </div>
                    </div>
                </div>
            
        }
    </div>
  )
}

export default App
