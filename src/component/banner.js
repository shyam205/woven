import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import Acanvascotton from '../images/canvascotton.jpg'
import Bannerimage from '../images/groupwork.jpg'
import Peacefulstills from '../images/peacefulstills.jpg'
import Econearth from '../images/econ_earth.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


class Banner extends Component{
    render(){
          const settings = {
            //   dots:true,
            //   fade:true,
            //   infinite:true,
            //   speed:500,
            //   slidesToShow:1,
            //   arrow:true,
            //   slidesToScroll:1,
            // dots: true,
            // infinite: true,
            // speed: 500,
            // fade: true,
            // cssEase: 'linear' 
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed: 4000,
            fade:true,
            cssEase: 'linear',
            arrow:true
          }
        return(
            <>
            
            <div className="banner-slider">
                <Slider {...settings}>
                <div className="slider">
                    <img src={Acanvascotton} alt="" />
                    <p>A Cotton Canvas</p>         
                    <Link to={"/story/ace-jig"}>Read more</Link> 
                </div>
                <div className="slider">
                <img src={Bannerimage}  alt="" />
                 <p>Group work</p>
                 <Link to={"/story/jen-delos-reyes"}>Read more</Link>
                </div>
                <div className="slider">
                <img src={Peacefulstills} alt="" />
                 <p>Peaceful stills</p>
                 <Link to={"/"}>Read more</Link>
                </div>
                <div className="slider">
                <img src={Econearth} alt="" />
                <p>Econ of Earth</p>
                 <Link to={"/"}>Read more </Link>
                 <Link to={"/story/ace-jig"}>Read more</Link>
                </div>
                </Slider>
            </div>
            
            </>
        );
    }
}
export default Banner;