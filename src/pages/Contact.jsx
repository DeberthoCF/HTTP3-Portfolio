import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({
    nom: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function validate() {
    const newErrors = {};

    if (!form.nom.trim()) {
      newErrors.nom = 'Veuillez entrer votre nom.';
    }

    if (!form.email.trim()) {
      newErrors.email = 'Veuillez entrer votre adresse e-mail.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      newErrors.email = 'Adresse e-mail invalide.';
    }

    if (!form.message.trim()) {
      newErrors.message = 'Veuillez écrire un message.';
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validation = validate();

    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setErrors({});

    alert('Merci ! Votre message est prêt à être envoyé au serveur.');

    setForm({
      nom: '',
      email: '',
      message: '',
    });
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-header">
        <p className="section-subtitle">CONTACT</p>

        <h2>Discutons de votre projet</h2>

        <p>
          Une question ? Une collaboration ? Un simple bonjour ? Nous vous répondrons avec plaisir.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Nom complet</label>

          <input
            id="name"
            type="text"
            name="nom"
            placeholder="Votre nom"
            value={form.nom}
            onChange={handleChange}
          />

          {errors.nom && <small className="error">{errors.nom}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Adresse e-mail</label>

          <input
            id="email"
            type="email"
            name="email"
            placeholder="nom@email.com"
            value={form.email}
            onChange={handleChange}
          />

          {errors.email && <small className="error">{errors.email}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>

          <textarea
            id="message"
            rows="7"
            name="message"
            placeholder="Votre message..."
            value={form.message}
            onChange={handleChange}
          ></textarea>

          {errors.message && <small className="error">{errors.message}</small>}
        </div>

        <button type="submit" className="send-btn">
          Envoyer le message
        </button>
      </form>
    </section>
  );
}

export default Contact;
