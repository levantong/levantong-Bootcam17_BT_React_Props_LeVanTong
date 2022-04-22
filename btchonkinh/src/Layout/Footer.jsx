import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center pt-5 pb-3' style={{ backgroundColor: 'rgba(0,0,0,.3)' }}>
          <span>Copyright<sup>©</sup> 2022 by <a href="#">Tong Le</a></span>
      </div>
    )
  }
}
