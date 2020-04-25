import React, {Component} from 'react';
import Coverfirst from '../images/Cover1.jpg';
import MuireCover from '../images/MuireCover.jpg';
import Campfirecover from '../images/campfirecover.jpg';
import Cover from '../images/Cover.jpg';
import {Link} from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

class Blogpost extends Component{
    render(){
        return(
        <> 
        <div className="line-breaker">
            <hr></hr>
            <p>FEATURED BLOG POSTS</p>
        </div>
        <div className="blogpost">
        <div className="blogpost-containers">
        <div className="blogpost-container">
          <LazyLoad>
            <img src = {Coverfirst} alt=""  />
            </LazyLoad>
          <p>Making Art in the Middle of Nowhere</p>
          <span>Exploring a West Texas must-see, firmly planted at the crossroads of Art and Myth.</span>
        </div>
        <div className="blogpost-container">
        <LazyLoad>
        <img src = {MuireCover} alt=""  />
        </LazyLoad>
        <p>Celina Muire</p>
          <span>Austin-based woodworker Celina Muire talks to us about process, pyrography, and the perfectly imperfect nature of making by hand.</span>
            </div>
            <div className="blogpost-container">
            <LazyLoad>
            <img src = {Campfirecover} alt=""  />
            </LazyLoad>
            <p>Cookfire</p>
          <span>A meal out-of-doors in Mt. Hood, OR with two of Portland’s finest foodies.</span>
            </div>
            <div className="blogpost-container">
            <LazyLoad>
            <img src = {Cover} alt=""  />
            </LazyLoad>
            <p>LA Juice Shop</p>
          <span>Thoughts on juicing and the place to go for the best fresh, local, and organic beverages in West Hollywood.</span>
            </div>
        </div>
        <Link to ="">VIST BLOG ></Link>
        <hr></hr>
        </div>
        </>
        );
    }
}


export default Blogpost;