<h1>This test script contains automated testcases for testing SauceDemo website</h1>
<h2>Pre-requisites</h2>
Please ensure Playwright version 1.48.2 is installed
<h2>How to execute</h2>
1. Copy SauceDemo-test.spec.js to your execution environment.<br>
2. Run the following command to execute the tests:<br>
npx playwright test SauceDemo-test.spec.js
<h2>Test scenarios covered</h2>
1.	Login as standard_user, Sort by Price (high to low) and Logout from Home page.<br>
2.	Login as standard_user, ‘Add to cart’ a product from Home page, complete the Checkout process and Logout from Checkout complete page.<br>
3.	Login as Locked_out_user is unsuccessful.<br>
<h2>Notes</h2>
1.The first testcase captures a screenshot for visual inspection.<br>
2.The tests will run in three diffferent browsers (Chrome, firefox, Webkit).<br>
3.To emulate the tests on a mobile (eg. iPhone 13) add the following to playwright.config.js file<br>
{<br>
name:'Mobile Safari'<br>
use:{...devices[iPhone 13]<br>
}



