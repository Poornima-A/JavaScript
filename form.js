const { Builder, By, until } = require("selenium-webdriver");
const example = async () => {
    let driver = new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize();
    await driver.get("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");

    const nameField = await driver.findElement(By.id('name')).sendKeys("Poornima ");
    const emailField = await driver.findElement(By.id('email')).sendKeys("Poornima@gmail.com");

      // Wait for the element to be present (modify locator as per your needs)
     const gender = await driver.wait(until.elementLocated(By.css('input[value="Female"]')), 10000);

      // Click the radio button using JavaScript
         gender = await driver.findElement(By.linkText('Female'));
      await driver.executeScript("arguments[0].click();", gender);

      console.log("Radio button clicked successfully!");

   }
example();