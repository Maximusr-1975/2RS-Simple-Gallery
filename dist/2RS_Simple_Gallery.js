/**
 * 2RS Simple Gallery
 * Lightweight Fancybox alternative - no external dependencies
 * Supports images and PDF documents
 * 
 * @author 2R Systems Ltd
 * @version 1.0
 * @license MIT
 */

class SimpleLightbox {
    constructor(selector = '[data-lightbox]', options = {}) {
        this.selector = selector;
        this.images = [];
        this.currentIndex = 0;
        
        // Default options
        this.options = {
            closeOnBackdrop: true,
            showCaption: true,
            showCounter: true,
            keyboardNav: true,
            animation: 'fade', // 'fade', 'zoom', 'slide'
            animationDuration: 300,
            ...options
        };
        
        this.init();
    }
    
    init() {
        // Create lightbox structure
        this.createLightbox();
        
        // Collect all images and PDFs
        this.collectImages();
        
        // Attach event listeners
        this.attachEvents();
    }
    
    createLightbox() {
        // Main overlay
        this.overlay = document.createElement('div');
        this.overlay.className = 'simple-lightbox-overlay';
        this.overlay.innerHTML = `
            <div class="simple-lightbox-container">
                <button class="simple-lightbox-close" aria-label="Close">&times;</button>
                <button class="simple-lightbox-prev" aria-label="Previous">&lsaquo;</button>
                <button class="simple-lightbox-next" aria-label="Next">&rsaquo;</button>
                
                <div class="simple-lightbox-content">
                    <img src="" alt="" class="simple-lightbox-image">
                    <iframe src="" class="simple-lightbox-iframe"></iframe>
                    <div class="simple-lightbox-caption"></div>
                    <div class="simple-lightbox-counter"></div>
                </div>
                
                <div class="simple-lightbox-loader"></div>
            </div>
        `;
        
        document.body.appendChild(this.overlay);
        
        // Element references
        this.container = this.overlay.querySelector('.simple-lightbox-container');
        this.image = this.overlay.querySelector('.simple-lightbox-image');
        this.iframe = this.overlay.querySelector('.simple-lightbox-iframe');
        this.caption = this.overlay.querySelector('.simple-lightbox-caption');
        this.counter = this.overlay.querySelector('.simple-lightbox-counter');
        this.loader = this.overlay.querySelector('.simple-lightbox-loader');
        this.closeBtn = this.overlay.querySelector('.simple-lightbox-close');
        this.prevBtn = this.overlay.querySelector('.simple-lightbox-prev');
        this.nextBtn = this.overlay.querySelector('.simple-lightbox-next');
    }
    
    collectImages() {
        const elements = document.querySelectorAll(this.selector);
        
        elements.forEach((el, index) => {
            const src = el.getAttribute('href') || el.getAttribute('data-src') || el.src;
            const type = el.getAttribute('data-type') || this.detectType(src);
            
            const img = {
                src: src,
                caption: el.getAttribute('data-caption') || el.getAttribute('alt') || '',
                type: type, // 'image' or 'pdf'
                element: el
            };
            
            this.images.push(img);
            
            // Click event listener
            el.addEventListener('click', (e) => {
                e.preventDefault();
                this.open(index);
            });
        });
    }
    
    detectType(src) {
        if (src.toLowerCase().endsWith('.pdf')) {
            return 'pdf';
        }
        return 'image';
    }
    
    attachEvents() {
        // Close button
        this.closeBtn.addEventListener('click', () => this.close());
        
        // Navigation buttons
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
        
        // Click outside to close
        if (this.options.closeOnBackdrop) {
            this.overlay.addEventListener('click', (e) => {
                if (e.target === this.overlay) {
                    this.close();
                }
            });
        }
        
        // Keyboard navigation
        if (this.options.keyboardNav) {
            document.addEventListener('keydown', (e) => {
                if (!this.overlay.classList.contains('active')) return;
                
                switch(e.key) {
                    case 'Escape':
                        this.close();
                        break;
                    case 'ArrowLeft':
                        this.prev();
                        break;
                    case 'ArrowRight':
                        this.next();
                        break;
                }
            });
        }
        
        // Touch swipe support
        let touchStartX = 0;
        let touchEndX = 0;
        
        this.container.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        this.container.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });
        
        const handleSwipe = () => {
            if (touchEndX < touchStartX - 50) this.next();
            if (touchEndX > touchStartX + 50) this.prev();
        };
        
        this.handleSwipe = handleSwipe;
    }
    
    open(index = 0) {
        this.currentIndex = index;
        this.overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Set animation class
        this.container.setAttribute('data-animation', this.options.animation);
        
        this.loadImage(this.images[this.currentIndex]);
        this.updateNavigation();
    }
    
    close() {
        this.overlay.classList.remove('active');
        document.body.style.overflow = '';
        
        // Reset image and iframe after animation
        setTimeout(() => {
            this.image.src = '';
            this.image.style.display = 'none';
            this.iframe.src = '';
            this.iframe.style.display = 'none';
            this.caption.textContent = '';
        }, this.options.animationDuration);
    }
    
    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.loadImage(this.images[this.currentIndex]);
        this.updateNavigation();
    }
    
    next() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.loadImage(this.images[this.currentIndex]);
        this.updateNavigation();
    }
    
    loadImage(imageData) {
        // Show loader
        this.loader.classList.add('active');
        this.image.style.opacity = '0';
        this.iframe.style.opacity = '0';
        
        if (imageData.type === 'pdf') {
            // Load PDF in iframe
            this.image.style.display = 'none';
            this.iframe.style.display = 'block';
            this.iframe.src = imageData.src;
            
            // Simulate loading (iframe doesn't have onload for PDF)
            setTimeout(() => {
                this.loader.classList.remove('active');
                this.iframe.style.opacity = '1';
                this.updateCaptionAndCounter(imageData);
            }, 500);
        } else {
            // Load image
            this.iframe.style.display = 'none';
            this.image.style.display = 'block';
            
            const img = new Image();
            
            img.onload = () => {
                this.image.src = imageData.src;
                this.image.alt = imageData.caption;
                
                // Hide loader
                setTimeout(() => {
                    this.loader.classList.remove('active');
                    this.image.style.opacity = '1';
                }, 100);
                
                this.updateCaptionAndCounter(imageData);
            };
            
            img.onerror = () => {
                this.loader.classList.remove('active');
                this.image.alt = 'Error loading image';
            };
            
            img.src = imageData.src;
        }
    }
    
    updateCaptionAndCounter(imageData) {
        // Update caption and counter
        if (this.options.showCaption && imageData.caption) {
            this.caption.textContent = imageData.caption;
            this.caption.style.display = 'block';
        } else {
            this.caption.style.display = 'none';
        }
        
        if (this.options.showCounter) {
            this.counter.textContent = `${this.currentIndex + 1} / ${this.images.length}`;
            this.counter.style.display = 'block';
        }
    }
    
    updateNavigation() {
        // Show/hide navigation buttons
        this.prevBtn.style.display = this.images.length > 1 ? 'flex' : 'none';
        this.nextBtn.style.display = this.images.length > 1 ? 'flex' : 'none';
    }
    
    destroy() {
        // Remove lightbox from DOM
        if (this.overlay) {
            this.overlay.remove();
        }
        
        // Remove event listeners from images
        this.images.forEach(img => {
            if (img.element) {
                img.element.replaceWith(img.element.cloneNode(true));
            }
        });
    }
}

// Auto-initialization
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('[data-lightbox]')) {
        new SimpleLightbox('[data-lightbox]');
    }
});
