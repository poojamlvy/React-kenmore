import React, { Component } from 'react';



import About from './about';
import Service from './service';
import Price from './price';
import payment from './payment';
import Contact from './contact';
import Success from './success';





import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from "./main";


// import "../Component/style.css";
// import "../Component/utils.css";

import { Link } from 'react-router-dom';
class Home extends React.Component {
    render() {
        
        return (
            <div>
             
            <Switch>

                <Route exact path="/home" component={Main} />
                <Route exact path="/about" component={About} />
                <Route exact path="/service" component={Service} />
                <Route exact path="/price" component={Price} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/payment" component={payment} />
                <Route exact path="/success" component={Success} />


                </Switch>
       
            </div>
                
    
         
            
        )
    }
}
export default Home