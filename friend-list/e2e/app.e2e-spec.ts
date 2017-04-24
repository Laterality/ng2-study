import { FriendListPage } from './app.po';

describe('friend-list App', function() {
  let page: FriendListPage;

  beforeEach(() => {
    page = new FriendListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
