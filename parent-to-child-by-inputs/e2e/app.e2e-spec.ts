import { ParentToChildByInputsPage } from './app.po';

describe('parent-to-child-by-inputs App', function() {
  let page: ParentToChildByInputsPage;

  beforeEach(() => {
    page = new ParentToChildByInputsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
