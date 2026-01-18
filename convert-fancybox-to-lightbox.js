/**
 * CONVERSION SCRIPT: Fancybox → 2RS Simple Gallery
 * 
 * Automatically converts Fancybox references to 2RS Simple Gallery in HTML files
 * 
 * @author 2R Systems Ltd
 * @version 1.0
 */

const fs = require('fs');
const path = require('path');

// Configuration
const websiteFolder = 'I:/2RS/Website'; // Change this to your project path

// Process single HTML file
function convertFile(filePath) {
    console.log(`Processing: ${filePath}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // 1. Remove Fancybox CSS links
    if (content.includes('fancybox')) {
        content = content.replace(
            /<link[^>]*fancybox[^>]*>/gi,
            '<!-- Fancybox removed - use 2RS Simple Gallery -->'
        );
        modified = true;
    }
    
    // 2. Remove Fancybox scripts
    if (content.includes('fancybox')) {
        content = content.replace(
            /<script[^>]*fancybox[^>]*><\/script>/gi,
            ''
        );
        modified = true;
    }
    
    // 3. Replace data-fancybox with data-lightbox
    if (content.includes('data-fancybox')) {
        content = content.replace(
            /data-fancybox="([^"]*)"/gi,
            'data-lightbox="$1"'
        );
        modified = true;
    }
    
    // 4. Remove Fancybox JavaScript initialization
    if (content.includes('Fancybox.show')) {
        content = content.replace(
            /Fancybox\.show\([^)]*\)[^}]*}/gi,
            '// Fancybox removed - 2RS Simple Gallery auto-initializes'
        );
        modified = true;
    }
    
    // 5. Add 2RS Simple Gallery CSS (if not present)
    if (!content.includes('2RS_Simple_Gallery.css')) {
        content = content.replace(
            /<\/head>/i,
            '    <link rel="stylesheet" href="2RS_Simple_Gallery.css">\n</head>'
        );
        modified = true;
    }
    
    // 6. Add 2RS Simple Gallery JS (if not present)
    if (!content.includes('2RS_Simple_Gallery.js')) {
        content = content.replace(
            /<\/body>/i,
            '    <script src="2RS_Simple_Gallery.js"></script>\n</body>'
        );
        modified = true;
    }
    
    // Save if modified
    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Converted: ${filePath}`);
        return true;
    } else {
        console.log(`⏭️  No changes: ${filePath}`);
        return false;
    }
}

// Process directory recursively
function processDirectory(dirPath) {
    const files = fs.readdirSync(dirPath);
    let count = 0;
    
    files.forEach(file => {
        const filePath = path.join(dirPath, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            count += processDirectory(filePath);
        } else if (file.endsWith('.html')) {
            if (convertFile(filePath)) count++;
        }
    });
    
    return count;
}

// Main
console.log('🔄 Fancybox → 2RS Simple Gallery Converter\n');
console.log(`Directory: ${websiteFolder}\n`);

if (!fs.existsSync(websiteFolder)) {
    console.error('❌ Directory not found!');
    console.error(`Check path: ${websiteFolder}`);
    process.exit(1);
}

const count = processDirectory(websiteFolder);

console.log('\n' + '='.repeat(50));
console.log(`✅ Conversion complete! Files converted: ${count}`);
console.log('='.repeat(50));
console.log('\nNext steps:');
console.log('1. Copy 2RS_Simple_Gallery.css to your CSS folder');
console.log('2. Copy 2RS_Simple_Gallery.js to your JS folder');
console.log('3. Test in browser');
console.log('4. Delete old Fancybox files');
