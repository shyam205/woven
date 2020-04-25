import React , { Component } from 'react';
import Logoimage from '../images/logo.svg';
import Seachicon from '../images/searchicon.png'
import {Link , NavLink } from 'react-router-dom';
// import Menucontainer from './menu-container';
// import $ from 'jquery';
class Header extends Component {
    handleClick = () => {
          

        // $('.menucontainer,.toggle,#toggle').hover(function(){
        //   $('.menucontainer').css("top:0%")
        // }),
        // function(){
        //     $('.menucontainer').css("top:-60%");
        // };
        //     var i = 0;
        //    var j=i%2;
            
        //     if(j===0) {
        //       $(".menucontainer").addClass("top:0%"); 
        //        i++;         
        //     }
        //     else{
        //        $(".menucontainer").removeClass("top:-60%"); 
        //         i++;
        //     }
            
        //  });
        // $('#toggle').hover(function(){
        //     $('.menucontainer').css("background-color", "yellow");
        //     }, function(){
        //     $('.menucontainer').css("background-color", "pink");
        //   });
    }
   

 render(){
    
     return(
         <>
             <div className="header">
                 <div className="section-first">
                 <div className="toggle">
                    <label onClick = {this.handleClick}>&#9776;</label>
                    <input type="checkbox" id="toggle"/>
                 </div>
                 <div className="navlink">
                  <NavLink to={"/shopcard"} className="shop" activeClassName="activate"><p className="shop">Shop</p></NavLink>
                  </div>
                 </div>
                 <div className="logo">
                  <NavLink to={"/"}><img src={Logoimage} alt="" /></NavLink>
                 </div>
                 <div className="iconcart">
                 <div className="searchicon">
                 <img src={Seachicon} alt="" />
                 </div>
                 <div className="cart">CART</div>
                 </div>
             </div>
             
             {/* <Menucontainer /> */}
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


export default Header;