import React, { Component } from 'react'

export default class
    extends Component {
    render() {
        return (
            <div >
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <div >
                <div>Chọn kiểu mâm:</div>
                    <label className="btn ml-2 btn-light">
                        <img src="../images/icons/icon-wheel-1.jpg" width={80} style={{ borderRadius: '80px' }} alt="" />
                        <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked />
                    </label>
                    <label className="btn ml-2 btn-light">
                        <img src="../images/icons/icon-wheel-2.jpg" width={80} style={{ borderRadius: '80px' }} alt="" />
                        <input type="radio" name="options" id="option2" autoComplete="off" />
                    </label>
                    <label className="btn ml-2 btn-light">
                        <img src="../images/icons/icon-wheel-3.jpg" width={80} style={{ borderRadius: '80px' }} alt="" />
                        <input type="radio" name="options" id="option3" autoComplete="off" />
                    </label>
                </div>
                </div>
            </div>
        )
    }
}
