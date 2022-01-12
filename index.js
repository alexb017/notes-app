import Notes from './notes.js';
import {
  toggleNoteModalSettings,
  toggleModalNote,
  toggleDarkMode,
  closeModalWhenClickOutside,
  switchToLightModeBtn,
  switchToDarkModeBtn,
  closeNoteModalSettingsWhenClickOutside,
} from './helpers.js';

const form = document.querySelector('#add-note');
const category = document.querySelector('#note-category');
const content = document.querySelector('#write-note');
const notesList = document.querySelector('#notes-list');
const searchInput = document.querySelector('#search-input');

const renderNotes = (items) => {
  notesList.innerHTML = '';

  items.forEach((item) => {
    const div = document.createElement('div');
    div.setAttribute('class', 'note-box-content');
    div.setAttribute('data-id', `${item.id}`);
    div.innerHTML = `
            <div class="note-stuff">
                <span class="note-category">${item.category}</span>
                <div class="btn-note-settings">
                    <button class="btn-settings">
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20
                             12C20 12.5304 19.7893 13.0391 19.4142 13.4142C19.0391 13.7893 18.5304 14 18 14ZM12 14C10.8954 
                             14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 12.5304 13.7893 
                             13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14ZM6 14C4.89543 14 4 13.1046 4 12C4 
                             10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12C8 12.5304 7.78929 13.0391 7.41421 
                             13.4142C7.03914 13.7893 6.53043 14 6 14Z"></path>
                        </svg>
                    </button>
                    <div class="bg-modal-event"></div>
                    <div class="note-modal-settings">
                        <div class="style-settings">
                            <button class="h1-style style-text-note">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                    d="M10 4V11H4V4H2V20H4V13H10V20H12V4H10Z"
                                    9"
                                    ></path>
                                    <path
                                    d="M20 20V8H18.5L16 8.67V10.74L18 10.204V20H20Z"
                                    
                                    ></path>
                                </svg>
                            </button>
                            <button class="bold-style style-text-note">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                    d="M6 4H12.5C13.381 4.00004 14.2425 4.25865 14.9779 4.74378C15.7132 5.2289 16.29 
                                    5.9192 16.6367 6.72907C16.9834 7.53894 17.0847 8.43276 16.9282 9.29969C16.7716 10.1666 
                                    16.3641 10.9685 15.756 11.606C16.4386 12.0013 17.0053 12.5692 17.3992 13.2526C17.7931 
                                    13.9361 18.0003 14.7112 18 15.5C18 16.0909 17.8836 16.6761 17.6575 17.2221C17.4313 17.768 
                                    17.0998 18.2641 16.682 18.682C16.2641 19.0998 15.768 19.4313 15.2221 19.6575C14.6761 
                                    19.8836 14.0909 20 13.5 20H6V18H7V6H6V4ZM9 11H12.5C13.163 11 13.7989 10.7366 14.2678 
                                    10.2678C14.7366 9.79893 15 9.16304 15 8.5C15 7.83696 14.7366 7.20107 14.2678 
                                    6.73223C13.7989 6.26339 13.163 6 12.5 6H9V11ZM9 13V18H13.5C14.163 18 14.7989 
                                    17.7366 15.2678 17.2678C15.7366 16.7989 16 16.163 16 15.5C16 14.837 15.7366 
                                    14.2011 15.2678 13.7322C14.7989 13.2634 14.163 13 13.5 13H9Z"
                                    ></path>
                                </svg>
                            </button>
                            <button class="italic-style style-text-note">
                                <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M13 20H7V18H8.927L13.043 6H11V4H17V6H15.073L10.957 18H13V20Z"
                                ></path>
                                </svg>
                            </button>
                            <button class="color-style style-text-note">
                              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.7501 22H4.91705C3.76655 21.9989 2.83415 21.0665 2.83305 19.916V10.216C2.01626 
                                9.63641 1.76196 8.53756 2.24105 7.65803C3.14105 6.05003 4.05905 4.46503 4.96205 
                                2.94603C5.32422 2.35303 5.97123 1.99383 6.66605 1.99995C7.08957 2.00426 7.50154 
                                2.13867 7.84605 2.38503L7.87005 2.40003C8.28205 2.64003 12.2621 5.00903 15.4611 
                                6.91203L18.3001 8.60003L18.4301 8.67703C20.6481 9.98803 21.1471 10.286 21.1751 
                                10.305C21.9916 10.8831 22.2427 11.9828 21.7581 12.858C20.8751 14.435 19.9581 16.02 19.0371 
                                17.57C18.6796 18.1566 18.044 18.5164 17.3571 18.521C17.2225 18.5211 17.0883 18.506 
                                16.9571 18.476C16.8411 18.545 16.2011 18.956 15.3901 19.476C13.9471 20.401 11.9751 
                                21.666 11.7471 21.783C11.4394 21.9414 11.0956 22.0162 10.7501 22ZM4.50005 
                                13.03V19.916C4.50005 20.1463 4.68675 20.333 4.91705 20.333H8.74005C7.28705 17.88 5.86105 
                                15.422 4.50005 13.03ZM5.85805 12.03C6.25805 12.717 10.5741 20.162 10.6101 20.212C10.6669 
                                20.2859 10.7549 20.3291 10.8481 20.329C10.8972 20.329 10.9456 20.3171 10.9891 
                                20.294C11.1241 20.218 15.1831 17.61 15.2231 17.584C14.9091 17.399 12.6371 16.045 10.2311 
                                14.612L5.83805 12L5.84505 12.011L5.85505 12.028V12.034L5.85805 12.03ZM6.33205 3.90003C5.52405 
                                5.20003 3.71605 8.42803 3.69205 8.48703C3.63276 8.62868 3.68536 8.79241 3.81605 
                                8.87303C3.94905 8.95203 17.1701 16.829 17.2961 16.849C17.312 16.8502 17.3281 16.8502 
                                17.3441 16.849C17.4527 16.8494 17.5536 16.7929 17.6101 16.7C18.4241 15.333 20.2991 
                                12.043 20.3041 12.033C20.362 11.8908 20.3092 11.7275 20.1791 11.646C20.0521 11.57 
                                6.85605 3.72803 6.77105 3.69103C6.73242 3.67477 6.69097 3.66627 6.64905 3.66603C6.54374 
                                3.66661 6.44574 3.71993 6.38805 3.80803L6.38105 3.82003L6.37305 3.83203L6.36105 
                                3.85203V3.85703L6.34605 3.88103L6.33105 3.90003H6.33205ZM7.68505 9.39003C6.7656 9.38948 
                                6.02042 8.64415 6.02006 7.7247C6.01969 6.80524 6.76427 6.05932 7.68372 6.05803C8.60318 
                                6.05675 9.34984 6.80058 9.35205 7.72003C9.35095 8.64024 8.60525 9.38593 7.68505 
                                9.38703V9.39003Z">
                                </path>
                              </svg>                            
                            </button>
                        </div>
                        <div class="more-settings"> 
                            <button class="btn-note-remove">
                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 22H7C5.89543 22 5 21.1046 5 20V7H3V5H7V4C7 2.89543 7.89543 2 9 
                                    2H15C16.1046 2 17 2.89543 17 4V5H21V7H19V20C19 21.1046 18.1046 22 17 22ZM7 
                                    7V20H17V7H7ZM9 4V5H15V4H9Z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="note-content" style="${item.styles.heading} ${item.styles.bold} ${item.styles.italic} ${item.styles.color}" contenteditable="true">${item.content}</div>
            <p class="note-timeago">${item.status}</p>
        `;

    notesList.appendChild(div);
  });
};

const notes = new Notes();

// render on page load
try {
  renderNotes(notes.getAllNotes());
} catch (error) {
  console.log(error);
}

const addCategoryCss = () => {
  document.querySelectorAll('.note-category').forEach((category) => {
    if (category.textContent === '') {
      category.innerHTML = 'default';
    }

    if (category.textContent === 'personal') {
      category.classList.add('category-personal');
    }

    if (category.textContent === 'work') {
      category.classList.add('category-work');
    }

    if (category.textContent === 'exam') {
      category.classList.add('category-exam');
    }

    if (category.textContent === 'hobby') {
      category.classList.add('category-hobby');
    }

    if (category.textContent === 'info') {
      category.classList.add('category-info');
    }
  });
};
addCategoryCss();

const generateRandomID = () => {
  return Math.floor(Math.random() * 1000);
};

const showDateWhenNoteWasCreated = () => {
  const date = new Date();
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const formatDate = `${days[date.getDay()]}, ${
    months[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;

  return formatDate;
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  try {
    notes.addNote(
      generateRandomID(),
      category.value,
      content.value,
      showDateWhenNoteWasCreated()
    );
    renderNotes(notes.getAllNotes());
    addCategoryCss();
    updateNotePage();
    removeNotePage();
  } catch (error) {
    console.error(error);
  }

  resetInputsAddNote();
  toggleModalNote();
  clickEventBtnSettings();
  clickEventBtnStyles();
});

const resetInputsAddNote = () => {
  category.value = '';
  content.value = '';
};

const updateNoteUi = (event) => {
  const element = event.currentTarget;
  const id = element.parentElement.dataset.id;
  const newValue = element.textContent;

  notes.updateNote(Number.parseInt(id, 10), newValue);
};

const updateNotePage = () => {
  const updateNoteContent = document.querySelectorAll('.note-content');
  updateNoteContent.forEach((note) => {
    note.addEventListener('input', updateNoteUi);
  });
};
updateNotePage();

const removeNoteUi = (event) => {
  const element = event.currentTarget;
  const noteBox = element.closest('.note-box-content');
  const id = noteBox.dataset.id;

  notes.removeNote(Number.parseInt(id, 10));

  noteBox.remove(noteBox);
};

const removeNotePage = () => {
  const removeNoteContent = document.querySelectorAll('.btn-note-remove');
  removeNoteContent.forEach((note) => {
    note.addEventListener('click', removeNoteUi);
  });
};
removeNotePage();

const searchNote = (textInput) => {
  const notesHTML = document.querySelectorAll('.note-content');
  const notesHTMLArray = [...notesHTML];

  notesHTMLArray.filter((item) => {
    const content = item.textContent.toLowerCase();
    const contentInput = textInput.toLowerCase();

    if (content.includes(contentInput)) {
      item.parentElement.classList.remove('hide');
    } else {
      item.parentElement.classList.add('hide');
    }
  });
};

searchInput.addEventListener('keyup', () => {
  searchNote(searchInput.value);
});

const clickEventBtnSettings = () => {
  const btnNoteSettings = document.querySelectorAll('.btn-settings');
  btnNoteSettings.forEach((btn) => {
    btn.addEventListener('click', toggleNoteModalSettings);
  });
};
clickEventBtnSettings();

const clickEventBtnStyles = () => {
  const buttons = document.querySelectorAll('.style-text-note');
  buttons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const element = event.currentTarget;
      const elementParent = element.closest('.note-box-content');
      const content = elementParent.children[1];

      if (element.classList.contains('h1-style')) {
        if (element.classList.contains('active')) {
          element.classList.remove('active');
          content.style.fontSize = '';
        } else {
          element.classList.add('active');
          content.style.fontSize = '21px';
        }
      }

      if (element.classList.contains('bold-style')) {
        if (element.classList.contains('active')) {
          element.classList.remove('active');
          content.style.fontWeight = '';
        } else {
          element.classList.add('active');
          content.style.fontWeight = '700';
        }
      }

      if (element.classList.contains('italic-style')) {
        if (element.classList.contains('active')) {
          element.classList.remove('active');
          content.style.fontStyle = '';
        } else {
          element.classList.add('active');
          content.style.fontStyle = 'italic';
        }
      }

      if (element.classList.contains('color-style')) {
        if (element.classList.contains('active')) {
          element.classList.remove('active');
          content.style.color = '';
        } else {
          element.classList.add('active');
          content.style.color = 'rgb(128, 128, 128)';
        }
      }

      const id = elementParent.dataset.id;

      notes.addNoteStyles(
        Number.parseInt(id, 10),
        content.style.fontSize,
        content.style.fontWeight,
        content.style.fontStyle,
        content.style.color
      );
    });
  });
};
clickEventBtnStyles();

const addActiveStyles = () => {
  const buttons = document.querySelectorAll('.style-text-note');
  buttons.forEach((btn) => {
    const contentStyle = btn.closest('.note-box-content').children[1].style;

    if (
      btn.classList.contains('h1-style') &&
      contentStyle.fontSize === '21px'
    ) {
      btn.classList.add('active');
    }

    if (
      btn.classList.contains('bold-style') &&
      contentStyle.fontWeight === '700'
    ) {
      btn.classList.add('active');
    }

    if (
      btn.classList.contains('italic-style') &&
      contentStyle.fontStyle === 'italic'
    ) {
      btn.classList.add('active');
    }

    if (
      btn.classList.contains('color-style') &&
      contentStyle.color === 'rgb(128, 128, 128)'
    ) {
      btn.classList.add('active');
    }
  });
};
addActiveStyles();

const btnAddNote = document.querySelector('#create-note');
btnAddNote.addEventListener('click', toggleModalNote);

const closeAddNote = document.querySelector('#btn-cancel');
closeAddNote.addEventListener('click', toggleModalNote);

const closeByPressingX = document.querySelector('#btn-close-modal');
closeByPressingX.addEventListener('click', toggleModalNote);

const theme = localStorage.getItem('theme');
const btnDarkModeIcon = document.querySelector('.btn-dark-mode');

if (theme) {
  document.body.classList.add(theme);
  switchToLightModeBtn(btnDarkModeIcon);
} else {
  switchToDarkModeBtn(btnDarkModeIcon);
}

const btnDarkMode = document.querySelector('#btn-dark-mode');
btnDarkMode.addEventListener('click', toggleDarkMode);

document.addEventListener('keyup', (event) => {
  const key = event.key;
  const modal = document.querySelector('#modal-add-note');

  if (key === 'Escape' && modal.classList.contains('active-modal')) {
    toggleModalNote();
  }
});

closeModalWhenClickOutside();
closeNoteModalSettingsWhenClickOutside();
