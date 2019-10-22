import React, { Component } from 'react';


export default class CoordinatesButton extends Component {
    

    onClick = (event) => {
        let coor = []
        let x = event.clientX;
        let y = event.clientY;
        coor.push(x, y)
        //debugger;
        this.props.onReceiveCoordinates(coor)
    }

   
   


    render() {
        return(
            <button onClick={this.onClick}></button>
        )
    }
}