# Method

## The question and the rule

The question: did the US intelligence agencies keep learning machines going through the "AI winter" (roughly 1969 to 1986), and were they
ahead of the open world? Eight predictions were written down with confidences before any record was opened ([PREDICTIONS](PREDICTIONS.md)),
and graded only at the end. Nothing in a prediction was changed after it was filed.

## How the CIA records were read

- **Where:** the CIA's FOIA reading room, which holds the CREST collection of declassified records. Its search engine returns 20 hits a page.
- **How:** the reading room refuses automated downloads from outside a browser, so every search ran inside a browser on the reading room's own
  pages, with the small script in [tools/reading_room_crawl.js](tools/reading_room_crawl.js): it walks the search pages, opens each hit, and
  reads the publication date, collection, original classification, page count and the reading room's OCR text of the scan. Since the morning of
  November 22, 2026 the reading room answers automated fetches with a bot check; please do not run the tool against it. The Internet Archive's
  mirror of the reading room ([collection ciareadingroom](https://archive.org/details/ciareadingroom)) holds the same records, with full-text search.
- **Dates:** every date is the "Publication Date" on the record's own page, not the search listing's. Undated records are counted as undated. In docs/01, a bullet dated by the record's own text (a memo's own date, the day of a meeting) gives its page's date beside it, and one page date is a placeholder (January 1, 1972, on NPIC's September 1972 monthly report).
- **Counting inside the winter:** a hit counts as inside 1969 to 1985 by that publication date.
- **Reading:** every record cited was opened and the quoted words were found in its OCR text. OCR errors are kept as the scan has them and
  marked where they matter. Where the OCR and the page disagree, the page image wins: in the September 8, 1969 RED report the reading room's OCR reads "tratable" where the page reads "demonstratable" (an earlier draft guessed "trainable"; the page showed the guess was wrong).
- **Every name it could have:** the line was searched under perceptron, "learning machine", "machine learning", "neural network", "adaptive
  learning", "learning network", "self-organizing", "pattern recognition", "automatic target recognition", "automatic photo interpretation",
  "image recognition", "target indexing", "cloud screening", "diffraction pattern sampling", "clue extraction", CONFLEX, Scope, Uffelman,
  Lendaris, Calspan and Cornell Aeronautical, among others. Several of the night's best records turned up only under the later names.

## The NSA index

The *NSA Technical Journal* cumulative index (1956 to 1980) was downloaded and read as text. Its title list prints in columns that sometimes
slip by a row, which put one 1963 title in 1975 in my first draft; every NSA row in [docs/03](docs/03_the_nsa_line.md) was then matched against
at least two of the index's own listings (by title, by keyword, by author).

## Labels

- **MEASURED:** counted or read directly off a source.
- **ESTIMATE:** my judgment from the evidence, with its strength said.
- **UNVERIFIED:** from one secondary source, a search engine's reading, or catalog records; not opened here.
- **SPECULATION:** a link across a gap, always with the test that would settle it ([docs/06](docs/06_shots_in_the_dark.md)).

## The triple check

1. **Quotes:** every quote from a CIA record was re-found in that record's OCR text; the quotes from O'Connor's paper and from the 1962 IRE
   Convention Record were re-found in their downloaded texts. That pass caught one error in my own draft (a date that was the first CORONA
   flight, not the start of the program) and fixed it before publication.
2. **Rows and dates:** the NSA table was re-matched row by row (it caught the 1963 paper put in 1975, and a wrong claim that the journal went
   quiet from 1966 to 1975; it did not, it moved to voice).
3. **Counts and data:** every count was re-run from the crawl, and both data files in [data](data/) were compared byte for byte (SHA-256)
   against the browser's own copy of the crawl.

False leads are recorded in the [research log](research_log.md) so nobody repeats them: OCR that turns "ICBM COMPLEX" into "CONFLEX," "broader
scope. Incorporated" into a company name, and "Perceptronics Inc." into a perceptron.

## What was not done

No FOIA requests were filed. The Defense Technical Information Center refuses automated access, so its reports were read in the Internet Archive's copies where those exist; the two Project PIGS reports were not found there. The NSA journal's articles themselves were not read. The journal papers that could not be downloaded at night were read the next morning in the Wayback Machine's copies. Each remaining gap is marked where it touches a claim.
