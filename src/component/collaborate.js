import React , {Component} from 'react';
import Header from './header';
import Footer from './footer';
import { Link } from 'react-router-dom';

class Collaborate extends Component{
    render(){
        return(
            <>
            <Header />
             <div className="collaborate">
                   <div className="collaborate-header">
                       <p>SHARE YOUR</p><br></br>
                       <p> PASSIONS</p>
                   </div>
                   <div className="collaborate-container">
                     <div className="collaborate-container-text">
                        <h2>HEY CREATIVES</h2>
                        <p>Here at Woven we understand and gladly acknowledge that we can’t do everything ourselves. We welcome the opportunity to work with fellow creatives, photographers, and film makers. As a result, many of the articles and videos here rely heavily on the skills of fellow collaborators. If you have an interest in working together or a skill you’d like to offer, please reach out to us.</p>
                        <hr></hr>
                        <h2>GET FAMILIAR</h2>
                        <p>Take some time to familiarize yourself with the editorial tone and visual aesthetic of Woven to see if it relates with your own. We would relish the opportunity to establish a relationship with you, look at your work, and perhaps collaborate on an article or creative experiment of sorts.</p>
                        <hr></hr>
                        <p>For any questions or comments you may have please contact:</p>
                        <Link to = "">HELLO@WOVENMAGAZINE.COM</Link>
                     </div>
                     <div className="collaborate-container-input-detail">
                         <p>Tell us a little about yourself:</p>
                        <input type = "text" placeholder="first+ lastname"></input>
                        <input type = "text" placeholder="Locality/(city+state/country)"></input>
                        <input type = "text" placeholder="website(optional)"></input>
                        <input type = "text" placeholder="your mail"></input>
                        <textarea placeholder="tell us a title about yourself , and what you do"></textarea>
                        <Link to ="">Request interview</Link>
                     </div>
                   </div>
             </div>
             <Footer />
            </>
        );
    }
}

export default Collaborate;