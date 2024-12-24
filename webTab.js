const { Builder, By, until } = require("selenium-webdriver");
const example = async () => {
    let driver = new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize();
    await driver.get("https://www.tutorialspoint.com/selenium/practice/radio-button.php");

    //Locate the radio button 
    const radioButton = await driver.findElement(By.css('input[type="radio"][value="igottwo"]'));

    const isSelected = await radioButton.isSelected();
    if(!isSelected){
        await radioButton.click();
    }
    await driver.findElement(By.linkText('Web Tables')).click();
    let addButton = await driver.findElement(By.className('btn btn-primary'));
   await addButton.click();

//     await driver.findElement(By.xpath('firstname//*[@id="firstname"]')).click();
//     await driver.findElement(By.name('firstname')).sendKeys('Poornima');
//    await driver.findElement(By.name('lastname')).sendKeys('Deepanraj');


  // Get all window handles and switch to the new window
//   const handles = await driver.getAllWindowHandles();

//   for (const newWindow of handles) {
//       if (newWindow !== oldWindow) {
//           await driver.switchTo().window(newWindow);

//           // Perform actions in the new window
//           const fullName = await driver.findElement(By.name('firstname'));
//           await fullName.click();
//       }
//     }
// String mainWindow = driver.getWindowHandle();
let mainWindow = await driver.getAllWindowHandles();
await driver.findElement(By.className('col-sm-9')).click();
let allWindows = await driver.getAllWindowHandle();
// await driver.switchTo().window(windowHandle);
// await driver.switchTo().defaultContent();
 for (let handle of allWindows) {
  if (handle !== mainWindow) {
    await driver.switchTo().window(handle);

    let firstname = await driver.findElement(By.id('firstname'));
    await driver.wait(until.elementIsVisible(firstname),3000);
    firstname.sendKeys('Poornima');


      //Perform actions in the new window
          // const fullName = await driver.findElement(By.classname('col-sm-9'));
          // await fullName.click();
  }
}


// let table = await driver.findElement(By.className("table table-striped mt-3"));
// let rows = await table.findElements(By.tagName('tr'));
// for(let i=0;i<rows.length;i++){
//     let row = rows[i];

// let columns = await row.findElements(By.tagName('td'));
// console.log(`Row ${i+1} data:`);

// for(j=0;j< columns.length;j++){
//     let cell = columns[j];

//     let cellText = await cell.getText();
//     console.log( ` column ${j+1}: ${cellText}`);
// }
//}
}
example();