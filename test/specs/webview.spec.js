import editNoteScreen from "../screenobjects/android/edit-note.screen";

describe('Web Browser Access', () =>{
    before(async ()=>{
          // skip the tutorial on app startup
        await editNoteScreen.skipTutorial();
    });

    it('Access external link and verify content in browser', async () =>{

        await editNoteScreen.appMenu.click();

        await $('//*[@text="Like us on Facebook"]').click();

        // remove facebook login popup
        await $('//*[@text="󱤅"]').click();

        const pageAddress = await $('//*[@text="ColorNote"]');

        // get current Context

        console.log(await driver.getContext());

        // get all the Context
        await driver.getContexts()
        

        await expect(pageAddress).toBeDisplayed();
        
        // switch back to app

        await driver.back();
        await browser.back();

        // continue test....

        await $('//*[@text="Notes"]').click();
        const addNoteText = await $('//*[@text="Add note"]')
        await expect(addNoteText).toBeDisplayed()

    })
})