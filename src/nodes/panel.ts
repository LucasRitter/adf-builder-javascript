import { BulletList } from './bullet-list';
import { Heading } from './heading';
import { ContentNode, TopLevelNode, Typed } from './index';
import { OrderedList } from './ordered-list';
import { Paragraph } from './paragraph';

export type PanelType = 'info' | 'note' | 'tip' | 'warning';

export class Panel extends TopLevelNode {

  private content = new ContentNode<TopLevelNode>('panel');

  constructor(
    private readonly panelType: PanelType) {
    super();
  }

  public heading(level: number): this {
    this.content.add(new Heading(level));
    return this;
  }

  public paragraph(): Paragraph {
    return this.content.add(new Paragraph());
  }

  public orderedList(): OrderedList {
    return this.content.add(new OrderedList());
  }

  public bulletList(): BulletList {
    return this.content.add(new BulletList());
  }

  public toJSON(): Typed {
    return {
      ...this.content.toJSON(),
      attrs: {
        panelType: this.panelType
      }
    };
  }
}
