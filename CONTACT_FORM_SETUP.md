# Contact Form Setup Guide 📧

Your "Send Me a Message" form is ready to be connected to a real email service. Here are the best options:

## Option 1: EmailJS (Recommended - Free & Easy) 🚀

### Step 1: Install EmailJS
```bash
npm install emailjs-com
```

### Step 2: Sign up for EmailJS
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Create a new service (Gmail recommended)
4. Create an email template

### Step 3: Update the Email Service
Replace the content in `src/services/emailService.js`:

```javascript
import emailjs from 'emailjs-com';

class EmailService {
  constructor() {
    // Your EmailJS configuration
    this.serviceId = 'YOUR_SERVICE_ID';
    this.templateId = 'YOUR_TEMPLATE_ID'; 
    this.publicKey = 'YOUR_PUBLIC_KEY';
  }

  async sendEmail(formData) {
    try {
      const result = await emailjs.send(
        this.serviceId,
        this.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'irushadilsha2@gmail.com'
        },
        this.publicKey
      );
      
      return { success: true, message: 'Email sent successfully!' };
    } catch (error) {
      console.error('Email sending failed:', error);
      throw new Error('Failed to send email');
    }
  }
}

export default new EmailService();
```

### Step 4: EmailJS Template Setup
Create a template in EmailJS with these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email  
- `{{subject}}` - Email subject
- `{{message}}` - Message content

---

## Option 2: Netlify Forms (If hosting on Netlify) 🌐

### Step 1: Add Netlify Form Attributes
Update your form in `Contact.js`:

```javascript
<form 
  onSubmit={handleSubmit} 
  name="contact"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
>
  <input type="hidden" name="form-name" value="contact" />
  {/* rest of your form fields */}
</form>
```

### Step 2: Update Form Handler
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  const formData = new FormData(e.target);
  
  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    });
    
    setSubmitStatus('success');
  } catch (error) {
    setSubmitStatus('error');
  }
  
  setIsSubmitting(false);
};
```

---

## Option 3: Formspree (Simple Alternative) 📮

### Step 1: Sign up at Formspree
1. Go to https://formspree.io/
2. Create a free account
3. Create a new form

### Step 2: Update Form Action
```javascript
<form 
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
  onSubmit={handleSubmit}
>
```

---

## Option 4: Backend API 🖥️

If you have your own backend:

### Step 1: Create API Endpoint
```javascript
// backend/routes/contact.js
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // Send email using nodemailer or similar
  await sendEmail({
    to: 'irushadilsha2@gmail.com',
    from: email,
    subject: subject,
    text: message,
    html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`
  });
  
  res.json({ success: true });
});
```

### Step 2: Update Frontend
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      setSubmitStatus('success');
    } else {
      setSubmitStatus('error');
    }
  } catch (error) {
    setSubmitStatus('error');
  }
  
  setIsSubmitting(false);
};
```

---

## 🚀 Quick Start with EmailJS (Easiest Option)

1. **Install EmailJS**: `npm install emailjs-com`
2. **Sign up**: https://www.emailjs.com/
3. **Get your keys** from the EmailJS dashboard
4. **Replace** the placeholders in the code above
5. **Test** your form!

## ✅ Current Status
- ✅ Form validation working
- ✅ UI animations working  
- ✅ Form data collection working
- ⏳ **Email sending needs setup** (choose option above)

## 💡 Pro Tips
- **EmailJS** is perfect for portfolios (free, client-side)
- **Netlify Forms** if you're hosting on Netlify
- **Backend API** for full control and security
- Always test with a real email before going live!

Choose the option that best fits your setup and I'll help you implement it! 🎯