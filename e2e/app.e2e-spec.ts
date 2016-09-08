import { TimesheetreportPage } from './app.po';

describe('timesheetreport App', function() {
  let page: TimesheetreportPage;

  beforeEach(() => {
    page = new TimesheetreportPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
