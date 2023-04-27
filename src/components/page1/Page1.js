import React from 'react' 
import Sidebar from '../Sidebar';
import './Page1.css'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import one from '../../imgs/1.webp'
import two from '../../imgs/2.webp'
import three from '../../imgs/3.webp'
import four from '../../imgs/4.webp'
import ReactPlayer from 'react-player'
function Page1() {
  return (
   <>
   
   <div className="Main">
    <div className='main'>
    <h1>Know It To Prevent It </h1>
    <h3>Upcoming Events</h3>

     <div classname="upcoming" style={{display:"flex",justifyContent:'space-evenly', gap:"20px",}}>

     <div class="card-container">
      
      <a href="/" class="hero-image-container">
        <img class="hero-image" src={one} alt="Spinning glass cube"/>
      </a>
      <h3 className='title' >Fight against drug contest </h3>
      <button className='book'>Book</button>
     
    </div>
    <div class="card-container">
      
      <a href="/" class="hero-image-container">
        <img class="hero-image"src={two} alt="Spinning glass cube"/>
      </a>
      <h3 className='title' >Fight against drug contest </h3>
      <button className='book'>Book</button>
     
    </div>
    <div class="card-container">
      
      <a href="/" class="hero-image-container">
        <img class="hero-image" src={three} alt="Spinning glass cube"/>
      </a>
      <h3 className='title' >Fight against drug contest </h3>
      <button className='book'>Book</button>
     
    </div>
    <div class="card-container">
      
      <a href="/" class="hero-image-container">
        <img class="hero-image" src={four} alt="Spinning glass cube"/>
      </a>
      <h3 className='title' >Fight against drug contest </h3>
      <button className='book'>Book</button>
     
    </div>
     </div>
    <div className="portfolio" id="portfolio">
      <span>videos</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
        <ReactPlayer
    url="https://youtu.be/GKAgpuJkBdk"
    controls
    playbackRate = {2}
    width = "350px"
    height = "250px"
/>
        </SwiperSlide>
        <SwiperSlide>
          <ReactPlayer
    url="https://youtu.be/c0WRBbFe668"
    controls
    playbackRate = {2}
    width = "350px"
    height = "250px"
/>
        </SwiperSlide>
        <SwiperSlide>
        <ReactPlayer
    url="https://youtu.be/nNo6OpBV-GU"
    controls
    playbackRate = {2}
    width = "350px"
    height = "250px"
/>
        </SwiperSlide>
        <SwiperSlide>
        <ReactPlayer
    url="https://youtu.be/luai0p0y2zE"
    controls
    playbackRate = {2}
    width = "350px"
    height = "250px"
/>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
    </div>
    </>
  );
};

export default Page1