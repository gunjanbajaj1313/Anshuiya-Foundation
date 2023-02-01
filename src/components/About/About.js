import React from 'react';
import './About.css';
import about from '../../assets/about.png';
import Button from 'react-bootstrap/Button';
import about1 from '../../assets/about1.png'

function About() {
  return (
    <>
    <div className='about1-img'>
      <img src={about1} alt='about1' />
      </div>
    <div className='about-container'>
      <div className='about-left'>
        <img src={about} alt='about' className='about-img' />
      </div>
      
      <div className='about-right'>
        <h3 style={{color:'gray',textAlign:'left',fontSize:'40px',marginLeft:'20px',marginTop:'30px'}}>Welcome to Crowd Stage<br />Foundation</h3>
        <h1 style={{textAlign:'left',fontSize:'40px',marginLeft:'20px'}}>A world where poverty<br />will not exists</h1>
        <h3 style={{textAlign:'left',fontSize:'30px',color:'#E03C33',marginLeft:'20px'}}>We are the largest crowd funding</h3>
        <p style={{textAlign:'left',fontSize:'25px',color:'gray',fontWeight:'bold',marginLeft:'20px'}}>A world where girls are educated,safe and healthy.We are<br/>one of the largest crowd funding.</p>
        <p style={{textAlign:'left',fontSize:'20px',marginLeft:'20px'}}>Change Learn More to Donate Now button and link it to the<br />features of donation.</p>
        <p style={{textAlign:'left',fontSize:'20px',marginLeft:'20px'}}>Every girl child is special and has potential in her own way,it<br />is respon.</p>
        <Button variant="danger" sz="lg" className='about-button'>Donate now</Button>
      </div>
      
    </div>
    </>
  )
}

export default About
