import type { MappedTagName } from '../tagMap';

export type XrefId = `@${string}@`;

export type ValueType = string | { pointer: XrefId };

export type GedcomDataTreeEntry = {
  tag: MappedTagName;
  xrefId?: XrefId;
} & (
  | {
      value: ValueType;
    }
  | {
      value?: ValueType;
      children: GedcomDataTreeEntry[];
    }
);

export type GedcomDataTree = Array<GedcomDataTreeEntry>;
