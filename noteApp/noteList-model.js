(function(exports) {
  var NoteList= function() {
    this.list = [];
  };

  NoteList.prototype.addNote = function(title, content) {
    note = new Note(title, content)
    this.list.push(note)
  };

  NoteList.prototype.returnAllNotes = function(notelist) {
    return this.list;
  };

  exports.NoteList = NoteList
})(this);
