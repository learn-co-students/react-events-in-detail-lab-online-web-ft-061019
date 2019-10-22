import React, { Component } from 'react';


export default class CoordinatesButton extends Component {
    

    onClick(event) {
        let coor = []
        let x = event.clientX;
        let y = event.clientY;
        coor << (x, y)

        return onReceiveCoordinates(coor)
    }

   
   


    render() {
        return(
            <button onClick={this.props.onReceiveCoordinates}></button>
        )
    }
}