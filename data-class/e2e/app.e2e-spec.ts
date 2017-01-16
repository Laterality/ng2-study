import { DataClassPage } from './app.po';

describe('data-class App', function() {
  let page: DataClassPage;

  beforeEach(() => {
    page = new DataClassPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
