import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(props){
        super(props);
        this.state={seconds:0,isActive:false};
        this.interval=null;
    }
    componentDidMount(){
        setTimeout(
            ()=>{
                alert('advertisement')
            },5000
        );
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    handleStart=()=>{
        if(!this.state.isActive){
            this.interval=setInterval(()=>
            {
                this.setState((prevState)=>{{seconds:prevState.seconds+1}});
            },1000);
        }
        this.setState({isActive:true,})
    }
  render() {
    const {seconds,isActive}=this.state;
    return (
      <div>Timer</div>
    )
  }
}
