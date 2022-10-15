console.log("working")
let inputElement = document.querySelector("input")
let addButton = document.querySelector("button")
let pElement = document.querySelector("p")
addButton.addEventListener("click",() => {
    let name = inputElement.value
    let address = "https://api.agify.io?name=" + name
    fetch(address).then((data) => {
        return data.json()
    }).then((finalData) => {
        let age = finalData.age
        console.log(age)
        pElement.append(name + " is  " + age + " years old. ")
        
    })
    let address1 = "https://api.genderize.io?name=" + name
    fetch(address1).then((data) => {
        return data.json()
    }).then((finalData1) => {
        let gender = finalData1.gender
        console.log(gender)
        pElement.append(name + " is a " + gender + ".")
        
    })
    let address2 = "https://api.nationalize.io?name=" + name
    fetch(address2).then((data) => {
        return data.json()
    }).then((finalData2) => {
        let country = finalData2.country[0].country_id
        console.log(country)
        pElement.append(name + " is from " + country + ".")
    })
})
