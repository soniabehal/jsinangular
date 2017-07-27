import { DriveManagementPage } from './app.po';

describe('drive-management App', () => {
  let page: DriveManagementPage;

  beforeEach(() => {
    page = new DriveManagementPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
