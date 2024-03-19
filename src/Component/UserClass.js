import React from "react";
export class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            count2:1,
        }
        console.log(this.props.name +" constructor");
    }
    render(){
        const {name,location}=this.props;
        const {count,count2}=this.state;
        console.log(this.props.name+" rendor")
        
        return <>
                <h1> {name}</h1>
                <h2> {location} </h2>
                <div>
                    <span>Count : {count}</span>
                    <button onClick={()=>{
                        this.setState({
                            count:this.state.count+1,
                            count2:this.state.count+1,
                        })
                    }}>Click me</button>
                    <div>count2: {count2}</div>
                </div>
            </>     
    }
    componentDidMount(){
        console.log(this.props.name+" ComponentDidMount");
    }
}