
import '../Assets/contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
const Contact = () => {
  return (
    <>
      <section className="contact">
        <h2>Contact</h2>
        <div className="contact-container">
          <div className="contactinfo"data-aos="zoom-in-up"data-aos-duration="1500">     
         <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <a href="mailto:mk975010@gmail.com">mk975010@gmail.com</a>
          </div>
            {/* <div className="contact-item">
              <i className="fas fa-phone-alt"></i>
              <a href=""></a>
            </div> */}
            <div className="contact-item">
              <i className="fab fa-linkedin"></i>
              <a href="https://www.linkedin.com/in/manikandan-m-19b49a21b/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
            </div>
            <div className="contact-item">
              <i className="fab fa-github"></i>
              <a href="https://github.com/Manikandan-M-dev" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
