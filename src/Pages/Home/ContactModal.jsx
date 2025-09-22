import React from 'react';
import Modal from 'react-modal';

const ContactModal = ({ isOpen, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Contact Modal"
      style={{
        content: {
          height:'60%',
          width: '50%', 
          maxWidth: '500px',
          margin: 'auto', 
          marginTop: '100px', 
          padding: '20px', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', // Center items vertically
          alignItems: 'center', // Center items horizontally
          position: 'relative', 
        },
        overlay: {

        },
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          border: 'none',
          background: 'none',
          fontSize: '20px',
          cursor: 'pointer',
        }}
      >
        &times;
      </button>
      <h2 style={{ marginBottom: '15px' }} >CONTACT ME</h2>
      <form onSubmit={handleSubmit}>
        <div className="container" style={{ width: '100%' }}>
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          
         
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button type="submit" className="btn btn-primary contact--form--btn" style={{ background: '#513aaf'}}>Submit</button>
        </div>
      </form>

    </Modal>
  );
};

export default ContactModal;
