import React, { Component } from 'react';
import Header from './header';

import Footer from './footer';




class Main extends React.Component {
    render() {

        return ( 
            <div>
                            <Header />

            <main>
                <div className="container">

                    <div className="iron">
                        <img src="assets/img/iron.jpg" alt="" />
                    </div>

                    <span className="spinner-box">

                        <img src="assets/img/spinner.png" alt="spin-image" className="spinner" />
                    </span>
                    <div className="wrapper">
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                        <div><span className="dot"></span></div>
                    </div>

                </div>
                <script type="text/javascript">
                    function createBubble() { }
                    const Section = document.querySelector('section')
                    const createElement = document.createElement('span')

                </script>

            </main>
            <Footer />

            </div>

        )
    }
}
export default Main