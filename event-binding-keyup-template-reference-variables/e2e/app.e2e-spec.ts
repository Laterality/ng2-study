import { EventBindingKeyupTemplateReferenceVariablesPage } from './app.po';

describe('event-binding-keyup-template-reference-variables App', function() {
  let page: EventBindingKeyupTemplateReferenceVariablesPage;

  beforeEach(() => {
    page = new EventBindingKeyupTemplateReferenceVariablesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
