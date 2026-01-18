/**
 * Simple Lightbox Gallery
 * Lekka alternatywa dla Fancybox - bez zewnętrznych zależności
 */

class SimpleLightbox {
    constructor(selector = '[data-lightbox]', options = {}) {
        this.selector = selector;
        this.images = [];
        this.currentIndex = 0;
        
        // Opcje domyślne
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
        // Tworzenie struktury lightbox
        this.createLightbox();
        
        // Zbieranie wszystkich obrazków
        this.collectImages();
        
        // Dodawanie event listenerów
        this.attachEvents();
    }
    
    createLightbox() {
        // Główny overlay
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
        
        // Referencje do elementów
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
            
            // Event listener na kliknięcie
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
        // Zamykanie
        this.closeBtn.addEventListener('click', () => this.close());
        
        if (this.options.closeOnBackdrop) {
            this.overlay.addEventListener('click', (e) => {
                if (e.target === this.overlay) {
                    this.close();
                }
            });
        }
        
        // Nawigacja
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
        
        // Klawiatura
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
        
        // Touch swipe (opcjonalnie)
        this.addSwipeSupport();
    }
    
    addSwipeSupport() {
        let touchStartX = 0;
        let touchEndX = 0;
        
        this.container.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        this.container.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        });
    }
    
    handleSwipe(startX, endX) {
        const diff = startX - endX;
        const threshold = 50;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                this.next(); // Swipe left
            } else {
                this.prev(); // Swipe right
            }
        }
    }
    
    open(index) {
        this.currentIndex = index;
        this.overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        this.loadImage(this.images[index]);
        this.updateNavigation();
    }
    
    close() {
        this.overlay.classList.remove('active');
        document.body.style.overflow = '';
        
        // Reset obrazka i iframe po animacji
        setTimeout(() => {
            this.image.src = '';
            this.image.style.display = 'none';
            this.iframe.src = '';
            this.iframe.style.display = 'none';
            this.caption.textContent = '';
        }, this.options.animationDuration);
    }
    
    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.loadImage(this.images[this.currentIndex]);
            this.updateNavigation();
        }
    }
    
    next() {
        if (this.currentIndex < this.images.length - 1) {
            this.currentIndex++;
            this.loadImage(this.images[this.currentIndex]);
            this.updateNavigation();
        }
    }
    
    loadImage(imageData) {
        // Pokazanie loadera
        this.loader.classList.add('active');
        this.image.style.opacity = '0';
        this.iframe.style.opacity = '0';
        
        if (imageData.type === 'pdf') {
            // Ładowanie PDF w iframe
            this.image.style.display = 'none';
            this.iframe.style.display = 'block';
            this.iframe.src = imageData.src;
            
            // Symulacja załadowania (iframe nie ma onload dla PDF)
            setTimeout(() => {
                this.loader.classList.remove('active');
                this.iframe.style.opacity = '1';
                this.updateCaptionAndCounter(imageData);
            }, 500);
        } else {
            // Ładowanie obrazka
            this.iframe.style.display = 'none';
            this.image.style.display = 'block';
            
            const img = new Image();
            
            img.onload = () => {
                this.image.src = imageData.src;
                this.image.alt = imageData.caption;
                
                // Ukrycie loadera
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
        // Aktualizacja caption i counter
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
        // Ukrywanie przycisków na końcach galerii
        this.prevBtn.style.display = this.currentIndex === 0 ? 'none' : 'block';
        this.nextBtn.style.display = this.currentIndex === this.images.length - 1 ? 'none' : 'block';
    }
    
    // Publiczne metody
    destroy() {
        this.overlay.remove();
        document.body.style.overflow = '';
    }
}

// Auto-inicjalizacja
document.addEventListener('DOMContentLoaded', () => {
    // Automatycznie inicjalizuj dla elementów z data-lightbox
    if (document.querySelector('[data-lightbox]')) {
        window.lightbox = new SimpleLightbox('[data-lightbox]');
    }
});
