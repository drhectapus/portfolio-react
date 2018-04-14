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
          <p>I have lots of experienced in startups. My last job was Chief of R&D at <a href='https://www.vitamonk.com/' target='_blank'>VitaMonk</a>, where I was responsible for formulating 60+ products and all things marketing such as copywriting, creating landing pages and email marketing campaigns.</p>
        </div>
        <div className='about-panel'>
          <img src="http://i.imgur.com/d2yFFhQ.jpg" alt="Cushion" className="img-responsive img-circle" />
          <p>In between, I started an Amazon business selling bum cushions, which was my first foray in entrepreneurship. It exposed me to all the different aspects of business, such as product development, manufacturing, logistics, copywriting and marketing. The learning experience was fantastic.</p>
        </div>
        <div className='about-panel-inverse'>
          <img src="http://i68.tinypic.com/jijpl3.jpg" alt="Ideas" className="img-responsive img-circle" />
          <p>I love tech and how it can be utilised to solve many of our problems. After coming up with so many ideas, but never being able to find someone to make the idea, I decided to take upon my own to learn programming.</p>
        </div>
        <div className='about-panel'>
          <img src="http://i64.tinypic.com/erae7p.jpg" alt="World" className="img-responsive img-circle" />
          <p>As a doctor, I always felt fustrated with the tools available. My goal is to solve that by working as a software engineer in the health tech space. Below you can see my journey in getting there.</p>
        </div>
      </div>
    );
  }
}

export default About;
