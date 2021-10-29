import React, { useState } from "react";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handlerOfSubmit = function (event) {
    event.preventDefault();
    setMessageSent(true);
  };

  if (!messageSent) {
    return (
      <div className="main">
        <h1>Contact</h1>
        <div id="contact">
          <p>
            Send us an e-mail at: fictionalyarnshop @
            pleasedontsendanything.com.
          </p>
          <p>Alternatively, fill out this form:</p>
          <form onSubmit={handlerOfSubmit}>
            <label>
              Name: <input type="text" required />
            </label>
            <label>
              E-mail: <input type="email" required />
            </label>
            <label>
              Message: <input type="textarea" maxLength="75" required />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div className="main">
        <h1>Contact</h1>
        <div id="contact">
          <p>
            Send us an e-mail at: fictionalyarnshop @
            pleasedontsendanything.com.
          </p>
          <div id="messagereceived">
            <p>Message received! We'll get back to you as soon as possible.</p>
            <p>Thank you.</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Contact;
