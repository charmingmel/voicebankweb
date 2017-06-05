import { VoiceoverBankPage } from './app.po';

describe('voiceover-bank App', () => {
  let page: VoiceoverBankPage;

  beforeEach(() => {
    page = new VoiceoverBankPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
