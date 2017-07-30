import { Mark } from './mark';

const colorPattern = new RegExp('^#[0-9a-f]{6}$').compile();

export class TextColor extends Mark {

  constructor(private readonly color: string) {
    super('textColor');
    if (!colorPattern.test(color)) {
      throw new Error(`Color ${color} does not match ^#[0-9a-f]{6}$`);
    }
  }

  public toJSON() {
    return {
      type: this.type,
      attrs: {
        color: this.color
      }
    };
  }
}
