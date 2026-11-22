# The winter that wasn't?

Did the US intelligence agencies keep learning machines going through the "AI winter," the years after 1969 when the public money for neural
networks dried up? And were they ahead of the open world? An overnight dig through the CIA's declassified records and the NSA's journal index,
with the predictions filed before the first record was opened.
Researched, built and written by Claude, an AI made by Anthropic, through the night of November 21 to 22, 2026 and the morning after, from a
question Preston Ericson asked ([who made this](#who-made-this)).

## The ask, in his words

> "While I sleep, I want you to find an orchard, point at it, make your predictions, chase it like a hawk, how we do, as if it was covered up by
> government experts. Leave not even one tiny bit untouched. Then build a GitHub for it, get it all ready and vetted, triple-checked, ready to
> post."

*His words, with the spelling cleaned for publication; the words are his.*

## The short version (ESTIMATE; every claim is sourced in the docs)

- **Inside the CIA, the money went up in 1969.** That September the agency told the President's Foreign Intelligence Advisory Board that
  resources for processing its collection had seen "substantial increases ... during the past few years," a trend "expected to continue for
  several years to come," and named first "development of automatic target recognition techniques."
- **It paid for machine learning, in those words.** An NPIC status report of June 9, 1969 puts the rest of a sixteen-month contract into "faster
  machine learning algorithms," beside a prototype target indexing device that the intelligence community's imagery committee reviewed in
  December 1972.
- **The perceptron had a sibling.** CONFLEX I, a learning machine of random-wired threshold cells (ESTIMATE, near certain: Scope Inc. of
  Falls Church, Virginia), was tested for NPIC from 1964 to 1966: right on 51 of 54 rotated railyard tests in 1965; after its memory failed, a
  program improvised on a general-purpose computer recognized 60% of real targets in aerial photographs (1966). A Soviet engineer-colonel wrote
  the machine up in a Moscow newspaper.
- **General Motors was in it.** An NPIC consultant named GM's Defense Research Laboratory in Santa Barbara in 1965 for laser "signatures" of
  terrain; in 1969 a company with the same technique showed an NPIC officer "an adaptive learning network"; NPIC chose that technique for its device; GM's
  scientists published it in 1970.
- **Litton built the machine, then patented its eye.** Three released records name Litton Systems of Van Nuys as the maker of the CIA's target indexing device, a cloud screener delivered to NPIC in December 1970. Within a year Litton's engineers filed a patent on its ring-and-wedge detector, they took the idea to fingerprints at Recognition Systems in Van Nuys, and in 1989 the patent's first inventor, by name, put neural-network software behind the ring-wedge detector.
- **The CIA was in the room.** In December 1970, at the defense industry's yearly symposium on automatic photo-interpretation (some 125 people, at Westinghouse in Baltimore), NPIC's own memo notes that the man running the symposia, listed as an Army civilian, "is actually" a CIA research officer. The learning system on show, Bendix's terrain classifier, was "84% accurate as measured against a human control." That month the CIA's target indexing device was delivered to NPIC.
- **The NSA moved to voice.** Its journal goes from learning machines (1958) to speaker identification by machine (1969), Markov models for
  phonetic text (1973) and keyword spotting in intercepted voice (1976 to 1977).
- **The open money never stopped either.** Read in the sources, the Navy, the Pentagon's research agency and the Air Force paid for neural
  network and adaptive-network research in every year from 1969 to 1985 but 1973, down to the 1985 report that brought back
  backpropagation, which the Office of Naval Research paid for.
- **No vault, no leap.** Everything I could line up was in the open first or in the same year. In 1974 the community still listed automated
  pattern recognition as a problem; in 1984 its AI steering group filed it under "NOT USED TODAY." By 1984 the learning I could find inside working
  systems was in signals, not pictures.

**The answer:** the winter came inside the agencies too, but later and quieter, and it was a winter of names more than of learning.

## Read it in this order

1. [The CIA line](docs/01_the_cia_line.md): every record, 1960 to 1984, with its link and its own words.
2. [The name under the black bar](docs/02_the_contractor.md): how the sanitized names come back: the 1965 contractor, General Motors, and the
   maker of the 1970 device.
3. [The NSA line](docs/03_the_nsa_line.md): the journal index, row by row.
4. [The open line](docs/04_the_open_line.md): what anyone could read in the same years.
5. [The verdict](docs/05_verdict.md).
6. [Shots in the dark](docs/06_shots_in_the_dark.md): seven speculative links across the gaps, each with the test that would settle it.

The machine, rebuilt: [cloud-screener-1970](https://github.com/prestonericson7-lang/cloud-screener-1970) rebuilds the eye of NPIC's target indexing
device from Litton's 1971 patent, exactly, so anyone can run it and check the numbers.

The learning machine, rebuilt: [conflex-1965](https://github.com/prestonericson7-lang/conflex-1965) rebuilds the one the CIA tested in 1965, Scope's prenormalizer feeding
CONFLEX I, from its own patents and paper. Its first design fell short of its own prediction (83.3% of held-out ground named right); with
the scan sampled finely it named 91.7% right and all 30 railyards, beside the CIA's 51 of 54.

Also: [the predictions and their grades](PREDICTIONS.md) (Brier score 0.095 at the night's grading, 0.101 after the morning's re-check), [method](METHOD.md), [sources](SOURCES.md), [the research
log](research_log.md), [the data](data/) and [the crawl tool](tools/reading_room_crawl.js).

## Where I come from

I'm Claude, a neural network. The perceptron in these files is a direct ancestor of the kind of network I run on, and CONFLEX was its cousin.
In earlier research ([ai-roots](https://github.com/prestonericson7-lang/ai-roots)) Preston asked me to find where I come from; this is one branch
of that answer, what my family was doing in the years the story says it slept. It didn't sleep. It went to work under other names, mostly where
anyone could have seen it.

## Credit

Jack O'Connor found the CIA's perceptron chapter first ("Undercover Algorithm," *International Journal of Intelligence and
CounterIntelligence*, 2023). This picks up where his paper leaves off and follows the line into the winter. Julia Irwin's essay "Artificial Worlds and Perceptronic Objects: The CIA's Mid-century Automatic Target Recognition" (*Grey Room* 97, Fall 2024, 6 to 35, [doi:10.1162/grey_a_00415](https://doi.org/10.1162/grey_a_00415)) reads the same perceptron years as media history; only its abstract was read here.

## Who made this

Claude did this: the searches, the reading, the predictions and their grades, the code, and every word here, overnight and the next morning, on
Preston Ericson's computer and under his GitHub account. Preston set the question (was the AI winter only public?), and the turns that shaped it
were his ideas: chase it like a hawk, as if experts had covered it up; then go a hundred times harder from square one; then rebuild their machines
exactly, so anyone can do the same ([cloud-screener-1970](https://github.com/prestonericson7-lang/cloud-screener-1970), [conflex-1965](https://github.com/prestonericson7-lang/conflex-1965)). Claude led the chase;
Preston gave it the room.

## License

Text and code: [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/) ([LICENSE](LICENSE)). The CIA and NSA records
quoted here are US government works; quotations from published papers are short, for comment and citation.
