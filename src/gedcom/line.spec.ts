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
        expect(
            lineToString({
                level: 0,
                xrefId: '@I2@',
                tag: 'INDI',
            }),
        ).toEqual('0 @I2@ INDI');
    });

    it('Should write a multiline value with CONT', () => {
        expect(
            lineToString({
                level: 1,
                tag: 'NOTE',
                value: 'This is a note field that is\ncontinued on the next line.',
            }),
        ).toEqual(`1 NOTE This is a note field that is
2 CONT continued on the next line.`);
    });

    it('Should parse tag + value', () => {
        expect(lineFromString('2 NAME GEDCOM Specification')).toEqual({
            level: 2,
            tag: 'NAME',
            value: 'GEDCOM Specification',
        });
    });

    it('Should parse weird ADOP line', () => {
        expect(lineFromString('1 ADOP ')).toEqual({
            level: 1,
            tag: 'ADOP',
            value: '',
        });

        expect(lineFromString('1 ADOP')).toEqual({
            level: 1,
            tag: 'ADOP',
        });
    });

    it('Should parse FAM line with ident', () => {
        expect(lineFromString('0 @F1@ FAM')).toEqual({
            level: 0,
            xrefId: '@F1@',
            tag: 'FAM',
        });
    });

    it('Should parse TRLR', () => {
        expect(lineFromString('0 TRLR')).toEqual({
            level: 0,
            tag: 'TRLR',
        });
    });
});
