import { Angular2nangcaoPage } from './app.po';

describe('angular2nangcao App', () => {
  let page: Angular2nangcaoPage;

  beforeEach(() => {
    page = new Angular2nangcaoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
