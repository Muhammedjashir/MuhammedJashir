const https = require('https');
const fs = require('fs');

https.get('https://my-portfolio-6oe2.vercel.app/assets/index-eaDelINe.js', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    // Extract strings that look like english text
    const stringLiterals = data.match(/["'](?:(?=(\\?))\1.)*?["']/g) || [];
    const textStrings = stringLiterals
      .map(s => s.replace(/^["']|["']$/g, ''))
      .filter(s => {
        if (s.length < 15) return false;
        // Check if it has mostly letters and spaces
        const letterSpaceCount = (s.match(/[a-zA-Z ]/g) || []).length;
        if (letterSpaceCount / s.length < 0.8) return false;
        // Exclude common code things
        if (s.includes('return ') || s.includes('function(') || s.includes('/assets/')) return false;
        return true;
      });

    const uniqueStrings = [...new Set(textStrings)];
    fs.writeFileSync('extracted_direct.txt', uniqueStrings.join('\n'), 'utf8');
  });
});
