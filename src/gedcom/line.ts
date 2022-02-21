import { XrefId } from './types';
import { TagName, tagMap } from '../tagMap';

/** Roughly, a gedcom line is a line of gedcom (value
 * may include newlines) that can be joined with other
 * lines to make a nearly complete GEDCOM file. CONT
 * and CONC lines are special, and should be combined
 * with their predecessors before being used. */

export type GedcomLine = {
    level: number;
    xrefId?: XrefId;
    tag: TagName;
    value?: string;
};

/** G1: level, G2: xrefid, G3: tag, G4: value */
const LINE_REGEX = /^(\d\d?)( @[0-9A-Za-z]+@)? (_?\w+)( .*)?$/;

export function lineFromString(lineStr: string): GedcomLine {
    const match = lineStr.match(LINE_REGEX);
    if (!match) {
        throw new Error(
            `Line parser could not parse line: ${JSON.stringify(lineStr)}`,
        );
    }
    const level = match[1];
    const xrefId = match[2];
    const tag = match[3];
    const value = match[4];

    function assertTag(tag: string): asserts tag is TagName {
        if (!(tag in tagMap)) {
            throw new Error(`Tag match "${tag}" was not a known tag.`);
        }
    }

    assertTag(tag);

    return {
        level: +level,
        ...(xrefId ? { xrefId: xrefId.trim() as `@${string}@` } : undefined),
        tag,
        ...(value && { value: value.slice(1).replace(/@@/g, '@') }),
    };
}

function escape(value: string) {
    return value.replace(/@/g, '@@');
}

export function lineToString({
    level,
    xrefId,
    tag,
    value,
}: GedcomLine): string {
    const xrefStr = xrefId ? xrefId + ' ' : '';
    const valueStr =
        value === undefined
            ? ''
            : ' ' +
              (value.includes('\n')
                  ? escape(value)
                        .split('\n')
                        .join(`\n${level + 1} CONT `)
                  : escape(value));
    return `${level} ${xrefStr}${tag}${valueStr}`;
}
