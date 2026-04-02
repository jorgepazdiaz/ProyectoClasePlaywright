const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "reports/json",
  reportPath: "reports/html-report",
  pageTitle: "Reporte Curso Playwright",
  reportName: "Playwright Cucumber Report",

  metadata: {
    browser: {
      name: "chrome",
      version: "latest",
    },
    device: "CI",
    platform: {
      name: "linux",
      version: "ubuntu-latest",
    },
  },

  customData: {
    title: "Execution Info",
    data: [
      { label: "Project", value: "Playwright + Cucumber" },
      { label: "Execution", value: "GitHub Actions" },
    ],
  },

  // 🔥🔥🔥 CLAVE PARA GITHUB PAGES
  disableLog: true,
  displayDuration: true,
});