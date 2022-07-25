import React from 'react'
import '../App.css';
import Lab from './Images/lab.jpg'
import Pic2 from './Images/pic2.png'


const Card = () => {
  return (
    <>
      <div className='card'>
        <img src={Lab} alt='' width='100%' height='100%' />
      </div>
      
      <div className='card'>
        <img src={Pic2} alt='' width='100%' height='100%' />
      </div> 

      <div className='cards-2'>
      <div className='card'>
        <img src={Lab} alt='' width='100%' height='100%' />
      </div>
      
      <div className='card'>
        <img src={Pic2} alt='' width='100%' height='100%' />
      </div>
      </div>
      
    </>
  )
}

export default Card