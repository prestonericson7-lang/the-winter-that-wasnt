# Sources

Every source is marked by how far it was checked:
**READ** (opened and read, in full or the parts cited), **READ IN PART** (named parts only, such as an abstract or a table of contents),
or **NOT OPENED** (known from a search engine's reading of it or from catalog records; such claims carry UNVERIFIED in the text).

## The primary records

- **The CIA's CREST collection, the FOIA reading room** ([cia.gov/readingroom](https://www.cia.gov/readingroom/)). READ: every record cited
  in [docs/01](docs/01_the_cia_line.md) and [docs/02](docs/02_the_contractor.md), read on its own page (the reading room's OCR text of the
  scan) on November 22, 2026, and linked where it is cited. By that morning the reading room answered automated fetches with a bot check, which this work does not get around; the re-check used the Internet Archive's mirror of the reading room ([collection ciareadingroom](https://archive.org/details/ciareadingroom), 1,017,536 items, each record's PDF and OCR, uploaded 2023 to 2024) and its full-text search, with the page image deciding wherever the two OCRs disagree. The searches, their counts and their dates are in [data](data/) and
  [METHOD](METHOD.md).
- **The *NSA Technical Journal* cumulative index, 1956 to 1980** (DOCID 3020956), hosted at
  [cryptocellar.org](https://cryptocellar.org/NSA/nsa_tj_1956-80.pdf); 6,330,317 bytes, read as text. READ for every title cited, each matched
  against at least two of the index's own listings.
- **IRE International Convention Record, 1962, Part 4**, hosted at
  [worldradiohistory.com](https://www.worldradiohistory.com/Archive-IRE/Convention-Record/IRE-1962-Convention-Record-Part-4-270125.pdf);
  11,884,915 bytes. READ IN PART: the table of contents and Uffelman's CONFLEX I paper (title, summary, cell definitions).

## The secondary sources

- <a id="oconnor"></a>**Jack O'Connor, "Undercover Algorithm: A Secret Chapter in the Early History of Artificial Intelligence and Satellite
  Imagery,"** *International Journal of Intelligence and CounterIntelligence* 36 (4), 1337 to 1351, 2023,
  [doi:10.1080/08850607.2022.2073542](https://doi.org/10.1080/08850607.2022.2073542). READ (the author's copy, 362,095 bytes). He found the
  CIA's perceptron work first; this repository follows the line past where his paper stops.
- **George G. Lendaris and Gordon L. Stanley, "Diffraction-Pattern Sampling for Automatic Pattern Recognition,"** *Proceedings of the IEEE*
  58 (2), 198 to 216, 1970, [doi:10.1109/PROC.1970.7593](https://doi.org/10.1109/PROC.1970.7593). READ IN PART: the abstract, on
  [Portland State's archive](https://pdxscholar.library.pdx.edu/sysc_fac/204).
- <a id="murray"></a>**Albert E. Murray, "Perceptron Applications in Photo Interpretation,"** *Photogrammetric Engineering*, September 1961,
  627 to 637, ONR contract Nonr-3161(00). READ (the Society's PDF as the [Wayback Machine](https://web.archive.org/web/20240726213417/https://www.asprs.org/wp-content/uploads/pers/1961journal/sep/1961_sep_627-637.pdf) saved it in July 2024; the Society's own link now answers 404).
- **Ming-Kuei Hu, "Visual Pattern Recognition by Moment Invariants,"** *IRE Transactions on Information Theory* 8 (2), 179 to 187, 1962,
  [doi:10.1109/TIT.1962.1057692](https://doi.org/10.1109/TIT.1962.1057692). NOT OPENED; the citation checked against Crossref's record.
- **L. E. Baum, T. Petrie, G. Soules and N. Weiss, "A Maximization Technique Occurring in the Statistical Analysis of Probabilistic Functions
  of Markov Chains,"** *Annals of Mathematical Statistics* 41 (1), 164 to 171, February 1970. NOT OPENED (the publisher's site answers scripts with a bot check); the citation checked against Crossref's record. T. Petrie, "Probabilistic Functions of Finite-State Markov Chains," *PNAS* 57, 580, March 1967: the author's address, "Institute for Defense Analyses, Von Neumann Hall, Princeton, New Jersey," READ in [PubMed Central's record](https://pmc.ncbi.nlm.nih.gov/articles/PMC335547/). The Institute for Defense
  Analyses' communications research division in Princeton, founded in 1959 at the NSA's request and under contract to it:
  [IDA's own pages](https://www.ida.org/ida-ffrdcs/center-for-communications-and-computing/about-ccc), NOT OPENED (a search engine's reading).
- **R. M. Centner and E. D. Hietanen, "Automatic Pattern Recognition,"** *Photogrammetric Engineering*, February 1971, 177 to 186. READ (the Society's PDF as the [Wayback Machine](https://web.archive.org/web/20240430053353/https://www.asprs.org/wp-content/uploads/pers/1971journal/feb/1971_feb_177-186.pdf) saved it in April 2024).
- **Azriel Rosenfeld, "Automatic Imagery Interpretation,"** *Photogrammetric Engineering*, March 1965, 240 to 242. READ (the Society's PDF as the [Wayback Machine](https://web.archive.org/web/20240726204854/https://www.asprs.org/wp-content/uploads/pers/1965journal/mar/1965_mar_240-242.pdf) saved it in July 2024).
- **M. R. Uffelman, "Target Detection, Prenormalization and Learning Machines,"** *Transactions of the Symposium on Photo Interpretation*; and
  Scope Inc.'s March 31, 1967 final report to the Office of Naval Research (DTIC AD0656082). The first NOT OPENED (not found); the report READ in [the Internet Archive's copy](https://archive.org/details/DTIC_AD0656082) (DTIC itself refuses automated access).
- **Kunihiko Fukushima, "Neocognitron,"** *Biological Cybernetics* 36, 193 to 202, 1980,
  [doi:10.1007/BF00344251](https://doi.org/10.1007/BF00344251). NOT OPENED (a standard citation).
- **The NSA's "Google for Voice,"** [The Intercept, May 5, 2015](https://theintercept.com/2015/05/05/nsa-speech-recognition-snowden-searchable-text/).
  Cited from the earlier ai-roots research.
- **A. Harry Klopf, "Brain Function and Adaptive Systems: A Heterostatic Theory,"** Air Force Cambridge Research Laboratories, AFCRL-72-0164,
  1972 (DTIC AD0742259); and **A. G. Barto and R. S. Sutton, final report AFWAL-TR-81-1070,** 1981, on contract F33615-77-C-1191, "Adaptive
  Network Simulations" (DTIC ADA101476). Both READ in the Internet Archive's copies ([AD0742259](https://archive.org/details/DTIC_AD0742259), [ADA101476](https://archive.org/details/DTIC_ADA101476)); the follow-on report, A. G. Barto, ed., "Simulation Experiments with Goal-Seeking Adaptive Elements," contract F33615-80-C-1088, 1984 ([ADA140295](https://archive.org/details/DTIC_ADA140295)), READ.
- **Stephen Grossberg, "Adaptive Pattern Classification and Universal Recoding,"** *Biological Cybernetics* 23, 1976,
  [doi:10.1007/BF00344744](https://doi.org/10.1007/BF00344744). READ IN PART: the abstract and funding note on the publisher's page. Grossberg's other funding notes cited in docs/04 and the research log (1969, 1971, 1972, 1975) were read on the publisher's pages for each paper.
- **J. L. McClelland and D. E. Rumelhart, "An Interactive Activation Model of Context Effects in Letter Perception: Part 1,"** *Psychological Review* 88 (5), September 1981. READ for its funding note ([the authors' copy](https://stanford.edu/~jlmcc/papers/McClellandRumelhart81.pdf)).
- **S. Grossberg, "Nonlinear Dynamics of Multi-Channel Binocular Vision,"** annual scientific report, Center for Adaptive Systems, Boston University, March 7, 1984, contract F49620-83-C-0066 ([DTIC ADA142600](https://archive.org/details/DTIC_ADA142600)); **D. N. Spinelli, "Image Understanding by Adaptive Networks of Goal Seeking Neurons,"** AFOSR-83-0207, February 20, 1985 ([DTIC ADA217197](https://archive.org/details/DTIC_ADA217197)). READ IN PART (report forms and front matter) in the Internet Archive's copies.
- **D. E. Rumelhart, G. E. Hinton and R. J. Williams, "Learning Internal Representations by Error Propagation,"** September 1985, contract N00014-85-K-0450 ([DTIC ADA164453](https://archive.org/details/DTIC_ADA164453)). READ IN PART (the report form) in the Internet Archive's copy.
- **Bir Bhanu, "Automatic Target Recognition: State of the Art Survey,"** *IEEE Transactions on Aerospace and Electronic Systems* AES-22 (4), 364 to 379, July 1986, [doi:10.1109/TAES.1986.310772](https://doi.org/10.1109/TAES.1986.310772). NOT OPENED; the citation checked against Crossref's record.
- **DARPA Neural Network Study, Final Report (October 1987 to February 1988),** MIT Lincoln Laboratory Technical Report 840, March 22, 1989 ([DTIC ADA207580](https://archive.org/details/DTIC_ADA207580)). READ IN PART (the foreword, the conclusions quoted, and the whole text searched for dollar figures) in the Internet Archive's copy. Its 1988 book form, *DARPA Neural Network Study* (Fairfax, VA: AFCEA International Press), is cited by B. Widrow and M. A. Lehr, "30 Years of Adaptive Neural Networks," *Proceedings of the IEEE*, 1990, READ in [the authors' copy](https://isl.stanford.edu/people/widrow/papers/j199030years.pdf).
- **"$400 million over eight years":** *Popular Science*, as quoted in its own [archive feature](https://www.popsci.com/technology/ai-history-eighties/). READ (the passage).
- **Julia Irwin, "Artificial Worlds and Perceptronic Objects: The CIA's Mid-century Automatic Target Recognition,"** *Grey Room* 97, Fall 2024, 6 to 35, [doi:10.1162/grey_a_00415](https://doi.org/10.1162/grey_a_00415). READ IN PART: the abstract, on [the journal's page](https://www.greyroom.org/issues/97/253/artificial-worlds-and-perceptronic-objects-the-cias-mid-century-automatic-target-recognition-/).
- **US patents 3,566,080 (Scope Incorporated, 1971), 3,689,772 (Litton Systems, 1972) and 3,944,978 (Recognition Systems, Inc., 1976),** READ in the USPTO's own PDFs ([US 3,566080](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/3566080), [US 3,689772](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/3689772), [US 3,944978](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/3944978)): front pages and the description columns, read on the page images.
- **N. George, S. Wang and D. L. Venable, "Pattern Recognition Using The Ring-Wedge Detector And Neural-Network Software,"** *Proc. SPIE* 1134, 96, 1989, [doi:10.1117/12.961621](https://doi.org/10.1117/12.961621). NOT OPENED; the citation checked against Crossref's record.
- **Standard history:** the New York Times on the Navy's perceptron (July 8, 1958); Minsky and Papert, *Perceptrons* (1969). NOT OPENED.
