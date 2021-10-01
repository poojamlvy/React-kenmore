
import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import "../Component/Price.css";

import { Link } from 'react-router-dom';
class Price extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <main>

                    <div className="pricing-plan-container">
                        <section className="pricing-plan pricing-plan--highlighted">
                            <div className="pricing-plan__header">
                                <h1 className="pricing-plan__title">Standard Package</h1>
                                <h2 className="pricing-plan__summary">500 Clothes Per Week</h2>
                            </div>
                            <div className="pricing-plan__description">
                                <ul className="pricing-plan__list">
                                    <li className="pricing-plan__feature">100 Set of Sheet</li>
                                    <li className="pricing-plan__feature">100 Towel</li>
                                    <li className="pricing-plan__feature">100 Blanket</li>
                                    <li className="pricing-plan__feature">100 Hand Towel</li>
                                    <li className="pricing-plan__feature">100 Curtains</li>
                                </ul>
                            </div>
                            <div className="pricing-plan__actions">
                                <p className="pricing-plan__cost">$250</p>
                                <p className="pricing-plan__text">Per Week</p>
                                <Link to="payment" className="pricing-plan__button">Payment</Link>
                                <p className="pricing-plan__text">Minimum 500 clothes per week</p>

                            </div>
                        </section>
                        <section className="pricing-plan pricing-plan--highlighted">
                            <div className="pricing-plan__header">
                                <h1 className="pricing-plan__title">Standard Package</h1>
                                <h2 className="pricing-plan__summary">750 Clothes Per Week</h2>                             </div>
                            <div className="pricing-plan__description">
                                <ul className="pricing-plan__list">  
                                    <li className="pricing-plan__feature">150 Set of Sheet</li>
                                    <li className="pricing-plan__feature">150 Towel</li>
                                    <li className="pricing-plan__feature">150 Blanket</li>
                                    <li className="pricing-plan__feature">150 Hand Towel</li>
                                    <li className="pricing-plan__feature">150 Curtains</li>
                                </ul>
                            </div>
                            <div className="pricing-plan__actions">
                                <p className="pricing-plan__cost">$350</p>
                                <p className="pricing-plan__text">Per Week</p>
                                <Link to="payment" className="pricing-plan__button">Payment</Link>
                                <p className="pricing-plan__text">Minimum 750 clothes per week</p>

                            </div>
                        </section>
                        <section className="pricing-plan pricing-plan--highlighted">
                            <div className="pricing-plan__header">
                                <h1 className="pricing-plan__title">Standard Package</h1>
                                <h2 className="pricing-plan__summary">1000 Clothes Per Week</h2>
                            </div>
                            <div className="pricing-plan__description">
                                <ul className="pricing-plan__list">
                                    <li className="pricing-plan__feature">200 Set of Sheet</li>
                                    <li className="pricing-plan__feature">200 Towel</li>
                                    <li className="pricing-plan__feature">200 Blanket</li>
                                    <li className="pricing-plan__feature">200 Hand Towel</li>
                                    <li className="pricing-plan__feature">200 Curtains</li>
                                </ul>
                            </div>
                            <div className="pricing-plan__actions">
                                <p className="pricing-plan__cost">$500</p>
                                <p className="pricing-plan__text">Per Week</p>
                                <Link to="payment" className="pricing-plan__button">Payment</Link>
                                <p className="pricing-plan__text">Minimum 1000 clothes per week</p>

                            </div>
                        </section>
                    </div>

                </main>
                <Footer/>
            </div>

        )
    }
}
export default Price