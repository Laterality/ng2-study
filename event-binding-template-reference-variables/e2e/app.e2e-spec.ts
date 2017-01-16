import { EventBindingTemplateReferenceVariablesPage } from './app.po';

describe('event-binding-template-reference-variables App', function() {
  let page: EventBindingTemplateReferenceVariablesPage;

  beforeEach(() => {
    page = new EventBindingTemplateReferenceVariablesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
