import React, { Component } from 'react';
import "../Component/form.css";

class Form extends React.Component {
    render() {
        return (
           <div className="body2">
            <div className="container5">
            <div className="title">Schedule a Pickup </div>
            <form action="/Price">
              <div className="user-details">
                <div className="input-box">
                  <span className="details">First Name</span>
                  <input type="text" placeholder="Enter Your Name" required />
                </div>
                <div className="input-box">
                  <span className="details">Last Name</span>
                  <input type="text" placeholder="Enter Your Name" required />
                </div>
                <div className="input-box">
                  <span className="details">Email</span>
                  <input type="email" name="myEmail" placeholder="Enter Your Email" required />
                </div>
                <div className="input-box">
                  <span className="details">Phone Number</span>
                  <input type="text" name="idNumber" pattern="[0-9]{10}" placeholder="Enter Your 10 Digit Phone Number" required />
                </div>
                <div className="input-box">
                  <span className="details">Address</span>
                  <input type="text" placeholder="Enter Your Address" required />
                </div>
                <div className="input-box">
                  <span className="details">Pickup Date &amp; Time</span>
                  <input type="datetime-local" placeholder="Date & Time" required />
                </div>
                <div className="input-box">
                  <span className="details">Delivery Date &amp; Time</span>
                  <input type="datetime-local" placeholder="Date & Time" required />
                </div>
                <div className="input-box">
                  <span className="details">Message </span>
                  <input type="text" textarea cols={70} rows={5} placeholder=" Your Comment" />
                </div>
              </div>
              <div className="button">
                <input type="submit" defaultValue="Submit" />
                
              </div>
              </form>
          </div>
          </div>
        );
      }
    };

export default Form