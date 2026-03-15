document.addEventListener("DOMContentLoaded", () => {
    let list = document.getElementById("list-panel")
     let showPanel = document.getElementById("show-panel")
     let ul = document.createElement("ul")

fetch("http://localhost:3000/books")
.then((response) => response.json())
.then((json) => {
    console.log(json)
    let books = json
    books.forEach((book) => renderBooks(book))
    
})
.catch((error) => console.error(error.message))




function renderBooks(book) {
    console.log(book)
    let li = document.createElement("li")
    li.textContent = book.title
    li.addEventListener("click", () => {displayBookInfo(book)})
    list.appendChild(li)
}

function displayBookInfo(book) {
    showPanel.innerHTML = ""
    let image = document.createElement("img")
    image.src = book.img_url
    let description = document.createElement("p")
    description.textContent = book.description
    // let ul = document.createElement("ul")
    let button = document.createElement("button")
    button.textContent = "like"
    button.addEventListener("click", () => {addLikes(book)})
    
    book.users.forEach((user) => {
        let li = document.createElement("li")
        li.textContent = user.username
        ul.appendChild(li)
    })
    showPanel.appendChild(image)
    showPanel.appendChild(description)
    showPanel.appendChild(ul)
    showPanel.appendChild(button)

}

function addLikes(book) {
    console.log(book)
    let id = book.id
    let currentUser = {id: 1, username: "pouros"};

    fetch(`http://localhost:3000/books/${id}`, {
        method: "PATCH",
        headers: {
           "Content-Type": "application/json"
        },
        body: JSON.stringify(
            {users: [...book.users, currentUser]}
        )
    })
    .then((response) => response.json())
    .then((json) => {
        let li = document.createElement("li")
        let num = json.users.length - 1
        li.textContent = json.users[num].username
        ul.appendChild(li)
        console.log(json)})

}


})       





