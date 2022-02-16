import { XrefId } from './types';

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
    const valueStr = value ? ' ' + value : '';
    return `${level} ${xrefStr}${tag}${valueStr}`;
}
