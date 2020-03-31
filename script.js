// Lightning McQueen

//     Create a new object representing a sports car
//     Give the object a property of make, model, and year, and the date of its last oil change to the console.
//     Give the object a method called drive. It should log a string to the console that says "vroom vroom"
//     Print the car's make, model, year, and date of last oil change to the console.
//     Call the car's drive method.

var lightningObject = {
    name: "Lightning McQueen",
    make: "Plymouth",
    model: "Hemi 'Cuda",
    year: 1971,
    lastChange: "January 1, 2020",
    drive: function(){
        console.log("vroom vroom")
    }
}

console.log(`The car is a ${lightningObject.year}  ${lightningObject.make} ${lightningObject.model}.  It's last oil change was ${lightningObject.lastOilChange}`)
lightningObject.drive()

// Lightning Exercise
// Car Maintenance

//     Create a new object representing a mechanic. The mechanic object should have properties representing their name and place of work.
//     Give your mechanic object a property of changeOil. This method should accept a parameter of a car object. It should reassign the date of the car's last oil change to today.
//     Call the mechanic's changeOil method on the car object you created in the last lightning exercise. Log the car's last oil change date before and after you call the changeOil method. They should be different!

var mechanicObject = {
    firstName: "Arthur",
    lastName: "Vincent",
    placeOfWork: "Pep Boys",
    changeOil: function(carObject){
        carObject.lastChange = "March 30, 2020"
    }
}

mechanicObject.changeOil(lightningObject)

console.log(lightningObject.lastChange)
