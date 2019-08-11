import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state={
    allStocks:[],
    myStocks:[],
    sortByAlpha:false,
    sortByPrice:false,
    filter:''

  }
  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(response=>response.json())
    .then(data=>{this.setState({allStocks:data})})
  }

  handleBuy=(stock)=>{
    this.setState({
      myStocks:[...this.state.myStocks,stock]
    })
  }

  sellStock=(stock,i)=>{
    console.log(i)
    let first=this.state.myStocks.slice(0,i)
    // console.log("first",first)
    let last=this.state.myStocks.slice(i+1)
    // console.log("last",last)
    this.setState({
      myStocks:[...first, ...last]
    })
  }

  handleSortByAlpha=()=>{
    this.setState({
      sortByAlpha:true
    })
  }

  handleSortByPrice=()=>{
    this.setState({
      sortByPrice:true
    })
  }

  handleFilterChange=(type)=>{
    this.setState({
      filter:type
    })
  }

  render() {
  let sortByAlphabet= this.state.sortByAlpha? this.state.allStocks.sort((a,b)=>a.name.localeCompare(b.name)):this.state.allStocks
  let sortedFinal= this.state.sortByPrice? sortByAlphabet.sort((a,b)=> a.price-b.price):sortByAlphabet
  let filtered= this.state.filter? sortedFinal.filter(stock=> stock.type===this.state.filter): sortedFinal
  // console.log(toDisplayStocks)

    return (
      <div>
        <SearchBar handleFilterChange={this.handleFilterChange} handleSortByPrice={this.handleSortByPrice} handleSortByAlpha={this.handleSortByAlpha}/>

          <div className="row">
            <div className="col-8">

              <StockContainer handleBuy={this.handleBuy} allStocks={filtered}/>

            </div>
            <div className="col-4">

              <PortfolioContainer handleBuy={this.sellStock} myStocks={this.state.myStocks}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
