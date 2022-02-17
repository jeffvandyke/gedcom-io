export const tagFieldMap = {
    /** The character set and encoding used in this GEDCOM file. */
    CHAR: 'characterEncoding',
    /** Additional text for the superior line value. A CONC record without a line value is a fatal
syntax error.
The CONC record exists to allow logical line values longer than the maximum physical line
value. A GEDCOM writer must split long line values into parts and use subordinate CONC
records to record the additional parts. A GEDCOM reader must append CONC line value
must be appended to logical line value it is reconstituting for the superior record.
The CONC & CONT section discusses CONC & CONT usage in detail. */
    CONC: 'concatenation',
    /** A newline and usually some additional text as well for the superior line value. A CONT
record without a line value is not an error, but the GEDCOM encoding of an empty line.
The CONT record exists to allow logical line values to contain newlines, while physical
lines must not contain newlines. A GEDCOM writer must split a line values at a newline,
and then continue writing the value using a subordinate CONT record. A GEDCOM reader
must append a newline to the logical line value it is reconstituting for the superior record
before appending the CONT line value itself.
The CONC & CONT section discusses CONC & CONT usage in detail. */
    CONT: 'continuation',
    /** The name of the GEDCOM form used in this GEDCOM file.
The GEDCOM specification defines just one GEDCOM form: LINEAGE-LINKED. */
    FORM: 'form',
    /** Information about the use of GEDCOM in a GEDCOM file. */
    GEDC: 'gedcom',
    /** Information about the entire GEDCOM file. */
    HEAD: 'header',
    /** A top-level record that marks the end of the GEDCOM file. */
    TRLR: 'trailer',
    /** Version number. */
    VERS: 'version',

    /** A short name of a title, description, or name. */
    ABBR: 'abbreviation',
    /** The contemporary place, usually required for postal purposes, of an individual, a submitter
    of information, a repository, a business, a school, or a company. */
    ADDR: 'address',
    /** The first line of an address. */
    ADR1: 'address1',
    /** The second line of an address. */
    ADR2: 'address2',
    /** The third line of an address. */
    ADR3: 'address3',
    /** Adoption is a legal event that changes a child's legal parents from one set of parents to
    another set of parents.
    While some of the parents involved are likely to be biological or official parents, neither
    assumption should be made.
    Adoption is an event that changes who the legal parents are. A child that has been adopted
    can be adopted again. The official parents should not be assumed to be the biological
    parents. A child can and often is adopted by a biological or official parent. In many
    jurisdictions, a child is technically always adopted by a couple, even if one of them is
    already is a legal parent. */
    ADOP: 'adoption',
    /** The age of the individual at the time an event occurred, or the age listed in the document. */
    AGE: 'age',
    /** The institution or individual having authority and/or responsibility to manage or govern. */
    AGNC: 'agency',
    /** Declaring a marriage void from the beginning (retroactively invalid). */
    ANUL: 'annulment',
    /** An indicator to link friends, neighbours, or associates, who aren't close relatives of an
    individual. */
    ASSO: 'associates',
    /** The name of the individual who created or compiled information. */
    AUTH: 'author',
    /** The event of baptism, performed in infancy or later. (See also CHR, page 124.) */
    BAPM: 'baptism',
    /** The religious ceremony held when a Jewish boy reaches age 13. */
    BARM: 'barMitzvah',
    /** The religious ceremony held when a Jewish girl reaches age 13, also known as "Bat
    Mitzvah." */
    BASM: 'basMitzvah',
    /** The emergence of offspring from their mother as a separate being.
    Birth does not imply life. Birth includes stillbirth. */
    BIRT: 'birth',
    /** The action of burying a body.
    BURI includes all forms of burial, including burial at sea, and as there is no separate event
    for interment (entombment), BURI is used for that too. */
    BURI: 'burial',
    /** The number used by a repository to identify the specific items in its collections. */
    CALN: 'callNumber',
    /** The name of an individual's rank or status in society which is sometimes based on racial or
    religious differences, or differences in wealth, inherited rank, profession, occupation, etc. */
    CAST: 'caste',
    /** A description of the cause of the associated event or fact, such as the cause of death. */
    CAUS: 'cause',
    /** The event of the periodic count of the population for a designated locality, such as a national
    or state Census. */
    CENS: 'census',
    /** Indicates a change, correction, or modification. Typically used in connection with a DATE to
    specify when a change in information occurred. */
    CHAN: 'change',
    /** The biological, official or legal (adopted) child of a parent or parents. */
    CHIL: 'child',
    /** The religious event of baptising and naming a child. */
    CHR: 'christening',
    /** The religious event of baptizing and naming an adult person. */
    CHRA: 'adultChristening',
    /** A lower level jurisdictional unit. Normally an incorporated municipal unit. */
    CITY: 'city',
    /** The religious rite that confirms membership of a church (confirms because previously
    established by baptism). */
    CONF: 'confirmation',
    /** A statement that accompanies data to protect it from unlawful duplication and distribution. */
    COPR: 'copyright',
    /** A name of an institution, agency, corporation, or company. */
    CORP: 'corporate',
    /** Disposal of a body by fire, by burning it to ashes. */
    CREM: 'cremation',
    /** The name of the country. */
    CTRY: 'country',
    /** Data. */
    DATA: 'data',
    /** The time of an event in a calendar format. */
    DATE: 'date',
    /** The end of a life. */
    DEAT: 'death',
    /** A system receiving data. */
    DEST: 'destination',
    /** The legal dissolution of a marriage. */
    DIV: 'divorce',
    /** An event of filing for a divorce by a spouse. */
    DIVF: 'divorceFiled',
    /** The physical characteristics of a person, place, or thing. */
    DSCR: 'physicalDescription',
    /** Indicator of a level of education attained. */
    EDUC: 'education',
    /** An electronic mail address.
    GEDCOM 5.5.1 lists EMAIL as EMAI (no L) in this Appendix. A forgiving GEDCOM
    5.5.1 reader may treat EMAI as a synonym for EMAIL.
    A GEDCOM 5.5.5 writer must use EMAIL (the actual tag). A GEDCOM 5.5.5 reader must
    reject EMAI (no L) as an illegal tag and abort processing. */
    EMAIL: 'email',
    /** An event of leaving one's homeland with the intent of residing elsewhere. */
    EMIG: 'emigration',
    /** An event of recording or announcing an agreement between two people to become married. */
    ENGA: 'engagement',
    /** Pertaining to a noteworthy happening related to an individual, a group, or an organisation.
    An EVEN (event) structure is usually qualified or classified by a subordinate use of the
    TYPE record. */
    EVEN: 'event',
    /** Pertaining to a noteworthy attribute or fact concerning an individual, a group, or an
    organisation.
    A FACT structure is usually qualified or classified by a subordinate use of the TYPE record. */
    FACT: 'fact',
    /** The FAM (family group) structure records a single family group; a couple and their children.
    The group consist of two partners, either or both of which may be unknown, with or without
    children. The partners may or may not be spouses, and may or may not have children, but
    are biological, official or legal parents to each of the children in the group.
    Recording a single family often requires more than one family group record. */
    FAM: 'familyGroup',
    /** Identifies the family group in which an individual appears as a child. */
    FAMC: 'familyChild',
    /** Identifies the family group in which an individual appears as a partner.
    The name and abbreviation of this record are misleading: the individual need not be a spouse
    in that family group. The family group record is used for all relationships, not just marriages.
    Do not assume that the person is a spouse in that family group. */
    FAMS: 'familySpouse',
    /** Electronic facsimile transmission. */
    FAX: 'facsimile',
    /** Literally the first communion an individual partakes in. Communion is a rite within christian
    churches, and the first communion is considered a rite of passage. */
    FCOM: 'firstCommunion',
    /** The name of an external file, or, in the case of HEAD.FILE, the original filename of this
    GEDCOM file. */
    FILE: 'file',
    /** A phonetic rendering of a superior text string. */
    FONE: 'phonetic',
    /** A given or earned name used for official identification of a person. */
    GIVN: 'givenName',
    /** An event of awarding educational diplomas or degrees to individuals. */
    GRAD: 'graduation',
    /** A partner in a FAM (family group) record, often male, often partner to a woman, and a
    biological, official or legal parent to each of the children of the couple.
    The name of this record strongly suggests that the line value must identify a husband, but
    that is not the case; the relationship need not be a marriage, and the individual need not be
    male, it may identify a woman in a lesbian relationship. */
    HUSB: 'husband',
    /** An identifier, often called a number, assigned to identify a person within some significant
    external system.
    The value typically isn't number, but a value containing spaces and dashes in addition to
    letters and digits.
    The prime example is a passport “number”. American genealogists often record Social
    Security Numbers.
    The difference between the INDO record and the REFN record is that the IDNO record is for
    third-party numbers, and the REFN record is for user-defined numbers. */
    IDNO: 'identNumber',
    /** An event of entering into a new locality with the intent of residing there. */
    IMMI: 'immigration',
    /** A person. */
    INDI: 'individual',
    /** The name of the language used in a communication or transmission of information. */
    LANG: 'language',
    /** Latitude of a position on the globe. */
    LATI: 'latitude',
    /** Longitude of a position on the globe. */
    LONG: 'longitude',
    /** Pertains to a representation of measurements usually presented in a graphical form. */
    MAP: 'map',
    /** An event of an official public notice given that two people intend to marry. */
    MARB: 'marriageBann',
    /** An event of recording a formal agreement of marriage, including the prenuptial agreement in
    which marriage partners reach agreement about the property rights of one or both, securing
    property to their children. */
    MARC: 'marrContract',
    /** An event of obtaining a legal license to marry. */
    MARL: 'marrLicense',
    /** Marriage is an official and legal event, defined by the applicable law and customs of the land
    and the time, that creates a couple, possibly with children. This includes so-called common
    law marriages.
    The name of this record is ill-chosen. The MARR record isn't a marriage record, but a
    relationship record.
    The MARR record can and must be used for all relationship types, with marriage merely
    being the default relationship type for the couple. */
    MARR: 'marriage',
    /** An event of creating an agreement between two people contemplating marriage, at which
    time they agree to release or modify property rights that would otherwise arise from the
    marriage. */
    MARS: 'marrSettlement',
    /** Information about the media or having to do with the medium in which information is
    stored. */
    MEDI: 'media',
    /** Depending on context, a product name, repository name or an individual's full name.
    The NAME must not contain nobility titles. The NAME may contain earned titles and
    salutations (See NPFX, page 127).
    More than one NAME record should be used for individuals known by multiple names. */
    NAME: 'name',
    /** The nationality of an individual. */
    NATI: 'nationality',
    /** The event of obtaining citizenship. */
    NATU: 'naturalisation',
    /** The number of children that this individual (INDI.NCHI) or couple (FAM.NCHI) has. */
    NCHI: 'numberOfChildren',
    /** A descriptive or familiar that is used instead of, or in addition to, one's proper name. */
    NICK: 'nickname',
    /** The number of relationships (FAM records as a partner) this person would occur in if all
    relationships were included. */
    NMR: 'numberOfRelationships',
    /** Additional information provided by the submitter for understanding the enclosing data. */
    NOTE: 'note',
    /** Text which appears on a name line before the given and surname parts of a name.
    e.g. Lt. Cmndr. Joseph /Allen/ Jr.
    In this example Lt. Cmndr. is considered as the name prefix portion. */
    NPFX: 'namePrefix',
    /** Text which appears on a name line after or behind the given and surname parts of a name.
    e.g. Lt. Cmndr. Joseph /Allen/ Jr.
    In this example Jr. is considered as the name suffix portion. */
    NSFX: 'nameSuffix',
    /** Pertaining to a grouping of attributes used in describing something. Usually referring to the
    data required to represent a multimedia object, such an audio recording, a photograph of a
    person, or an image of a document. */
    OBJE: 'object',
    /** The type of work or profession of an individual. */
    OCCU: 'occupation',
    /** A number or description to identify where information can be found in a referenced work. */
    PAGE: 'page',
    /** Information pertaining to an individual to parent lineage chart. */
    PEDI: 'pedigree',
    /** A unique number assigned to access a specific telephone. */
    PHON: 'phone',
    /** A jurisdictional name to identify the place or location of an event. */
    PLAC: 'place',
    /** A code used by a postal service to identify an area to facilitate mail handling. */
    POST: 'postalCode',
    /** An event of judicial determination of the validity of a will. May indicate several related
    court activities over several dates. */
    PROB: 'probate',
    /** Pertaining to possessions such as real estate or other property of interest. */
    PROP: 'property',
    /** Refers to when and/or where a work was published or created. */
    PUBL: 'publication',
    /** An assessment of the certainty of the evidence to support the conclusion drawn from
    evidence. */
    QUAY: 'qualityOfData',
    /** A description or number used to identify an item for filing, storage, or other reference
    purposes. */
    REFN: 'reference',
    /** A relationship value between the indicated contexts. */
    RELA: 'relationship',
    /** A religious denomination to which a person is affiliated or for which a record applies. */
    RELI: 'religion',
    /** An institution or person that has the specified item as part of their collection(s). */
    REPO: 'repository',
    /** An address or place of residence that a family or individual resided. */
    RESI: 'residence',
    /** The event of ending one's occupational career. */
    RETI: 'retirement',
    /** A number assigned to a record by an originating automated system that can be used by a
    receiving system to report results pertaining to that record. */
    RIN: 'recIdNumber',
    /** A name given to a role played by an individual in connection with an event. */
    ROLE: 'role',
    /** A romanised transcription of a superior text string. */
    ROMN: 'romanised',
    /** Indicates the sex of an individual; male, female, intersex or unknown. */
    SEX: 'sex',
    /** The initial or original material from which information was obtained or (HEAD.SOUR) the
    system that created the GEDCOM file. */
    SOUR: 'source',
    /** A name piece used as a non-indexing pre-part of a surname. */
    SPFX: 'surnPrefix',
    /** A geographical division of a larger jurisdictional area (country), such as a province or state. */
    STAE: 'state',
    /** An individual or organization who contributes genealogical data to a file or transfers it to
    someone else. */
    SUBM: 'submitter',
    /** A family name passed on or used by members of a family. */
    SURN: 'surname',
    /** The exact wording found in an original source document. */
    TEXT: 'text',
    /** A time value in a 24-hour clock format, including hours, minutes, and optional seconds,
    separated by a colon (:). Fractions of seconds are shown in decimal notation. */
    TIME: 'time',
    /** A description of a specific writing or other work, such as the title of a book when used in a
    source context, or a formal designation used by an individual in connection with positions of
    royalty or other social status, such as Grand Duke. */
    TITL: 'title',
    /** A further qualification to the meaning of the superior record. The value does not have any
    computer processing reliability. It is more in the form of a short one or two word note that
    should be displayed any time the associated data is displayed. */
    TYPE: 'type',
    /** A partner in a FAM (family group), often female, often partner to a man, and a biological,
    official or legal parent to each of the children of this couple.
    The name of this record strongly suggests that the line value must identify a wife, but that is
    not the case; the relationship need not be a marriage, and the individual need not be female,
    it may identify a man in a gay relationship. */
    WIFE: 'wife',
    /** A legal document treated as an event, by which a person disposes of his or her estate, to take
    effect after death. The event date is the date the will was signed while the person was alive.
    (See also PROB (probate), page 128.) */
    WILL: 'will',
    /** World Wide Web address. */
    WWW: 'web',
} as const;
