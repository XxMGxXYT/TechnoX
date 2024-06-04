// Get all not_finished features
let not_finished = document.querySelectorAll(".not_finished")

// Message div
function showMsg(){
    msg.style.display = "flex";
    setTimeout(() => {
        msg.style.opacity = 1;
    }, 300)
    setTimeout(() => {
        msg.style.opacity = 0;
    }, 4000)
    setTimeout(() =>{
        msg.style.display = "none";
    }, 4300)
}
not_finished.forEach((e) => {
    e.addEventListener("click", () => showMsg())
})
