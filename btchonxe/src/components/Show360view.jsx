import React, { Component } from 'react'
import ThreeSixty from 'react-360-view'


export default class Show360view extends Component {
    render() {
        return (
            <div>
                <ThreeSixty
                    amount={8}
                    imagePath={`./images/images-black/images-black-1/`}
                    fileName="civic-{index}.jpg"
                    buttonClass="light"
                />
            </div>
        )
    }
}
