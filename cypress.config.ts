import { defineConfig } from 'cypress';

const cypressJsonConfig: Cypress.ConfigOptions & any = {
  chromeWebSecurity: false,
  defaultCommandTimeout: 150000,
  requestTimeout: 50000,
  viewportHeight: 1080,
  viewportWidth: 1920,
  experimentalSessionAndOrigin: true,
  testIsolation: false,
  numTestsKeptInMemory: 0,
  responseTimeout: 50000,
  pageLoadTimeout: 40000,
  nodeOptions: `--max-old-space-size=16384`,
  specPattern: [
    'cypress/Tests/UITesting/*.{js,jsx,ts,tsx}',
    'cypress/Tests/ApiTesting/*.{js,jsx,ts,tsx}'
  ],
  video: true,

};
export default defineConfig({
  e2e: {
 
    baseUrl: 'https://magento.softwaretestingboard.com/',
        ...cypressJsonConfig,
   // specPattern: 'cypress/Tests/**/*.{js,jsx,ts,tsx}', // Points to your custom spec location
    //supportFile: 'cypress/support/e2e.ts',
    
  },
  retries: {
    runMode: 1,  // Retry failed tests in CI
    openMode: 0, // No retries in interactive mode
  },
  


   
  "includeShadowDom":true,
  
});