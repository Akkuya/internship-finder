import { execSync } from 'child_process';
import { existsSync, unlinkSync, readFileSync } from 'fs';
import { join, basename } from 'path';

const texFile = process.argv[2];

if (!texFile) {
  console.error('Usage: node audit.js <file.tex>');
  process.exit(1);
}

const name = basename(texFile, '.tex');
const inputPath = join('raw-resumes', texFile);
const outputDir = 'compiled-resumes';
const outputPdf = join(outputDir, `${name}.pdf`);

if (!existsSync(inputPath)) {
  console.error(`Not found: ${inputPath}`);
  process.exit(1);
}

console.log(`Compiling ${texFile}...`);

try {
  execSync(`pdflatex -output-directory=${outputDir} ${inputPath}`, { stdio: 'ignore' });
} catch {
  console.error('Compilation failed.');
  process.exit(1);
}

// Cleanup artifacts
for (const ext of ['aux', 'log', 'out']) {
  const f = join(outputDir, `${name}.${ext}`);
  if (existsSync(f)) unlinkSync(f);
}

// Check page count
let pages = null;
try {
  const result = execSync(`pdfinfo ${outputPdf}`, { stdio: ['pipe', 'pipe', 'ignore'] }).toString();
  const match = result.match(/Pages:\s+(\d+)/);
  if (match) pages = parseInt(match[1]);
} catch (err) {
  // Try mdls on macOS
  try {
    const result = execSync(`mdls -name kMDItemNumberOfPages -raw ${outputPdf}`, { stdio: ['pipe', 'pipe', 'ignore'] }).toString().trim();
    if (result && result !== '(null)' && !isNaN(result)) {
      pages = parseInt(result);
    }
  } catch (err2) {
    // Try simple regex fallback on the PDF buffer
    try {
      const data = readFileSync(outputPdf).toString('binary');
      const typePagesMatch = data.match(/\/Type\s*\/Pages\s*\/Count\s*(\d+)/);
      if (typePagesMatch) {
        pages = parseInt(typePagesMatch[1]);
      } else {
        const matches = data.match(/\/Count\s*(\d+)/g);
        if (matches) {
          const lastMatch = matches[matches.length - 1];
          const countMatch = lastMatch.match(/\/Count\s*(\d+)/);
          if (countMatch) pages = parseInt(countMatch[1]);
        }
      }
    } catch (err3) {
      console.error('Failed to parse PDF binary:', err3);
    }
  }
}

if (pages === null) {
  console.error('Could not read page count.');
  process.exit(1);
}

if (pages > 1) {
  console.error(`Failed: ${pages} pages (must be 1). Deleting.`);
  unlinkSync(outputPdf);
  process.exit(1);
}

console.log(`OK: ${outputPdf} (${pages} page)`);