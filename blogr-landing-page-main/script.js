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


mobileOptions = [
    ["Overview", "Pricing", "Marketplace", "Features", "Integration"],
    ["About", "Team", "Blog", "Careers"],
    ["Contact", "Newsletter", "LinkedIn"]
]


document.querySelectorAll(".mb-title").forEach((title, index) => {
    title.onclick = () => {
            
        
        let count = 0
        let options = mobileOptions[index]
        let dropdown = document.querySelector("#mb-dropdown")
        let dropdownOps = dropdown.querySelectorAll(".mb-op")
        let arrows = document.querySelectorAll(".mb-arrow")
        
        dropdown.classList.remove("toggle-animation")
        

        for(i = 0; i < arrows.length; i++){
            if (i == index)
                arrows[i].classList.toggle("activated")
            else
                arrows[i].classList.remove("activated")
        }


        for (i = 0; i < options.length; i++) {
            if(dropdownOps[i].innerHTML == options[i]){
                dropdownOps[i].classList.remove("visible")
                dropdownOps[i].innerHTML = ""
            } else{
                count++
                dropdownOps[i].innerHTML = options[i]
                dropdownOps[i].classList.add("visible")
            }
        }


        for (i = i; i < dropdownOps.length; i++){
            dropdownOps[i].innerHTML = ""
            dropdownOps[i].classList.remove("visible")
        }


        if (count != 0){
            document.querySelector("#hr2").classList.add("visible")
            setTimeout(() => dropdown.classList.add("toggle-animation"), 0)
        } else
            document.querySelector("#hr2").classList.remove("visible")
        
    }
})

let hamToggle = document.querySelector(".toggle-ham")

hamToggle.onclick = e => {
    hamToggle.classList.toggle("activated")
    document.querySelector(".mobile-menu").classList.toggle("visible")
}