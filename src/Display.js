import React, { Component } from 'react';

class Display extends Component {
    render()
    {
        console.log(this.props);
        return(
            <div id="main">
            <h2>This is the displayed data</h2>
            <div>Hey! i am {this.props.name} , my age is {this.props.age} and my birthmonth is {this.props.birthmonth} </div>
            <input type="text" id="text-box" placeholder={this.props.name}>
            </input>
            </div>
        )
    }
}
export default Display;