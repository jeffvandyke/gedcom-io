import { reverseTagMap } from '../tagMap';
import { lineToString, GedcomLine } from './line';
import { GedcomDataTree } from './types';

function recurTraverseTree(dataTree: GedcomDataTree, currentLevel: number, mutOutLines: string[]) {
    for (const entry of dataTree) {
        const lineData: GedcomLine = {
            level: currentLevel,
            xrefId: entry.xrefId,
            tag: reverseTagMap[entry.tag],
            value: entry.value,
        }
        mutOutLines.push(lineToString(lineData));
        if ('children' in entry) {
            recurTraverseTree(entry.children, currentLevel + 1, mutOutLines);
        }
    }
}

export function writeLinesFromDataTree(
    dataTree: GedcomDataTree
): string {
    const lines: string[] = [];
    recurTraverseTree(dataTree, 0, lines);

    return lines.join('\n') + '\n';
}
