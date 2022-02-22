import { parseLinesToDataTree } from './lines-parser';
import {
    mockHeaderGedcom,
    mockHeaderDataTree,
    mockMixGedcom,
    mockMixDataTree,
} from './mocks';

describe('gedcom/lines-parser', () => {
    describe('parseLinesToDataTree', () => {
        it('Parses gedcom header properly', () => {
            const parsedDataTree = parseLinesToDataTree(mockHeaderGedcom);
            expect(parsedDataTree).toEqual(mockHeaderDataTree);
        });

        it('Parses xref and mixed values', () => {
            expect(parseLinesToDataTree(mockMixGedcom)).toEqual(
                mockMixDataTree,
            );
        });
    });
});
