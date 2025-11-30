# 🌐 Animated Portfolio Website

## 🛠️ Tech Stack

- ⚛️ React.js
- 🎨 Tailwind CSS
- 💾 Vercel(for deployment)

## 📁 Features

- Responsive design for all screen sizes 📱💻
- Smooth scroll and animation effects ✨
- Clean and modular React components 🧩
- Easy to customize with Tailwind utility classes 🎯
- Professional sections: About, Skills, Projects, Contact, etc. 👨‍💻

## 🧑‍💻 How to Use

### 1. Clone the Repo

```bash
git clone [https://github.com/codingmastr/abhishekbgp8]
cd your-repo-name
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set up EmailJS (for Contact Form)

The contact form uses EmailJS to send messages. Follow these steps:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service (Gmail, Outlook, etc.)
3. Create an email template
4. Copy your Service ID, Template ID, and Public Key
5. Create a `.env` file in the root directory and add:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

6. IMPORTANT: Add your local development origin (e.g., `http://localhost:5173`) to the "Allowed Origins" in your EmailJS account settings. If this is not set, EmailJS will reject requests from your local dev server and messages won't be sent.

7. Ensure that your EmailJS template uses the same variable names that the form provides. We send fields named `user_name`, `user_email`, `subject`, `message` as well as `from_name`, `from_email`, and `reply_to`. If your template uses different variable names (e.g., `from_name` rather than `user_name`), update your template or modify the template parameters in `src/components/Contact/Contact.jsx`.

### 4. Run the App

```bash
npm run dev
```

### 5. Build for Production

```bash
npm run build
```
