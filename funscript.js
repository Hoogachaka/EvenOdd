let usersWord = ""
let oddList = document.getElementById("odd")
let evenList = document.getElementById("even")


function updateWord(element) {
  usersWord = element.value
}


window.addEventListener("keydown" , function (event) {
    if (event.code == 'Enter') {
        handleSubmit()
    }
})


function handleSubmit() {
    console.log(usersWord.length)
    if (usersWord.length % 2 != 0) {
        let newListItem = document.createElement('LI')
        newListItem.innerText = usersWord

        oddList.appendChild(newListItem)
    } else {
        let newListItem = document.createElement('LI')
        newListItem.innerText = usersWord

        evenList.appendChild(newListItem)
    }

    usersWord = ""
    document.getElementById("word").value = ""
}