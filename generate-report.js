const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
  jsonFile: 'reports/cucumber-report.json',
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