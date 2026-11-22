// reading_room_crawl.js
// Paste into the browser's developer console while on https://www.cia.gov/readingroom/ (the requests must come from that page).
// It searches the CIA FOIA reading room, opens every hit, and reads each record's own metadata and OCR text.
//
//   const rows = await crawl('"machine learning"');      // every hit, with its own publication date
//   byYear(rows);                                         // { "1969": 2, ... , undated: 0 }
//   await context('cia-rdp78b05171a000800070050-0', 'machine learning', 400);   // the words around a phrase
//   copy(toCSV(rows));                                    // the CSV, to paste into a file
//
// Be gentle with the server: it fetches one page at a time.

const BASE = '/readingroom';

async function getDoc(path) {
  const r = await fetch(path);
  if (!r.ok) throw new Error(r.status + ' ' + path);
  return new DOMParser().parseFromString(await r.text(), 'text/html');
}

function pageText(doc) {
  const main = doc.querySelector('main, .region-content, article') || doc.body;
  return main.innerText.replace(/\s+/g, ' ');
}

// One page of search hits (20 to a page): [{id, title}]
async function searchPage(query, page) {
  const doc = await getDoc(`${BASE}/search/site/${encodeURIComponent(query)}?page=${page}`);
  const seen = new Set(), hits = [];
  for (const a of doc.querySelectorAll('a[href*="/readingroom/document/"]')) {
    const id = a.getAttribute('href').split('/').pop();
    if (!seen.has(id)) { seen.add(id); hits.push({ id, title: a.innerText.trim() }); }
  }
  const total = (pageText(doc).match(/Search found (\d[\d,]*) items?/) || [])[1];
  return { hits, total: total ? Number(total.replace(/,/g, '')) : null };
}

// A record's own page: metadata plus the OCR text after "Body:"
async function record(id) {
  const t = pageText(await getDoc(`${BASE}/document/${id}`));
  const field = (name) => {
    const labels = 'Document Type|Collection|Document Number \\(FOIA\\) /ESDN \\(CREST\\)|Release Decision|Original Classification|' +
      'Document Page Count|Document Creation Date|Document Release Date|Sequence Number|Case Number|Publication Date|Content Type|File|Body';
    const m = t.match(new RegExp(name + ':\\s*(.*?)\\s*(?=(?:' + labels + ')\\s*:|$)'));
    return m ? m[1].trim() : '';
  };
  const bodyAt = t.indexOf('Body:');
  return {
    id,
    publication_date: field('Publication Date'),
    collection: field('Collection'),
    original_classification: field('Original Classification'),
    pages: field('Document Page Count'),
    body: bodyAt >= 0 ? t.slice(bodyAt + 5) : t,
    url: `https://www.cia.gov/readingroom/document/${id}`,
  };
}

// Every hit for a query, each read from its own page
async function crawl(query, maxPages = 50) {
  const out = [];
  for (let p = 0; p < maxPages; p++) {
    const { hits } = await searchPage(query, p);
    if (!hits.length) break;
    for (const h of hits) {
      const r = await record(h.id);
      out.push({ ...r, title: h.title });
    }
  }
  return out;
}

function byYear(rows) {
  const counts = { undated: 0 };
  for (const r of rows) {
    const y = (r.publication_date.match(/(19|20)\d\d/) || [])[0];
    if (y) counts[y] = (counts[y] || 0) + 1; else counts.undated++;
  }
  return counts;
}

// The words around each match of a pattern in a record's OCR text
async function context(id, pattern, width = 300, maxHits = 5) {
  const { body } = await record(id);
  const rx = new RegExp(pattern, 'gi'), out = [];
  let m;
  while ((m = rx.exec(body)) && out.length < maxHits) {
    out.push(body.slice(Math.max(0, m.index - width), m.index + width));
    rx.lastIndex = m.index + width;
  }
  return out;
}

function toCSV(rows) {
  const q = (v) => '"' + String(v ?? '').replace(/"/g, '""') + '"';
  const cols = ['publication_date', 'collection', 'original_classification', 'pages', 'title', 'url'];
  return [cols.join(','), ...rows.map(r => cols.map(c => q(r[c])).join(','))].join('\n');
}
