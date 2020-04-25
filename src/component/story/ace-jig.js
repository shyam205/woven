import React , {Component} from 'react';
import Footer from '../footer';
import Header from '../header';
import {Link} from 'react-router-dom';
import Twittericon from '../../images/icon-twitter.png';
import Facebooklogo from '../../images/facebook-logo.png';
import Pintrest from '../../images/pintrest.png';
import Zigzag from '../../images/zigzag-black.png';
import Squiggly from '../../images/squiggly-green.png';
import Arrowscroll from '../../images/arrow-scroll.png';
import AceJigtall01 from '../../images/AceJigtall01.jpg';
import AceJigtall02 from '../../images/AceJigtall02.jpg';

class Acejig extends Component{
   render(){
       return(
        <>
        <Header />
        <div className="acejig">
            
        <div className="aside-contact-icons">
            <p>Share</p>
            <li className="pintrest"><Link to=""><img src={Pintrest} alt=""></img></Link></li>
            <li className="facebook"><Link to=""><img src={Facebooklogo} alt=""></img></Link></li>
            <li className="twitter"><Link to=""><img src={Twittericon} alt="" /></Link></li>      
        </div>
        <div className="cejig-banner">
            <h2>   PDX & NYC </h2>
            <h1>Ace & Jig</h1>
            <p>A Cotton Canvas</p>
            <img src = {Zigzag} alt ="" className="zigzagicon" />
            <time>.04.21.1</time>
            <img src = {Squiggly} alt="" className="squiggly" />
            <Link to = "">scroll to begin</Link>
            <img src = {Arrowscroll} alt="" className="arrowscroll" />
        </div>
       
        </div>
        <div className="acejig-image-text-container">
           <div className="acejig-image-container">
             <img src = {AceJigtall01} alt ="" />
             <img src = {AceJigtall02} alt ="" />
           </div>
           <div className="acejig-text-container">
            <p className="paragraph">We were very idealistic, and what we asked for is probably not even possible. But, as an artist you have to shoot for the moon.</p>
           <p className="about-writer">__Jenna Wilson & Cary Vaughan</p>
           <p className="photography">photographs by <span>Carissa Gallo</span></p>
           <p class="photography-word">words by <span>Woven</span></p>
           <img src = {Zigzag} alt ="" className="zigzagicon-container" />
           <p className="short-content"><i>B</i>egun by best friends turned business partners Jenna Wilson and Cary Vaughan, Ace & Jig has turned a passion for textiles into a dream career. Blending art and business, fashion and friendship, they together create designs that yield not only innovative patterns, but a heartfelt community of support and style.</p>
           <p>Read the entire article in our Print Magazine</p>
           <Link to ="" >BUY THIS ISSUE</Link>
           </div>
        </div>
        <div className="asidecontainer">
        <aside> 
            <hr></hr>
            <header>
                <h1>ADD A COMMENT</h1>
                <p>Your Email address will not be published</p>
                <form>
                    <input type="text" placeholder="Name"></input>
                    <input type= "text" placeholder="EMAIL" className="email"></input><br></br>
                   
                    <textarea placeholder="COMMENT"></textarea><br></br>
                    <input type="submit" name="submit" value="POST IT"></input>
                </form>
            </header>
        </aside>
        </div>
        <Footer />
        </>
       );
   }
}



export default Acejig;