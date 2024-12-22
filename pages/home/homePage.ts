import { Locator, Page } from 'playwright';

export class HomePage {
    private page: Page;
    private categoryCard: (categoryName: string) => Locator;

    constructor(page: Page) {
        this.page = page;
        this.categoryCard = (categoryName: string) => 
            this.page.locator('.category-cards', { hasText: categoryName });

    }
    async open() {
        await this.page.goto('/');
    }

    async navigate(url: string) { 
        await this.page.goto(url);
    }

    async selectCategoryCard(categoryName: string) {
        const card = this.categoryCard(categoryName);
        await card.waitFor({ state: 'visible' });
        await card.click();
    }
}
