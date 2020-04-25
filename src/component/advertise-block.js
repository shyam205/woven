import React , {Component} from 'react';
// import {Link,NavLink } from 'react-router-dom';
import Issuecover from '../images/IssueCove.jpg';
import Layer from '../images/Layer.jpg';
import Layereight from '../images/Layereight.jpg';
import Layerseven from '../images/Layerseven.jpg';
import Layerone from '../images/Layerone.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import LazyLoad from 'react-lazy-load';

class Advertiseblock extends Component{
    render(){
         const settings = {
           
                dots: true,
                infinite: true,
                speed: 500,
                fade:true,
                cssEase: 'linear'

                // dots: true,
                // infinite: true,
                // slidesToShow: 1,
                // slidesToScroll: 1,
                // autoplay:true,
                // autoplaySpeed: 4000,
                // fade:true,
                // cssEase: 'linear',
                // arrow:true
             
         }
        return(
        <>
          <div className="advertiseblock-slider">
                   <Slider {...settings}>
               <div className="slider">
                   <LazyLoad>
                   <img src = {Issuecover} alt="" />
                   </LazyLoad>
               </div>
               <div className="slider">
               <LazyLoad>
                   <img src = {Layer} alt="" />
                   </LazyLoad>
               </div>
               <div className="slider">
               <LazyLoad>
                   <img src = {Layereight} alt="" />
                   </LazyLoad>
               </div>
               <div className="slider">
               <LazyLoad>
                   <img src = {Layerseven} alt="" />
                   </LazyLoad>
               </div>
               <div className="slider">
               <LazyLoad>
                   <img src = {Layerone} alt="" />
                   </LazyLoad>
               </div>
               </Slider>
          </div>
        </>
        );
    }
}

export default Advertiseblock;