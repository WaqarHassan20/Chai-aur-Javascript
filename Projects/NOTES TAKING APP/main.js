const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

addBtn.addEventListener("click", function () {
    addNote();
})

const addNote = (text = " ") => {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
    <div class="tool">
    <i class="save fa-solid fa-save"></i>
    <i class="trash fa-solid fa-trash"></i>
    </div>
    <textarea>${text} </textarea>
    `;
    note.querySelector(".trash").addEventListener("click", function () {
        note.remove();
        saveNote();
    })
    note.querySelector(".save").addEventListener("click", function () {
        saveNote();
    })
    note.querySelector("textarea").addEventListener("focusout", function () {
        saveNote();
    })

    main.appendChild(note);
    saveNote();
}

const saveNote = () => {
    const notes = document.querySelectorAll(".note textarea");
    const data = [];
    notes.forEach((note) => {
        data.push(note.value);
    })
    if (data.length === 0) {
        localStorage.removeItem("notes");
    }
    else {
        localStorage.setItem("notes", JSON.stringify(data));
    }

    // localStorage.setItem("notes", JSON.stringify(data));
    // console.log(data);
}

function autoCall() {
    const lsNOtes = JSON.parse(localStorage.getItem("notes"));
    if (lsNOtes === 0) {
        addNote();
    } else {
        lsNOtes.forEach((lsNOtes) => {
            addNote(lsNOtes);
        })
    }

}
autoCall();
