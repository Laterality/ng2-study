import { FirstComponentPage } from './app.po';

describe('first-component App', function() {
  let page: FirstComponentPage;

  beforeEach(() => {
    page = new FirstComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
