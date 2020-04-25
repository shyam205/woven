import React , {Component} from 'react';
import LazyLoad from 'react-lazy-load';
import Joekennethhome from '../images/Joekennethhome.jpg';
import Antelopehome from '../images/Antelopehome.jpg';
import CodyCobbhome from '../images/CodyCobbhome.jpg';
import JulianneAhnhome from '../images/JulianneAhnhome.jpg';
import Arrow from '../images/arrow-green.png';


class Morestories extends Component{
    render(){
        return(
        <>
              <div className="morestories-container">
             <div className="morestories">
             <div className="stories-container">
                    <div className="stories-images">
                       <LazyLoad>
                     <img src = {Joekennethhome} alt="" className="storiesimage"/>
                     </LazyLoad>
                    </div>
                    <div className="stories-text">
                    <p><span>SHANTELL MARTIN </span>| ART</p>
                    <h2>Well, ARE YOU?</h2>
                    <p>Artist and educator Shantell Martin uses her work to ask the ultimate question of identity: Are you, YOU?</p>
                    </div>
                    <div className="stories-date"></div>
                    <div className="stories-readmore">
                    <p className="readmore">Read more</p>
                    <LazyLoad>
                    <img src = {Arrow} alt ="" />
                    </LazyLoad>
                    </div>
                 </div>
                  
                 <div className="stories-container">
                    <div className="stories-images">
                    <LazyLoad>
                     <img src = {Antelopehome} alt="" className="storiesimage" />
                     </LazyLoad>
                    </div>
                    <div className="stories-text">
                    <p><span>SHANTELL MARTIN </span>| ART</p>
                    <h2>Well, ARE YOU?</h2>
                    <p>Artist and educator Shantell Martin uses her work to ask the ultimate question of identity: Are you, YOU?</p>
                    </div>
                    <div className="stories-date"></div>
                    <div className="stories-readmore">
                    <p className="readmore">Read more</p>
                    <LazyLoad>
                    <img src = {Arrow} alt ="" />
                    </LazyLoad>
                    </div>
                 </div>

                 <div className="stories-container">
                    <div className="stories-images">
                    <LazyLoad>
                     <img src = {CodyCobbhome} alt="" className="storiesimage" />
                     </LazyLoad>
                    </div>
                    <div className="stories-text">
                      <p><span>SHANTELL MARTIN </span>| ART</p>
                    <h2>Well, ARE YOU?</h2>
                    <p>Artist and educator Shantell Martin uses her work to ask the ultimate question of identity: Are you, YOU?</p>
                    </div>
                    <div className="stories-date"></div>
                    <div className="stories-readmore">
                    <p className="readmore">Read more</p>
                    <LazyLoad>
                    <img src = {Arrow} alt ="" />
                    </LazyLoad>
                    </div>
                 </div>

                 <div className="stories-container">
                    <div className="stories-images">
                    <LazyLoad>
                     <img src = {JulianneAhnhome} alt="" className="storiesimage" />
                     </LazyLoad>
                    </div>
                    <div className="stories-text">
                    <p><span>SHANTELL MARTIN </span>| ART</p>
                    <h2>Well, ARE YOU?</h2>
                    <p>Artist and educator Shantell Martin uses her work to ask the ultimate question of identity: Are you, YOU?</p>
                    </div>
                    <div className="stories-date"></div>
                    <div className="stories-readmore">
                    <p className="readmore">Read more</p>
                    <LazyLoad>
                    <img src = {Arrow} alt ="" />
                    </LazyLoad>
                    </div>
                 </div>
               </div>
               </div>
        </>
        );
    }
}

export default Morestories;