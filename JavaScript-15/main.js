let sonlar = [5, 10, 15, 20, 25]
for(son in sonlar){
    console.log(son)
}
for(son of sonlar){
    console.log(son)
}

console.log(sonlar.slice(0,4))
console.log(sonlar)
console.log(typeof sonlar.join(` + `))
console.log(typeof sonlar)