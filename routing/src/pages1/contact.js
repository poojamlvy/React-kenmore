import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import "../Component/contact.css";

// import { Link } from 'react-router-dom';
class Contact extends React.Component {
    render() {
        return (
            <div>
                <Header/>

<main>
                    <div class="contact-info">
                         <div class="card">
                             <i class="card-icon fa fa-envelope"></i>
                             <p>email@domain.com</p>
                         </div>
                         <div class="card">
                             <i class="card-icon fa fa-phone"></i>
                             <p>+000000000000</p>
                        </div>
                         <div class="card">
                             <i class="card-icon fa fa-map"></i>
                             <p>Calgary , Canada</p>
                         </div>

                     </div>

                 </main>
                 <Footer/>
            </div>
                  )
                }
            }
            export default Contact