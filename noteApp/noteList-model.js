(function(exports) {

  function NoteList(){
    this.list = [];
  };

  NoteList.prototype.addNote = function(title, content) {
    note = new Note(title, content)
    this.list.push(note)
  }

  exports.NoteList = NoteList
})(this);
