import React from 'react';
import styles from './styles.css'

const Table = (props) => {
  
  const renderTableData = () => {
    const data = props.data;
    const filteredData = data.map((elem, index) => {
      let newArr = [];
      let scrap = elem['SCRAP_PERCENTAGE'];
      // iterates object entries of elem
      for (let [key, value] of Object.entries(elem)) {
        const isHour = key.startsWith('H');
        // filter if the element is hour or "machine"
        if (isHour || key.startsWith('MACHINE')) {
          let val = isHour ? value * scrap : value;
          let scrapHourFixed = isHour ? val.toFixed(2) : value;
          let hourNet = isHour ? value - scrapHourFixed : value;
          // create a new array of object 
          newArr.push({
            [key]: hourNet
          });
        }
      }
      return (
        // create table
        <tr key={index}>
          {
            // map new array and create each row of the table
            newArr.map((e) => Object.values(e).map((i) => <td>{i}</td>))
          }
        </tr>
      )
    })
    return filteredData;
  }

  const renderTableHeader = () => {
    let headers = props.headers;
    return headers.map((key, index) => {
      if (key.startsWith('H') || key.startsWith('MACHINE')) {
        // assing headers to the table
        return <th key={index}>{key.toUpperCase()}</th>
      }
    })
  }

  return (
    <div>
      <h1 id='title'>NET production (gross production – scrap) for every hour</h1>
      <table id='machines'>
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {renderTableData()}
        </tbody>
      </table>
    </div>
  )
}

export default Table;