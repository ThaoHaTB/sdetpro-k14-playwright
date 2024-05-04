import { test } from "@playwright/test";
import FooterTestFlow from "../../test-flows/global/FooterTestFlow";

const BASE_URL = 'https://demowebshop.tricentis.com';
const PAGES = [
    {
        pageName: 'Books',
        slug: '/books'
    },
    {
        pageName: 'Desktops',
        slug: '/desktops'
    },
    {
        pageName: 'Cell phone',
        slug: '/cell-phones'
    },
    {
        pageName: 'Apparel shoes',
        slug: '/apparel-shoes'
    },
    {
        pageName: 'Digital dowloads',
        slug: '/digital-downloads'
    },
    {
        pageName: 'Jewelry',
        slug: '/jewelry'
    },
    {
        pageName: 'Gift Cards',
        slug: '/gift-cards'
    },
]
let randomNumber = Math.floor(Math.random() * PAGES.length);
const { pageName, slug } = PAGES[randomNumber];

// test.only(`Test Footer component on ${pageName}`, async ({page}) => {
//     console.log(pageName);
//     await page.goto(BASE_URL.concat(slug));
//     const footerTestFlow: FooterTestFlow = new FooterTestFlow(page);
//     await footerTestFlow.verifyFooterComponent();
// })

test.only('Test Footer component on random page', async ({page}) => {
    console.log(pageName);
    await page.goto(BASE_URL.concat(slug));
    const footerTestFlow: FooterTestFlow = new FooterTestFlow(page);
    await footerTestFlow.verifyFooterComponent();
})