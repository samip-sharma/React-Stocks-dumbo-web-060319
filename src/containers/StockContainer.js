import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    // console.log(this.props)
    let arr=this.props.allStocks.map((stock,i)=>{
      return <Stock  handleBuy={this.props.handleBuy} key={`${stock.id}`} eachStock={stock}/>
    })
    return (
      <div>
        <h2>Stocks</h2>
        {
          //render the list of stocks here
        }
        {arr}
      </div>
    );
  }

}

export default StockContainer;
