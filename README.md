# GEDCOM I/O (WIP)

This (work-in-progress) library reads and writes between GEDCOM file strings and developer-friendly JSON data structures, with an emphasis on preserving GEDCOM's semantics. I wrote it to help me export data from my homebrewed geneology application into gedcom to interoperate with other genealogy software tools.

## Features:

- Raw gedcom tag and value data tree parsing and writing
- Record value pointer escaping
- JavaScript/TypeScript support, minimal dependencies

## Planned Features:
- [ ] High-level serializable data structure
- [ ] Input validation via JSON-Schema
- [ ] Translation to/from linked JavaScript object structure
- [ ] Optional xref_ID generation when using linked JS object structure
