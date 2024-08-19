// @ts-check
const { test, expect } = require('@playwright/test');
const { off } = require('process');

// home page

test("search bar",async({page})=>{
  test.setTimeout(10000);
  await page.goto("https://www.flipkart.com/");
  await page.getByPlaceholder("Search for Products, Brands and More").fill("Iphone 14");
})

test("Cart click",async({page})=>{
  await page.goto("https://www.flipkart.com/");
  await page.getByAltText("Cart").click();
})

test("Flipkart title",async({page})=>{
  await page.goto("https://www.flipkart.com/");
  await expect(page.locator('img[title="Flipkart"]')).toBeVisible();
})

test("mobiles image",async({page})=>{
  await page.goto("https://www.flipkart.com/");
  const mobile = page.locator('img[alt="Mobiles"]')
  await expect(mobile).toBeVisible();
  await mobile.click();
})


test("title",async({page})=>{
  await page.goto("https://www.flipkart.com/");
  const appliance = page.getByRole('link',{name: /Appliances/});
  await appliance.nth(0).click();
})

// product

test("product heading",async({page})=>{
  await page.goto("https://www.flipkart.com/google-pixel-9-obsidian-256-gb/p/itm330ed8ebeefe1?pid=MOBH2HJGP3FGTECW&lid=LSTMOBH2HJGP3FGTECWIRLKP1&marketplace=FLIPKART&fm=neo%2Fmerchandising&iid=M_fbfa478f-f91c-4561-9f48-d320b05c5f7e_59_VAPFSVIRI72Z_MC.MOBH2HJGP3FGTECW&ppt=clp&ppn=mobile-phones-store&ssid=a4mzohex1c0000001723796709297&otracker=clp_pmu_v2_Google%2Bsmartphones_1_59.productCard.PMU_V2_Google%2BPixel%2B9%2B%2528Obsidian%252C%2B256%2BGB%2529_mobile-phones-store_MOBH2HJGP3FGTECW_neo%2Fmerchandising_0&otracker1=clp_pmu_v2_PINNED_neo%2Fmerchandising_Google%2Bsmartphones_LIST_productCard_cc_1_NA_view-all&cid=MOBH2HJGP3FGTECW");
  await expect(page.getByRole('heading',{name : 'Google Pixel 9 (Obsidian, 256 GB)'})).toBeVisible();
})

test("add to cart button",async({page})=>{
  await page.goto("https://www.flipkart.com/google-pixel-9-obsidian-256-gb/p/itm330ed8ebeefe1?pid=MOBH2HJGP3FGTECW&lid=LSTMOBH2HJGP3FGTECWIRLKP1&marketplace=FLIPKART&fm=neo%2Fmerchandising&iid=M_fbfa478f-f91c-4561-9f48-d320b05c5f7e_59_VAPFSVIRI72Z_MC.MOBH2HJGP3FGTECW&ppt=clp&ppn=mobile-phones-store&ssid=a4mzohex1c0000001723796709297&otracker=clp_pmu_v2_Google%2Bsmartphones_1_59.productCard.PMU_V2_Google%2BPixel%2B9%2B%2528Obsidian%252C%2B256%2BGB%2529_mobile-phones-store_MOBH2HJGP3FGTECW_neo%2Fmerchandising_0&otracker1=clp_pmu_v2_PINNED_neo%2Fmerchandising_Google%2Bsmartphones_LIST_productCard_cc_1_NA_view-all&cid=MOBH2HJGP3FGTECW");
  await page.getByRole('button',{name : 'Add to cart'}).click();
})

test("select phone color",async({page})=>{
  await page.goto("https://www.flipkart.com/google-pixel-9-obsidian-256-gb/p/itm330ed8ebeefe1?pid=MOBH2HJGP3FGTECW&lid=LSTMOBH2HJGP3FGTECWIRLKP1&marketplace=FLIPKART&fm=neo%2Fmerchandising&iid=M_6575b154-decb-48ff-8d22-25701d356503_59_VAPFSVIRI72Z_MC.MOBH2HJGP3FGTECW&ppt=clp&ppn=mobile-phones-store&ssid=jii3ytp1xc0000001723797900497&otracker=clp_pmu_v2_Google%2Bsmartphones_1_59.productCard.PMU_V2_Google%2BPixel%2B9%2B%2528Obsidian%252C%2B256%2BGB%2529_mobile-phones-store_MOBH2HJGP3FGTECW_neo%2Fmerchandising_0&otracker1=clp_pmu_v2_PINNED_neo%2Fmerchandising_Google%2Bsmartphones_LIST_productCard_cc_1_NA_view-all&cid=MOBH2HJGP3FGTECW");
  await page.locator('img[src="https://rukminim2.flixcart.com/image/144/144/xif0q/mobile/d/y/m/pixel-9-ga05843-in-google-original-imah3pfgd9zadkyx.jpeg?q=50"]').click()

})

test("check pincode",async({page})=>{
  await page.goto("https://www.flipkart.com/google-pixel-9-obsidian-256-gb/p/itm330ed8ebeefe1?pid=MOBH2HJGP3FGTECW&lid=LSTMOBH2HJGP3FGTECWIRLKP1&marketplace=FLIPKART&fm=neo%2Fmerchandising&iid=M_fbfa478f-f91c-4561-9f48-d320b05c5f7e_59_VAPFSVIRI72Z_MC.MOBH2HJGP3FGTECW&ppt=clp&ppn=mobile-phones-store&ssid=a4mzohex1c0000001723796709297&otracker=clp_pmu_v2_Google%2Bsmartphones_1_59.productCard.PMU_V2_Google%2BPixel%2B9%2B%2528Obsidian%252C%2B256%2BGB%2529_mobile-phones-store_MOBH2HJGP3FGTECW_neo%2Fmerchandising_0&otracker1=clp_pmu_v2_PINNED_neo%2Fmerchandising_Google%2Bsmartphones_LIST_productCard_cc_1_NA_view-all&cid=MOBH2HJGP3FGTECW");
  await page.getByPlaceholder('Enter Delivery Pincode').fill('421301');
  await page.locator('span' , {hasText :'Check'}).click();
})

test("share",async({page})=>{
  await page.goto("https://www.flipkart.com/google-pixel-9-obsidian-256-gb/p/itm330ed8ebeefe1?pid=MOBH2HJGP3FGTECW&lid=LSTMOBH2HJGP3FGTECWIRLKP1&marketplace=FLIPKART&fm=neo%2Fmerchandising&iid=M_fbfa478f-f91c-4561-9f48-d320b05c5f7e_59_VAPFSVIRI72Z_MC.MOBH2HJGP3FGTECW&ppt=clp&ppn=mobile-phones-store&ssid=a4mzohex1c0000001723796709297&otracker=clp_pmu_v2_Google%2Bsmartphones_1_59.productCard.PMU_V2_Google%2BPixel%2B9%2B%2528Obsidian%252C%2B256%2BGB%2529_mobile-phones-store_MOBH2HJGP3FGTECW_neo%2Fmerchandising_0&otracker1=clp_pmu_v2_PINNED_neo%2Fmerchandising_Google%2Bsmartphones_LIST_productCard_cc_1_NA_view-all&cid=MOBH2HJGP3FGTECW");
  await page.locator('span.sm7nRr').click();
})


//shirt 

test("size select",async({page})=>{
  await page.goto("https://www.flipkart.com/metronaut-men-solid-casual-dark-green-shirt/p/itm27b1951c2811e?pid=SHTGTCJQGSTR5XDQ&lid=LSTSHTGTCJQGSTR5XDQRZC9FQ&marketplace=FLIPKART&store=clo%2Fash%2Faxc%2Fmmk%2Fkp7&srno=b_1_3&otracker=hp_rich_navigation_3_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BTop%2BWear~Men%2527s%2BCasual%2BShirts_S4ITKV5A4VL6&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all&fm=organic&iid=57c765ad-1ff0-456b-903b-9929af19d96b.SHTGTCJQGSTR5XDQ.SEARCH&ppt=browse&ppn=browse&ssid=cneya67ym80000001723804603973");
  await page.waitForSelector('ul.hSEbzK');
  const size = page.locator('ul.hSEbzK >> text="4XL"');
  await size.click();
})

test("select color",async({page})=>{
  await page.goto("https://www.flipkart.com/metronaut-men-solid-casual-dark-green-shirt/p/itm27b1951c2811e?pid=SHTGTCJQGSTR5XDQ&lid=LSTSHTGTCJQGSTR5XDQRZC9FQ&marketplace=FLIPKART&store=clo%2Fash%2Faxc%2Fmmk%2Fkp7&srno=b_1_3&otracker=hp_rich_navigation_3_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BTop%2BWear~Men%2527s%2BCasual%2BShirts_S4ITKV5A4VL6&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all&fm=organic&iid=57c765ad-1ff0-456b-903b-9929af19d96b.SHTGTCJQGSTR5XDQ.SEARCH&ppt=browse&ppn=browse&ssid=cneya67ym80000001723804603973");
  await page.locator('img[src="https://rukminim2.flixcart.com/image/180/180/xif0q/shirt/p/t/a/l-formal-shirt-metronaut-original-imahfccfjsg4uwmg.jpeg?q=50"]').click()
})

test("select offers",async({page})=>{
  await page.goto("https://www.flipkart.com/metronaut-men-solid-casual-dark-green-shirt/p/itm27b1951c2811e?pid=SHTGTCJQGSTR5XDQ&lid=LSTSHTGTCJQGSTR5XDQRZC9FQ&marketplace=FLIPKART&store=clo%2Fash%2Faxc%2Fmmk%2Fkp7&srno=b_1_3&otracker=hp_rich_navigation_3_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BTop%2BWear~Men%2527s%2BCasual%2BShirts_S4ITKV5A4VL6&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all&fm=organic&iid=57c765ad-1ff0-456b-903b-9929af19d96b.SHTGTCJQGSTR5XDQ.SEARCH&ppt=browse&ppn=browse&ssid=cneya67ym80000001723804603973");
  const offers = page.locator('button:has-text("more offers")');
  await offers.waitFor({ state: 'visible' });
  await offers.click();
})

test("show prices",async({page})=>{
  await page.goto("https://www.flipkart.com/metronaut-men-solid-casual-dark-green-shirt/p/itm27b1951c2811e?pid=SHTGTCJQGSTR5XDQ&lid=LSTSHTGTCJQGSTR5XDQRZC9FQ&marketplace=FLIPKART&store=clo%2Fash%2Faxc%2Fmmk%2Fkp7&srno=b_1_3&otracker=hp_rich_navigation_3_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BTop%2BWear~Men%2527s%2BCasual%2BShirts_S4ITKV5A4VL6&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all&fm=organic&iid=57c765ad-1ff0-456b-903b-9929af19d96b.SHTGTCJQGSTR5XDQ.SEARCH&ppt=browse&ppn=browse&ssid=cneya67ym80000001723804603973");
  await expect(page.locator('div.hl05eU')).toBeVisible();
})

test('reviews type', async ({ page }) => {
  await page.goto("https://www.flipkart.com/metronaut-men-solid-casual-dark-green-shirt/p/itm27b1951c2811e?pid=SHTGTCJQGSTR5XDQ&lid=LSTSHTGTCJQGSTR5XDQRZC9FQ&marketplace=FLIPKART&store=clo%2Fash%2Faxc%2Fmmk%2Fkp7&srno=b_1_3&otracker=hp_rich_navigation_3_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BTop%2BWear~Men%2527s%2BCasual%2BShirts_S4ITKV5A4VL6&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all&fm=organic&iid=57c765ad-1ff0-456b-903b-9929af19d96b.SHTGTCJQGSTR5XDQ.SEARCH&ppt=browse&ppn=browse&ssid=cneya67ym80000001723804603973");
  const listItem = page.locator('text="Style"');
  await expect(listItem).toBeVisible();
  await listItem.click();
});