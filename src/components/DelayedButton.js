// Code DelayedButton Component Here
// Code DelayedButton Component Here
import React, { Component } from 'react'

export class DelayedButton extends Component {
    onClick = (event) => {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event)
        },
        this.props.delay)
    }

    render(){
        return(
            <div>
                <button onClick={this.onClick}> Delayed Click </button>
            </div>
        )
    }
}

export default DelayedButton