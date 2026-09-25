module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['src/**/*.ts'],
    paths: ['features/**/*.feature'],
    format: ['progress-bar', 'html:reports/cucumber-report.html', 'json:reports/cucumber-report.json'],
    publishQuiet: true,
  },
};
