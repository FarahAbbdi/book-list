const bookContainer= document.querySelector('.book-list');
const showDialogBtn = document.getElementById('open-dialog-btn');
const dialog = document.getElementById('add-book-dialog');
const addBookBtn = document.getElementById('add-book-btn');
const closeDialogBtn = document.getElementById('close-dialog-btn');

let myLibrary = [
    new Book("Dune", "Frank Herbet", 412, true),
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
    bookContainer.innerHTML = '';

    books.forEach(book => {
        let bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookItem.setAttribute('data-item', book.title);

        bookItem.innerHTML = `
            <h2><strong>${book.title}</strong></h2>
            <br>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.numberOfPage}</p>
            <br>
            <button class="status-btn">${book.isRead ? "Status: Read" : "Status: Not Read"}</button>
        `;

        // Add event listerer to toggle read status
        const statusBtn = bookItem.querySelector('.status-btn');
        statusBtn.addEventListener("click", () => {
            book.isRead = !book.isRead;
            statusBtn.textContent = book.isRead ? "Status: Read" : "Status: Not Read";
        })

        // Create remove book btn
        let removeBookBtn = document.createElement("button");
        removeBookBtn.innerHTML = "X";
        removeBookBtn.classList.add("remove-book-btn");

        // Attach event listener to remove book button
        removeBookBtn.addEventListener("click", () => removeBookItem(bookItem));
        
        bookItem.appendChild(removeBookBtn);
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
if (closeDialogBtn) {
    closeDialogBtn.addEventListener("click", () => {
        dialog.close();
    });
}

// Function to add book to Library 
if (addBookBtn) { 
    addBookBtn.addEventListener('click', () => {
        const title = document.getElementById('title').value.trim();
        const author = document.getElementById('author').value.trim();
        const numberOfPages = document.getElementById('no-pages').value.trim();
        const isRead = document.getElementById('read').checked;

        const pages = parseInt(numberOfPages, 10);
        
        // Check if required fields are filled
        if (!title || !author || !numberOfPages) {
            alert("Please fill in all required fields.");
            return;
        }

        // Check if the book already exists in the library
        const bookExist = myLibrary.some(book => book.title === title && book.author === author);
        
        if (bookExist) {
            alert("This book is already in your library");
            return;
        }
        
        book = new Book(title, author, pages, isRead);
        
        // Add the book into the Library Array
        myLibrary.push(book);

        // Display the updated books
        displayBooks(myLibrary);

        dialog.close();

        // Clear the form fields
        document.getElementById('book-form').reset();
    });    
}

// Function to remove remove book from library
function removeBookItem(bookItem) {
    const title = bookItem.querySelector('h2').innerText;
    myLibrary = myLibrary.filter(book => book.title !== title); //
    displayBooks(myLibrary);
}

// Initial display of the books
displayBooks(myLibrary);







