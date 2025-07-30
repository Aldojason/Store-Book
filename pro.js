function bookadd() {
    document.querySelector('.bookaddbox').classList.add('active');
    document.querySelector('.overlay').classList.add('active');
}

function closeadd(event) {
    event.preventDefault();
    document.querySelector('.bookaddbox').classList.remove('active');
    document.querySelector('.overlay').classList.remove('active');
}

function adlist(event) {
    event.preventDefault();

    const title = document.getElementById("booktitle").value.trim();
    const author = document.getElementById("authorname").value.trim();
    const note = document.getElementById("shortnote").value.trim();

    if (!title || !author || !note) return;

    const newDiv = document.createElement("div");
    newDiv.classList.add("bookspace");
    newDiv.innerHTML = `
        <h2>${title}</h2>
        <h5>- ${author}</h5>
        <p>${note}</p>
        <button onclick="bookdelete(event)">delete</button>
    `;

    document.querySelector(".bookcontainer").appendChild(newDiv);

    closeadd(event);
    document.querySelector("form").reset();
}

function bookdelete(event) {
    event.target.parentElement.remove();
}
