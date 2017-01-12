import { NestedComponentPage } from './app.po';

describe('nested-component App', function() {
  let page: NestedComponentPage;

  beforeEach(() => {
    page = new NestedComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
