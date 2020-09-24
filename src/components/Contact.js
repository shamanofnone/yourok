import React from 'react';
import './Contact.css';
function Contact() {
    return (
        <div className='contact-container mt-3 mb-3'>
            <div className="flex d-flex justify-content-center align-items-center">
                <h1>Contact Us</h1>
            </div>
            <div className="form-container mt-4">
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">First Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="John" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Last Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Smith" />
                    </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
