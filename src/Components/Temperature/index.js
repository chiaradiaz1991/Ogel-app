import React from 'react';
import './styles.css'

const Temperature = (props) => {
  const { temp } = props;

  // assign class
  const handleClass = (val) => {
    let status;
    switch (val) {
      case "warning/orange":
        status = "warning"
        break;
      case "fatal/red":
        status = "fatal";
        break;
      default:
        status = "good"
        break;
    }
    return status;
  }
  return (
    <div role="main" className="temperature-container">
      <h1>Assignment B</h1>
      {
        // iterates entries of data from prop
        Object.entries(temp).map(([key, value], i) => {
          return (
            <div className="text-temperature">{`Machine: ${key} - Status: `}<span className={handleClass(value)}>{value}</span></div>
          )
        })
      }
    </div>
  )
};

export default Temperature;