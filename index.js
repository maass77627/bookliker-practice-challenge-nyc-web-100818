document.addEventListener("DOMContentLoaded", () => {



let bookList = document.getElementById('list');


    fetch('http://localhost:3000/books')
    .then((response) => response.json())
    .then((books) => {
        console.log(books);
        books.forEach( book => 
        renderBooks(book)
        )

    })

    function renderBooks(book) {
        let li = document.createElement('li');
        li.addEventListener('click', () => { showBookDetails(book)})
        li.innerHTML = book.title;
        bookList.appendChild(li);
    }

    function showBookDetails(book) {
        let showPanel = document.getElementById('show-panel');
        showPanel.innerHTML = '';
        let title = document.createElement('h2')
        title.innerHTML = book.title;
        let img = document.createElement('img');
        img.src = book.img_url;
        let decription = document.createElement('p')
        decription.innerHTML = book.description;
        showPanel.appendChild(title);
        showPanel.appendChild(img);
        showPanel.appendChild(description);

        let userList = document.createElement('ul');
        


    }

    // let bookList = document.getElementById('list');
    // bookList

})        

