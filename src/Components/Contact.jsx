import React from 'react';

function Contact(){
  return (
    <div id="contact">
      <h2>Contact us</h2>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="text" placeholder="Type Your E-Mail" required />
        <textarea placeholder="Write Here..." name="message"></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;