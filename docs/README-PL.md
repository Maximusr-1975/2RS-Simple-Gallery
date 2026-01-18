# 🖼️ Simple Lightbox Gallery

Prosta, lekka galeria obrazków i PDF w czystym JavaScript - alternatywa dla Fancybox.

## ✨ Funkcje

- ✅ **Bez zależności** - czysty JavaScript, bez jQuery
- ✅ **Lekka** - tylko ~10KB (CSS + JS)
- ✅ **Responsywna** - działa na wszystkich urządzeniach
- ✅ **Obrazki + PDF** - wyświetlanie obrazków i dokumentów PDF
- ✅ **Nawigacja klawiaturą** - strzałki ← →, ESC
- ✅ **Gestyswipe** - na urządzeniach mobilnych
- ✅ **Podpisy obrazków** - data-caption
- ✅ **Licznik** - pokazuje numer obrazka (1/10)
- ✅ **Loader** - animacja podczas ładowania
- ✅ **Płynne animacje** - fade, zoom, slide
- ✅ **Łatwa integracja** - kompatybilna z Bootstrap

## 📦 Instalacja

### 1. Pobierz pliki

```
simple-lightbox.js
simple-lightbox.css
```

### 2. Dodaj do projektu

```html
<!-- W <head> -->
<link rel="stylesheet" href="assets/css/simple-lightbox.css">

<!-- Przed </body> -->
<script src="assets/js/simple-lightbox.js"></script>
```

### 3. Dodaj atrybuty do linków

```html
<a href="duzy-obrazek.jpg" 
   data-lightbox="gallery1" 
   data-caption="Opis obrazka">
    <img src="miniaturka.jpg" alt="Opis">
</a>
```

## 🎯 Użycie

### Podstawowe użycie

```html
<!-- Automatyczna inicjalizacja -->
<a href="image-full.jpg" data-lightbox="gallery" data-caption="Piękny widok">
    <img src="image-thumb.jpg" alt="Widok">
</a>
```

### Z własnymi opcjami

```javascript
const lightbox = new SimpleLightbox('[data-lightbox]', {
    closeOnBackdrop: true,    // Zamknij klikając poza obrazkiem
    showCaption: true,        // Pokazuj podpisy
    showCounter: true,        // Pokazuj licznik (1/10)
    keyboardNav: true,        // Nawigacja klawiaturą
    animation: 'fade'         // fade / zoom / slide
});
```

### Wyświetlanie dokumentów PDF

```html
<!-- Przycisk PDF -->
<a href="brochure.pdf" 
   data-lightbox="gallery" 
   data-type="pdf"
   data-caption="Product Brochure 2024">
    <i class="fas fa-file-pdf"></i> View Brochure
</a>

<!-- Karta PDF -->
<div class="pdf-card">
    <a href="document.pdf" 
       data-lightbox="docs" 
       data-type="pdf"
       data-caption="Technical Specifications">
        📄 Technical Documentation
    </a>
</div>
```

### Różne galerie na jednej stronie

```html
<!-- Galeria produktów -->
<a href="product1.jpg" data-lightbox="products">...</a>
<a href="product2.jpg" data-lightbox="products">...</a>

<!-- Galeria portfolio -->
<a href="portfolio1.jpg" data-lightbox="portfolio">...</a>
<a href="portfolio2.jpg" data-lightbox="portfolio">...</a>
```

## 🔧 Integracja z Bootstrap Studio

### Metoda 1: Import plików

1. **Design → Custom Code → CSS Files**
   - Importuj: `simple-lightbox.css`

2. **Design → Custom Code → JavaScript Files**
   - Importuj: `simple-lightbox.js`

### Metoda 2: Zastąp Fancybox

1. **Znajdź w HTML:**
```html
<a data-fancybox="gallery" href="image.jpg">
```

2. **Zamień na:**
```html
<a data-lightbox="gallery" href="image.jpg" data-caption="Opis">
```

3. **Usuń Fancybox:**
```html
<!-- USUŃ TE LINIE -->
<link rel="stylesheet" href=".../fancybox.css">
<script src=".../fancybox.umd.js"></script>
```

## 🎨 Dostosowanie kolorów (2R Systems)

```css
/* Kolory marki 2R Systems - #0066cc */
.simple-lightbox-close,
.simple-lightbox-prev,
.simple-lightbox-next {
    background: rgba(0, 102, 204, 0.2);
    border-color: rgba(0, 102, 204, 0.5);
}

.simple-lightbox-close:hover,
.simple-lightbox-prev:hover,
.simple-lightbox-next:hover {
    background: rgba(0, 102, 204, 0.4);
    border-color: #0066cc;
}

.simple-lightbox-caption,
.simple-lightbox-counter {
    background: rgba(0, 102, 204, 0.8);
}
```

## 📋 API

### Metody

```javascript
const lightbox = new SimpleLightbox('[data-lightbox]');

// Otwórz konkretny obrazek
lightbox.open(2); // Otwórz 3. obrazek (index od 0)

// Zamknij
lightbox.close();

// Poprzedni
lightbox.prev();

// Następny
lightbox.next();

// Zniszcz instancję
lightbox.destroy();
```

### Opcje

| Opcja | Typ | Domyślnie | Opis |
|-------|-----|-----------|------|
| `closeOnBackdrop` | boolean | `true` | Zamknij klikając poza obrazkiem |
| `showCaption` | boolean | `true` | Pokazuj podpisy |
| `showCounter` | boolean | `true` | Pokazuj licznik (1/10) |
| `keyboardNav` | boolean | `true` | Nawigacja klawiaturą |
| `animation` | string | `'fade'` | Typ animacji: fade, zoom, slide |
| `animationDuration` | number | `300` | Czas animacji w ms |

## 🎮 Klawisze

- **ESC** - Zamknij lightbox
- **← (Left Arrow)** - Poprzedni obrazek
- **→ (Right Arrow)** - Następny obrazek

## 📱 Obsługa mobilna

- **Swipe left** - Następny obrazek
- **Swipe right** - Poprzedni obrazek
- **Tap outside** - Zamknij lightbox

## 🔄 Migracja z Fancybox

### Automatyczna konwersja (Node.js)

```bash
node convert-fancybox-to-lightbox.js
```

### Ręczna konwersja

**Przed:**
```html
<a data-fancybox="gallery" href="image.jpg">
    <img src="thumb.jpg">
</a>

<link rel="stylesheet" href=".../fancybox.css">
<script src=".../fancybox.umd.js"></script>

<script>
Fancybox.show([{
    src: 'image.jpg',
    type: 'image'
}]);
</script>
```

**Po:**
```html
<a data-lightbox="gallery" href="image.jpg" data-caption="Opis">
    <img src="thumb.jpg">
</a>

<link rel="stylesheet" href="simple-lightbox.css">
<script src="simple-lightbox.js"></script>

<!-- Automatyczna inicjalizacja - nie trzeba dodatkowego kodu -->
```

## 🌟 Przykłady

### Galeria produktów

```html
<div class="product-gallery">
    <a href="img/product1-large.jpg" data-lightbox="products" data-caption="SlimLine 68">
        <img src="img/product1-thumb.jpg" alt="SlimLine 68">
    </a>
    <a href="img/product2-large.jpg" data-lightbox="products" data-caption="MasterLine 8">
        <img src="img/product2-thumb.jpg" alt="MasterLine 8">
    </a>
</div>
```

### Galeria z dokumentami PDF

```html
<div class="gallery">
    <!-- Obrazek produktu -->
    <a href="product.jpg" data-lightbox="catalog" data-caption="Product Image">
        <img src="product-thumb.jpg" alt="Product">
    </a>
    
    <!-- Broszura PDF -->
    <a href="brochure.pdf" 
       data-lightbox="catalog" 
       data-type="pdf"
       data-caption="Product Brochure - Complete specifications">
        <i class="fas fa-file-pdf"></i> View Brochure
    </a>
</div>
```

### Galeria w Bootstrap Card

```html
<div class="card">
    <a href="image-full.jpg" data-lightbox="portfolio" data-caption="Projekt 2024">
        <img src="image-thumb.jpg" class="card-img-top" alt="Projekt">
    </a>
    <div class="card-body">
        <h5 class="card-title">Projekt 2024</h5>
        <p class="card-text">Opis projektu...</p>
    </div>
</div>
```

### Galeria inline w tekście

```html
<p>
    Lorem ipsum dolor sit amet...
    <a href="diagram.jpg" data-lightbox="docs" data-caption="Diagram procesu">
        <img src="diagram-small.jpg" style="max-width: 200px;">
    </a>
    ...consectetur adipiscing elit.
</p>
```

## 📊 Porównanie z Fancybox

| Funkcja | Simple Lightbox | Fancybox |
|---------|----------------|----------|
| Rozmiar | ~8KB | ~50KB |
| Zależności | Brak | Brak (nowsze wersje) |
| jQuery | Nie | Nie (v5+) |
| Responsywność | ✅ | ✅ |
| Darmowa | ✅ | ❌ (licencja GPLv3) |
| Łatwość | ✅✅✅ | ✅✅ |

## 🐛 Rozwiązywanie problemów

### Obrazki się nie otwierają

1. Sprawdź czy pliki CSS i JS są załadowane
2. Sprawdź konsolę przeglądarki (F12)
3. Upewnij się że atrybut `data-lightbox` jest poprawnie ustawiony

### Nie działa nawigacja strzałkami

Upewnij się że `keyboardNav: true` w opcjach (domyślnie włączone)

### Obrazki ładują się wolno

1. Zmniejsz rozmiar obrazków
2. Użyj kompresji (WebP, JPEG z optymalizacją)
3. Dodaj lazy loading dla miniaturek

## 📄 Licencja

MIT License - używaj dowolnie w projektach komercyjnych i osobistych.

## 💡 Wsparcie

- Kompatybilność: Chrome, Firefox, Safari, Edge (wszystkie nowoczesne przeglądarki)
- IE11: Nie wspierane (użyj polyfilli dla starszych przeglądarek)

## 🚀 Planowane funkcje (opcjonalne rozszerzenia)

- [ ] Zoom (przybliżanie gestem pinch)
- [ ] Thumbnails (miniaturki w dolnej części)
- [ ] Fullscreen API
- [ ] Video support (YouTube, Vimeo)
- [ ] Grupowanie galerii

---

**Autor:** Maximus / 2R Systems Ltd  
**Wersja:** 1.0  
**Data:** 2025
