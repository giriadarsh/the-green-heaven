const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-description">
                We'd love to hear from you! Please fill out the form below or reach us at <a href="mailto:support@example.com" className="contact-email">support@example.com</a>.
            </p>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" className="contact-input" required />
                <input type="email" placeholder="Your Email" className="contact-input" required />
                <textarea placeholder="Your Message" className="contact-textarea" required></textarea>
                <button type="submit" className="contact-button">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
