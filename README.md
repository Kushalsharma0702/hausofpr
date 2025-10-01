# Haus of PR - Landing Page

A modern, responsive landing page for Haus of PR - AI-powered public relations and influencer marketing solutions.

## 🚀 Features

- **Modern Design**: Sleek black theme with premium aesthetics
- **Responsive**: Optimized for all devices and screen sizes
- **AI-Powered**: Showcasing advanced AI PR tools and media monitoring
- **Interactive**: Smooth animations and engaging user experience
- **Fast Loading**: Optimized performance with modern web technologies

## 🛠 Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling**: Tailwind CSS + Custom CSS
- **Fonts**: Inter, Satoshi, Plus Jakarta Sans
- **Icons**: Custom SVG icons
- **Video**: HTML5 video background
- **Deployment**: Vercel/Netlify ready

## 📁 Project Structure

```
hausofpr/
├── assets/
│   ├── logo.png
│   ├── haus-of-pr-logo.svg
│   └── favicon.ico
├── videos/
│   └── fluid-background.mp4
├── css/
│   └── style.css
├── js/
│   └── script.js
├── index.html
├── coming-soon.html
├── contact.html
├── package.json
├── vercel.json
└── README.md
```

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/hausofpr.git
   cd hausofpr
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Production Build

```bash
npm run build
```

## 🌐 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Deploy to GitHub Pages

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to Pages section
   - Select source: Deploy from a branch
   - Choose branch: main
   - Click Save

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Drag and drop** the `dist` folder to Netlify dashboard

Or connect your GitHub repository for automatic deployments.

## 📧 Contact Configuration

To enable the contact form, update the EmailJS configuration in `js/script.js`:

```javascript
emailjs.init("YOUR_PUBLIC_KEY");
```

Replace with your actual EmailJS service ID, template ID, and public key.

## 🎨 Customization

### Colors
Update CSS custom properties in `css/style.css`:

```css
:root {
    --color-white: #ffffff;
    --color-black-3: #0d0d0d;
    /* Add your custom colors */
}
```

### Fonts
Fonts are loaded from Google Fonts and Fontshare. Update the links in the HTML head section.

### Content
Update the content in `index.html`, `coming-soon.html`, and other HTML files as needed.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email taanya.hausofpr@gmail.com or create an issue in this repository.

---

**Haus of PR** - Elevating brands through strategic public relations and authentic influencer partnerships.
