import React, { Component } from 'react';

class Counter extends Component {

    
  



   
    render() { 
 

       return (
           <div>
               
               <span   className={this.setBadgeClass()} >{this.formatNumber()} </span>
               <button className="btn btn-secondary btn-sm"  onClick={ ()=> this.props.onincrement(this.props.counter)}  >Increment </button>
               <button className="btn btn-danger btn-sm m2" onClick={()=> this.props.ondelete(this.props.counter) } >Delete</button>
           </div>
       );
    }

     


    formatNumber(){
        const value = this.props.counter.value;
        return value === 0 ? "Zero" : value ;
    }


    setBadgeClass(){
        
        let classes="badge m-2 badge-";
        classes+=this.props.counter.value === 0 ? "warning" : "primary" ;
        return classes ;
    }
}
 
export default Counter ;