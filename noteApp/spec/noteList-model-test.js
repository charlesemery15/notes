var notelist = new NoteList();


it("List of notes should start off empty", beEmpty(notelist.list));

notelist.addNote("TITLE", "this is the content of a message");

it("Should be able to add a note to the notelist", toEqual(notelist.list[0].title, "TITLE"));
it("Should be able to read contents of added note", toEqual(notelist.list[0].message, "this is the content of a message"));
