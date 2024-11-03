import { test, expect } from "@playwright/test";

test('login, sort and logout', async ({ page }) => {
    await page.goto('https://saucedemo.com');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="username"]').press('Tab');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.getByText('Name (A to Z)Name (A to Z)').click();
    await page.locator('[data-test="product-sort-container"]').selectOption('hilo');
   await page.screenshot({path:'tests/'+Date.now()+'hilo.png', fullPage:true});
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com');
    await expect(page).toHaveTitle("Swag Labs");
})

test('Buy a product from Homepage', async ({ page }) => {

    await page.goto('https://saucedemo.com')
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').fill('Test');
    await page.locator('[data-test="lastName"]').fill('Customer');
    await page.locator('[data-test="postalCode"]').fill('AB 1CD');
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();

})

test('Locked out user', async ({ page }) => {
    await page.goto('https://saucedemo.com');
    await page.locator('[data-test="username"]').fill('locked_out_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data_test="error"]').isVisible();
})




