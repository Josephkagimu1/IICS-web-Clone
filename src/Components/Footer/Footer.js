import React from 'react'
import './Footer.css';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='body'>
          <h1>CONTACT US</h1>

        </div>

        <div className='call-icon'> 
          <CallIcon   />  &nbsp; &nbsp;
            <span> Tel: +256 414 501 330/ 331/ 332 </span>
        </div>

        <div className='location'>
          <LocationOnIcon />  &nbsp; &nbsp;
            <span style={{width:'100%'}}> Address: Namungo Close,
                  Off Tankhill Road - Muyenga Kampala, 
                  Uganda P.O. Box 73217 
            </span>
        </div>

        <div className='mail'> 
          <ContactMailIcon   />  &nbsp; &nbsp;
            <span> info@iicstechnologies.com </span>
        </div>
        
        <div className='body2'>
          <h1>ABOUT US</h1>
          <p>
          IICS Technologies is a software development company of Engineers,
           Designers and Developers that provide cutting edge engineering solutions. 
           Our passion is in supporting Private and/or Government entities in their quest to work smarter and improve service delivery. 
           We are visionary and reliable software partners that will focus on driving your agenda.
          </p>
          
        </div>
    </div>
  )
}

export default Footer