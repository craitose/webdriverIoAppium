describe('Android Elements Tests', () => {
    it('Find element by accessibilty id', async () => {
        // find element by access id
        const appOption = await $('~App');
        // click on element
        await appOption.click();
        // assertion
        const actionBar = await $('~Action Bar')
        await expect(actionBar).toBeExisting();
    })

    it('Find element by class name', async () => {
        // find element by class name
        const className = await $('android.widget.TextView');

        // assertion
        await expect(className).toHaveText("API Demos");
    })

    xit('Find elements by xpath', async () => {
        // find element by xpath - (//classname[@attribute=value])
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
        // find by resource id
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();
        // find element by text
        await $('//android.widget.TextView[@text="Command two"]').click();
        // find element by class
        const textAssertion = await $('//android.widget.TextView');
        await expect(textAssertion).toHaveText("You selected: 1 , Command two");

    })

    it('Find elements by UIAutomator', async () => { //when xpath is not an option
        // find by text contians
        await $('android=new UiSelector().textContains("Alert")').click();
    })

    it('Find multiple elements by ', async () => {
        const  expectedList = [
        "API Demos",
        "Access'ibility",
        "Accessibility",
        "Animation",
        "App",
        "Content",
        "Graphics",
        "Media",
        "NFC",
        "OS",
        "Preference",
        "Text",
        "Views",]

        const actualList = []
        // find multiple elements
        const textList = await $$('android.widget.TextView'); // use double dollars for multiple element captures
        // loop through them
        for (const element of textList) {
            actualList.push(await element.getText());
        }
        // assert the list
        expect(actualList).toEqual(expectedList)
    })

    it.only('Input fields excercise', async () =>{

        const country = "Canada"

        //find and click on views
        await $('//android.widget.TextView[@content-desc="Views"]').click();
        //find and click on Auto complete
        await $('//android.widget.TextView[@content-desc="Auto Complete"]').click();
        //find and click on Screen top
        await $('//android.widget.TextView[@content-desc="1. Screen Top"]').click();
        //find and fill in Country text input
        const input = await $('//*[@resource-id="io.appium.android.apis:id/edit"]'); 

        await input.addValue('Canada');
        //varify input
        await expect(input).toHaveText(country);
    })
});