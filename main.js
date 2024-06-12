// Get all not_finished features
let not_finished = document.querySelectorAll(".not_finished")
// Get the back button
let back = document.getElementById("back_but")
// Get the header list and the list button
let list = document.getElementById("list")
let listBut = document.getElementById("list_button")
// Get "a" elements for topics section
let topSec = document.querySelectorAll(".topicsSection")

// Go to topics section when click on "a" of topics on header
topSec.forEach((e) => {
    e.addEventListener("click", () => {
        window.scrollTo(0, document.querySelector(".topics").offsetTop - 60)
    })
})

// Scroll functions
window.onscroll = function () {
    // Fly button
    if (window.scrollY >= 596) {
        back.style.right = "10px"
    } else {
        back.style.right = "-60px"
    }
}

// Message div
function showMsg() {
    msg.style.display = "flex";
    setTimeout(() => {
        msg.style.opacity = 1;
    }, 300)
    setTimeout(() => {
        msg.style.opacity = 0;
    }, 4000)
    setTimeout(() => {
        msg.style.display = "none";
    }, 4300)
}
not_finished.forEach((e) => {
    e.addEventListener("click", () => showMsg())
})

// Back button
back.addEventListener("click", () => window.scrollTo(top))

// List
listBut.addEventListener("click", function () {
    if (listBut.classList.contains("notClicked")) {
        listBut.classList.remove("notClicked")
        setTimeout(() => listBut.classList.add("clicked"), 100)
        listBut.style.transform = "rotate(90deg)"
        list.style.display = "flex"
        setTimeout(() => list.style.transform = "translateY(380px)", 100)
    }
    if (listBut.classList.contains("clicked")) {
        listBut.classList.remove("clicked")
        setTimeout(() => listBut.classList.add("notClicked"), 100)
        list.style.transform = "unset"
        listBut.style.transform = "unset"
        setTimeout(() => list.style.display = "flex", 500)
    }
})

document.querySelector(".logo").onclick = () => {
    window.open("./index.html", "_self")
}