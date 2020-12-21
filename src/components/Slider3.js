import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.scss'
import App from '../App';

const SSlider =(props)=> {
    let settings = {
        adaptiveheight: true,
        
        dots: true,
        autoplay: false,
        draggable: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 9,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
      
      <div>
        <h2> Biography</h2>
        <Slider {...settings}>
        <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/21.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[20]}</span></h2>
                    </div></div></div>
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/22.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[21]}</span></h2>
                    </div></div></div>
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/23.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[22]}</span></h2>
                    </div></div></div>
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/24.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[23]}</span></h2>
                    </div></div></div>
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/25.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[24]}</span></h2>
                    </div></div></div>
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/26.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[25]}</span></h2>
                    </div></div></div>
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/27.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[26]}</span></h2>
                    </div></div></div>
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/28.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[27]}</span></h2>
                    </div></div></div>
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/29.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[28]}</span></h2>
                    </div></div></div>
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/30.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[29]}</span></h2>
                    </div></div></div>
        </Slider>
      </div>
    );
  }


export default SSlider;