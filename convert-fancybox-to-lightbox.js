/**
 * SKRYPT KONWERSJI: Fancybox → Simple Lightbox
 * 
 * Ten skrypt automatycznie zamienia wszystkie odniesienia do Fancybox
 * na Simple Lightbox w plikach HTML
 */

const fs = require('fs');
const path = require('path');

// Ścieżka do folderu z plikami HTML
const websiteFolder = 'I:/2RS/Website';

// Funkcja do przetwarzania pojedynczego pliku
function convertFile(filePath) {
    console.log(`Przetwarzanie: ${filePath}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // 1. Usuń link do Fancybox CSS
    if (content.includes('fancybox')) {
        content = content.replace(
            /<link[^>]*fancybox[^>]*>/gi,
            '<!-- Fancybox usunięty - użyj Simple Lightbox -->'
        );
        modified = true;
    }
    
    // 2. Usuń script Fancybox
    if (content.includes('fancybox')) {
        content = content.replace(
            /<script[^>]*fancybox[^>]*><\/script>/gi,
            ''
        );
        modified = true;
    }
    
    // 3. Zamień data-fancybox na data-lightbox
    if (content.includes('data-fancybox')) {
        content = content.replace(
            /data-fancybox="([^"]*)"/gi,
            'data-lightbox="$1"'
        );
        modified = true;
    }
    
    // 4. Zamień data-caption (Fancybox używa tego samego, więc OK)
    // Nie trzeba zmieniać
    
    // 5. Usuń inicjalizację Fancybox z JavaScript
    if (content.includes('Fancybox.show')) {
        content = content.replace(
            /Fancybox\.show\([^)]*\)[^}]*}/gi,
            '// Fancybox removed - Simple Lightbox handles this automatically'
        );
        modified = true;
    }
    
    // 6. Dodaj Simple Lightbox CSS i JS (jeśli jeszcze nie ma)
    if (!content.includes('simple-lightbox.css') && modified) {
        // Znajdź ostatni link CSS
        const lastCssIndex = content.lastIndexOf('</head>');
        if (lastCssIndex !== -1) {
            const insertion = '    <link rel="stylesheet" href="../assets/css/simple-lightbox.css">\n    ';
            content = content.slice(0, lastCssIndex) + insertion + content.slice(lastCssIndex);
        }
    }
    
    if (!content.includes('simple-lightbox.js') && modified) {
        // Znajdź ostatni script przed </body>
        const lastBodyIndex = content.lastIndexOf('</body>');
        if (lastBodyIndex !== -1) {
            const insertion = '    <script src="../assets/js/simple-lightbox.js"></script>\n    ';
            content = content.slice(0, lastBodyIndex) + insertion + content.slice(lastBodyIndex);
        }
    }
    
    // Zapisz plik jeśli został zmodyfikowany
    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✓ Zaktualizowano: ${filePath}`);
        return true;
    } else {
        console.log(`○ Bez zmian: ${filePath}`);
        return false;
    }
}

// Funkcja do przetwarzania całego folderu
function processFolder(folderPath) {
    let totalFiles = 0;
    let modifiedFiles = 0;
    
    function traverse(currentPath) {
        const items = fs.readdirSync(currentPath);
        
        items.forEach(item => {
            const fullPath = path.join(currentPath, item);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                // Rekurencyjnie przetwarzaj podfoldery
                traverse(fullPath);
            } else if (stat.isFile() && item.endsWith('.html')) {
                totalFiles++;
                if (convertFile(fullPath)) {
                    modifiedFiles++;
                }
            }
        });
    }
    
    traverse(folderPath);
    
    console.log('\n=================================');
    console.log('PODSUMOWANIE:');
    console.log(`Przeanalizowano plików: ${totalFiles}`);
    console.log(`Zmodyfikowano plików: ${modifiedFiles}`);
    console.log('=================================');
}

// Uruchom konwersję
console.log('Rozpoczynam konwersję Fancybox → Simple Lightbox...\n');

try {
    processFolder(websiteFolder);
    console.log('\n✓ Konwersja zakończona pomyślnie!');
    console.log('\nPamiętaj aby:');
    console.log('1. Skopiować pliki simple-lightbox.css i simple-lightbox.js do folderu assets');
    console.log('2. Przetestować stronę w przeglądarce');
    console.log('3. Sprawdzić czy wszystkie galerie działają poprawnie');
} catch (error) {
    console.error('Błąd:', error.message);
}
