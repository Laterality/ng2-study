import { EventBindingClickPage } from './app.po';

describe('event-binding-click App', function() {
  let page: EventBindingClickPage;

  beforeEach(() => {
    page = new EventBindingClickPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
