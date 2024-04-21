
import React from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactForm.css';
import img from "../Assets/5.jpg"

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
   

    toast.success('Your message has been sent successfully!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="contact-form">
      <div className="form-panel">
        <Panel header="Contact Us" className="form-panel">
          <form onSubmit={handleSubmit}>
            <div className="p-field">
              <label htmlFor="name">Name</label>
              <InputText id="name" name="name" type="text" />
            </div>
            <div className="p-field">
              <label htmlFor="email">Email</label>
              <InputText id="email" name="email" type="email" />
            </div>
            <div className="p-field">
              <label htmlFor="message">Message</label>
              <InputTextarea id="message" name="message" rows={5} />
            </div>
            <Button label="Send Message" icon="pi pi-send" className="p-button-primary" />
          </form>
        </Panel>
      </div>
      <div className="form-image">
        
        <img src={img} alt="Contact" />
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default ContactForm;
