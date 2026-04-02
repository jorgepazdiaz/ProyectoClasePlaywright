const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
  jsonDir: 'reports',
  reportPath: 'reports/html-report',
  displayDuration: true,
  pageTitle: 'Automation Report',
  reportName: 'Playwright Cucumber Report',
  metadata: {
    browser: {
      name: 'chrome',
      version: 'latest'
    },
    device: 'CI',
    platform: {
      name: 'ubuntu',
      version: 'latest'
    }
  }
});