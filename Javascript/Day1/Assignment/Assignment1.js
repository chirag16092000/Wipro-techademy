let user = {
    name : 'Chirag',
    email : 'bhangalec1609@gmail.com',
    age : 29
}
console.log("User : ",user)

function editName(newName){
    user.name = newName
}

function editEmail(newEmail){
    user.email = newEmail
}

function calculateYear(){
    const current = new Date().getFullYear()
    return current - user.age
}
editName("Akash")
editEmail("akash@gmail.com") 

let year = calculateYear()

console.log("Updated User : ",user)
console.log("Birth Year : ",year)
