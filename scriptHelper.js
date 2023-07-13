// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   //will take testInput parameter and return "Empty", "Not a Number", "Is a Number"
   if(testInput ==="" || testInput === " "){
    return "Empty";
   } else if (isNaN(testInput) || typeof testInput === "string"){
    return "Not a Number";
   }else if (typeof testInput === "number"){
    return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if(validateInput(document) === "Not a Number" || validateInput(list) === "Not a Number" || validateInput(pilot) === "Not a Number" || validateInput(copilot) === "Not a Number" || validateInput(fuelLevel) === "Is a Number" || !validateInput(cargoLevel) === "Is a Number"){
        return true;
    } else {
        return false;
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
