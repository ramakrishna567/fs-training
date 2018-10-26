let bookName = prompt('Enter Book Name to purchase:');
if (bookName != '' && typeof bookName == 'string') {
    let bookCount = +prompt("Enter no. of Books you want:");

    if (bookCount != '' && typeof bookCount == 'number') {
        console.log(typeof bookCount);
        console.log("your book name is:" + bookName + "\n Number of books :" + bookCount);
    }
    else {
        console.log(typeof bookCount);
        alert("Bookcount must be Number and BookCount is not empty");
    }
}
else {
    alert("BookName must be string and Bookname is not empty");
}