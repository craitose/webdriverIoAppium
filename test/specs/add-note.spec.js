import editNoteScreen from "../screenobjects/android/edit-note.screen";

describe('Add Notes', () => {

   before(async () => {

      await editNoteScreen.skipTutorial();

   });

   it('add a note, save changes & verify note', async () => {

      await editNoteScreen.addSaveNote("Favourite Side Arms", "Colt\nCloc\nDeagle");

   });


});