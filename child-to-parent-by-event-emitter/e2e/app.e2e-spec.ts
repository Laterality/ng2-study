import { ChildToParentByEventEmitterPage } from './app.po';

describe('child-to-parent-by-event-emitter App', function() {
  let page: ChildToParentByEventEmitterPage;

  beforeEach(() => {
    page = new ChildToParentByEventEmitterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
