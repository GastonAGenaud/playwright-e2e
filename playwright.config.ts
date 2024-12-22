import {defineConfig} from 'playwright/test';


export default defineConfig({
    workers: '100%',
    fullyParallel: true,
    use: {
        baseURL: 'https://demoqa.com',
        headless: true,
    },
    reporter: [['html', {outputFolder: 'playwright-report', open: 'never'}]],
    projects: [
        {
            name: 'Desktop',
            use: {viewport: {width: 1920, height: 1080}},
        },
        {
            name: 'Mobile',
            use: {viewport: {width: 375, height: 812}},
        },
        {
            name: 'Firefox',
            use: {browserName: 'firefox'},
        }
    ],
});