import { NgforPage } from './app.po';

describe('ngfor App', function() {
  let page: NgforPage;

  beforeEach(() => {
    page = new NgforPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
