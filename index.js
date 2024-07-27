window.addEventListener("DOMContentLoaded", (_) => {
    let submitButton = document.getElementById("submit")
    submitButton.addEventListener("mousedown", (event) => {
        submitButton.value = "Yelling Commenced"
    })
    submitButton.addEventListener("mouseup", (event) => {
        submitButton.value = "Commence The Yelling"
    })
})