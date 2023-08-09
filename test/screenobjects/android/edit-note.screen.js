//const addNoteScreen = require("./add-note.screen");
import addNoteScreen from "./add-note.screen";

class EditNoteScreen {

    get firstNote() {

        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

    get noteView() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
    }

    get noteMenu() {
        return $('~More');
    }

    get deleteBtn() {
        return $('//*[@text="Delete"]');
    }

    get appMenu() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    get trashTxt() {
        return $('//*[@text="Trash Can"]');
    }

    //Functions
    async skipTutorial() {
        await addNoteScreen.skipBtn.click();


        await expect($('//*[@text="Add note"]')).toBeDisplayed();
    }

    async addSaveNote(titleEditTxt,bodyEditTxt) {
        await addNoteScreen.addNoteTxt.click();

        await addNoteScreen.textTxt.click();

        await expect($('//*[@text="Editing"]')).toBeDisplayed();

        await addNoteScreen.titleEditTxt.setValue(titleEditTxt);

        await addNoteScreen.bodyEditTxt.addValue(bodyEditTxt);

        await addNoteScreen.saveNote();

        await expect(addNoteScreen.editBtn).toBeDisplayed();

        await expect(addNoteScreen.noteView).toHaveText(bodyEditTxt);
    }
}

export default new EditNoteScreen();
