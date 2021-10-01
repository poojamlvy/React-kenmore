import React, { Component } from 'react';
// import "../Component/style.css";
// import "../Component/utils.css";


import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            
                <header>
                    <nav>
                        <div class="logo">
                            <img src="assets/img/logo.png" alt="" />
                        </div>
                        <ul>
                            <li><Link to="/Home"><i className="fa fa-home" />HOME</Link></li>
                            <li><Link to="/About"><i className="fa fa-user" />ABOUT US</Link></li>
                            <li><Link to="/Service"><i className="fa fa-clone" />SERVICE</Link></li>
                            <li><Link to="/Price"><i className="fa fa-usd" />PRICES</Link></li>
                            <li><Link to="/Contact"><i className="fa fa-phone" />CONTACT</Link></li>

                        </ul>
                        {/* <div class="search">
                            <input type="text" name="" id="" placeholder="Search here" />
                            <button class="btn">Search</button>
                        </div> */}
                    </nav>
                </header>
            
        )
    }
}
export default Header