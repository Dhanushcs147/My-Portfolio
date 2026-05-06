# Personal Portfolio Website

A full-stack responsive personal portfolio website built with HTML, CSS, JavaScript, and Spring Boot with MySQL database.

## Features

- **Responsive Design**: Works on all devices using CSS Flexbox and Media Queries
- **Dark Mode Toggle**: Switch between light and dark themes with persistence
- **Smooth Animations**: Modern CSS animations and JavaScript-enhanced interactions
- **Interactive Elements**: Form validation, smooth scrolling navigation, hover effects
- **Project Showcase**: Display your projects with images, descriptions, and links
- **Blog Section**: Share your technical articles and thoughts
- **Social Links**: Connect to your social media profiles
- **Contact Form**: Functional contact form with validation
- **Theme Customization**: Built-in color scheme support

## Setup Instructions

1. **Clone or Download** the project files to your local machine.

2. **Add Images** (All placeholder images are already included):
   - `images/profile.jpg` - Your profile picture (300x300px recommended)
   - `images/about.jpg` - About section image (400x300px recommended)
   - `images/project1.jpg`, `images/project2.jpg`, `images/project3.jpg` - Project images (300x200px recommended)
   - `images/blog1.jpg`, `images/blog2.jpg`, `images/blog3.jpg` - Blog post images (300x200px recommended)

3. **Customize Content**:
   - Open `index.html` and replace placeholder text with your information
   - Update personal details, project descriptions, and social media links
   - Modify the blog posts with your own content

4. **Open in Browser**:
   - Open `index.html` in your web browser, or
   - Run a local server: `python -m http.server 8000` and visit `http://localhost:8000`

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Main stylesheet with dark mode
├── js/
│   └── script.js       # JavaScript for interactivity
├── images/             # Image assets (placeholders included)
│   ├── profile.jpg     # Profile picture
│   ├── about.jpg       # About section image
│   ├── project1.jpg    # Project 1 image
│   ├── project2.jpg    # Project 2 image
│   ├── project3.jpg    # Project 3 image
│   ├── blog1.jpg       # Blog post 1 image
│   ├── blog2.jpg       # Blog post 2 image
│   └── blog3.jpg       # Blog post 3 image
└── README.md           # This file
```

## Customization Guide

### Personal Information
Edit `index.html` to update:
- Name and title in the hero section
- Bio and skills in the about section
- Project details and links
- Blog post content
- Social media URLs in the contact section

### Styling
Modify `css/style.css` to:
- Change color scheme (update CSS custom properties)
- Adjust fonts and typography
- Modify layout and spacing
- Customize animations

### Functionality
Enhance `js/script.js` to:
- Add more interactive features
- Implement backend integration for contact form
- Add more animation effects
- Include analytics or tracking

## Technologies Used

- **HTML5**: Semantic markup and accessibility
- **CSS3**: Flexbox, Grid, CSS Variables, Animations, Media Queries
- **JavaScript (ES6+)**: DOM manipulation, Event handling, Local Storage, Form validation

## Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## Performance Features

- Optimized CSS with minimal repaints
- Efficient JavaScript with event delegation
- Lazy loading animations
- Responsive images
- Minimal external dependencies

## Deployment Options

### Static Hosting
- **GitHub Pages**: Push to GitHub and enable Pages
- **Netlify**: Drag & drop or connect repository
- **Vercel**: Connect GitHub repository for automatic deployments
- **Surge**: Simple command-line deployment

### Traditional Hosting
Upload all files to your web server via FTP or file manager.

## Future Enhancements

- [ ] Backend integration with Java & Spring Boot
- [ ] Admin panel for content management
- [ ] Blog post creation and editing
- [ ] Contact form email functionality
- [ ] Resume/CV download feature
- [ ] Portfolio project filtering
- [ ] Image gallery with lightbox
- [ ] SEO optimization
- [ ] Performance monitoring

## Contributing

Feel free to fork this project and add your own features. Pull requests are welcome!

## License

This project is open source and available under the [MIT License](LICENSE).