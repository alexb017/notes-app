export default class Note {
  constructor(category, content, timeAgo) {
    this.category = category;
    this.content = content;
    this.timeAgo = timeAgo;
  }

  getAllNotes() {
    let notes;
    if (localStorage.getItem('notes') === null) {
      notes = [];
    } else {
      notes = JSON.parse(localStorage.getItem('notes'));
    }
    return notes;
  }

  addNote(category, content, timeAgo) {
    const notes = this.getAllNotes();
    // console.log(typeof notes);

    const note = {
      category,
      content,
      timeAgo,
    };

    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
  }
}
