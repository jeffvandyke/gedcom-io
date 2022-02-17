import { lineFromString, GedcomLine } from './line';

const l = console.log.bind(console);

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
    getCurrent(): GedcomLine;
    peekNext(): GedcomLine | null;
    advance(): boolean;
};

function makeLinesReader(lines: GedcomLine[]): LinesReader {
    let index = 0;
    return {
        getCurrent: () => lines[index],
        peekNext: () => lines[index + 1] ?? null,
        advance: () => {
            index += 1;
            return lines[index] !== undefined;
        },
    };
}

function recurStructureLines(reader: LinesReader, currentLevel: number) {
    // Entered if peekNext returns level that exceeds currentLevel
    let result;
    
    const nextLine = reader.peekNext();
    if (nextLine == null || reader.peekNext().level <= currentLevel) {
        return result;
    }
}

export function parseLinesToNormObj(gedcomFile: string): object {
    const lines = splitLines(gedcomFile);
    const parsedLines = lines.map(lineFromString);
    const groupedLines = gatherGroupedLines(parsedLines);

    const reader = makeLinesReader(groupedLines);
    recurStructureLines(reader);

    // const levelEntries = [];
    // for (const line in groupedLines) {
    //     if (line.level === levelEntries.length) {
    //     } else if (line.level === levelEntries.length + 1) {
    //         levelEntries[line.level] = {};
    //     }

    // }
    return result;
}
