// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export class CoordinatesButton extends Component {
    onClick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render(){
        return(
            <div>
                <button onClick={this.onClick}> CoordinatesButton </button>
            </div>
        )
    }
}

export default CoordinatesButton