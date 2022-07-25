import './Home.css';
import React from 'react'
import Card from '../Card';
import HomePic from '../Images/homePic.png'

const Home = () => {
  return (
    <div>
      <div className='home'>

      <h1 className='home-msg'>
           WELCOME TO <i> IICS Technologies </i> <br/>
           <b>Thanks for Visiting us</b>
      </h1>
      
      <div className='official'>
        <button > <a href='https://iicstechnologies.com/#'> Official Website</a>  </button>
      </div>

      <div className='home-pics'>
        <div className='home-pic'>
          <img src={HomePic} alt='' />
        </div>

        <div className='home-pic'>
          <img src={HomePic} alt='' />
        </div>
      </div>

        <div className='cards'>
         <Card />
        </div>

      </div>
       
    </div>
  )
}

export default Home;