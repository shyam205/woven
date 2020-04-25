import React ,{Component} from 'react';
import Secondarylogoimage from '../images/logo-secondarymark.png'
class Secondarylogo extends Component{
  render(){
      return(
          <>
             <div className="secondarylogo">
                 <img src = {Secondarylogoimage} alt ="" />
                 <p>THE STORIES</p>
             </div>
          </>
      )
  }
} 
 
 export default Secondarylogo;