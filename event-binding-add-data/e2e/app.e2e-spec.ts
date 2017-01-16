import { EventBindingAddDataPage } from './app.po';

describe('event-binding-add-data App', function() {
  let page: EventBindingAddDataPage;

  beforeEach(() => {
    page = new EventBindingAddDataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
