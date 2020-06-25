import React, { useEffect, useState } from 'react';
import axios from 'axios';

// styles
import './styles.css';

// components
import Table from '../Table';
import Text from '../Text/index';
import Temperature from '../Temperature';

// urls
const URL_1 = 'https://www.marviq.com/assessment/index.php?page=a&from=2018-01-07%2000:00:00';
const URL_2 = 'https://www.marviq.com/assessment/index.php?page=b&from=2018-01-07%2000:00:00';

const Main = () => {
  // set initial state
  const [data, setData] = useState([]);
  const [temp, setTemp] = useState([]);
  const [headers, setHeaders] = useState([])


  const apiCall = async () => {
    // fetch data from the APIs
    const request_1 = axios.get(URL_1);
    const request_2 = axios.get(URL_2);
    const response_1 = await request_1;
    const response_2 = await request_2;

    //  get an array of strings that represent all the enumerable properties of response_1.data index 0 
    const headers = Object.keys(response_1.data[0]);
    // update initial state with the data
    setData(response_1.data);
    setTemp(response_2.data);
    setHeaders(headers);
  }

  useEffect(() => {
    apiCall();
  }, [])


  return (
    <div role="main" className="main-container">
      <h1>Assignment A</h1>
      {data.map((item, index) => {
        const scrap = item.PRODUCTION * item.SCRAP_PERCENTAGE;
        return (
          <>
            <div>
              <Text
                title="Total net production"
                name={item.MACHINE}
                data={Math.floor(item.PRODUCTION - scrap)}
                percentage={false}
              />
              <Text
                title="Percentage of scrap vs gross production"
                name={item.MACHINE}
                data={Math.round(item.SCRAP_PERCENTAGE * 100) / 100}
                percentage
              />
              <Text
                title="Percentage of downtime"
                name={item.MACHINE}
                data={Math.round(item.DOWNTIME_PERCENTAGE * 100) / 100}
                percentage
              />
            </div>
          </>
        )
      })}
      <Table
        data={data}
        headers={headers}
      />

      <Temperature
        temp={temp}
      />
    </div>
  );
}

export default Main;
