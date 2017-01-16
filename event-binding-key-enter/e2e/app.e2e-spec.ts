import { EventBindingKeyEnterPage } from './app.po';

describe('event-binding-key-enter App', function() {
  let page: EventBindingKeyEnterPage;

  beforeEach(() => {
    page = new EventBindingKeyEnterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
