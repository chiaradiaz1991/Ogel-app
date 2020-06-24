import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './styles.css';
import Graph from '../Graph';
import Table from '../Table';


const URL = 'https://www.marviq.com/assessment/index.php?page=a&from=2018-01-07%2000:00:00'


const Machine = () => {
  const [data, setData] = useState([]);
  const [ headers, setHeaders ] = useState([])
  const [error, setError] = useState();


  const apiCall = async () => {
    const request = axios.get(URL);
    const response = await request;
    
    const headers = Object.keys(response.data[0]);

    // console.log({ response });
    setData(response.data);
    setHeaders(headers)
    // setError(null);
  }

  // console.log({ data })

  useEffect(() => {
    apiCall();
  }, [])


  return (
    <>
      {data.map((item, index) => {
        console.log('item machine component: ', item)
        const scrap = item.PRODUCTION * item.SCRAP_PERCENTAGE;
        const scrapHour = item.H0 * item.SCRAP_PERCENTAGE;
        let scrapHourFixed = scrapHour.toFixed(2);
        // console.log({ scrapHour })
        return (
          <>
            <div>
              {item.MACHINE}
            </div>
            <div>
              NET: {Math.floor(item.PRODUCTION - scrap)}
              scrap: {Math.round(item.SCRAP_PERCENTAGE * 100) / 100}
              gross: {item.PRODUCTION}
              % downtime: {Math.round(item.DOWNTIME_PERCENTAGE * 100) / 100}
              everyhourNet: {item.H0 - scrapHourFixed}
            </div>
          </>
        )
      })}
      <Table data={data} headers={headers} />
    </>
  );
}

export default Machine;
