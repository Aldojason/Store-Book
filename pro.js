overlay = document.querySelector(".overlay")
bookaddbox = document.querySelector(".bookaddbox")
function bookadd() {
    overlay.style.display = "block"
    bookaddbox.style.display = "block"
}
function closeadd(event) {
    event.preventDefault()
    overlay.style.display = "none"
    bookaddbox.style.display = "none"
}

container = document.querySelector(".bookcontainer")
booktitle = document.getElementById("booktitle")
authorname = document.getElementById("authorname")
shortnote = document.getElementById("shortnote")

function adlist(event) {
    event.preventDefault()
    div = document.createElement("div")
    div.setAttribute("class","bookspace")
    div.innerHTML = `<h2>${booktitle.value}</h2>
            <h5>-${authorname.value}</h5>
           <p>${shortnote.value}</p>
            <button onclick="bookdelete(event)">delete</button>`

    container.append(div)
    overlay.style.display = "none"
    bookaddbox.style.display = "none"
    booktitle.value=""
    authorname.value=""
    shortnote.value=""

}
function bookdelete(event){
    event.target.parentElement.remove()

}