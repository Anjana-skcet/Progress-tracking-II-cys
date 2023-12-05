import React, { Component } from 'react'

export default class Error extends Component {
   constructor(props){
    super(props);
    this.state={value: 'Initial value'};
    console.log('constructor');
   }
   componentDidMount(){
    console.log('Component did mount');
   }
   componentDidUpdate(prevProps,prevState){
    console.log('component did update');
   }
   handlerUp=()=>{
    this.setState({value: 'Updated value'});
   };
  render() {
    console.log('Render');
    return (
      <div>
      <p>{this.state.value}</p>
      <button onClick={this.handlerUp}>Update value</button></div>
    )
  }
}
