import React from 'react'
import { UserClass } from './UserClass';
// import { Component } from 'react';
class About extends React.Component{
    constructor(props){
      super(props);
      this.state={
        data:{
          name:"Loading..",
          location:"Loading..."
        }
      }
      console.log("constructor call")
    
 
    }
    render(){
      return (
        <div className='container'>
             <h1>About Page </h1>  
             <h3>{this.state.data.name}</h3>
           
        </div>
      )

    }
   async componentDidMount(){
      const response=await fetch("https://api.github.com/users/jr-jerry");
      const jsonData=await  response.json();
      console.log(jsonData)

      this.setState({
        data:jsonData,
      })

      console.log("parent componentDidMount")
    }
}


export default About;
