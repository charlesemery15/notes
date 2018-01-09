(function(exports) {
  var NotePad= function() {
    this.pad = [];
  };

  NotePad.prototype.addNote = function(title, content) {
    note = new Note(title, content)
    this.pad.push(note)
  };

  NoteList.prototype.returnAllNotes = function(notelist) {
    return this.pad;
  };

  exports.NotePad = NotePad
})(this);
