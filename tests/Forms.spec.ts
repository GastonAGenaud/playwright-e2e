import {test, expect} from 'playwright/test';
import { HomePage } from '../pages/home/homePage';
import { FormsPage } from '../pages/forms/formsPage';

test('should navigate to the home page', async ({page}) => {
    const homePage = new HomePage(page);
    const formsPage = new FormsPage(page);

    await homePage.navigate('/forms');
    await expect(page).toHaveTitle('DEMOQA');

    await formsPage.selectAccordionItem('Practice Form');

});