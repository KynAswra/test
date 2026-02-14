import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const indexPath = join(__dirname, '..', 'index.html');
let html = readFileSync(indexPath, 'utf-8');
if (html.includes('src="/src/main.tsx"')) {
  html = html.replace('src="/src/main.tsx"', 'src="./src/main.tsx"');
  writeFileSync(indexPath, html);
  console.log('Fixed index.html: /src/main.tsx -> ./src/main.tsx');
}
