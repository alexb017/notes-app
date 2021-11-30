export default class Note {
  constructor(id, category, content, status) {
    this.id = id;
    this.category = category;
    this.content = content;
    this.status = status;
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

  getID() {
    const notes = this.getAllNotes();
    let indexID;
    notes.forEach((note, index) => {
      console.log(index);
      indexID = index;
    });

    return indexID;
  }

  addNote(id, category, content, status) {
    const notes = this.getAllNotes();

    const note = {
      id,
      category,
      content,
      status,
    };

    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  updateNote(id, newNote) {
    const notes = this.getAllNotes();

    notes.forEach((note) => {
      if (note.id === id) {
        note.content = newNote;
      }
    });

    localStorage.setItem('notes', JSON.stringify(notes));
  }

  removeNote(id) {
    const notes = this.getAllNotes();

    notes.forEach((note, index) => {
      if (note.id === id) {
        notes.splice(index, 1);
      }
    });

    localStorage.setItem('notes', JSON.stringify(notes));
  }

  findNoteCategory(noteCategory) {
    return this.getAllNotes().filter((note) => note.category === noteCategory);
  }

  statusNote() {}
}
