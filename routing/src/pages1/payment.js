import React, { Component } from 'react';


import "../Component/payment.css";

import { Link } from 'react-router-dom';
class Payment extends React.Component {
    render() {
        return (
            <div className="body1">
                <div className="container10">
                    <h2>Confirm for your payment</h2>
                    <div className="first-row">
                        <div classNamee="owner">
                            <h5>Owner</h5>
                            <div className="input-field1">
                                <input type="text" />
                            </div>
                        </div>
                        <div className="cvv">
                            <h5>CVV</h5>
                            <div className="input-field2">
                                <input type="password"/>
                            </div>
                        </div>
                    </div>
                    <div className="second-row">
                        <div className="card-number">
                            <h5>Card Number</h5>
                            <div className="input-field">
                                <input type="text"/>
                            </div>
                        </div>
                    </div>
                    <div className="third-row">
                        <h3></h3>
                        <div className="selection">
                            <div className="date">
                                <select name="month" id="month">
                                    <option value="Jan">Jan</option>
                                    <option value="Feb">Feb</option>
                                    <option value="Mar">Mar</option>
                                    <option value="Apr">Apr</option>
                                    <option value="May">May</option>
                                    <option value="Jun">Jun</option>
                                    <option value="Jul">Jul</option>
                                    <option value="Aug">Aug</option>
                                    <option value="Sep">Sep</option>
                                    <option value="Oct">Oct</option>
                                    <option value="Nov">Nov</option>
                                    <option value="Dec">Dec</option>
                                </select>
                                <select name="years" id="years">
                                    <option value="2025">2025</option>
                                    <option value="2024">2024</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                </select>
                            </div>
                            <div className="cards">
                                <img src="https://www.merchantequip.com/image/?logos=v|m|p&height=64"
                                    alt="Merchant Equipment Store Credit Card Logos" />
                            </div>
                        </div>
                    </div>
                    <div className="confirm1">
                    <Link to="success">Confirm</Link>
                    </div>
                </div>
            </div>

        )
    }
}
export default Payment