'use client';

import { useState } from 'react';
import styles from './Contact.module.scss';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus({
        submitting: false,
        submitted: true,
        error: null
      });
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: error.message
      });
    }
  };

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <h2 className="section-title">Get In <span>Touch</span></h2>
        <p className="section-subtitle">Let's Work Together</p>
        
        <div className={styles.contact__content}>
          <div className={styles.contact__info}>
            <h3>Let's talk about everything!</h3>
            <p>
              Don't like forms? Send me an email. 👋
              I'll get back to you as soon as possible.
            </p>
            
            <div className={styles['contact__info-item']}>
              <i className="fas fa-envelope"></i>
              <a href="mailto:raghman.gem@gmail.com">raghman.gem@gmail.com</a>
            </div>
            <div className={styles['contact__info-item']}>
              <i className="fas fa-phone"></i>
              <a href="tel:+919840538976">+91 984 053 8976</a>
            </div>
            <div className={styles['contact__info-item']}>
              <i className="fas fa-map-marker-alt"></i>
              <span>Chennai, India</span>
            </div>
          </div>
          
          <form className={styles.contact__form} onSubmit={handleSubmit}>
            {status.error && (
              <div className={styles.form__error}>
                {status.error}
              </div>
            )}
            {status.submitted && (
              <div className={styles.form__success}>
                Thank you for your message! I'll get back to you soon.
              </div>
            )}
            <div className={styles.form_group}>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder=" "
                disabled={status.submitting}
              />
              <label htmlFor="name">Your Name</label>
              <span className={styles.focus_border}></span>
            </div>
            <div className={styles.form_group}>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label htmlFor="email">Email Address</label>
              <span className={styles.focus_border}></span>
            </div>
            <div className={styles.form_group}>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder=" "
                rows="5"
              />
              <label htmlFor="message">Message</label>
              <span className={styles.focus_border}></span>
            </div>
            <button type="submit" className={styles.submit_btn}>
              <span>Send Message</span>
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}