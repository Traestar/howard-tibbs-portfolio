import React from "react"
import { Link } from "gatsby"



const ContactBox = () => (
    <div id="contact" 
          className="section">
                <div className="signup-form w-row">
                  <div className="signup-image-wrapper w-col w-col-6 w-col-medium-6" />
                  <div className="signup-content-wrapper w-col w-col-6 w-col-medium-6">
                    <div className="big-article-title-wrapper">
                      <div className="w-form">
                        <form id="email-form" name="email-form" data-name="Email Form" className="form">
                        <Link to="/contact"><h2 className="section-heading centered">Contact Form</h2></Link>
                          <div className="section-title-group">
                            <div className="section-subheading center">You could contact me below for more information.</div>
                          </div>
                        </form>
                        <div className="success-message-2 w-form-done"><img src="images/big-check2x.png" width={200} alt="" />
                          <div className="success-message-text">Thanks for Signing Up!</div>
                        </div>
                        <div className="error-message-2 w-form-fail">
                          <div className="error-message-text">Oops! Something went terribly wrong.</div>
                        </div>
                      </div>
                      <div className="form-wrapper squeezed w-form">
                        <form id="email-form" name="email-form" data-name="Email Form"><label htmlFor="name" className="form-label">Name:</label><input type="text" id="name" name="name" data-name="Name" maxLength={256} placeholder="What is your name?" className="form-field w-input" /><label htmlFor="email" className="form-label">Email Address:</label><input type="email" id="email" name="email" data-name="Email" maxLength={256} required placeholder="Email Address" className="form-field w-input" /><label htmlFor="Text-Area" className="form-label">MESSAGE:</label><textarea id="Text-Area" name="Text-Area" maxLength={5000} placeholder="How can I help you?" data-name="Text Area" className="form-field text-area w-input" defaultValue={""} /><input type="submit" defaultValue="Submit" data-wait="Please wait..." className="button full-width w-button" /></form>
                        <div className="success-wrapper w-form-done">
                          <p className="success-message">Thank you! Your submission has been received!</p>
                        </div>
                        <div className="error-wrapper w-form-fail">
                          <p className="error-message">Oops! Something went wrong while submitting the form :(</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

)
export default ContactBox