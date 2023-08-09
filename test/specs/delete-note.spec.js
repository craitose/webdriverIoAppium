import editNoteScreen from "../screenobjects/android/edit-note.screen";

describe('Delete a note & check that it is found in the trash', () => {

    before(async () =>{

         // skip the tutorial on app startup
        await editNoteScreen.skipTutorial();
         // add and save new note
        await editNoteScreen.addSaveNote("TV Shows","Big Bang\nGood Doctor\nPure Genius");
           // click back to enter main screen
        await driver.back();
    })

    it('Delete Note and verify it in the trash can', async () => {

        //click on the note
        const Note = await editNoteScreen.firstNote.getText();
        await editNoteScreen.firstNote.click();

        // click on the menu dots

        await editNoteScreen.noteMenu.click();

        //click on the delete button

        await editNoteScreen.deleteBtn.click();

        //confirm delete choice
        await driver.acceptAlert();

        //open navigation menu on main screen

        await editNoteScreen.appMenu.click();

        //select the trashcan

        await editNoteScreen.trashTxt.click();

        // assert the correct note is in the trash can

        await expect(editNoteScreen.firstNote).toHaveText(Note);


    });
})