import { EventBindingKeyupPage } from './app.po';

describe('event-binding-keyup App', function() {
  let page: EventBindingKeyupPage;

  beforeEach(() => {
    page = new EventBindingKeyupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
