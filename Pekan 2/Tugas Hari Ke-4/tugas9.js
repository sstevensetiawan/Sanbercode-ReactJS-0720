//soal 1
const newFunction = function literal(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName,
      fullName: fullName=()=>{
        return console.log(firstName + " " + lastName)
      }
    }
  }
  
  //Driver Code 
  newFunction("William", "Imoh").fullName()

//soal 2
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const {firstName, lastName, destination, occupation} = newObject;
console.log(firstName, lastName, destination, occupation)

//soal 3
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west,...east]
//Driver Code
console.log(combined)