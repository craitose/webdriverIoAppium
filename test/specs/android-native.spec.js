describe('Android Native Feature Tests', () =>{
    it('Access an Activity directly', async () =>{
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");

        await driver.pause(3000);

        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    })

    it('Working with Dialog Boxes', async () =>{
        // access dialog activity
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");

        // click on first dialog
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();

        // accept Alert
       // await driver.acceptAlert(); 

        // dismiss Alert
        // await driver.dismissAlert();
        
        // get alert text
        console.log('ALERT TEXT -->', await driver.getAlertText());

        // click on OK button
        await $('//*[@resource-id="android:id/button1"]').click();

        // click on Cancle button
        //await $('//*[@resource-id="android:id/button2"]').click();

        // assert - alert box no longer visible
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();

    })

    it('Working with Vertical Scrolls', async () => {

        await $('~App').click();
        await $('~Activity').click();
        // scroll to the end (not reliable)
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

        // scroll Text  into View (more reliable)
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")');

        await $('~Secure Surfaces').click();

        // assertion
        await expect($('~Secure Dialog')).toExist();
    })

    it('Working with Horizontal Scrolls', async () =>{
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.Gallery1");

        // scroll to the right
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

        // scroll to the left
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');

        await driver.pause(3000);
    })

    it.only('Change Calendar Date challenge', async () =>{
        // go to date picker view activity
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.DateWidgets1");

        // get current date
        const initialdate = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText();

        // click the change date button
        await $('~change the date').click();

        // scroll to the right
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

        // click on the 10th
        await $('//*[@text="10"]').click();

        // click on the ok button
        await $('//*[@text="OK"]').click();

        // get new date
        const newDate = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText();

        // assert the dates have updated
        expect(initialdate).not.toEqual(newDate); 

    })
});