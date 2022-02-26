import React, { Component, Fragment } from 'react';

class Counter extends Component {
    // constructor () {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    state = {
        count:0,
        tags:[]
        };
   renderTags(){
       if (this.state.tags.length === 0) return <p>There are no tags!</p>;

       return (
        <ul>
        {this.state.tags.map(tag=>(<li key={tag}>{ tag }</li>))}
    </ul>
       )
   }
   handleIncrement = (product) =>{
       console.log(product);
this.setState({ count: this.state.count + 1 })
};
doHandleIncrement = () =>{
    this.handleIncrement({ id:1 });
}

    render() { 
    

        return (
        <Fragment>
            <span className='badge-primary m-3'>{this.state.count}</span>
            <button onClick={ ()=> this.handleIncrement({ id:1 }) } className='btn btn-primary btn-sm'>Increment</button>
            { this.state.tags.length === 0 && 'please create a new tag!'  }
       {this.renderTags()}
        </Fragment>);
    }

  
}
 
export default Counter;
