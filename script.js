const bookContainer= document.querySelector('.book-list');
const showDialogBtn = document.getElementById("open-dialog-btn");
const dialog = document.getElementById('dialog');

const myLibrary = [
    new Book("Harry Potter", "JK Rowling", 400, true),
];

// Function Constructor for Books
function Book(title, author, noOfPage, read) {
    this.title =  title;
    this.author = author;
    this.noOfPage = noOfPage;
    this.read = read;
}

// Function to Add Books to the book container
function addBookToLibrary (books) {

    books.forEach(book => {
        let bookItem = document.createElement("div");
        bookItem.classList.add("book-item");

        bookItem.setAttribute("data-item", book.title);
        bookItem.innerHTML = `<h3>${book.title}</h3><p>By ${book.author}</p><p>${book.noOfPage} pages</p>`;

        bookContainer.appendChild(bookItem);
    });
}

// Open Dialog
if (showDialogBtn) {
    showDialogBtn.addEventListener("click", () => {
        dialog.showModal();
    });
}

// Add books to the library
addBookToLibrary(myLibrary);






