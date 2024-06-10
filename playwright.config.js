// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  // retries: process.env.CI ? 2 : 0,
  workers: 1,
  expect: {
    timeout: 5000
  },
  use: {
    baseURL: 'https://demowebshop.tricentis.com',
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    trace: 'on',
  },
  reporter: [['list'],
            ['html'],
            ['junit', {outputFile:'results.xml' }],
            ['json', {outputFile: 'results.json'}],
            ['allure-playwright',{outputFolder: 'myAllureReport'}]
  ],
  // projects: [
  //   {
  //     name: 'chromium',
  //     use: { ...devices['Desktop Chrome'] },
  //   },

  //   {
  //     name: 'firefox',
  //     use: { ...devices['Desktop Firefox'] },
  //   },

  //   {
  //     name: 'webkit',
  //     use: { ...devices['Desktop Safari'] },
  //   },
  // ],
});

