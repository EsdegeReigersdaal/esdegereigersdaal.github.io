import { cpSync, statSync } from 'node:fs';

const output = new URL('../dist/', import.meta.url);
if (!statSync(new URL('index.html', output)).isFile()) {
  throw new Error('Build the site before copying publication assets.');
}

// LikeC4 includes its own robots.txt. Apply our public site policy last.
cpSync(new URL('../public/', import.meta.url), output, { recursive: true });
