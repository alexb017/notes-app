export const toggleModalNote = (event) => {
  const modal = document.querySelector('#modal-add-note');
  const body = document.body;

  modal.classList.toggle('active-modal');
  body.classList.toggle('active-overflow');
};

export const toggleNoteModalSettings = (event) => {
  const element = event.currentTarget;

  const dropdown = element
    .closest('.btn-note-settings')
    .querySelector('.note-modal-settings');

  if (element) {
    dropdown.classList.toggle('active');
  }
};

export const closeDropdown = (event) => {};

export const toggleDarkMode = (event) => {
  // for button
  event.currentTarget.classList.toggle('active-dark-mode');

  // for modal note
  document.querySelector('.modal-add-note').classList.toggle('active');

  // for box notes
  document.querySelectorAll('.note-box-content').forEach((item) => {
    item.classList.toggle('active');
  });

  // add class to html
  document.documentElement.classList.toggle('dark');
};
