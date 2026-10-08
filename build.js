const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

try {
  // Read template and data files
  const templateSource = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');
  const rawData = fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8');
  const data = JSON.parse(rawData);

  // Compile template and output index.html
  const template = Handlebars.compile(templateSource);
  const result = template(data);

  fs.writeFileSync(path.join(__dirname, 'index.html'), result);
  console.log('Successfully generated index.html!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
