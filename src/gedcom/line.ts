import { XrefId, ValueType } from './types';
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
    value?: ValueType;
};

/** G1: level, G2: xrefid, G3: tag, G4: value */
const LINE_REGEX = /^(\d\d?)( @[0-9A-Za-z]+@)? (_?\w+)( .*)?$/;
const POINTER_REGEX = /^@[0-9A-Za-z]+@$/;

function parseValueType(value: string): ValueType {
    return value.match(POINTER_REGEX)
        ? { pointer: value as XrefId }
        : value.replace(/@@/g, '@');
}

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
    const valueMatch = match[4];
    const value = valueMatch !== undefined ? valueMatch.slice(1) : undefined;

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
        ...(value !== undefined ? { value: parseValueType(value) } : undefined),
    };
}

function valueToEscaped(value: ValueType) {
    return typeof value === 'object'
        ? value.pointer
        : value.replace(/@/g, '@@');
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
              (typeof value === 'string' && value.includes('\n')
                  ? valueToEscaped(value)
                        .split('\n')
                        .join(`\n${level + 1} CONT `)
                  : valueToEscaped(value));
    return `${level} ${xrefStr}${tag}${valueStr}`;
}
