
let main = document.querySelector("img")
console.log(main)
let search;

let myFunction = (e) => {
    e.preventDefault()
    console.log("this click works")

    search = document.getElementById("search").value
    console.log(search)

    let url = 'https://api.giphy.com/v1/gifs/translate?api_key=RumzkxlG5xpjBZ8Lx6pN7A16AG2LCa0G&s=' + search

    fetch(url)

.then(function(response) {
    return response.json()
})
.then(function(response) {
    console.log(response.data.images.original.url)
    main.src = response.data.images.original.url
})
    
}



let myForm = document.getElementById("myForm")
myForm.addEventListener("submit", myFunction)


//let userInput = myFunction()



