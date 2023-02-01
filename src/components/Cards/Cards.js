import React from 'react';
import './Cards.css';
import birth from '../../assets/birth.png';
import book from '../../assets/book.png';
import marriage from '../../assets/marriage.png';
import delivery from '../../assets/delivery.png';
import death from '../../assets/death.png';
import round from '../../assets/round.png'

function cards() {
  return (
    <div className='Cards-container'>
        <div className='card1 box'>
            <div className="img">
                <img src={birth} alt="birth" />
            </div>
            <div className="text">
                <p className="p1">Donate for</p>
                <h2 className='head'>New Born <br /> Baby Girls</h2>
                <p className='p2'>More details...</p>
            </div>
        </div>

        <div className='card2 box'>
            <div className="img">
                <img src={book} alt="book" />
            </div>
            <div className="text">
                <p className="p1">Donate for</p>
                <h2 className='head'>Children<br />Education</h2>
                <p className='p2'>More details...</p>
            </div>
        </div>

        <div className='card3 box'>
            <div className="img">
                <img src={marriage} alt="marriage" />
            </div>
            <div className="text">
                <p className="p1">Donate for</p>
                <h2 className='head'>Girls<br />Marriage</h2>
                <p className='p2'>More details...</p>
            </div>
        </div>

        <div className='card4 box'>
            <div className="img">
                <img src={delivery} alt="delivery" />
            </div>
            <div className="text">
                <p className="p1">Donate for</p>
                <h2 className='head'>Healthy & <br />Delivery</h2>
                <p className='p2'>More details...</p>
            </div>
        </div>

        <div className='card5 box'>
            <div className="img">
                <img src={death} alt="death" />
            </div>
            <div className="text">
                <p className="p1">Donate for</p>
                <h2 className='head'>Father <br />Expire</h2>
                <p className='p2'>More details...</p>
            </div>
        </div>


      
    </div>
  )
}

export default cards
