import React, { Component } from 'react'

export default class Content extends Component {
    state = {
        url: '',
        name: '',
        price: 0,
        desc: '',
    }
    ArrGlass = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]
    changeGlass = (i) => {
        document.querySelector('.glassInfo').style.display = 'block';
        var spinner = document.getElementById('Info');
        var spinnerAnimation = spinner.animate([
            { opacity: 0 },
            { opacity: 1 }
        ], {
            duration: 500,
        });
        spinnerAnimation.play();
        i -= 1;
        var newurl = '../img/' + this.ArrGlass[i].url;
        this.setState({
            url: newurl,
            name: this.ArrGlass[i].name,
            price: this.ArrGlass[i].price,
            desc: this.ArrGlass[i].desc
        })
    }
    renderBtn = () => {
        return this.ArrGlass.map((items, index) => {
            return <div className="col-3 p-3 col-md-2 col-sm-4 glassesCover" key={index}>
                <button className='btn' onClick={() => {
                    { this.changeGlass(items.id) }
                }}><img src={'../img/' + items.url} alt="" width={'100%'} /></button>
            </div>
        })
    }
    render() {
        return (
            <div className="w-100 h-100" style={{ backgroundColor: 'rgba(0,0,0,.3)' }}>
                <div className="container pb-3">
                    <div className="pictureModal" >
                        <div className="row p-5">
                            <div className="col-sm-6 col-12 d-flex align-items-center justify-content-center ">
                                <div className="imgModel">
                                    <img src="../img/glassesImage/model.jpg" alt="" width={'250px'} />
                                    <img className='glassDemo' src={this.state.url} alt="" width={'55%'} style={{ opacity: 0.85 }} />
                                    <div id='Info' className="glassInfo p-2">
                                        <h6>{this.state.name}</h6>
                                        <div>Price: <b>{this.state.price}$</b></div>
                                        <div><i>{this.state.desc}</i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-12 d-flex align-items-center justify-content-center ">
                                <div className="imgModel">
                                    <img src="../img/glassesImage/model.jpg" alt="" width={'250px'} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chooseGlasses bg-light p-3">
                        <h4>Please click the button below to see the glasses displayed on the face:</h4>
                        <div className="row">
                            {this.renderBtn()}
                        </div>
                        <div className="">
                            <button className='btn btn-warning px-5' onClick={() => {
                                document.querySelector('.glassInfo').style.display = 'none';
                                this.setState({
                                    url: '',
                                })
                            }}> Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
