var note = new Note('test title', 'test message');

it("Title should return title name", toEqual(note.title, 'test title'));

it("Message should return message content", toEqual(note.message, 'test message'));
