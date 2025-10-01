document.addEventListener('DOMContentLoaded', function () {
    // Modern Horizontal Progress Loader
    const loader = document.getElementById('loader');
    const body = document.body;
    const progressFill = document.querySelector('.loader-progress-fill');
    const progressPercentage = document.querySelector('.loader-percentage');
    
    // Prevent scrolling during loader
    body.style.overflow = 'hidden';
    
    // Animate progress bar with percentage
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 15 + 5; // Random increment between 5-20
        
        if (progress >= 100) {
            progress = 100;
            clearInterval(progressInterval);
            
            // Hide loader after reaching 100%
            setTimeout(() => {
                loader.classList.add('fade-out');
                body.style.overflow = 'auto';
                
                // Remove loader from DOM after fade out
                setTimeout(() => {
                    if (loader.parentNode) {
                        loader.parentNode.removeChild(loader);
                    }
                }, 800);
            }, 300);
        }
        
        // Update percentage display
        progressPercentage.textContent = Math.floor(progress) + '%';
    }, 150); // Update every 150ms for smooth animation
    
    // Mobile Menu Toggle
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // FAQ Accordion
    const accordionContainer = document.getElementById('accordion-container');
    if (accordionContainer) {
        const allItems = accordionContainer.querySelectorAll('.accordion-item');

        allItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            const content = item.querySelector('.accordion-content');
            const icon = header.querySelector('span:last-child');

            header.addEventListener('click', () => {
                const isOpened = content.style.maxHeight;

                // Close all other items if you want only one open at a time
                allItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.querySelector('.accordion-content').style.maxHeight = null;
                        otherItem.querySelector('.accordion-header span:last-child').style.transform = 'rotate(0deg)';
                    }
                });

                // Toggle the clicked item
                if (isOpened) {
                    content.style.maxHeight = null;
                    icon.style.transform = 'rotate(0deg)';
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                    icon.style.transform = 'rotate(45deg)';
                }
            });
        });
    }

    // Slide-in Animations with Intersection Observer
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -30px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all slide-in elements
    const slideElements = document.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-up');
    slideElements.forEach(el => observer.observe(el));

    // Add staggered animation delays for elements in the same container
    const containers = document.querySelectorAll('.grid, .space-y-6');
    containers.forEach(container => {
        const slideInElements = container.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-up');
        slideInElements.forEach((el, index) => {
            el.style.transitionDelay = `${0.15 * index}s`;
        });
    });

    // Hero section elements get immediate animation
    setTimeout(() => {
        document.querySelectorAll('main .slide-in-up').forEach((el, index) => {
            el.style.transitionDelay = `${0.2 * index}s`;
            el.classList.add('animate');
        });
    }, 300);

    // Featured Tools Expandable Cards
    const toolCards = document.querySelectorAll('.tool-card');
    toolCards.forEach(card => {
        const learnMoreBtn = card.querySelector('.learn-more-btn');
        const expandableContent = card.querySelector('.expandable-content');
        const arrow = learnMoreBtn.querySelector('svg');
        
        learnMoreBtn.addEventListener('click', () => {
            const isExpanded = expandableContent.style.maxHeight && expandableContent.style.maxHeight !== '0px';
            
            if (isExpanded) {
                expandableContent.style.maxHeight = '0';
                arrow.style.transform = 'rotate(0deg)';
                learnMoreBtn.querySelector('span').textContent = 'Learn More';
            } else {
                expandableContent.style.maxHeight = expandableContent.scrollHeight + 'px';
                arrow.style.transform = 'rotate(180deg)';
                learnMoreBtn.querySelector('span').textContent = 'Show Less';
            }
        });
    });

    // Animated Counter for Impact Stats
    function animateCounters() {
        const counters = document.querySelectorAll('.counter-number');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const suffix = counter.getAttribute('data-suffix') || '';
            let current = 0;
            
            // Determine increment based on target size
            let increment = target / 100;
            if (target > 100000) increment = target / 50;
            else if (target > 10000) increment = target / 80;
            else increment = target / 100;
            
            const timer = setInterval(() => {
                current += increment;
                
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                
                // Format the number based on suffix
                let displayValue;
                if (suffix === 'K+') {
                    displayValue = (current / 1000).toFixed(0) + 'K+';
                } else if (suffix === '%') {
                    displayValue = current.toFixed(0) + '%';
                } else {
                    displayValue = current.toFixed(0) + suffix;
                }
                
                counter.textContent = displayValue;
            }, 50);
        });
    }

    // Trigger counter animation when impact section comes into view
    const impactSection = document.getElementById('impact-stats');
    if (impactSection) {
        const impactObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    impactObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        impactObserver.observe(impactSection);
    }

    // Contact Form Handler with EmailJS Integration
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            if (!data.firstName || !data.lastName || !data.email || !data.message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = 'Sending Message... ⏳';
            submitBtn.disabled = true;
            
            // EmailJS template parameters
            const templateParams = {
                from_name: `${data.firstName} ${data.lastName}`,
                from_email: data.email,
                company: data.company || 'Not specified',
                service_interest: data.service || 'Not specified',
                budget: data.budget || 'Not specified',
                message: data.message,
                to_email: 'taanya.hausofpr@gmail.com'
            };
            
            // Send email using EmailJS
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    submitBtn.innerHTML = 'Message Sent! ✅';
                    showNotification(`Thank you, ${data.firstName}! Your message has been sent successfully. We'll get back to you within 24 hours.`, 'success');
                    
                    // Reset form
                    setTimeout(() => {
                        contactForm.reset();
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                    }, 3000);
                })
                .catch(function(error) {
                    console.log('FAILED...', error);
                    submitBtn.innerHTML = 'Failed to Send ❌';
                    showNotification('Sorry, there was an error sending your message. Please try again or contact us directly.', 'error');
                    
                    setTimeout(() => {
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                    }, 3000);
                });
        });
    }

    // Professional Notification System
    function showNotification(message, type = 'success') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notif => notif.remove());
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <div class="notification-icon">
                    ${type === 'success' ? '✅' : '⚠️'}
                </div>
                <div class="notification-message">${message}</div>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 2rem;
            right: 2rem;
            background: ${type === 'success' ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #ef4444, #dc2626)'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            max-width: 400px;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            font-family: Inter, sans-serif;
        `;
        
        notification.querySelector('.notification-content').style.cssText = `
            display: flex;
            align-items: flex-start;
            gap: 1rem;
        `;
        
        notification.querySelector('.notification-message').style.cssText = `
            flex: 1;
            font-size: 14px;
            line-height: 1.4;
        `;
        
        notification.querySelector('.notification-close').style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 20px;
            cursor: pointer;
            padding: 0;
            margin-left: 1rem;
            opacity: 0.8;
            transition: opacity 0.2s;
        `;
        
        // Add to DOM
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Close functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        });
        
        closeBtn.addEventListener('mouseenter', () => {
            closeBtn.style.opacity = '1';
        });
        
        closeBtn.addEventListener('mouseleave', () => {
            closeBtn.style.opacity = '0.8';
        });
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.transform = 'translateX(400px)';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    // Initialize testimonial loop - idempotent & responsive
    (function initTestimonialLoop() {
        if (window.__testimonialLoopInit) return;
        const marqueeInner = document.querySelector('.testimonial-loop .marquee-inner');
        if (!marqueeInner) return;

        const originals = Array.from(marqueeInner.querySelectorAll('.testimonial-card'));
        if (!originals.length) return;

        // Guard: if markup already multiplied (SSR / previous run)
        if (marqueeInner.querySelector('[data-clone-set="1"]')) { window.__testimonialLoopInit = true; return; }

        const isMobile = window.innerWidth <= 640;
        const sets = isMobile ? 5 : 3; // enough to cover translateX(-50%) distance

        for (let s = 1; s <= sets; s++) {
            originals.forEach((card, idx) => {
                const clone = card.cloneNode(true);
                clone.setAttribute('data-clone-set', String(s));
                clone.setAttribute('data-clone-index', String(idx));
                marqueeInner.appendChild(clone);
            });
        }

        // Restart animation to include new width
        const speed = isMobile ? '18s' : '30s';
        marqueeInner.style.animation = 'none';
        void marqueeInner.offsetWidth; // reflow
        marqueeInner.style.animation = `testimonial-scroll ${speed} linear infinite`;

        window.__testimonialLoopInit = true;
    })();
});

