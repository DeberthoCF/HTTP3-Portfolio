import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-header">
        <p className="section-subtitle">CONTACT</p>

        <h2>Discutons de votre projet</h2>

        <p>
          Une question ? Une collaboration ? Un simple bonjour ? Nous vous répondrons avec plaisir.
        </p>
      </div>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nom complet</label>

          <input id="name" type="text" placeholder="Votre nom" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Adresse e-mail</label>

          <input id="email" type="email" placeholder="nom@email.com" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>

          <textarea id="message" rows="7" placeholder="Votre message..." required></textarea>
        </div>

        <button className="send-btn">Envoyer le message</button>
      </form>
    </section>
  );
}

export default Contact;
