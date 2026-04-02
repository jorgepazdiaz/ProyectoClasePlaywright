module.exports = {
  default: {
    require: [
      'tests/steps/**/*.ts',
      'tests/hooks/**/*.ts'
    ],
    requireModule: [
      'ts-node/register'
    ],
    format: [
      'progress',
       'json:reports/cucumber-report-[hash].json'
    ],
    paths: [
      'tests/features/**/*.feature'
    ],
    tags: process.env.TAGS || ''   // Permite ejecutar escenarios específicos usando la variable de entorno TAGS
  }
};