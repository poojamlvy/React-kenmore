import React, { Component } from 'react';
import "../Component/about.css";
import Header from './header';
import Footer from "./footer";


import { Link } from 'react-router-dom';
class About extends React.Component {
    render() {
        return (
            <div>
                <Header/>
              <main>
                     <div className="container">
                         <div className="card1">
                             <img src="assets/img/a-500.png" alt="" />
                         </div>
                         <div className="card2">
                             <h3>Why choose us</h3>
                             <h4>Personalized Experience</h4>
                             <p> We take utmost care of your clothes segregating based on the cloth type and giving you instant clothes to make a statement.</p>
                             <h4>Affordable Pricing</h4>
                             <p> Prices that suits your pocket is one of our USP An option of choosing between 3 types of pricing is available.</p>
                             {/* <h4>Convenience</h4>
                             <p>  With just a tap of a button your laundry gets done, giving your leisure time to spend with your family and friends.</p> */}
                             <h4>Quality</h4>
                             <p>  We use the best in class products to assure that your favorite clothes are always there for you to wear.</p>
                             <h4>We are Passionate About Laundry</h4>
                             <p>  We are professionals in the laundry and dry cleaning business, which means we always stay up to date on the latest technologies, cleaning methods, and solutions for dealing with stains or delicate fabrics. Plus, we maintain the highest standards of business integrity by following local and national regulations and environmental safety rules. We are passionate about changing the way you think about laundry!</p>
                             <h4>Instant Order Update</h4>
                             <p>  Regular updates of your order to help you keep a track of your laundry and plan accordingly.</p>




                         </div>
                    </div>


               </main>
                <Footer/> 
            </div>
                    
                    )
                }
            }
            export default About