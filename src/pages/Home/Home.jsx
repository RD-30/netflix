import React, { useRef } from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCard from '../../components/TitleCard/TitleCard'
import Footer from '../../components/Footer/Footer'
import useGsapScrollTrigger from '../../components/useGsapScrollerTrigger'
const Home = () => {
  useGsapScrollTrigger();
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero reveal">
        <img src={hero_banner} alt="" className='banner-img' />
      <div className="hero-caption">
        <img src={hero_title} alt="" className='caption-img' />
      <p>Discovering hois ties to a secret ancient order, a young man living in modern Istanbul embraks on a quest to save the city from an immortal enemy.</p>
      <div className="hero-btns">
    <button className='btn'><img src={play_icon} alt="" />play</button>
    <button className='btn dark-btn'><img src={info_icon} alt="" />More info</button>
      </div>
      <TitleCard/>
      </div>
      </div>
      <div className="more-Cards reveal">
      <div className="reveal"><TitleCard title={"Blockbuster Movie"}category={"now_playing"}/></div>
      <div className="reveal"><TitleCard title={"Only on Netflix"}category={"top_rated"}/></div>
     <div className="reveal"><TitleCard title={"Upcoming Movie"}category={"upcoming"}/></div>
      <div className="reveal"><TitleCard title={"Top picks For You"}category={"popular"}/></div>
    </div>
    <Footer/>
    </div>
  )
}

export default Home
