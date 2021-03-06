import React from 'react'
import '../Styles/landing.css';
import musk from '../Media/musk.jpeg';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div>
      <div className="landing">

      <div className="image">
        <h2>
          WELCOME TO
        </h2>
        <h1 className="title">
          BurgerX
        </h1>
      </div>
            
      <div className="musk-info">
        <div>
          <img className="img-fluid pic" src={musk} alt="musk" />
        </div>
        <div className="musk-info-text">
            <div>
              <h3>
                Hi, my name is Elon
            </h3>
              <p>
                I am a business magnet and CEO of BurgerX. Feel free to savour our delicious menu, place a takeout order or reserve a table. Not only is our food fast, it's also semi-autonomous.
            </p>
              <p>
                Bon Appétit, and don't forget: the percentage of intelligence which is not human is increasing.
            </p>
            </div>  
        </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage;