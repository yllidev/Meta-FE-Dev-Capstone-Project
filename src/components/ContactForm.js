// src/components/ContactForm.js
import React from 'react';
import { useState } from "react";


const ContactForm = () => {
  return (
    <form>
      <div className="mb-3 w-25">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="text" className="form-control" id="name" />
      </div>
      <div className="mb-3 w-25">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" id="email" />
      </div>
      <div className="mb-3 w-50">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea className="form-control" id="message" rows="3"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
