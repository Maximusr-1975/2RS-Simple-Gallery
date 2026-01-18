# 🚀 Szybki Start - Bootstrap Studio

## Instalacja Simple Lightbox w Bootstrap Studio

### Krok 1: Dodaj pliki do projektu

1. **Otwórz Bootstrap Studio**
2. **Kliknij prawym na "assets" w drzewie projektu**
3. **Wybierz "Import Files"** lub naciśnij `Ctrl+I`

**Importuj:**
- `simple-lightbox.css` → do folderu `assets/css/`
- `simple-lightbox.js` → do folderu `assets/js/`

### Krok 2: Dodaj linki do plików

#### Metoda A: Globalnie (dla całej strony)

1. Kliknij na `<html>` w drzewie komponentów
2. W panelu po prawej: **Settings → HTML Settings**
3. W sekcji **"Head HTML"** dodaj:

```html
<link rel="stylesheet" href="assets/css/simple-lightbox.css">
```

4. W sekcji **"Body"** (na końcu) dodaj:

```html
<script src="assets/js/simple-lightbox.js"></script>
```

#### Metoda B: Na konkretnej stronie

1. Kliknij na nazwę strony w drzewie (np. "index.html")
2. **Page Settings → Head/Body**
3. Dodaj powyższe linki

### Krok 3: Zamień Fancybox na Simple Lightbox

#### Znajdź linki typu:
```html
<a data-fancybox="gallery" href="obrazek.jpg">
    <img src="miniaturka.jpg">
</a>
```

#### Zmień na:
```html
<a data-lightbox="gallery" href="obrazek.jpg" data-caption="Opis">
    <img src="miniaturka.jpg">
</a>
```

### Krok 4: Usuń Fancybox

1. **Znajdź i usuń:**
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/.../fancybox.css">
<script src="https://cdn.jsdelivr.net/.../fancybox.umd.js"></script>
```

2. **Usuń kod inicjalizacji Fancybox:**
```javascript
// USUŃ:
Fancybox.show([...]);

// LUB:
document.querySelectorAll('.pdf-trigger').forEach(...)
```

### Krok 5: Test

1. Naciśnij `F5` (Preview)
2. Kliknij na obrazek
3. Sprawdź:
   - ✅ Obrazek się powiększa
   - ✅ Strzałki ← → działają
   - ✅ ESC zamyka lightbox
   - ✅ Licznik pokazuje numer (1/10)

---

## 🎨 Dostosowanie do 2R Systems

W Bootstrap Studio:
1. **Design → Custom Code → CSS**
2. Dodaj:

```css
/* Kolory 2R Systems */
.simple-lightbox-close,
.simple-lightbox-prev,
.simple-lightbox-next {
    background: rgba(0, 102, 204, 0.2);
    border-color: rgba(0, 102, 204, 0.5);
}

.simple-lightbox-caption,
.simple-lightbox-counter {
    background: rgba(0, 102, 204, 0.8);
}
```

---

## ✅ Checklist

- [ ] Zaimportowano `simple-lightbox.css`
- [ ] Zaimportowano `simple-lightbox.js`
- [ ] Dodano linki w HTML
- [ ] Zamieniono `data-fancybox` → `data-lightbox`
- [ ] Usunięto Fancybox CSS i JS
- [ ] Przetestowano w Preview
- [ ] Sprawdzono na mobile (F12 → Device mode)

---

## 🆘 Problemy?

### Lightbox się nie otwiera

**Sprawdź:**
1. Czy pliki są zaimportowane?
2. Czy linki są poprawne?
3. Console (F12) - czy są błędy?
4. Czy atrybut to `data-lightbox` (nie `data-fancybox`)?

### Obrazki nie pasują do rozdzielczości

**Rozwiązanie:**
Użyj responsive images:
```html
<a href="duzy-1920x1080.jpg" data-lightbox="gallery">
    <img src="maly-300x200.jpg" class="img-fluid">
</a>
```

### Licznik się nie pokazuje

**Sprawdź:**
Czy wszystkie obrazki w galerii mają ten sam `data-lightbox`:
```html
<!-- DOBRZE - ta sama galeria -->
<a data-lightbox="gallery1" href="img1.jpg">...</a>
<a data-lightbox="gallery1" href="img2.jpg">...</a>

<!-- ŹLE - różne galerie -->
<a data-lightbox="gallery1" href="img1.jpg">...</a>
<a data-lightbox="gallery2" href="img2.jpg">...</a>
```

---

**Gotowe!** 🎉

Teraz masz lekką, szybką galerię bez zewnętrznych zależności!
