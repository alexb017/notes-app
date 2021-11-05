export const toggleNoteModalSettings = (event) => {
  const modalNoteModalSettings = document.querySelector('#note-modal-settings');
  // console.log(event.currentTarget);
  modalNoteModalSettings.classList.toggle('active');
};
