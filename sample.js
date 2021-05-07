const myFunction = () => {
    return 5
}

const anotherFunction = ((word, callback) => {
    console.log(word);

    const myNumber = callback()

    console.log(myNumber)
})

anotherFunction("Hello",myFunction );

