
var note = new Note('test title', 'test message')

if (note.title !== 'test title') {
  throw new Error("note title shoule equal title");
} else {
  console.log("Passed test!");
}

if (note.message !== 'test message') {
  throw new Error('note message should equal message')
} else {
  console.log('Passed test!')
};
