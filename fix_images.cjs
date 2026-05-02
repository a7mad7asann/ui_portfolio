const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Add width/height to icons
      content = content.replace(/<img(.*?)className="(.*?w-5 h-5.*?)"(.*?)>/g, (match, p1, p2, p3) => {
        if (!match.includes('width=')) {
          return `<img${p1}width="20" height="20" className="${p2}"${p3}>`;
        }
        return match;
      });

      // Add width/height to w-6 h-6
      content = content.replace(/<img(.*?)className="(.*?w-6 h-6.*?)"(.*?)>/g, (match, p1, p2, p3) => {
        if (!match.includes('width=')) {
          return `<img${p1}width="24" height="24" className="${p2}"${p3}>`;
        }
        return match;
      });

      // Add width/height to w-full h-full
      content = content.replace(/<img(.*?)className="(.*?w-full h-full.*?)"(.*?)>/g, (match, p1, p2, p3) => {
        if (!match.includes('width=')) {
          return `<img${p1}width="800" height="600" className="${p2}"${p3}>`;
        }
        return match;
      });

      // Ensure loading="lazy" is on images (except Header which is already fetchPriority="high")
      content = content.replace(/<img(?!.*(loading=|fetchPriority=))(.*?)>/g, '<img loading="lazy"$2>');

      fs.writeFileSync(fullPath, content);
    }
  }
}

processDir(path.join(__dirname, 'src'));
console.log('Images fixed');
