function sortBookTitles(books,callback){
    let bookTitles = books.map(book=>book.title);
    let sortedTitles = bookTitles.sort();
    callback(sortedTitles);
}

function callback(sortedTitles){
    console.log(`Book Titles in Alphabetical order : ${sortedTitles.join(', ')}`)
}

let books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 }
];

sortBookTitles(books,callback)