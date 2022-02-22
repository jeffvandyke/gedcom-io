import type { MappedTagName } from '../tagMap';

export type XrefId = `@${string}@`;

export type GedcomDataTreeEntry = {
    tag: MappedTagName;
    xrefId?: XrefId;
} & (
    | {
          value: string;
      }
    | {
          value?: string;
          children: GedcomDataTreeEntry[];
      }
);

export type GedcomDataTree = Array<GedcomDataTreeEntry>
