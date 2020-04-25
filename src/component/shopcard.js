import React , {Component} from 'react';
import LazyLoad from 'react-lazy-load';
import Header from '../component/header';
import Issue4cover from '../images/firstcover.jpg'
import Issue3cover from '../images/issue3shop.jpg'
import Issue2cover from '../images/issue2cover.jpg'
import Postcards from '../images/postcardscover.jpg'


class Shopcard extends Component{
  render(){
      return(
          <>
            <Header />
             <div className="shopcard">
             <div className="shopcard-text">
                     <span>Shop</span>
                 </div>
                 <div className="shopcard-box">
                    <div className="shopcard-items">
                     <div className="image-content">
                       <LazyLoad>
                     <img src = {Issue4cover} alt="" />
                     </LazyLoad>
                     </div>
                     <div className="text-content">
                       <h2>Woven issue for</h2>
                       <span>$18 USD</span>
                     </div>
                    </div>
                    <div className="shopcard-items">
                    <div className="image-content">
                    <LazyLoad>
                    <img src = {Issue3cover} alt="" />
                    </LazyLoad>
                     </div>
                     <div className="text-content">
                       <h2>Woven issue for</h2>
                       <span>$18 USD</span>
                     </div>
                    </div>
                    <div className="shopcard-items">
                    <div className="image-content">
                    <LazyLoad>
                    <img src = {Issue2cover} alt="" />
                    </LazyLoad>
                     </div>
                     <div className="text-content">
                       <h2>Woven issue for</h2>
                       <span>$18 USD</span>
                     </div>
                    </div>
                    <div className="shopcard-items">
                    <div className="image-content">
                    <LazyLoad>
                    <img src = {Postcards} alt="" />
                    </LazyLoad>
                    </div>
                    <div className="text-content">
                       <h2>Woven issue for</h2>
                       <span>$18 USD</span>
                     </div>
                    </div>
                 </div>
                 <div className="shopcard-text">
                     <span>See All -></span>
                 </div>
             </div>
          </>
      )
  }
}

 export default Shopcard;