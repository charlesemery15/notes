(function(exports) {

  function NoteList(){
    this.list = [];
  };

  NoteList.prototype.addNote = function(title, content) {
    note = new Note(title, content)
    this.list.push(note)
  }

  NoteList.prototype.returnAllNotes

  exports.NoteList = NoteList
})(this);
