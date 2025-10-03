import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
const Player = () => {
  const {id}= useParams();
  const navigate= useNavigate();
const [apiData, setApiData]=useState({
  name:"",
  key:"",
  published_at: "",
  typeof:""
})
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzI5ZDY3NWUzY2MzYmRhYzJiOGU0NTBlMTkyMDhmYyIsIm5iZiI6MTc1MjQxNzMzOS41MjYsInN1YiI6IjY4NzNjNDNiOGE2NzVjMjFiMjcwNTQ2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oCPbeigjpsu6pOGzOBWb5OdbyZirmDJ57v_RVQQbXM8'
  }
};
useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
},[])

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}} />
      <iframe width="560" height="315" src={`https://www.youtube.com/embed/${apiData.key}`} title="tralier" frameBorder="0" allowfullscreen></iframe>
    <div className="player-info">
      <p>{apiData.published_at.slice(0,10)}</p>
      <p>{apiData.name}</p>
      <p>{apiData.type}</p>

    </div>
    </div>
  )
}

export default Player
 