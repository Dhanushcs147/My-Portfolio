// Dark Mode Toggle
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

// API Base URL
const API_BASE_URL = 'http://localhost:8080/api';

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeSwitch.checked = true;
}

// Toggle theme on switch change
themeSwitch.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards for animation
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Submit contact form to backend
async function submitContactForm(formData) {
    try {
        const response = await fetch(`${API_BASE_URL}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            return { success: true, message: 'Message sent successfully!' };
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        return { success: false, message: 'Failed to send message. Please try again.' };
    }
}

// Form Validation and Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Submit to backend
    const formData = { name, email, message };
    const result = await submitContactForm(formData);

    alert(result.message);
    if (result.success) {
        contactForm.reset();
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// API Integration Functions
// Load projects from backend
async function loadProjects() {
    try {
        const response = await fetch(`${API_BASE_URL}/projects`);
        if (response.ok) {
            const projects = await response.json();
            displayProjects(projects);
        } else {
            console.log('Backend not available, using static data');
        }
    } catch (error) {
        console.log('Backend not available, using static data');
    }
}

// Load blog posts from backend
async function loadBlogPosts() {
    try {
        const response = await fetch(`${API_BASE_URL}/blog`);
        if (response.ok) {
            const posts = await response.json();
            displayBlogPosts(posts);
        } else {
            console.log('Backend not available, using static data');
        }
    } catch (error) {
        console.log('Backend not available, using static data');
    }
}

// Display projects dynamically
function displayProjects(projects) {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid || projects.length === 0) return;

    // Clear existing static content and add dynamic content
    const existingCards = projectsGrid.querySelectorAll('.project-card');
    existingCards.forEach(card => card.remove());

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <img src="${project.imageUrl || 'images/project1.jpg'}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-links">
                    ${project.githubUrl ? `<a href="${project.githubUrl}" class="project-link" target="_blank"><i class="fab fa-github"></i> GitHub</a>` : ''}
                    ${project.liveDemoUrl ? `<a href="${project.liveDemoUrl}" class="project-link" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
                </div>
                ${project.technologies ? `<div class="project-tech" style="margin-top: 10px; font-size: 0.9rem; color: #666;">${project.technologies}</div>` : ''}
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Display blog posts dynamically
function displayBlogPosts(posts) {
    const blogContainer = document.querySelector('.blog-posts');
    if (!blogContainer || posts.length === 0) return;

    // Clear existing static content and add dynamic content
    const existingPosts = blogContainer.querySelectorAll('.blog-post');
    existingPosts.forEach(post => post.remove());

    posts.forEach(post => {
        const blogPost = document.createElement('div');
        blogPost.className = 'blog-post';
        blogPost.innerHTML = `
            <img src="${post.imageUrl || 'images/blog1.jpg'}" alt="${post.title}" class="blog-image">
            <div class="blog-content">
                <h3>${post.title}</h3>
                <p class="blog-meta">Posted on ${new Date(post.publishedAt).toLocaleDateString()} • ${post.readTime || 5} min read</p>
                <p>${post.excerpt || post.content.substring(0, 150) + '...'}</p>
                <a href="#" class="read-more">Read More</a>
            </div>
        `;
        blogContainer.appendChild(blogPost);
    });
}

// Submit contact form to backend
async function submitContactForm(formData) {
    try {
        const response = await fetch(`${API_BASE_URL}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            return { success: true, message: 'Message sent successfully!' };
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        return { success: false, message: 'Failed to send message. Please try again.' };
    }
}

// Add loading animation to CTA button
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', function() {
    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    setTimeout(() => {
        this.innerHTML = 'View My Work';
    }, 1000);
});

// Typing effect for hero subtitle (optional enhancement)
const subtitle = document.querySelector('.subtitle');
const originalText = subtitle.textContent;
let index = 0;

function typeWriter() {
    if (index < originalText.length) {
        subtitle.textContent = originalText.slice(0, index + 1);
        index++;
        setTimeout(typeWriter, 100);
    }
}

// Uncomment the line below to enable typing effect
// setTimeout(typeWriter, 1000);

// Add scroll-based navbar background change
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        if (body.classList.contains('dark-mode')) {
            header.style.backgroundColor = 'rgba(18, 18, 18, 0.98)';
        }
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        if (body.classList.contains('dark-mode')) {
            header.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
        }
    }
});

// Add hover effects to skill tags
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.2s ease';
    });

    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Theme customization (Bonus feature)
const themeColors = {
    primary: '#007bff',
    secondary: '#6c757d',
    accent: '#28a745'
};

function updateThemeColors() {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', themeColors.primary);
    root.style.setProperty('--secondary-color', themeColors.secondary);
    root.style.setProperty('--accent-color', themeColors.accent);
}

// Call this to apply custom colors
updateThemeColors();

// Particle effect for hero section (optional enhancement)
function createParticles() {
    const hero = document.querySelector('.hero');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        hero.appendChild(particle);
    }
}

// Uncomment to add particle effect
// createParticles();

// Add CSS for particles
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    .particle {
        position: absolute;
        width: 4px;
        height: 4px;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        pointer-events: none;
        animation: float linear infinite;
    }

    @keyframes float {
        0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(particleStyle);

// Enhanced form validation with real-time feedback
const formInputs = document.querySelectorAll('#contactForm input, #contactForm textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        validateField(this);
    });

    input.addEventListener('input', function() {
        if (this.classList.contains('invalid')) {
            validateField(this);
        }
    });
});

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    switch (field.name) {
        case 'name':
            if (!value) {
                isValid = false;
                errorMessage = 'Name is required';
            } else if (value.length < 2) {
                isValid = false;
                errorMessage = 'Name must be at least 2 characters';
            }
            break;
        case 'email':
            if (!value) {
                isValid = false;
                errorMessage = 'Email is required';
            } else if (!isValidEmail(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
            break;
        case 'message':
            if (!value) {
                isValid = false;
                errorMessage = 'Message is required';
            } else if (value.length < 10) {
                isValid = false;
                errorMessage = 'Message must be at least 10 characters';
            }
            break;
    }

    const errorElement = field.parentNode.querySelector('.error-message') || createErrorElement(field);

    if (!isValid) {
        field.classList.add('invalid');
        field.classList.remove('valid');
        errorElement.textContent = errorMessage;
        errorElement.style.display = 'block';
    } else {
        field.classList.remove('invalid');
        field.classList.add('valid');
        errorElement.style.display = 'none';
    }
}

function createErrorElement(field) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.style.color = 'red';
    errorElement.style.fontSize = '0.9rem';
    errorElement.style.marginTop = '0.25rem';
    errorElement.style.display = 'none';
    field.parentNode.appendChild(errorElement);
    return errorElement;
}

// Add CSS for form validation
const validationStyle = document.createElement('style');
validationStyle.textContent = `
    .form-group input.valid,
    .form-group textarea.valid {
        border-color: #28a745;
    }

    .form-group input.invalid,
    .form-group textarea.invalid {
        border-color: #dc3545;
    }
`;
document.head.appendChild(validationStyle);

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', function() {
    // loadProjects(); ❌ DISABLED
    // loadBlogPosts(); ❌ DISABLED

    // Add fade-in animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        section.style.transitionDelay = `${index * 0.1}s`;

        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 100);
    });

    // Add stagger animation to blog posts
    document.querySelectorAll('.blog-post').forEach((post, index) => {
        post.style.opacity = '0';
        post.style.transform = 'translateY(30px)';
        post.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        post.style.transitionDelay = `${index * 0.2}s`;

        setTimeout(() => {
            post.style.opacity = '1';
            post.style.transform = 'translateY(0)';
        }, 500 + index * 200);
    });
});