import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div id='about'>
        <img src='https://s3.eu-west-2.amazonaws.com/portfolio-drhectapus/images/avatar.jpg'/>
        <h1>Joseph Liu</h1>
        <div className='bio'>
          <p>Hi. I'm currently a Master's student in Computer and Information Technology (MCIT) at the University of Pennsylvania.</p>
          <p>Previously, I completed medical school at Imperial College in London and practiced as a doctor for a few years afterwards.</p>
          <p>Along the way, I've also formulated dozens of supplements, interned at a few health tech startups, created an Amazon business and even worked as a cook at one point!</p>
          <p>What unites my previous experiences is a love for making things. Especially things that can have great impact.</p>
        </div>
      </div>
    );
  }
}

export default About;
