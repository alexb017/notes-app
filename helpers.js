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
  const modal = element.parentElement.lastElementChild;
  const bg = element.parentElement.children[1];

  if (modal) {
    modal.classList.add('active');
    bg.classList.add('active');
  }
};

export const closeNoteModalSettingsWhenClickOutside = () => {
  const overlay = document.querySelectorAll('.bg-modal-event');

  overlay.forEach((o) => {
    o.addEventListener('click', (event) => {
      if (event.currentTarget === event.target) {
        event.currentTarget.classList.remove('active');
        event.currentTarget.nextElementSibling.classList.remove('active');
      }
    });
  });
};

export const switchToLightModeBtn = (e) => {
  e.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.998 22H10.998V19H12.998V22ZM18.362 19.778L16.241 17.657L17.655 16.243L19.777 
        18.365L18.364 19.778H18.362ZM5.63405 19.778L4.21905 18.364L6.33905 16.242L7.75405 
        17.656L5.63405 19.777V19.778ZM11.998 17.007C9.23302 17.0059 6.99231 14.7637 6.99305 
        11.9987C6.99378 9.23364 9.23568 6.99263 12.0007 6.993C14.7657 6.99337 17.007 9.23497 
        17.007 12C17.0043 14.7649 14.763 17.0053 11.998 17.007ZM11.998 8.993C10.3376 8.9941 
        8.99231 10.3409 8.99305 12.0013C8.99378 13.6618 10.3403 15.0074 12.0007 15.007C13.6612 
        15.0066 15.007 13.6605 15.007 12C15.0054 10.3392 13.6589 8.99355 11.998 8.993ZM21.998 
        13H18.998V11H21.998V13ZM4.99805 13H1.99805V11H4.99805V13ZM17.654 7.758L16.241 
        6.343L18.362 4.221L19.777 5.636L17.655 7.757L17.654 7.758ZM6.34105 7.758L4.22105 
        5.637L5.63605 4.223L7.75605 6.345L6.34205 7.757L6.34105 7.758ZM12.998 5H10.998V2H12.998V5Z" >
        </path>
      </svg>
      <span>Switch to light mode</span>  
    `;
};

export const switchToDarkModeBtn = (e) => {
  e.innerHTML = `
      <svg style="transform: rotate(-90deg);" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.248 16.9972C18.1656 16.9991 18.0829 17 
        18 17C11.9249 17 7 12.0751 7 5.99999C7 5.91709 7.00092 5.8344 7.00275 5.75192C5.17211 
        7.21851 4 9.47339 4 12C4 16.4182 7.58172 20 12 20C14.5266 20 16.7814 18.8279 18.248 
        16.9972ZM19.4661 14.8812C18.989 14.9593 18.4992 15 18 15C13.0294 15 9 10.9706 9 5.99999C9 
        5.50074 9.04065 5.01099 9.11882 4.53386C9.25094 3.72745 9.49024 2.9571 9.82162 
        2.23792C8.96026 2.42928 8.14073 2.73173 7.37882 3.12946C4.18215 4.79821 2 8.14425 2 
        12C2 17.5228 6.47715 22 12 22C15.8557 22 19.2017 19.8178 20.8705 16.6212C21.2682 
        15.8593 21.5707 15.0397 21.762 14.1784C21.0429 14.5098 20.2725 14.7491 19.4661 14.8812Z">
        </path>
      </svg>
      <span>Switch to dark mode</span>
    `;
};

export const toggleDarkMode = (event) => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    switchToLightModeBtn(event.currentTarget);
  } else {
    localStorage.setItem('theme', '');
    switchToDarkModeBtn(event.currentTarget);
  }
};
