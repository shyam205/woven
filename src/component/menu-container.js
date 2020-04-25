import React , {Component} from 'react';
import {Link} from 'react-router-dom';


class Menucontainer extends Component{     
    render(){
        return(
        <>
        <div className="menucontainer">
            <ul>
                <li>
                <p>.01</p>
                    <Link to="">STORIES</Link></li>
                <li><p>.02</p> <Link to="">FILMS</Link></li>
                <li><p>.03</p> <Link to="">SHOP</Link></li>
                <li><p>.04</p>  <Link to="">BLOG</Link></li>
                <li> <p>.05</p> <Link to="">ABOUT</Link></li>  
            </ul>
            <div className="request-interview">
            <Link to="">REQUEST INTERVIEW</Link>
            </div>
            <div className="contact-profile">
            <li><Link to="">twitter</Link></li>
                <li> <Link to="">facebook</Link></li>
                <li><Link to="">instagram</Link></li>
            </div>
        </div>
        </>
        );
    }
}

export default Menucontainer;