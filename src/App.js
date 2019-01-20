import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counters from './component/counters';
import NavBar from './component/NavBar';

class App extends Component {


  state = { 
    countersList: [
        {id:1 , value : 0},
        {id:2 , value : 4},
        {id:3 , value : 0},
        {id:4 , value : 0},
    ]
 };
 HandelIncrement= counter =>{
    const updateCounters = [...this.state.countersList];
    const index = updateCounters.indexOf(counter);
    updateCounters[index] = {...counter};
    updateCounters[index].value++;
    console.log(this.state.countersList[index]);
    this.setState({countersList:updateCounters});

}

HandelReset = ()=>{
    const resetedCounters = this.state.countersList.map(c=>{
        c.value = 0 ;
        return c ;
    });
    this.setState({countersList:resetedCounters});
};

HandelDelete = counter => {
    const updatedCounters = this.state.countersList.filter( (c) => c.id!== counter.id);
    this.setState({countersList:updatedCounters});
};
  render() {
    return (
      <React.Fragment>
      <NavBar   totalNumOfCounter = {this.state.countersList.filter(c=>c.value>0).length} />
      <main className="container">
      <Counters  HandelIncrement={this.HandelIncrement}  
                 HandelDelete={this.HandelDelete} 
                 HandelReset={this.HandelReset}
                 countersList={this.state.countersList}
                 />
      </main>
      </React.Fragment>
      
    );
  }
}

export default App;
