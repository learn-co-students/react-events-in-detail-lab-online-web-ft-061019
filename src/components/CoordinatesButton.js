// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export class CoordinatesButton extends Component {
    handleClick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick}>CoordinatesButton</button>
            </div>
        )
    }
}

export default CoordinatesButton 