import React from 'react';
import './styles.css';


const Text = (props) => {
  const { title, name, data, percentage } = props;
  return (
    <div role="main" className="text-container">
      <h2>{`${title} of ${name}`}</h2>
      {
        // if percetage is true, will add %
        percentage ? (
          <p>{`${data}%`}</p>
        ) : (
          <p>{data}</p>
        )
      }
    </div>
  )
}

export default Text;