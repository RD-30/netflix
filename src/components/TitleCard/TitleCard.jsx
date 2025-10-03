import React, {useEffect, useRef, useState} from 'react'
import './TitleCard.css'
import cards_data from '../../assets/cards/cards_data'

import { Link } from 'react-router-dom'

const TitleCard = ({title, category}) => {
  const[apidata, setApiData]=useState([]);
  
  const cardsRef=useRef();
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzI5ZDY3NWUzY2MzYmRhYzJiOGU0NTBlMTkyMDhmYyIsIm5iZiI6MTc1MjQxNzMzOS41MjYsInN1YiI6IjY4NzNjNDNiOGE2NzVjMjFiMjcwNTQ2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oCPbeigjpsu6pOGzOBWb5OdbyZirmDJ57v_RVQQbXM8'
  }
};


const handWheel=(event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft +=event.deltaY;
}
useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
  cardsRef.current.addEventListener('wheel',handWheel)
},[])

  return (
    <div className='title-Card'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apidata.map((card,index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
          <p> {card.original_title} </p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCard
