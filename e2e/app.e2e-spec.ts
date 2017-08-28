import { EmailUserAppPage } from './app.po';

describe('email-user-app App', function() {
  let page: EmailUserAppPage;

  beforeEach(() => {
    page = new EmailUserAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
