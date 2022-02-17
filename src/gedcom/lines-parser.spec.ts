import { parseLinesToNormObj } from './lines-parser';

describe('gedcom/lines-parser', () => {
    describe('parseLinesToNormObj', () => {
        it('Parses gedcom header properly', () => {
            expect(
                parseLinesToNormObj(`0 HEAD
1 GEDC
2 VERS 5.5.5
2 FORM LINEAGE-LINKED
3 VERS 5.5.5
1 CHAR UTF-8
1 SOUR GS
2 NAME GEDCOM Specification
2 VERS 5.5.5
2 CORP gedcom.org
3 ADDR
4 CITY LEIDEN
3 WWW www.gedcom.org
1 DATE 2 Oct 2019
2 TIME 0:00:00
1 FILE 555Sample.ged
1 LANG English
1 SUBM @U1@
`,
                ),
            ).toEqual({
                header: {
                    gedcom: true,
                    version: '5.5.5',
                    form: {
                        value: 'LINEAGE-LINKED',
                        version: '5.5.5',
                    },
                    characterEncoding: 'UTF-8',
                    source: {
                        value: 'GS',
                        name: 'GEDCOM Specification',
                        version: '5.5.5',
                        corporate: {
                            value: 'gedcom.org',
                            address: {
                                city: 'LEIDEN',
                            },
                            web: 'www.gedcom.org',
                        },
                    },
                    date: {
                        value: '2 Oct 2019',
                        time: '0:00:00',
                    },
                    file: '555Sample.ged',
                    language: 'English',
                    submitter: { pointer: '@U1@' },
                },
            });

            // - When descension occurs
            //   - if val === true, replace with object (ignore val for subrecords-only)
            //   - if value !== true, assign val to "value"
            // - Special non-tag field names: "pointer", "value"
        });
    });
});
