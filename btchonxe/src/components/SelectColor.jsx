import React, { Component } from 'react'

export default class SelectColor extends Component {
    render() {
        return (
            <div>
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <div>
                        <p>Chọn màu xe:</p>
                        <label className="btn ml-2 btn-light">
                            <img src="../images/icons/icon-black.jpg" width={25} style={{borderRadius:'50%'}} alt="" />
                            <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked /> Đen
                        </label>
                        <label className="btn ml-2 btn-light">
                            <img src="../images/icons/icon-red.jpg" width={25} style={{borderRadius:'50%'}} alt="" />

                            <input type="radio" name="options" id="option2" autoComplete="off" /> Đỏ
                        </label>
                        <label className="btn ml-2 btn-light">
                            <img src="../images/icons/icon-silver.jpg" width={25} style={{borderRadius:'50%'}} alt="" />

                            <input type="radio" name="options" id="option3" autoComplete="off" /> Bạc
                        </label>
                        <label className="btn ml-2 btn-light">
                            <img src="../images/icons/icon-steel.jpg" width={25} style={{borderRadius:'50%'}} alt="" />

                            <input type="radio" name="options" id="option4" autoComplete="off" /> Xám
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}
