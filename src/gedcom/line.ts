import { XrefId } from './types';

/** Roughly, a gedcom line is a line of gedcom (value
 * may include newlines) that can be joined with other
 * lines to make a nearly complete GEDCOM file. CONT
 * and CONC lines are special, and should be combined
 * with their predecessors before being used. */

export type GedcomLine = {
    level: number;
    xrefId?: XrefId;
    tag: string;
    value?: string;
};

export function lineFromString(lineStr: string): GedcomLine {
    throw new Error('Bad line');
}

export function lineToString({
    level,
    xrefId,
    tag,
    value,
}: GedcomLine): string {
    const xrefStr = xrefId ? xrefId + ' ' : '';

    const valueStr = value === undefined
        ? ''
        : ' ' +
          (value.includes('\n')
              ? value.split('\n').join(`\n${level + 1} CONT `)
              : value);
    return `${level} ${xrefStr}${tag}${valueStr}`;
}
