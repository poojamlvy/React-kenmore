import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import "../Component/service.css";

import { Link } from 'react-router-dom';
class Service extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                 <main>

         <div className="container2">

           <ul>

               <li><Link to="/Form"> <h3>Restaurants and Caterers</h3> </Link> <Link to="/Form"><button className="onclick">Get Price & Details</button> </Link></li>
               <li><Link to="/Form"><h3>Hotels & Motels</h3></Link><Link to="/Form"><button className="onclick">Get Price & Details</button></Link></li>
               <li><Link to="/Form"><h3>Assisted Living/Nursing Homes</h3></Link><Link to="/Form"><button className="onclick">Get Price & Details</button></Link></li>
               <li><Link to="/Form"><h3>Salons & Spas</h3></Link><Link to="/Form"><button className="onclick">Get Price & Details</button></Link></li>
               <li><Link to="/Form"><h3>Religious Organizations</h3></Link><Link to="/Form"><button className="onclick">Get Price & Details</button></Link></li>
               <li><Link to="/Form"><h3>Athletic Facilities / Gyms</h3></Link><Link to="/Form"><button className="onclick">Get Price & Details</button></Link></li>

             </ul>

           </div>
        </main>
        <Footer/>
     </div>
            )
          }
   }
            export default Service
