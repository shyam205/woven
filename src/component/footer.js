import React , {Component} from 'react';
import {Link} from 'react-router-dom';


class Footer extends Component{
    render(){
        return(
            <>
                 <div className="footer">
                   <div className="cloumnn-footer">
                   <Link to={"/collaborate"}>Collaborate With Us</Link>
                   </div>
                   <div className="cloumnn-footer">
                   <Link to="">Contact Us</Link>
                       </div>
                       <div className="cloumnn-footer">
                       <Link to="">Stay In Touch!</Link>
                       </div>
                       <div className="cloumnn-footer">
                       <Link to="">FAQ</Link>
                       </div>
                       <div className="cloumnn-footer">
                       <Link to="">Terms & Conditions</Link>
                       </div>
                       <div className="cloumnn-footer">
                       <Link to="">© WOVEN 2020</Link>
                       </div>
                 </div>
            </>
        );
    }
}

 export default Footer;