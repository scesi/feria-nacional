import { FeriaNacionalPage } from './app.po';

describe('feria-nacional App', () => {
  let page: FeriaNacionalPage;

  beforeEach(() => {
    page = new FeriaNacionalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
