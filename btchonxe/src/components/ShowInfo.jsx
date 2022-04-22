import React, { Component } from 'react'

export default class 
 extends Component {
  render() {
    return (
      <div>
          <table>
              <thead>
                  <tr style={{fontWeight: 'bold',textAlign: "center"}}>
                      <td>Thông số</td>
                      <td>Giá trị</td>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>Color</td>
                      <td>Red</td>
                  </tr>
                  <tr>
                      <td>Price</td>
                      <td>$22,550</td>
                  </tr>
                  <tr>
                      <td>Engine Type</td>
                      <td>In-Line 4-Cylinder</td>
                  </tr>
                  <tr>
                      <td>Displacement</td>
                      <td>1996 cc</td>
                  </tr>
                  <tr>
                      <td>Horsepower</td>
                      <td>58 @ 6500 rpm</td>
                  </tr>
                  <tr>
                      <td>Torque</td>
                      <td>138 lb-ft @ 4200 rpm</td>
                  </tr>
                  <tr>
                      <td>Redline</td>
                      <td>6700 rpm</td>
                  </tr>
              </tbody>
          </table>
      </div>
    )
  }
}
