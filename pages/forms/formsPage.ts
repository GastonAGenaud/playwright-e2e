import { Page } from "playwright";

export class FormsPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto('/forms');
    }

    async selectAccordionItem(itemName: string) {
        const item = this.page.locator('div.accordion', { hasText: itemName });
        await item.click();
    }
}