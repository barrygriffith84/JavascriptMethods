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

// Practice

// These commands are a helpful quick start. You may choose to ignore them completely and create your own directory structure. If you choose to use this recommendation, just copy the commands below. It doesn't matter what directory you are currently in.

// mkdir -p ~/workspace/on-boarding/exercises/javascript/methods && cd $_
// touch index.html script.js

// Be sure to add boilerplate HTML to your index.html file and link it to script.js.

// 1. Pet Store

// Create three new objects. Each object should represent a pet at a pet store. Each object should have:

//     A name ("Dennis", "Stacy", "Flapjack", etc)
//     A species (bird, lizard, cat, etc)
//     An array that contains the pet's favorite things
//     A method called vocalize that logs to the console whatever sound you think that animal would make.
//     Call the vocalize method for each animal.

var danObject = {
    name: "Dan",
    species: "dog",
    favoriteThingsArray: ["walking in the woods", "eating", "being petted"],
    makeNoise: function(){
        console.log("WOOF!")
    }    
}

var jojoObject = {
    name: "Jojo",
    species: "cat",
    favoriteThingsArray: ["swatting other cats when they aren't looking", "eating", "napping in cardboard boxes"],
    makeNoise: function(){
        console.log("meow")
    }    
}

var goldyObject = {
    name: "Goldy",
    species: "fish",
    favoriteThingsArray: ["Swimming back and forth", "swimming up and down", "hanging around the porcelain scuba diver"],
    makeNoise: function(){
        console.log("glub")
    }    
}

danObject.makeNoise()
jojoObject.makeNoise()
goldyObject.makeNoise()



// 2. Calculator

// Copy and paste the following code into your JavaScript file:

// var calculator = {
//   add: function(x, y) {
//     // YOUR CODE GOES HERE
//   }
// }

// var sum = calculator.add(2, 2);
// console.log(sum); // Expected output: 4

//     Add three more methods to the calculator object for subtraction, division, and multiplication. Each method should return the result of the calculation.
//     Call each method at least twice, passing in different parameters.

var calculator = {
  add: function(x, y) {
    sum = x + y
    return sum
  },
  subtract: function(x, y){
      difference = x - y
      return difference
  },
  multiply: function(x, y){
    product = x * y
    return product
  },
   divide: function(x, y){
    quotient = x / y
    return quotient
 }
}

var sum = calculator.add(2, 2);
console.log(sum); // Expected output: 4
var sum = calculator.add(1, 3);
console.log(sum);

var difference = calculator.subtract(2, 2);
console.log(difference);
var difference = calculator.subtract(1, 3);
console.log(difference);

var product = calculator.multiply(2, 2);
console.log(product);
var product = calculator.multiply(1, 3);
console.log(product);

var quotient = calculator.divide(2, 2);
console.log(quotient);
var quotient = calculator.divide(1, 3);
console.log(quotient);

// 3. Address Book

//     Create an object that represents your contact information. Use the code below as an example:

// var jordanContactInfo = {
//   name: "Jordan Castelloe",
//   cell: "(999) 999-9999",
//   email: "jordan.123@gmail.com",
//   address: "123 Sesame St"
// }

//     Create another object that represents your one of your friend's contact information. Example:

// var emilyContactInfo = {
//   name: "Emily Lemmon",
//   cell: "(888) 888-8888",
//   email: "eclair@gmail.com",
//   address: "124 Sesame St"
// }

//     Now give each of your objects a method called callCellPhone. It should accept a parameter of phoneNumber. For example, my object would now look like this:

// var jordanContactInfo = {
//   name: "Jordan Castelloe",
//   cell: "(999) 999-9999",
//   email: "jordan.123@gmail.com",
//   address: "123 Sesame St",
//   callCellPhone: function(phoneNumberParameter){
//     console.log(`${this.name} is now calling ${phoneNumberParameter}`);
//   }
// }

//     Give each object two more methods:

//     A method called sendEmail (which should accept a parameter of emailAddress)
//     A method called sendMail (which should accept a parameter called mailingAddress)
//     Don't worry to much about what the methods do- just logging something to the console is fine.

//     Invoke your callCellPhone method and pass in your friend's phone number as a parameter. (In this example, my expected output would be "Jordan Castelloe is now calling (888) 888-8888").
//     Invoke your friend's sendEmail method and pass in your email address as a parameter.
//     Invoke your sendMail method and pass in your friend's mailing address as a parameter.

var barryContactInfo = {
    name: "Barry Griffith",
    cell: "(999) 999-9999",
    email: "barry@email.com",
    address: "1600 Pennsylvania Avenue, Washington, DC 20500",
    callCellPhone: function(phoneNumberParameter){
        console.log(`${this.name} is now calling ${phoneNumberParameter}`)
    },
    sendEmail: function(EmailAddressParameter){
        console.log(`${this.name} is now sending an email to ${EmailAddressParameter}`)
    },
    sendMail: function(mailingAddressParameter){
        console.log(`${this.name} is now sending some post to ${mailingAddressParameter}`)
    }
}

var abdulContactInfo = {
    name: "Abdul Alhazred",
    cell: "(888) 888-8888",
    email: "abdul@email.com",
    address: "Theopetra Cave",
    callCellPhone: function(phoneNumberParameter){
        console.log(`${this.name} is now calling ${phoneNumberParameter}`)
    },
    sendEmail: function(EmailAddressParameter){
        console.log(`${this.name} is now sending an email to ${EmailAddressParameter}`)
    },
    sendMail: function(mailingAddressParameter){
        console.log(`${this.name} is now sending some post to ${mailingAddressParameter}`)
    }
}

barryContactInfo.callCellPhone(abdulContactInfo.cell)
abdulContactInfo.sendEmail(barryContactInfo.email)
barryContactInfo.sendMail(abdulContactInfo.address)



// Challenges
// Shopping Cart

// Copy and paste the following code into your JavaScript file:

// var shoppingCart = {
//   items: [
//     {
//       name: "Bananas",
//       totalPrice: 2.75
//     },
//     {
//       name: "English Muffins",
//       totalPrice: 3.99
//     },
//     {
//       name: "Peanut Butter",
//       totalPrice: 2.99
//     }
//   ],
//   addToCart: function(objectToAdd){
//     // YOUR CODE GOES HERE
//   },
//   calculateTotal: function(){
//     // YOUR CODE GOES HERE
//   },
//   printShoppingCart: function(){
//     // YOUR CODE GOES HERE
//   }
// }

// Your job is to fill in the three empty methods in the shoppingCart object. (Hint: you can access the items array from inside the object with this.items.)

//     The addToCard method should take in a parameter of an object that represents a new item and add it to the shopping cart array. Hint: look up .push()
//     The calculateTotal method should calculate and return a total for all the items in your shopping cart.
//     The printShoppingCart method should loop over all the items in the cart and print them to the console. It should also print the total price of all the items in your shopping cart.

var shoppingCart = {
    items: [
      {
        name: "Bananas",
        totalPrice: 2.75
      },
      {
        name: "English Muffins",
        totalPrice: 3.99
      },
      {
        name: "Peanut Butter",
        totalPrice: 2.99
      }
    ],
    addToCart: function(objectToAdd){
      this.items.push(objectToAdd)
    },
    calculateTotal: function(){
        var sum = 0
        for(var i = 0; i < this.items.length; i++){
            sum += this.items[i].totalPrice
        }
        return sum
    },
    printShoppingCart: function(){
        for(var i = 0; i < this.items.length; i++){
            console.log(this.items[i])
        }
        console.log(`Total: ${this.calculateTotal()}`)
    }
  }

shoppingCart.addToCart({name: "Poptarts", totalPrice: 3.99})
shoppingCart.printShoppingCart()









// Library System

// Your job is to represent a library system with JavaScript objects and methods. In your JavaScript file, create the following objects:

//     A library object with the following properties and methods:
//         A name property
//         A location property
//         A currentInventory property that holds an array of book titles (strings)
//     A patron object with the following properties and methods:
//         A firstName property
//         A lastName property
//         A checkedOutBooks property that holds an array of book titles (strings)
//         A overdueFees property that holds a number
//         A printBooks method should print all of the books a patron has currently checked out to the console.
//     A librarian object with these properties and methods:
//         A firstName property
//         A lastName property
//         A checkOutBook method that accepts three parameters: a string of a book title, a patron object, and a library object. If the book is currently in stock, this method should add the given book title to the patron's checkedOutBooks array and remove it from the library's currentInventory array. (Hint: look up .splice()).
//         A chargeFee method that accepts two parameters: a number that represents the fee amount and a patron object. This method should add the fee object to the patron's overdueFees property.
//         A checkInBook method that accepts three parameters: a string of a book title, a patron object, and a library object. This method should remove the given book title from the patron's checkedOutBooks array and add it back to the library's currentInventory array.
//         Patrons can check out a maximum of ten books. If they go over that maximum, the librarian should see an error message in the console.
//         Patrons should not be able to check in a book that they haven't checked out. If they try to do this, the librairan should see an error message in the console.
//         If a patron tries to check out a book that's out of stock, the librarian should see an error message.




