// import React from 'react';
// import '../App.css';
// import { Button } from './Button';
// import './HeroSection.css'

// function HeroSection() {
//     return (
//         <div className='hero-container'>
//             <video src='/videos/10seconds_music.mp4' autoPlay loop muted />
//             <h1>Adventure awaits</h1>
//             <p>Whatttt</p>
//             <div className="hero-btns">
//                 <Button 
//                     className='btns'
//                     buttonStyle='btn--outline'
//                     buttonSize='btn--large'
//                 >
//                     GET STARTED
//                 </Button>
//                 <Button 
//                     className='btns'
//                     buttonStyle='btn--primary'
//                     buttonSize='btn--large'
//                 >
//                     Watch trailer <i className='far fa-play-circle' />
//                 </Button>
//             </div>
//         </div>
//     )
// }

// export default HeroSection;
import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>PARENTS WANT</h1>
      <h2>TO KNOW...</h2>
      <p>Should I be worried about my child?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;