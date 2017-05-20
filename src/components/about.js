import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div id='about'>
        <h1>About</h1>
        <div className='about-panel'>
          <img src="http://i63.tinypic.com/2w40inq.jpg" alt="Doctor" className="img-responsive img-circle" />
          <p>After studying and training for 10 years, I decided to drop my career as a doctor to pursue my passion for tech and entrepreneurship.
          </p>
        </div>
        <div className='about-panel-inverse'>
          <img src="http://i.imgur.com/Ooqi5LE.jpg" alt="Beach Laptop" className="img-responsive img-circle" />
          <p>The journey brought me initially to Vietnam, out of all places, where I currently work as Head of R&D at <a href='https://www.vitamonk.com/' target='_blank'>VitaMonk</a>. My job is remote, so I am what most consider a 'digital nomad' - someone who makes anywhere and everywhere his office.</p>
        </div>
        <div className='about-panel'>
          <img src="http://i.imgur.com/d2yFFhQ.jpg" alt="Cushion" className="img-responsive img-circle" />
          <p>In between, I started an Amazon business selling bum cushions, which was my first foray in entrepreneurship. It exposed me to all the different aspects of business, such as product development, manufacturing, logistics, copywriting and marketing. The learning experience was fantastic.</p>
        </div>
        <div className='about-panel-inverse'>
          <img src="http://i68.tinypic.com/jijpl3.jpg" alt="Ideas" className="img-responsive img-circle" />
          <p>I love tech and how it can be utilised to solve many of our problems. After coming up with so many ideas, but never being able to find someone to make the idea, I have decided to take upon my own to learn code.</p>
        </div>
        <div className='about-panel'>
          <img src="http://i64.tinypic.com/erae7p.jpg" alt="World" className="img-responsive img-circle" />
          <p>My goal is to be fluent in web and mobile development by the end of 2017 and have a production app ready. Below you can see my journey in getting there.</p>
        </div>
      </div>
    );
  }
}

export default About;
