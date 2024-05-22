document.addEventListener("DOMContentLoaded", function(){
    const mainCategories =document.querySelectorAll(".main-category")

    mainCategories.forEach(function(category){
        const subMenu = category.querySelector(".sub-menu")
        const mainLink = category.querySelector("a")

        mainLink.addEventListener("click", function(event){
            event.preventDefault()
            subMenu.classList.toggle("show")
        })
    })
})