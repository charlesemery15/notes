var notepad = new NotePad();


it("List of notes should start off empty", beEmpty(notepad.pad));

notepad.addNote("TITLE", "this is the content of a message");

it("Should be able to add a note to the notelist", toEqual(notepad.pad[0].title, "TITLE"));
it("Should be able to read contents of added note", toEqual(notepad.pad[0].message, "this is the content of a message"));
it("Should return all notes in noteList", toEqual(notepad.returnAllNotes(), notepad.pad ));
