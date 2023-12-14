// This JavaScript code creates a simple digital library where users can add books with a title, description, and cover image. 
// The books are displayed in a list, and users can click on a book to select it. The selected book is highlighted with a 'selected' CSS class. 
// The list of books is saved to local storage when the page is unloaded, and loaded from local storage when the page is loaded.

// Cache elements
let bookList = document.getElementById('bookList');
let bookForm = document.querySelector('#bookForm');

// Create a book template
let bookTemplate = document.createElement('template');
bookTemplate.innerHTML = `
  <div class="book">
    <img src="" alt="Book Cover" class="book-cover">
    <h2 class="book-title"></h2>
    <p class="book-description"></p>
  </div>
`;

// Event listener for form submission
bookForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Create a new book element
  let newBook = bookTemplate.content.cloneNode(true);

  // Set book details
  newBook.querySelector('.book-cover').src = event.target.elements.cover.value;
  newBook.querySelector('.book-title').textContent = event.target.elements.title.value;
  newBook.querySelector('.book-description').textContent = event.target.elements.description.value;

  // Add the new book to the list
  bookList.appendChild(newBook);
});

// Event listener for book click
bookList.addEventListener('click', function(event) {
  if (event.target.classList.contains('book')) {
    // Toggle the 'selected' class
    event.target.classList.toggle('selected');
  }
});

// BOM methods
window.onload = function() {
  // Load books from local storage
  let savedBooks = JSON.parse(localStorage.getItem('books'));
  if (savedBooks) {
    for (let book of savedBooks) {
      let newBook = bookTemplate.content.cloneNode(true);

      // Set book details
      newBook.querySelector('.book-cover').src = book.cover;
      newBook.querySelector('.book-title').textContent = book.title;
      newBook.querySelector('.book-description').textContent = book.description;

      // Add the new book to the list
      bookList.appendChild(newBook);
    }
  }
};

window.onbeforeunload = function() {
  // Save books to local storage
  let books = Array.from(bookList.children).map(function(book) {
    return {
      cover: book.querySelector('.book-cover').src,
      title: book.querySelector('.book-title').textContent,
      description: book.querySelector('.book-description').textContent,
    };
  });
  localStorage.setItem('books', JSON.stringify(books));
};

// 1) During the planning stages, it would have been helpful to create a detailed outline of the application's structure and functionality before starting to write code. 
// This could include a list of all the DOM methods and properties that need to be used, as well as a sketch of the application's layout.

// 2) The requirement to use the DocumentFragment interface or HTML templating with the cloneNode method was a bit challenging, as these are more advanced DOM techniques. 
// However, they can be made easier to implement with practice and by breaking down the task into smaller, manageable steps.

// 3) Given more time, I would add more features to the application, such as the ability to edit and delete books, sort the list of books, and search for books by title or description. 
// I would also improve the user interface and make it more interactive and engaging.