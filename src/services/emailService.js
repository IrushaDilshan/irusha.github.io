import emailjs from '@emailjs/browser';

// Email service for handling contact form submissions
class EmailService {
  constructor() {
    // EmailJS Configuration - Replace with your actual values from https://www.emailjs.com/
    this.serviceId = 'service_portfolio'; // Replace with your EmailJS service ID
    this.templateId = 'template_portfolio'; // Replace with your EmailJS template ID
    this.publicKey = 'YOUR_PUBLIC_KEY_HERE'; // Replace with your EmailJS public key
    
    // Initialize EmailJS (you can also do this in your main App.js)
    this.initEmailJS();
  }

  // Initialize EmailJS
  initEmailJS() {
    try {
      emailjs.init(this.publicKey);
    } catch (error) {
      console.warn('EmailJS not configured. Form will work in demo mode.');
    }
  }

  // Send email using EmailJS
  async sendEmail(formData) {
    try {
      // Check if EmailJS is properly configured
      if (this.publicKey === 'YOUR_PUBLIC_KEY_HERE') {
        // Demo mode - simulate email sending
        console.log('📧 DEMO MODE: Email would be sent with data:', formData);
        await new Promise(resolve => setTimeout(resolve, 2000));
        return { success: true, message: 'Demo: Email sent successfully!' };
      }

      // Real EmailJS sending
      console.log('Sending real email with EmailJS...');
      const result = await emailjs.send(
        this.serviceId,
        this.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'irushadilsha2@gmail.com',
          reply_to: formData.email
        }
      );
      
      console.log('EmailJS Result:', result);
      return { success: true, message: 'Email sent successfully!' };
      
    } catch (error) {
      console.error('Email sending failed:', error);
      throw new Error('Failed to send email. Please try again or contact me directly.');
    }
  }

  // Alternative: Send to backend API
  async sendToBackend(formData) {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      return await response.json();
    } catch (error) {
      console.error('Backend submission failed:', error);
      throw error;
    }
  }

  // Validate email format
  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Validate form data
  validateForm(formData) {
    const errors = [];

    if (!formData.name.trim()) {
      errors.push('Name is required');
    }

    if (!formData.email.trim()) {
      errors.push('Email is required');
    } else if (!this.validateEmail(formData.email)) {
      errors.push('Please enter a valid email address');
    }

    if (!formData.subject.trim()) {
      errors.push('Subject is required');
    }

    if (!formData.message.trim()) {
      errors.push('Message is required');
    } else if (formData.message.trim().length < 10) {
      errors.push('Message should be at least 10 characters long');
    }

    return errors;
  }
}

export default new EmailService();

/* 
SETUP INSTRUCTIONS:

1. To use EmailJS (Recommended for client-side):
   - Install: npm install emailjs-com
   - Sign up at https://www.emailjs.com/
   - Create a service and template
   - Update the configuration above with your IDs

2. To use with a backend:
   - Create an API endpoint at /api/contact
   - Handle the form submission server-side
   - Send emails using nodemailer or similar

3. To use Netlify Forms (for Netlify hosting):
   - Add netlify attribute to your form
   - No additional setup required

4. Alternative services:
   - Formspree
   - GetForm
   - Basin
   - Firebase Functions
*/