const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

const Select = async () => {
    //Creating connection of selenium driver and chrome driver
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    try {
        //Opening Web Page
        await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/dropdown-form')

        //First Selection
        const select1 =  await driver.findElement(By.xpath("//nb-select[@formcontrolname='select1']/button"))
        await select1.click()
        await driver.findElement(By.xpath("//nb-option[@value='1']")).click()
        await driver.findElement(By.xpath("//nb-option[@value='2']")).click()
        await select1.click()

        //Second Selection
        await driver.findElement(By.xpath(`//select[@formcontrolname='select2']/option[@value="0: 'volvo'"]`)).click()

        //Third Selection
        const select3 = await driver.findElement(By.xpath("//nb-select[@formcontrolname='select3']/button"))
        await select3.click()
        await driver.findElement(By.xpath("//nb-option[@value='3']")).click()

        //Fourth Selection
        const select4 = await driver.findElement(By.xpath("//select[@formcontrolname='select4']"))
        await select4.click()
        await driver.findElement(By.xpath(`//select[@formcontrolname='select4']/option[@value='volvo']`)).click()
        
        //Submit
        await driver.findElement(By.css('#submit')).click()

    } catch (error) {
        console.log(error)
    }
}

Select()