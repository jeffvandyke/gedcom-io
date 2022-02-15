export type GedcomLinkedJs = object;
export type GedcomJson = object;

export type GedcomString = string;

/** Takes a linked data structure (javascript runtime object) and returns a
 * GEDCOM file string in utf8, BOM included per GEDCOM spec */
export function linkedJsToGedcom(_gedcomJs: GedcomLinkedJs): GedcomString {
    throw new Error('TODO');
}

/** Takes a json data structure populated with id links and returns a GEDCOM
 * file string in utf8, BOM included per GEDCOM spec */
export function jsonToGedcom(_gedcomJson: GedcomJson): GedcomString {
    throw new Error('TODO');
}

export function gedcomToJson(_gedcomFile: GedcomString): GedcomJson {
    throw new Error('TODO');
}

export function gedcomToLinkedJs(_gedcomFile: GedcomString): GedcomLinkedJs {
    throw new Error('TODO');
}
