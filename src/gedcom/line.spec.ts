import { lineToString, lineFromString } from './line';

describe('gedcom/line ', () => {
    it('Should write a line from tag and value', () => {
        expect(
            lineToString({
                level: 2,
                tag: 'NAME',
                value: 'GEDCOM Specification',
            }),
        ).toEqual('2 NAME GEDCOM Specification');
    });

    it('Should write a line from xref and tag', () => {
        expect(lineToString({
            level: 0,
            xrefId: '@I2@',
            tag: 'INDI',
        })).toEqual('0 @I2@ INDI');
    });

    it.skip('Should parse tag + value', () => {
        expect(lineFromString('2 NAME GEDCOM Specification')).toEqual({
            level: 2,
            tag: 'NAME',
            value: 'GEDCOM Specification',
        });
    });
});
