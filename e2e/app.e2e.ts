import { HiMooPage } from './app.po';

describe('hi-moo App', function() {
  let page: HiMooPage;

  beforeEach(() => {
    page = new HiMooPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('hi-moo works!');
  });
});
