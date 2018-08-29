import React, { Component } from 'react';
import ProjectItem from './project-item';
import WorkProjectsList from './work-projects-list';
import StudyProjectsList from './study-projects-list';

class Work extends Component {
  // componentDidMount() {
  //     console.log(new Date(), ' Work is mounted 🙃');
  //   }
  //
  //   componentWillUnmount() {
  //     console.log(new Date(), ' Work will be killed 😭');
  //   }

  render() {
    return (
      <div id='work'>
        <div className='work-container'>
          <h1>Work Projects</h1>
          <div className='work-group'>
            {WorkProjectsList.map(({ img, title, description, github }) => {
              return (
                <ProjectItem
                  key={title}
                  img={img}
                  title={title}
                  description={description}
                  github={github}
                />
              );
            })}
          </div>
        </div>
        <div className='work-container'>
          <h1>Study Projects</h1>
          <div className='work-group'>
            {StudyProjectsList.map(({ url, img, title, description, github }) => {
              return (
                <ProjectItem
                  key={title}
                  url={url}
                  img={img}
                  title={title}
                  description={description}
                  github={github}
                />
              );
            })}
          </div>
        </div>
      </div>

    );
  }
}

export default Work;
