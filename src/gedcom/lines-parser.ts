import { tagMap } from '../tagMap';
import { lineFromString, GedcomLine } from './line';
import { GedcomDataTree } from './types';

function splitLines(str: string) {
    const lines = str.split('\n');
    if (lines[lines.length - 1] !== '') {
        throw new Error('Expected empty line at end of file');
    }
    return lines.slice(0, -1);
}

function gatherGroupedLines(ungroupedLines: GedcomLine[]): GedcomLine[] {
    // Mutating State
    // let prevLine = undefined;
    return ungroupedLines.reduce<GedcomLine[]>((acc, element) => {
        acc.push(element);
        // TODO: handle CONC and CONT, save for later...
        // prevLine = element;
        return acc;
    }, []);
}

type LinesReader = {
    popLine(): GedcomLine | null;
    peekLine(): GedcomLine | null;
};

function makeLinesReader(lines: GedcomLine[]): LinesReader {
    let index = 0;
    return {
        popLine: () => {
            const ret = lines[index];
            index += 1;
            return ret ?? null;
        },
        peekLine: () => lines[index] ?? null,
    };
}

function recurGatherChildren(
    reader: LinesReader,
    currentLevel: number,
): GedcomDataTree {
    // Entered if peekNext returns level that exceeds currentLevel
    let results: GedcomDataTree = [];

    while (true) {
        const currentLine = reader.popLine();

        // Trace
        // console.debug({ currentLevel, results, currentLine });

        if (currentLine === null) return results; // Another base exit condition, happens if child call returns after consuming last line

        if (currentLine.level > currentLevel + 1) {
            throw new Error(
                `Gedcom parse error - currentLine.level ${currentLine.level} found where expected current level was ${currentLevel}`,
            );
        }

        const baseEntry = {
            tag: tagMap[currentLine.tag],
            ...(currentLine.xrefId ? { xrefId: currentLine.xrefId } : null),
        };
        const value = currentLine.value;
        let children: GedcomDataTree | null = null;

        let nextLine = reader.peekLine();

        if (nextLine !== null && nextLine.level > currentLine.level) {
            children = recurGatherChildren(reader, currentLevel + 1);
        }

        if (children === null) {
            if (value === undefined)
                throw new Error(
                    'Gedcom records must have either a value or children',
                );
            results.push({ ...baseEntry, value });
        } else {
            if (value !== undefined)
                results.push({ ...baseEntry, value, children });
            else {
                results.push({ ...baseEntry, children });
            }
        }

        nextLine = reader.peekLine(); // Needs re-check after calling recurGatherChildren

        if (nextLine === null || nextLine.level < currentLevel) {
            // Base exit condition
            return results;
        }
    }
}

export function parseLinesToDataTree(
    gedcomFile: string,
): GedcomDataTree {
    const lines = splitLines(gedcomFile);
    const parsedLines = lines.map(lineFromString);
    const groupedLines = gatherGroupedLines(parsedLines);

    const reader = makeLinesReader(groupedLines);
    const dataTree = recurGatherChildren(reader, 0);

    return dataTree;
}
