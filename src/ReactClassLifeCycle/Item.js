import React, { Component } from 'react'
import { PureComponent } from 'react';

export default class item extends PureComponent {
    
   timeout 
    
    constructor(props) {
        super(props);
        console.log('constructor item')
        this.state = {

        }
    }
    
    static getDerivedStateFromProps(newProps,currentState) {
        console.log('getDerivedStateFromProps item');
        return currentState;
    }
    
    // shouldComponentUpdate(newProps,newState) {
    //     console.log('shouldComponentUpdate')
    //     return true;
    // }

    render() {
        console.log('render item')
        return (
            <div className="mt-2">
                <h3>username: {this.props.user.name}</h3>
                <textarea className="form-control"></textarea> 
                <br></br>
                <button className="mt-2 btn btn-success">Comment</button>
            </div>
        )
    }

    componentDidMount() {
        
        // Hàm đếm ngược thời gian
       this.timeout =  setInterval(()=>{
            console.log('hello Thành');
        },1000);
        
        console.log('componentDidMount item');
    }

    componentDidUpdate(prevProps,prevState) {
        console.log('componentDidUpdate item')
    }

    componentWillMount() {
        // chạy trước khi component mất khỏi giao diên
        clearInterval(this.timeout);
    } 
}
