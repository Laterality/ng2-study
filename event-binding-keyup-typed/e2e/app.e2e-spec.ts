import { EventBindingKeyupTypedPage } from './app.po';

describe('event-binding-keyup-typed App', function() {
  let page: EventBindingKeyupTypedPage;

  beforeEach(() => {
    page = new EventBindingKeyupTypedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
