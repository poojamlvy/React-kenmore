import React, { Component } from 'react';
// import "../Component/style.css";
// import "../Component/utils.css";

import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer>

                    <h3>HOW IT WORK : IN 4 EASY STEPS</h3>
                    <div className="icons">
                        <img src="assets/img/laundry.png" alt="" />
                        <p>Bag up all your dirty clothes</p>
                        <img src="assets/img/truck.png" alt="" />
                        <p>We pick up your clothes</p>
                        <img src="assets/img/washing-machine.png" alt="" />
                        <p> We clean your clothes</p>
                        <img src="assets/img/fashion.png" alt="" />
                        <p>We deliver clean,iron,folded clothes</p>
                    </div>
                    <h4>COMMERCIAL LAUNDRY SERVICES</h4>

                </footer>

            </div>
        )
    }
}
export default Footer