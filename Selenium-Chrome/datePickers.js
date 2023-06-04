const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

const DatePickerInput = async () => {
    //Creating connection of selenium driver and chrome driver
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    try {
        //Opening Web Page
        await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/datepicker-form')
        //Filling first Date Input
        await driver.findElement(By.xpath("//input[@formcontrolname='dateOne']")).sendKeys('Jun 1, 2023', Key.RETURN)
        //Filling second Date Input
        await driver.findElement(By.xpath("//input[@formcontrolname='dateTwo']")).sendKeys('Jun 1, 2023 - Jun 9, 2023', Key.RETURN)
        //Submit
        await driver.findElement(By.name('submit')).click()
    } catch (error) {
        console.log(error)
    }
}

DatePickerInput()