import fs from 'fs';
import path from 'path';
import portfolio from '../public/data/portfolio.json' assert { type: "json" };

function readCNAME(filePath) {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    return fileContents.trim(); // Assuming the CNAME file contains only the domain
  } catch (error) {
    console.error(`Error reading CNAME file: ${error.message}`);
    return null;
  }
}

(async () => {
  const url = readCNAME(path.resolve(process.cwd(), './CNAME'))
    || process.env.SITE_URL
    || 'www.example.com';
  const { experience } = portfolio;

  const pages = [
    '/index',
    ...Object.keys(experience).map((exp) => `/gallery/${exp}`)
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const path = page.replace('index', '');
          const route = path === '/index' ? '' : path;
          return `
            <url>
              <loc>${`https://${url}${route}`}</loc>
            </url>
          `;
        })
        .join('')}
    </urlset>`.replace(/  /g, '');

  fs.writeFileSync(path.resolve(process.cwd(), 'public/sitemap.xml'), sitemap);
}
)();
