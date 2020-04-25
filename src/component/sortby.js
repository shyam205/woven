import React , {Component} from 'react';
import {Link,NavLink } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import ShantellMartin from '../images/ShantellMartin.jpg';
import Crehome from '../images/Cre_home.jpg';
import WVhome from '../images/WV_home.jpg';
import JustinChunghome from '../images/JustinChung_home.jpg';
import Arrow from '../images/arrow-green.png';

class Sortby extends Component{
    render(){
        return(
            <>
            <div className="sortby-stories">
             <div className="sortby">
               <div className="sortby-options">
                 <div className="sortby-options-headline">
                  <Link to ="" ><p>SORT BY <span>+</span></p></Link>

                 </div>
                 <div className="sortby-optionstext">
                 <NavLink to= {""} className="sortbylinks">Apparel</NavLink>
                 <NavLink to= {""} className="sortbylinks">Architecture</NavLink>
                 <NavLink to= {""} className="sortbylinks">Art</NavLink>
                 <NavLink to= {""} className="sortbylinks">Barber</NavLink>
                 <NavLink to= {""} className="sortbylinks">Bees</NavLink>
                 <NavLink to= {""} className="sortbylinks">Ceramics</NavLink>
                 <NavLink to= {""} className="sortbylinks">Craft</NavLink>
                 <NavLink to= {""} className="sortbylinks">Curation</NavLink>
                 <NavLink to= {""} className="sortbylinks">Design</NavLink>
                 <NavLink to= {""} className="sortbylinks">Entreprenur</NavLink>
                 <NavLink to= {""} className="sortbylinks">Food</NavLink>
                 <NavLink to= {""} className="sortbylinks">Jwellery</NavLink>
                 <NavLink to= {""} className="sortbylinks">Landscape</NavLink>
                 </div>
               </div>
               <div className="sortby-filmstories">
                <NavLink to = {""} className="moviesstories">SEE FILMS ></NavLink>
                <NavLink to = {""} className="moviesstories">SEE ALL STORIES ></NavLink>
               </div>
               
             </div>
             <div className="stories">
             <div className="stories-containers">
                 <div className="stories-container">
                    <div className="stories-images">
                     <LazyLoad>
                     <img src = {ShantellMartin} alt="" className="storiesimage"/>
                     </LazyLoad>
                    </div>
                    <div className="stories-text">
                    <p><span>SHANTELL MARTIN </span>| ART</p>
                    <h2>Well, ARE YOU?</h2>
                    <p>Artist and educator Shantell Martin uses her work to ask the ultimate question of identity: Are you, YOU?</p>
                    </div>
                    <div className="stories-date"></div>
                    <div className="stories-readmore">
                    <Link to={"/shop/shantell-martin"}><p className="readmore">Read more</p></Link>
                    <LazyLoad>
                    <img src = {Arrow} alt ="" />
                    </LazyLoad>
                    </div>
                 </div>
                  
                 <div className="stories-container">
                 
                 <div className="stories-images">
                    <LazyLoad>
                    <img src = {Crehome} alt="" className="storiesimage" />
                     </LazyLoad>
                    </div>
                    <div className="stories-text">
                    <p><span>SHANTELL MARTIN </span>| ART</p>
                    <h2>Well, ARE YOU?</h2>
                    <p>Artist and educator Shantell Martin uses her work to ask the ultimate question of identity: Are you, YOU?</p>
                    </div>
                    <div className="stories-date"></div>
                    <div className="stories-readmore">
                    <Link to={"/shop/cre-natural-building"}><p className="readmore">Read more</p></Link>
                    <LazyLoad>
                    <img src = {Arrow} alt ="" />
                    </LazyLoad>
                    </div>
                 </div>

                 <div className="stories-container">
                    <div className="stories-images">
                    <LazyLoad>
                     <img src = {WVhome} alt="" className="storiesimage" />
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
                     <img src = {JustinChunghome} alt="" className="storiesimage" />
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
               </div>
            </>
        );
    }
}

 export default Sortby;