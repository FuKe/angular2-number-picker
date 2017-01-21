import { AngularNumberPickerPage } from './app.po';

describe('angular-number-picker App', function() {
  let page: AngularNumberPickerPage;

  beforeEach(() => {
    page = new AngularNumberPickerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
