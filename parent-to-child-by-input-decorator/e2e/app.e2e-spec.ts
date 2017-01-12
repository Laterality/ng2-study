import { ParentToChildByInputDecoratorPage } from './app.po';

describe('parent-to-child-by-input-decorator App', function() {
  let page: ParentToChildByInputDecoratorPage;

  beforeEach(() => {
    page = new ParentToChildByInputDecoratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
