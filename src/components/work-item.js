import React from 'react';

const WorkItem = ({ url, img, title, description, github }) => {
  return (
    <div className='thumbnail'>
      <a href={url} target='_blank'><img src={img} alt='weather react app' /></a>
      <div className='caption'>
        <h3><strong>{title}</strong></h3>
        <p>{description}</p>
        <div className='github-icon'><a href={github} target='_blank'><i className="fa fa-github fa-lg" aria-hidden="true"></i></a></div>
      </div>
    </div>
  );
}

export default WorkItem;
