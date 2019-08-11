import React from 'react'
// import { prependOnceListener } from 'cluster';
// console.log(props)
const Stock = (props) => {

  return (
  <div>

    <div onClick={e=>props.handleBuy(props.eachStock,props.index)} className="card">
      <div className="card-body">
        <h5 className="card-title">{props.eachStock.name}</h5>
        <p className="card-text">{
           `${props.eachStock.ticker}:${props.eachStock.price}`
          }</p>
      </div>
    </div>


  </div>
);
        }

export default Stock
