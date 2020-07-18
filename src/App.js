import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
// import Header from './component/header';
import Shopcard from './component/shopcard';
import Home from './component/home';
import Shantellmartin from './component/shop/shantell-martin';
import Crenaturalbuilding from './component/shop/cre-natural-building';
import './App.css';
import './css/style.css';
import Collaborate from './component/collaborate';
import Acejig from './component/story/ace-jig';
import Jendelos from './component/story/jen-delos-reyes';
/* <script>
  $(document).ready(function(){
    $(".shop,.shopcard").mousecenter(function(){
    $(".shopcard").slideDown();
    })
    $(".shop,.shopcard").mouseleave(function(){
      if($(".shop:hover").lenght==0 && $(".shopcard:hover").length==0){
          $(".shopcard").slideUp()
      }
    });
  });
</script> */


function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
    <div className="App">
     
       <Route exact path="/" render={() => <Home />}/>
       <Route exact path="/shopcard" render={() => <Shopcard />}/>
       <Route exact path="/shop/shantell-martin" render={() => <Shantellmartin />}/>
       <Route exact path="/shop/cre-natural-building" render={() => <Crenaturalbuilding />}/>
       <Route exact path="/collaborate" render={() => <Collaborate />}/>
       <Route exact path="/story/ace-jig" render={() => <Acejig />}/>
       <Route exact path="/story/jen-delos-reyes" render={() => <Jendelos />}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
