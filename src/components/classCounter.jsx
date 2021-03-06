import React from "react";

class ClassCounter extends React.Component {
   constructor(){
       super();
       this.state = {
           like: 0
       }
       this.increment = this.increment.bind(this);
       this.dicrement = this.dicrement.bind(this);
   }

    increment(){
       this.setState({like: this.state.like + 1});
    };

    dicrement(){
        this.setState({like: this.state.like - 1});
    };
    
    render(){
        return (
            <div>
            <h1>Counter Songs: {this.state.like} </h1>
            <button onClick= {this.increment}>increment</button>;
          <button onClick= {this.dicrement}>dicrement</button>
        </div>
        );
    }
};

export default ClassCounter;