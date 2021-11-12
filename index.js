import Notes from './notes.js';
import {
  toggleNoteModalSettings,
  toggleModalNote,
  toggleDarkMode,
} from './helpers.js';

const form = document.querySelector('#add-note');
const category = document.querySelector('#note-category');
const content = document.querySelector('#write-note');
const timeAgo = 'a while ago';

const notesList = document.querySelector('#notes-list');

// render all the notes
const renderNotes = (items) => {
  notesList.innerHTML = '';
  // loop through every note
  items.forEach((item) => {
    // create element
    const div = document.createElement('div');
    div.setAttribute('class', 'note-box-content');
    div.innerHTML = `
            <div class="note-stuff">
                <span class="note-category">${item.category}</span>
                <div class="btn-note-settings">
                    <button class="btn-settings">
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12C20 12.5304 19.7893 13.0391 19.4142 13.4142C19.0391 13.7893 18.5304 14 18 14ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14ZM6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12C8 12.5304 7.78929 13.0391 7.41421 13.4142C7.03914 13.7893 6.53043 14 6 14Z"></path>
                        </svg>
                    </button>
                    <div class="note-modal-settings">
                        <div class="style-settings">
                            <p class="p">style</p>
                            <button class="paragraph style-bg">Paragraph</button>
                            <button class="heading-h1 style-bg">
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
                                <span class="heading-h1-text">Heading h1</span>
                            </button>
                            <button class="bold style-bg">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                    d="M6 4H12.5C13.381 4.00004 14.2425 4.25865 14.9779 4.74378C15.7132 5.2289 16.29 5.9192 16.6367 6.72907C16.9834 7.53894 17.0847 8.43276 16.9282 9.29969C16.7716 10.1666 16.3641 10.9685 15.756 11.606C16.4386 12.0013 17.0053 12.5692 17.3992 13.2526C17.7931 13.9361 18.0003 14.7112 18 15.5C18 16.0909 17.8836 16.6761 17.6575 17.2221C17.4313 17.768 17.0998 18.2641 16.682 18.682C16.2641 19.0998 15.768 19.4313 15.2221 19.6575C14.6761 19.8836 14.0909 20 13.5 20H6V18H7V6H6V4ZM9 11H12.5C13.163 11 13.7989 10.7366 14.2678 10.2678C14.7366 9.79893 15 9.16304 15 8.5C15 7.83696 14.7366 7.20107 14.2678 6.73223C13.7989 6.26339 13.163 6 12.5 6H9V11ZM9 13V18H13.5C14.163 18 14.7989 17.7366 15.2678 17.2678C15.7366 16.7989 16 16.163 16 15.5C16 14.837 15.7366 14.2011 15.2678 13.7322C14.7989 13.2634 14.163 13 13.5 13H9Z"
                                    ></path>
                                </svg>
                                <span class="bold-text">Bold</span>
                            </button>
                            <button class="italic style-bg">
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
                                <span class="italic-text">Italic</span>
                            </button>
                        </div>
                        <div class="more-settings">
                            <p class="p">more stuff</p>
                            <button class="btn-note-update">
                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 4H8V6.55709C9.19001 5.622 10.6906 5.0643 12.3214 5.0643C16.1874 5.0643 19.3214 8.19831 19.3214 12.0643C19.3214 15.9303 16.1874 19.0643 12.3214 19.0643C10.171 19.0643 8.24696 18.0946 6.96289 16.5685L8.58221 15.3837C9.49811 16.4147 10.8339 17.0643 12.3214 17.0643C15.0829 17.0643 17.3214 14.8257 17.3214 12.0643C17.3214 9.30288 15.0829 7.0643 12.3214 7.0643C11.2346 7.0643 10.2288 7.41107 9.4085 8L12 8V10H6V4Z"></path>
                                </svg>
                                <span>Update</span>
                            </button>
                            <button class="btn-note-remove">
                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 22H7C5.89543 22 5 21.1046 5 20V7H3V5H7V4C7 2.89543 7.89543 2 9 2H15C16.1046 2 17 2.89543 17 4V5H21V7H19V20C19 21.1046 18.1046 22 17 22ZM7 7V20H17V7H7ZM9 4V5H15V4H9Z"></path>
                                </svg>
                                <span>Remove</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <p class="note-content">${item.content}</p>
            <p class="note-timeago">${item.timeAgo}</p>
        `;

    // add div to the html
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

form.addEventListener('submit', (event) => {
  event.preventDefault();
  try {
    notes.addNote(category.value, content.value, timeAgo);
    renderNotes(notes.getAllNotes());
  } catch (error) {
    console.error(error);
  }

  resetFields();
  toggleModalNote();
});

const resetFields = () => {
  category.value = '';
  content.value = '';
};

// add event to every btn
const btnNoteSettings = document.querySelectorAll('.btn-settings');
btnNoteSettings.forEach((btn) => {
  btn.addEventListener('click', toggleNoteModalSettings);
});

const btnAddNote = document.querySelector('#create-note');
btnAddNote.addEventListener('click', toggleModalNote);

const closeAddNote = document.querySelector('#btn-cancel');
closeAddNote.addEventListener('click', () => {
  toggleModalNote();
});

const btnDarkMode = document.querySelector('#btn-dark-mode');
btnDarkMode.addEventListener('click', toggleDarkMode);
