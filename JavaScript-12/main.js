let user = ["Ali" , "Bexruz" , "Hasan"]
let userObjact = {
    name: "Ali",
    age: 25,
    xobi:["Sport" , "Game"],
    addres:{
        city: "Xiva",
        stret: "It park"
    }
}
console.log(user[0])
console.log(userObjact.xobi[0])
console.log(userObjact.addres.city)
delete userObjact.xobi
userObjact.age = 30
userObjact.tel = 998940051016
console.log(userObjact)