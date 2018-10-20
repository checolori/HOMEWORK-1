// Write your JS here


// 1. Declare a variable `hero` and assign it an object
/*
Hero object should have a name property that is a string 
Hero object should have a heroic property that is a boolean 
Hero object should have an inventory property that is an empty array 
Hero object should have an health property that is 10 
Hero object should have a weapon is an object with a type which is a string and damage which is 2
*/
let hero = {
    name: 'Sandocan',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'sword',
        damage: 2
    }
}
// console.log(hero)

// Functions define `rest`, `pickUpItem' and 'equipWeapon`
//And (re)assigns the health property of the object the value 10
// return person
let rest = function(person) {
person.health = 10
return person
}

// Adds the weapon object as the last element of the inventory array of the hero-like object
let pickUpItem = function(person, weaponType) {
    person.inventory.push(weaponType)
  }

// And reassigns the `weapon` property to the first element of the inventory array
let equipWeapon = function(person) {
    // if (){
    //      
    // }else{
    //     
    // }
}

//

// When clicked will reset the `health` property on the hero global variable to 10
document.getElementById("inn").addEventListener("click", function(){
    rest(hero);
  });

// When the dagger is clicked it will add a weapon-like object to the inventory array with `type`: `dagger` and `damage`: 2

document.getElementById("dagger").addEventListener("click", function(){
    let dagger = {
        type: "dagger",
        damage : 2
    }
    pickUpItem(hero, dagger);
});

// When the bag is clicked it will equip the hero with the first item in the inventory array
document.getElementById("bag").addEventListener("click", function() {

})
