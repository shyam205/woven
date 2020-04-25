import React , { Component } from 'react';

import Header from '../component/header';
import Banner from '../component/banner';
import Designabout from '../component/design-about';
import Secondarylogo from '../component/secondarylogo';
import Sortby from './sortby';
import Advertiseheader from './advertise-header';
import Morestories from './morestories';
import Blogpost from './blogpost';
import Footer from './footer';
// import Menucontainer from './menu-container';
class Home extends Component {


    render(){
        return(
            <>
               <Header />
               {/* <Menucontainer /> */}
               <Banner />
                <Designabout />
                <Secondarylogo />
                <Sortby />
                <Advertiseheader />
                <Morestories />
                <Blogpost />
                <Footer />
            </>
        );

        }
}    

export default Home;