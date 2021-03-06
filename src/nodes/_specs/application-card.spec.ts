import { expect, use } from 'chai';
import { Document } from '../../index';
import { adfValidator } from '../../_chai';

describe('Application Card', () => {

  before(async function() {
    this.timeout(5000);
    use(await adfValidator());
  });

  it('should set default text attribute to title', () => {
    const doc = new Document();
    const card = doc.applicationCard('Title');
    expect(doc).to.be.validADF();
    expect(card.toJSON()).to.deep.equal({
      type: 'applicationCard',
      attrs: {
        collapsible: false,
        text: 'Title',
        title: {
          text: 'Title'
        }
      }
    });
  });

  it('should allow to override the default text attribute', () => {
    const doc = new Document();
    const card = doc.applicationCard('Title', 'Other text');
    expect(doc).to.be.validADF();
    expect(card.toJSON()).to.deep.equal({
      type: 'applicationCard',
      attrs: {
        collapsible: false,
        text: 'Other text',
        title: {
          text: 'Title'
        }
      }
    });
  });

  it('should set the background image', () => {
    const doc = new Document();
    const card = doc
      .applicationCard('Title')
      .background('https://example.org/bg.png');
    expect(doc).to.be.validADF();
    expect(card.toJSON()).to.deep.equal({
      type: 'applicationCard',
      attrs: {
        collapsible: false,
        text: 'Title',
        title: {
          text: 'Title'
        },
        background: {
          url: 'https://example.org/bg.png'
        }
      }
    });
  });

  it('should set the collapsible flag', () => {
    const doc = new Document();
    const card = doc
      .applicationCard('Title')
      .collapsible(true);
    expect(doc).to.be.validADF();
    expect(card.toJSON()).to.deep.equal({
      type: 'applicationCard',
      attrs: {
        collapsible: true,
        text: 'Title',
        title: {
          text: 'Title'
        }
      }
    });
  });

  it('should set the description', () => {
    const doc = new Document();
    const card = doc
      .applicationCard('Title')
      .description('Some description');
    expect(doc).to.be.validADF();
    expect(card.toJSON()).to.deep.equal({
      type: 'applicationCard',
      attrs: {
        collapsible: false,
        text: 'Title',
        title: {
          text: 'Title'
        },
        description: {
          text: 'Some description'
        }
      }
    });
  });

  it('should set the link attributes', () => {
    const doc = new Document();
    const card = doc
      .applicationCard('Title')
      .link('https://example.com/target');
    expect(doc).to.be.validADF();
    expect(card.toJSON()).to.deep.equal({
      type: 'applicationCard',
      attrs: {
        collapsible: false,
        text: 'Title',
        textUrl: 'https://example.com/target',
        title: {
          text: 'Title'
        },
        link: {
          url: 'https://example.com/target'
        }
      }
    });
  });

  it('should set the preview url', () => {
    const doc = new Document();
    const card = doc
      .applicationCard('Title')
      .preview('https://example.com/preview');
    expect(doc).to.be.validADF();
    expect(card.toJSON()).to.deep.equal({
      type: 'applicationCard',
      attrs: {
        collapsible: false,
        text: 'Title',
        title: {
          text: 'Title'
        },
        preview: {
          url: 'https://example.com/preview'
        }
      }
    });
  });

  describe('actions', () => {

    it('should never be empty', () => {
      const doc = new Document();
      doc.applicationCard('Title').action();
      expect(() => doc.toJSON()).to.throw();
    });

    it('should set the title and target attributes', () => {
      const doc = new Document();
      const action = doc.applicationCard('Title').action();
      action.title('Action');
      action.target({
        receiver: 'app',
        key: 'test'
      });
      action.parameters({
        test: 100
      });
      expect(doc).to.be.validADF();
      expect(action.toJSON()).to.deep.equal({
        title: 'Action',
        target: {
          receiver: 'app',
          key: 'test'
        },
        parameters: {
          test: 100
        }
      });
    });

    it('should fail when target is missing', () => {
      const doc = new Document();
      const action = doc.applicationCard('Title').action();
      action.title('Action');
      expect(doc).to.not.be.validADF();
      expect(() => doc.toJSON()).to.throw();
    });

    it('should fail when target key is missing', () => {
      const doc = new Document();
      const action = doc.applicationCard('Title').action();
      action.title('Action');
      // @ts-ignore
      expect(() => action.target({
        receiver: 'app'
      })).to.throw();
    });

    it('should fail when title is missing', () => {
      const doc = new Document();
      const action = doc.applicationCard('Title').action();
      action.target({
        key: 'test'
      });
      expect(doc).to.not.be.validADF();
      expect(() => doc.toJSON()).to.throw();
    });
  });

  describe('details', () => {

    it('should never be empty', () => {
      const doc = new Document();
      doc.applicationCard('Title').detail();
      expect(() => doc.toJSON()).to.throw();
    });

    it('should set the title attribute', () => {
      const doc = new Document();
      const detail = doc.applicationCard('Title').detail();
      detail.title('Detail');
      expect(doc).to.be.validADF();
      expect(detail.toJSON()).to.deep.equal({
        title: 'Detail'
      });
    });

    it('should set the text attribute', () => {
      const doc = new Document();
      const detail = doc.applicationCard('Title').detail();
      detail.text('Detail');
      expect(doc).to.be.validADF();
      expect(detail.toJSON()).to.deep.equal({
        text: 'Detail'
      });
    });

    it('should set the badge value', () => {
      const doc = new Document();
      const detail = doc.applicationCard('Title').detail();
      detail.badge({ value: 1 });
      expect(doc).to.be.validADF();
      expect(detail.toJSON()).to.deep.equal({
        badge: {
          value: 1
        }
      });
    });

    it('should set the badge appearance', () => {
      const doc = new Document();
      const detail = doc.applicationCard('Title').detail();
      detail.badge({ value: 1, appearance: 'primary' });
      expect(doc).to.be.validADF();
      expect(detail.toJSON()).to.deep.equal({
        badge: {
          value: 1,
          appearance: 'primary'
        }
      });
    });

    it('should set the badge max', () => {
      const doc = new Document();
      const detail = doc.applicationCard('Title').detail();
      detail.badge({ value: 1, appearance: 'primary', max: 10 });
      expect(doc).to.be.validADF();
      expect(detail.toJSON()).to.deep.equal({
        badge: {
          value: 1,
          appearance: 'primary',
          max: 10
        }
      });
    });

    it('should set the badge max', () => {
      const doc = new Document();
      const detail = doc.applicationCard('Title').detail();
      detail.badge({ value: 1, appearance: 'primary', max: 10 });
      expect(doc).to.be.validADF();
      expect(detail.toJSON()).to.deep.equal({
        badge: {
          value: 1,
          appearance: 'primary',
          max: 10
        }
      });
    });

    it('should set the icon', () => {
      const doc = new Document();
      const detail = doc.applicationCard('Title').detail();
      detail.icon({ url: 'https://example.com/icon.png', label: 'Icon' });
      expect(doc).to.be.validADF();
      expect(detail.toJSON()).to.deep.equal({
        icon: {
          url: 'https://example.com/icon.png',
          label: 'Icon'
        }
      });
    });

    it('should set the lozenge text attribute', () => {
      const doc = new Document();
      const detail = doc.applicationCard('Title').detail();
      detail.lozenge({ text: 'Loz' });
      expect(doc).to.be.validADF();
      expect(detail.toJSON()).to.deep.equal({
        lozenge: {
          text: 'Loz'
        }
      });
    });

    it('should set the lozenge appearance attribute', () => {
      const doc = new Document();
      const detail = doc.applicationCard('Title').detail();
      detail.lozenge({ text: 'Loz', appearance: 'new' });
      expect(doc).to.be.validADF();
      expect(detail.toJSON()).to.deep.equal({
        lozenge: {
          text: 'Loz',
          appearance: 'new'
        }
      });
    });

    it('should set the lozenge bold attribute', () => {
      const doc = new Document();
      const detail = doc.applicationCard('Title').detail();
      detail.lozenge({ text: 'Loz', appearance: 'new', bold: true });
      expect(doc).to.be.validADF();
      expect(detail.toJSON()).to.deep.equal({
        lozenge: {
          text: 'Loz',
          appearance: 'new',
          bold: true
        }
      });
    });

    it('should set the user attribute for a single user', () => {
      const doc = new Document();
      const detail = doc.applicationCard('Title').detail();
      detail.user({
        icon: { url: 'https://example.com/user.png', label: 'user' },
        id: '123'
      });
      expect(doc).to.be.validADF();
      expect(detail.toJSON()).to.deep.equal({
        users: [
          {
            icon: { url: 'https://example.com/user.png', label: 'user' },
            id: '123'
          }
        ]
      });
    });

    it('should set the user attribute for multiple users', () => {
      const doc = new Document();
      const detail = doc.applicationCard('Title').detail();
      detail.user({
        icon: { url: 'https://example.com/user1.png', label: 'user1' },
        id: '123'
      });
      detail.user({
        icon: { url: 'https://example.com/user2.png', label: 'user2' },
        id: '124'
      });
      expect(doc).to.be.validADF();
      expect(detail.toJSON()).to.deep.equal({
        users: [
          {
            icon: { url: 'https://example.com/user1.png', label: 'user1' },
            id: '123'
          },
          {
            icon: { url: 'https://example.com/user2.png', label: 'user2' },
            id: '124'
          }
        ]
      });
    });
  });

  describe('context', () => {

    it('should set the text attribute', () => {
      const doc = new Document();
      const context = doc.applicationCard('Title').context('Context');
      expect(doc).to.be.validADF();
      expect(context.toJSON()).to.deep.equal({
        text: 'Context'
      });
    });

    it('should set the icon', () => {
      const doc = new Document();
      const context = doc.applicationCard('Title').context('Context');
      context.icon({ url: 'https://example.com/icon.png', label: 'Icon' });
      expect(doc).to.be.validADF();
      expect(context.toJSON()).to.deep.equal({
        text: 'Context',
        icon: {
          url: 'https://example.com/icon.png',
          label: 'Icon'
        }
      });
    });
  });

  describe('title user', () => {

    it('should set the title user without id', () => {
      const doc = new Document();
      const card = doc.applicationCard('Title');
      card.titleUser({ url: 'https://example.com/icon.png', label: 'Icon' });
      expect(doc).to.be.validADF();
      expect(card.toJSON()).to.deep.equal({
        type: 'applicationCard',
        attrs: {
          collapsible: false,
          text: 'Title',
          title: {
            text: 'Title',
            user: {
              icon: {
                url: 'https://example.com/icon.png',
                label: 'Icon'
              }
            }
          }
        }
      });
    });

    it('should set the title user with id', () => {
      const doc = new Document();
      const card = doc.applicationCard('Title');
      card.titleUser({ url: 'https://example.com/icon.png', label: 'Icon' })
        .id('abc');
      expect(doc).to.be.validADF();
      expect(card.toJSON()).to.deep.equal({
        type: 'applicationCard',
        attrs: {
          collapsible: false,
          text: 'Title',
          title: {
            text: 'Title',
            user: {
              icon: {
                url: 'https://example.com/icon.png',
                label: 'Icon'
              },
              id: 'abc'
            }
          }
        }
      });
    });

  });

});
