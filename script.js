const bookContainer= document.querySelector('.book-list');

// Function Constructor for Books
function Book(title, author, noOfPage, read) {
    this.title =  title;
    this.author = author;
    this.noOfPage = noOfPage;
    this.read = read;
}

const myLibrary = [
    new Book("Harry Potter", "JK Rowling", 400, true),
];

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

addBookToLibrary(myLibrary);




