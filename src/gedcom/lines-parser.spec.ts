import { parseLinesToDataTree, GedcomDataTreeEntry } from './lines-parser';

describe('gedcom/lines-parser', () => {
    describe('parseLinesToDataTree', () => {
        it('Parses gedcom header properly', () => {
            const headerDataTreeEntry: GedcomDataTreeEntry = {
                tag: 'header',
                children: [
                    {
                        tag: 'gedcom',
                        children: [
                            { tag: 'version', value: '5.5.5' },

                            {
                                tag: 'form',
                                value: 'LINEAGE-LINKED',
                                children: [{ tag: 'version', value: '5.5.5' }],
                            },
                        ],
                    },
                    { tag: 'characterEncoding', value: 'UTF-8' },
                    {
                        tag: 'source',
                        value: 'GS',
                        children: [
                            { tag: 'name', value: 'GEDCOM Specification' },
                            { tag: 'version', value: '5.5.5' },
                            {
                                tag: 'corporate',
                                value: 'gedcom.org',
                                children: [
                                    {
                                        tag: 'address',
                                        children: [
                                            {
                                                tag: 'city',
                                                value: 'LEIDEN',
                                            },
                                        ],
                                    },
                                    { tag: 'web', value: 'www.gedcom.org' },
                                ],
                            },
                        ],
                    },
                    {
                        tag: 'date',
                        value: '2 Oct 2019',
                        children: [{ tag: 'time', value: '0:00:00' }],
                    },
                    { tag: 'file', value: '555Sample.ged' },
                    { tag: 'language', value: 'English' },
                    { tag: 'submitter', value: '@U1@' },
                ],
            };

            const parsedDataTree = parseLinesToDataTree(
                '0 HEAD\n' +
                    '1 GEDC\n' +
                    '2 VERS 5.5.5\n' +
                    '2 FORM LINEAGE-LINKED\n' +
                    '3 VERS 5.5.5\n' +
                    '1 CHAR UTF-8\n' +
                    '1 SOUR GS\n' +
                    '2 NAME GEDCOM Specification\n' +
                    '2 VERS 5.5.5\n' +
                    '2 CORP gedcom.org\n' +
                    '3 ADDR\n' +
                    '4 CITY LEIDEN\n' +
                    '3 WWW www.gedcom.org\n' +
                    '1 DATE 2 Oct 2019\n' +
                    '2 TIME 0:00:00\n' +
                    '1 FILE 555Sample.ged\n' +
                    '1 LANG English\n' +
                    '1 SUBM @U1@\n',
            );

            expect(parsedDataTree).toHaveLength(1);
            expect(parsedDataTree[0]).toEqual(headerDataTreeEntry);
        });

        it('Parses xref and mixed values', () => {
            expect(
                parseLinesToDataTree(
                    '0 @I1@ INDI\n' +
                        '1 NAME Robert Eugene /Williams/\n' +
                        '1 BIRT\n' +
                        '2 DATE 2 Oct 1822\n' +
                        '2 SOUR @S1@\n' +
                        '3 PAGE Sec. 2, p. 45\n',
                ),
            ).toEqual([
                {
                    tag: 'individual',
                    xrefId: '@I1@',
                    children: [
                        { tag: 'name', value: 'Robert Eugene /Williams/' },
                        {
                            tag: 'birth',
                            children: [
                                { tag: 'date', value: '2 Oct 1822' },
                                {
                                    tag: 'source',
                                    value: '@S1@',
                                    children: [
                                        { tag: 'page', value: 'Sec. 2, p. 45' },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ]);
        });
    });
});
