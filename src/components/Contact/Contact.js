import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [state, handleSubmit] = useForm("xqazkrlb");

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  if (state.succeeded) {
    return (
      <Contact/>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="form-container">
      <form className="styled-form" onSubmit={handleSubmit}>
        <h2>Contact Me</h2>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          autoComplete='off'
          onChange={handleChange}
          placeholder='Name'
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          autoComplete='off'
          placeholder='Email'
          required
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder='Message'
          required
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
