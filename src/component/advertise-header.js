import React , {Component } from 'react';
import Adevtiseblock from './advertise-block'
import {Link} from 'react-router-dom';

class advertiseheader extends Component{
    render(){
        return(
        <>
          <div className="advertiseheader">
              <div className="advertiseheader-text">
                <h3>Future — Past</h3>
                <span>Woven Issue Four</span>
                <p>Issue 4 explores the paradoxes at play in our world: death and rebirth, old and new, past and future. We take on a mindset of endless growth and the many catalysts we encounter in the creative process: setbacks, loss, imagination, and serendipity. From poetry to plants, this issue looks intently into the face of the immeasurable forces that propel us forward, and meditates on our role in designing the future.</p>
                <Link to ="">SHOP NOW</Link>
              </div>
              <div className="advertiseheader-images">
               <Adevtiseblock />
              </div>
          </div>
        </>
        );
    }
} 
export default advertiseheader;