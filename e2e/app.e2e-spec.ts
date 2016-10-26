import { MyTracksPage } from './app.po';

describe('my-tracks App', function() {
  let page: MyTracksPage;

  beforeEach(() => {
    page = new MyTracksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Tracks works!');
  });
});
