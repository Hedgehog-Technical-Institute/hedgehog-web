// src/lib/asset-helpers.ts

// Sort files like ss1, ss2, ss10 correctly
export function sortByNumericSuffix(paths: string[]): string[] {
  return [...paths].sort((a, b) => {
    const ax = (a.match(/(\\d+)(?=\\.[^.]+$)/) || [])[1];
    const bx = (b.match(/(\\d+)(?=\\.[^.]+$)/) || [])[1];
    const na = ax ? parseInt(ax, 10) : -1;
    const nb = bx ? parseInt(bx, 10) : -1;
    return na - nb;
  });
}

// Convert Vite glob result to array of urls (preserves sort if provided)
export function globToArray(globbed: Record<string, string>, sort = false): string[] {
  const entries = Object.entries(globbed).map(([_, url]) => url);
  return sort ? entries : entries;
}
