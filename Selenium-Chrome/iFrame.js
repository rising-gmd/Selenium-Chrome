const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

const iFrameGoogleForm = async () => {
    //Creating connection of selenium driver and chrome driver
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    try {
        //Opening iFrame Form + we will be using keys rather than xPaths as they are too long and difficult to track
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/iframe-form")
        //Switching to iFrame
        await driver.switchTo().frame(0)
        await driver.sleep(3000);
        /*Targetting the first input field of form using Xpath as it is simple. Remember xPath may change later on so you need to write the xPath after checking it in your HTML inspection */
        await driver.findElement(By.xpath("//input[@aria-labelledby='i1']")).sendKeys("Ghulam Mohiuddin")
        /* We want to select three so we need to press arrow down key thrice */
        await driver.actions().sendKeys(Key.chord(Key.TAB, Key.ARROW_DOWN, Key.ARROW_DOWN, Key.ARROW_DOWN)).perform()
        /* So far so good Ahh now again we need to press Space menu will open, will do one key down press as I want to select first and then key space so it is selected */
        await driver.actions().sendKeys(Key.chord(Key.TAB, Key.TAB, Key.TAB)).perform()
        await driver.actions().sendKeys(Key.SPACE).perform()
        await driver.actions().sendKeys(Key.chord( 
            Key.ARROW_DOWN, 
            Key.ARROW_DOWN, 
            Key.ARROW_DOWN, 
            )).perform()
        await driver.actions().sendKeys(Key.SPACE).perform()
        /* To go on next question, again press Tab and give date inputs values along with tab as tabs lands inside inputs */
        await driver.actions().sendKeys(Key.chord(Key.TAB,"06")).perform()
        await driver.actions().sendKeys(Key.chord(Key.TAB,"22")).perform()
        await driver.actions().sendKeys(Key.chord(Key.TAB,"2023")).perform()
        /* Press TAB to go to next select and then space to select */
        await driver.actions().sendKeys(Key.TAB).perform()
        await driver.actions().sendKeys(Key.SPACE).perform()
        /* Press Two TABS to go to next */
        await driver.actions().sendKeys(Key.chord(Key.TAB, Key.TAB)).perform()
        await driver.actions().sendKeys(Key.SPACE).perform()
        /* Move on to next and fill in the input */
        await driver.actions().sendKeys(Key.TAB).perform()
        await driver.findElement(By.xpath("//textarea[@aria-label='Your answer']")).sendKeys("Hello again")
        /* Submission */
        await driver.actions().sendKeys(Key.TAB).perform()
        await driver.actions().sendKeys(Key.SPACE).perform()
    } catch (error) {
        console.log(error)
    }
}

iFrameGoogleForm()