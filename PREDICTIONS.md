# Predictions, filed before reading, graded after

Filed at 1:28 AM on November 22, 2026, before a single record was opened, each with a confidence (ESTIMATE) and the evidence that would settle
it. Graded at the end of the night against the records in [docs](docs/). The predictions are copied here word for word from the research log;
the grades sit under them.

**P-W1 (60%).** The CIA reading room holds perceptron, neural-network or "learning machine" contract records dated after 1969, inside the public
winter, not only 1963 to 1964. Settles: any released record dated 1970 to 1985 describing agency-funded work of that kind.
> **HELD IN PART.** No perceptron or neural-network contract after 1969. But a status report dated June 9, 1969 puts NPIC money into "faster
> machine learning algorithms" under a contract running sixteen months from May 12, 1969, into 1970; and a record dated November 28, 1984
> describes machine learning built into a contractor's automatic SIGINT classifiers (the customer is not named).

**P-W2 (75%).** The photo-interpretation side (NPIC) shows a continued line of automatic target recognition, automatic photo interpretation or
pattern recognition research through the 1970s, possibly without the word "perceptron". Settles: dated NPIC or CIA records naming such work.
> **HELD IN PART.** The line runs unbroken from 1965 into the winter: the Phase IV contract (1969 to 1970), the target indexing device (tested
> 1970, before COMIREX in 1972), plans for radar and "memorize ... recognize" devices (1971). Then the released record goes quiet; through the
> rest of the decade there is only the 1974 statement of need.

**P-W3 (70%).** The word "perceptron" mostly vanishes from agency records after about 1966 to 1969, and the work goes on under other names
("adaptive", "learning machine", "pattern recognition"). Settles: the dates of the perceptron hits against the dates of the other-name hits.
> **HELD, earlier than I guessed.** The agency's own "perceptron" ends in 1965; the work goes on as "adaptive recognition system" (CONFLEX,
> 1964 to 1966), "automatic target recognition," "machine learning algorithms" and "diffraction pattern sampling."

**P-W4 (50%).** Cornell Aeronautical Laboratory (later Calspan) appears as an agency contractor for pattern recognition after 1969. Settles: a
dated record naming it.
> **FAILED.** Calspan has 19 records from 1973 to 1986; none is pattern recognition. The contractors of the line were Scope Inc. (ESTIMATE) and
> others whose names are sanitized.

**P-W5 (65%).** The records do NOT show a working neural system in operational use on imagery before 1986: the line continued as research, not as
a secret capability decades ahead. Settles: any record of operational use, or its absence after the whole search.
> **HELD.** No neural system on imagery, in use or otherwise; the 1984 steering group lists pattern recognition and computer vision as "NOT USED
> TODAY." Beside it: a learning classifier did reach operational systems by 1984, in signals, not imagery, and not neural.

**P-W6 (60%).** The NSA's own technical journal carries at least one more pattern-recognition or learning paper between 1961 and 1977 besides the
two already found (Jacobs 1961, the 1977 introduction). Settles: the journal's cumulative index.
> **HELD.** At least ten more: the rotation problem (1962), waveform recognition (1963, 1965), speaker identification by machine (1969), Markov
> models for phonetic text (1973), keyword recognition (1976, 1977), nearest-neighbor reference patterns (1977), and more ([docs/03](docs/03_the_nsa_line.md)).

**P-W7 (70%).** Even public defense money for neural or adaptive pattern recognition (ONR, ARPA, the Air Force) never went to zero in 1969 to
1985: the winter was a dip, not a stop. Settles: dated defense reports of that kind in those years.
> **HELD IN PART.** Defense-linked learning work is in the open in 1970 (the hidden Markov method from the NSA's Princeton contractor;
> the diffraction recognizer from GM's defense laboratory); an Air Force laboratory publishes its own scientist's theory of adaptive networks
> in 1972 (summarized in 1974); the Air Force pays for "Adaptive Network Simulations" from September 1977, the work that became reinforcement
> learning; the Office of Naval Research in the late 1970s and the Air Force in 1983 fund network models (all UNVERIFIED). I found nothing I
> could date to 1975 or 1976.
>
> *Beside this, the morning of November 22 (the grade above is the night's and stands as written):* **HELD.** Read in the sources, a
> defense dollar for neural or adaptive pattern recognition in every year from 1969 to 1985 but 1973: the Office of Naval Research for
> Grossberg's learning networks (1969, 1971, 1972), the Air Force's Rome Air Development Center for a trained imagery classifier (published
> 1971), the Air Force's own theory of adaptive networks (1972), the Advanced Research Projects Agency through the Navy (1974 to 1976), the
> Air Force's "Adaptive Network Simulations" and its follow-on (1977 to 1983), the Navy for the interactive activation model (1979 to 1981),
> the Air Force Office of Scientific Research (1983 to 1985), and the Navy for backpropagation (1985). 1973: ESTIMATE, strong (the ARPA
> contract that paid for the 1974 to 1975 work dates from 1970). Sources in [docs/04](docs/04_the_open_line.md) and the
> [research log](research_log.md).

**P-W8 (15%, the wild one).** Somewhere in the released record a learning-machine program claims a capability more than five years ahead of the
open literature of its year. Settles: a dated claim set against the first open paper for that capability.
> **FAILED.** Every capability I could line up was in the open first or in the same year.

## The score

| | Count |
|---|---|
| Held | 3 (P-W3, P-W5, P-W6) |
| Held in part | 3 (P-W1, P-W2, P-W7) |
| Failed | 2 (P-W4, P-W8) |

Brier score, counting "held in part" as half (MEASURED, computed from the confidences above): **0.095**. A coin-flip forecaster scores 0.25,
and lower is better. The confidences added up to 4.65 predictions expected to hold; 4.5 did.

*Beside this, the morning of November 22:* with P-W7 re-graded HELD, the count is 4 held, 2 in part, 2 failed, and the Brier score is
**0.101** (MEASURED): worse, not better, because I gave P-W7 only 70%. The confidences expected 4.65 to hold; 5.0 did, counting "in part"
as half. The night's numbers above are left as they were.
