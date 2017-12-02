import React, { Component } from 'react';
import WorkItem from './work-item';
import WorkItemsArray from './work-items-array';

class Work extends Component {
  componentDidMount() {
      console.log(new Date(), ' Work is mouned 🙃');
    }

    componentWillUnmount() {
      console.log(new Date(), ' Work will be killed 😭');
    }

  render() {
    return (
      <div id='work'>
        <h1>Work</h1>
        <div id='portfolio'>
          {WorkItemsArray.map(({ url, img, title, description, github }) => {
            return (
              <WorkItem
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
    );
  }
}

export default Work;
