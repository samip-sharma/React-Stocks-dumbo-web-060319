import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {

    let arr=this.props.myStocks.map((stock,i)=>{
     return <Stock index={i} key={stock.id} handleBuy={this.props.handleBuy} eachStock={stock}/>
    })
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
          }
          {arr}
      </div>
    );
  }

}

export default PortfolioContainer;
