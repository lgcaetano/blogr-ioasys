document.querySelectorAll(".drop-title").forEach(element => {
    let arrowTag = element.querySelector(".drop-arrow")
    console.log(arrowTag)
    let parent = element.parentElement
    console.log(parent)
    let menu = parent.querySelector(".drop-menu")
    element.onclick = () => {
        arrowTag.classList.toggle("activated")
        menu.classList.toggle("visible")
    }
})
