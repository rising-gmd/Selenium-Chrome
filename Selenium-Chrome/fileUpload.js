const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

const openBrowser = async () => {
    //Creating connection of selenium driver and chrome driver
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    try {
        //Opening Web Page
        await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/file-form')
        //Uploading the file + You have to provide the absolute path of where to pick the image
        await driver.findElement(By.xpath("//input[@formcontrolname='file']")).sendKeys(__dirname+'/assets\\download.jpeg')
        
        //Submit
        await driver.findElement(By.name('submit')).click()

    } catch (error) {
        console.log(error)
    }
}

openBrowser()