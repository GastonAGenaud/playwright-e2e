import {test, expect} from 'playwright/test';
import {HomePage} from '../pages/home/homePage';

test('should navigate to the home page', {annotation: [
                                                { type: 'test', description: 'should navigate to the home page' },
                                                { type: 'testID', description: 'CON-20' },
                                                { type: 'tag', description: 'regression' },
                                                { type: 'severity', description: 'critical' }
                                            ]},
     async ({page}) => {
    await page.goto('/');
    await expect(page).toHaveTitle('DEMOQA');
});

test('open the form category', async ({page}) => {
    const homePage = new HomePage(page);

    await homePage.open();
    await homePage.selectCategoryCard('Forms');
})