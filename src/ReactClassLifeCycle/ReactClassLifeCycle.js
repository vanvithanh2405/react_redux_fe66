import React, { Component } from 'react'
import Item from './Item';
export default class ReactClassLifeCycle extends Component {


    constructor(props) {
        super(props);
        console.log('constructor')
        this.state = {
            like: 1,
            user: {
                name: 'A',
            }
        }
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps');
        return currentState;
    }
    // this.state
    // this.props
    // this.setState

    shouldComponentUpdate(newProps,newState) {
        console.log('shouldComponentUpdate')
        return true;
    }


    render() {
        console.log('render')
        return (
            <div className="container">
                <div className="card w-25">
                    <img src="https://picsum.photos/200/200" alt="..."></img>
                    <div className="card-body">
                        <p>{ this.state.like } <button onClick={() => {
                            this.setState({ like: this.state.like + 1 })
                        }}>Like</button></p>
                        <button onClick={() => {
                            let newUser = {...this.state.user};
                            newUser.name = "Thành Văn";
                            this.setState({
                                user: newUser
                            })
                        }}>Change Name: {this.state.user.name}</button>
                    </div>
                </div>
               {this.state.like < 10 ? <Item user={this.state.user}></Item> : ''}
            </div>
        )
    }

    componentDidMount() {
        // gọi api
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps,prevState) {
        console.log('componentDidUpdate')
    }
}
