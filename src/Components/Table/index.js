import React, { Component } from 'react';
import styles from './styles.css'

class Table extends Component {

  renderTableData() {
    const data = this.props.data;
    const filteredData = data.map((elem, index) => {
      let newArr = [];
      for (let [key, value] of Object.entries(elem)) {
        if (key.startsWith('H') || key.startsWith('MACHINE')) {
          console.log('ELEMKey-> ', key, value)
          newArr.push({
            [key]: value
          });
        }
      }
      console.log({ newArr })
      return (
        <>
          <tr key={index}>
            {
              newArr.map((e, index) => {
                console.log(e, 'adentro del returnnnnnnn')
                Object.values(e).map((i, index) => {
                  return (
                    <td>{i}</td>
                  )
                })

              })
            }
          </tr>
        </>
      )
    })
    return filteredData;
  }

  renderTableHeader() {
    let headers = this.props.headers;
    return headers.map((key, index) => {
      if (key.startsWith('H') || key.startsWith('MACHINE')) {
        return <th key={index}>{key.toUpperCase()}</th>
      }
    })
  }

  render() {
    return (
      <div>
        <h1 id='title'>React Dynamic Table</h1>
        <table id='students'>
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table;