import React, { useEffect, useState } from 'react';


const Graph = (props) => {
  const [hoursData, setHoursData] = useState();
  console.log(props.data, 'graph component')

  const entries = () => {
    let hours = [];
    for (let [key, value] of Object.entries(props.data)) {
      // console.log(key, value, 'HOLIS');
      if (key.startsWith('H')) {
        hours.push({
          [key]: value
        });
        // console.log(key, value, 'adentro del if')
        // hours.push([key, value])
      }
      // [key].filter((h) => {
      //   // console.log('H', h)
      //   if (h.contains('H')(console.log('empieza con h', h))
      //     // console.log(h, 'empieza con h')

      //   );}
    }
    setHoursData(hours)
    // console.log('HOOOOOURS PUSHED: ', hours)
  }

  useEffect(() => {
    entries();
  }, [hoursData])

  console.log({ hoursData })
  // console.log(entries())

  return (
    <>

      {/* // hoursData.map((elem, index) => { */}
      {/* { hoursData && (
        // Object.keys(props.data).map((item, index)=> {
        // Object.values(props.data).map((item, index) => {
          hoursData.map((item,index)=> {
          console.log('ITEMS OBJECTS KEYS ', item )
          // console.log({ item })
          return (
            <>
            {item}

            </>
          )
        })
      )} */}

    </>
  )
}

export default Graph