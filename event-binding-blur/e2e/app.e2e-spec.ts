import { EventBindingBlurPage } from './app.po';

describe('event-binding-blur App', function() {
  let page: EventBindingBlurPage;

  beforeEach(() => {
    page = new EventBindingBlurPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
