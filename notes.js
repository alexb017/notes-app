export default class Note {
  constructor(id, category, content, status) {
    this.id = id;
    this.category = category;
    this.content = content;
    this.status = status;
    this.styles = {
      heading: '',
      bold: '',
      italic: '',
    };
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

  addNote(id, category, content, status) {
    const notes = this.getAllNotes();

    const note = {
      id,
      category,
      content,
      status,
      styles: {
        heading: '',
        bold: '',
        italic: '',
      },
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

  addNoteStyles(id, heading, bold, italic) {
    const notes = this.getAllNotes();

    notes.forEach((note) => {
      if (note.id === id) {
        note.styles.heading = `font-size: ${heading};`;
        note.styles.bold = `font-weight: ${bold};`;
        note.styles.italic = `font-style: ${italic};`;
      }
    });

    localStorage.setItem('notes', JSON.stringify(notes));
  }
}
