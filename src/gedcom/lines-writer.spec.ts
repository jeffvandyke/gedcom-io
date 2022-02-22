import { writeLinesFromDataTree } from './lines-writer';
import {
    mockHeaderGedcom,
    mockHeaderDataTree,
    mockMixGedcom,
    mockMixDataTree,
} from './mocks';

describe('gedcom/lines-writer', () => {
    describe('writeLinesFromDataTree', () => {
        it('Writes gedcom header properly', () => {
            expect(writeLinesFromDataTree(mockHeaderDataTree)).toEqual(mockHeaderGedcom);
        });

        it('Writes xref and mixed values', () => {
            expect(writeLinesFromDataTree(mockMixDataTree)).toEqual(
                mockMixGedcom,
            );
        });
    });
});
