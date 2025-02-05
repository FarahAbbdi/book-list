const bookContainer= document.querySelector('.book-list');
const showDialogBtn = document.getElementById('open-dialog-btn');
const dialog = document.getElementById('add-book-dialog');
const addBtn = document.getElementById('add-book-btn');
const closeBtn = document.getElementById('close-dialog-btn');

const myLibrary = [
    new Book("Harry Potter", "JK Rowling", 400, true),
];

// Function Constructor for Books
function Book(title, author, numberOfPage, isRead) {
    this.title =  title;
    this.author = author;
    this.numberOfPage = numberOfPage;
    this.isRead = isRead;
}

// Function to display books to the book container
function displayBooks(books) {
    books.forEach(book => {
        let bookItem = document.createElement("div");
        bookItem.classList.add("book-item");

        bookItem.setAttribute("data-item", book.title);
        bookItem.innerHTML = `<h3>${book.title}</h3><p>By ${book.author}</p><p>${book.numberOfPage} pages</p>`; // Fix later 

        bookContainer.appendChild(bookItem);
    });
}

// Open Dialog
if (showDialogBtn) {
    showDialogBtn.addEventListener("click", () => {
        dialog.showModal();
    });
}

// Close Dialog
if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        dialog.close();
    });
}

// Add books to the library
addBookToLibrary(myLibrary);






