const Contect = () => {
  return (
    <>
      <div className="contact-box">
        <div className="contact-heading" id="contact">
          Contact Me
        </div>
        <div className="contact-innerbox">
          <div className="contact-left box"></div>
          <div className="contact-right box">
            <div className="send-msg">Send me a message</div>
            <form action="">
              <label htmlFor="name">First & Last Name</label>
              <input type="text" id="name" name="name" required />
              <br />
              <label htmlFor="number">Phone number</label>
              <input type="tel" id="number" name="number" required />
              <br />
              <label htmlFor="email">Email address</label>
              <input type="email" id="email" name="email" required />
              <br />
              <label htmlFor="message">Message</label>
              <br />
              <textarea name="message" cols="68" rows="5" required></textarea>
              <br />
              <input
                className="submit-btn"
                type="submit"
                value="Send Message"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contect;
