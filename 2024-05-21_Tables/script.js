document.getElementById("btn-go-down").addEventListener("click", function(){
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    })
})

document.getElementById("btn-go-up").addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})