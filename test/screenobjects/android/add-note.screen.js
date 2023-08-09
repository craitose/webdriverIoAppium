class AddNoteScreen {

    get skipBtn() {
        return  $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
    }

    get addNoteTxt() {
        return  $('//*[@text="Add note"]');
    }

    get textTxt() {
        return $('//*[@text="Text"]');
    }

    get titleEditTxt() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]'); 
    }

    get bodyEditTxt() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }

    get editBtn() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    }

    get noteView() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
    }

    get titleTxt() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
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

    async saveNote() {
        await driver.back();
        await driver.back();
    }

}

export default new AddNoteScreen();