import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Stars extends Component{
    constructor(props){
        super(props);
    }

    render(){
        var data = [];
        for(let i=0;i<this.props.value;i++){
            data.push(<i className="fa fa-star golden fs" key={i}></i>)
        }
       return(<div>{data}</div>) 
    }
}
export default Stars;
