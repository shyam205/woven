import React , {Component} from 'react';
import Footer from '../footer';
import Header from '../header';
import {Link} from 'react-router-dom';
import Twittericon from '../../images/icon-twitter.png';
import Facebooklogo from '../../images/facebook-logo.png';
import Pintrest from '../../images/pintrest.png';


class Jendelos extends Component{
    render(){
        return(
            <>
           <Header />
           <div className="jendelos">
           <div className="aside-contact-icons">
            <p>Share</p>
            <li className="pintrest"><Link to=""><img src={Pintrest} alt=""></img></Link></li>
            <li className="facebook"><Link to=""><img src={Facebooklogo} alt=""></img></Link></li>
            <li className="twitter"><Link to=""><img src={Twittericon} alt="" /></Link></li>      
        </div>
           </div>
           <Footer />
            </>
        );
    }
}
export default Jendelos;