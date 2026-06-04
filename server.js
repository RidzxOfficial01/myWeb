const express = require('express');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;

// Serve semua file static (index.html, style.css, main.js)
app.use(express.static(path.join(__dirname)));

// Fallback ke index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n  ██████╗ ██╗   ██╗██████╗ ███████╗██████╗ `);
  console.log(`  ██╔════╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔══██╗`);
  console.log(`  ██║      ╚████╔╝ ██████╔╝█████╗  ██████╔╝`);
  console.log(`  ██║       ╚██╔╝  ██╔══██╗██╔══╝  ██╔══██╗`);
  console.log(`  ╚██████╗   ██║   ██████╔╝███████╗██║  ██║`);
  console.log(`   ╚═════╝   ╚═╝   ╚═════╝ ╚══════╝╚═╝  ╚═╝\n`);
  console.log(`  Portfolio running at http://localhost:${PORT}`);
  console.log(`  Press Ctrl+C to stop\n`);
});
