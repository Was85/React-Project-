import React, { Component } from 'react';
import Counter from './counter'; 


class Counters extends Component {
   
    render() { 
        return ( 
        <div>
           <button className="btn btn-primary btn-sm m-2" onClick={this.props.HandelReset} >Reset</button>
            {this.props.countersList.map(counter=>
            <Counter 
            key= {counter.id} 
            counter={counter}
            ondelete={this.props.HandelDelete}
            onincrement={this.props.HandelIncrement} 
             >
             </Counter>)}
        </div>

         ); 
    }

    
}
 
export default Counters;