import './Form.scss';
import monitor from '../../../assets/images/monitor.png';

const ContactForm = () => {
  return (
    <section className="contact-section">
      <div className="form-container">
        <h2>Ready to Build<br /> Something Amazing?</h2>
        <p>We are a full-service agency with experts ready to help. We’ll get back to<br /> you within 24 hours!</p>
        <form className="contact-form">
          <div className="input-group">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send message</button>
        </form>
      </div>
      <div className="image-container">
        <img src={monitor} alt="monitor" />
      </div>
    </section>
  );
};

export default ContactForm;
