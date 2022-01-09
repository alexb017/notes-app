export const toggleModalNote = () => {
  const modal = document.querySelector('#modal-add-note');
  const body = document.body;

  modal.classList.toggle('active-modal');
  body.classList.toggle('active-overflow');
};

export const closeModalWhenClickOutside = () => {
  const overlay = document.querySelector('#modal-add-note');

  overlay.addEventListener('click', (event) => {
    if (event.currentTarget === event.target) {
      toggleModalNote();
    }
  });
};

export const toggleNoteModalSettings = (event) => {
  const element = event.currentTarget;
  const dropdown = element.parentElement.lastElementChild;

  if (element) {
    element.classList.toggle('active');
    dropdown.classList.toggle('active');
  }
};

export const closeModalSettingsWhenCLickOutside = () => {
  window.addEventListener('click', (event) => {
    document.querySelectorAll('.note-modal-settings').forEach((btn) => {
      if (btn.classList.contains('active')) {
        console.log('event.target');
      }
    });
  });
};

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
