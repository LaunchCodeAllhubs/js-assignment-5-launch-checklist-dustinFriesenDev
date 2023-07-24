// Write your helper functions here!
require('isomorphic-fetch');

    
    function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
        let missionTarget = document.getElementById("missionTarget");
        missionTarget.innerHTML = `
                        <h2>Mission Destination</h2>
                        <ol>
                            <li>Name: ${name} </li>
                            <li>Diameter: ${diameter} </li>
                            <li>Star: ${star}</li>
                            <li>Distance from Earth: ${distance} </li>
                            <li>Number of Moons: ${moons} </li>
                        </ol>
                        <img src="${imageUrl}"/>
        `
    }

    function validateInput(testInput) {
            let integerTestInput = parseInt(testInput, 10);
            if (testInput === " " || testInput === "" || typeof testInput === "undefined") {
                 return "Empty";
            } else if(isNaN(integerTestInput) || typeof integerTestInput === "string"){
                return "Not a Number";
            } else if (typeof integerTestInput === "number" ) {
                return "Is a Number";
            } 
        }

     
    function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");
    
        let validatePilot = validateInput(pilot);
        let validateCopilot = validateInput(copilot);
        let validateFuel = validateInput(fuelLevel);
        let validateCargo = validateInput(cargoLevel);

        let launchStatus = document.getElementById("launchStatus");

        if(validatePilot === "Empty" || validateCopilot === "Empty" || validateFuel === "Empty" || validateCargo === "Empty"){
            alert("All fields are required!");
            return;
        }else if (validatePilot === "Is a Number" || validateCopilot === "Is a Number" || validateFuel === "Not a Number" || validateCargo === "Not a Number"){
            alert("Make sure to enter valid information for each field!");
            return;
        };

        if (fuelLevel < 10000 && cargoLevel > 10000){
            list.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
            fuelLevel = "too low";
            cargoLevel = "too heavy";
        } else if(fuelLevel >= 10000 && cargoLevel > 10000){
            list.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "rgb(199, 37, 78)";
            fuelLevel = "high enough";
            cargoLevel = "too heavy";
        } else if(fuelLevel < 10000 && cargoLevel <= 10000){
            list.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "rgb(199, 37, 78)";
            fuelLevel = "too low";
            cargoLevel = "low enough";
        } else {
            list.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            launchStatus.style.color = "rgb(65, 159, 106)";
            fuelLevel = "high enough";
            cargoLevel = "low enough";

        }
            
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for Launch`;
            copilotStatus.innerHTML = `Copilot ${copilot} is ready for Launch`;
            fuelStatus.innerHTML = `Fuel level ${fuelLevel} for launch`;
            cargoStatus.innerHTML = `Cargo mass ${cargoLevel} for launch`;
    
    }
        
    async function myFetch() {
        let planetsReturned;
        planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            return response.json();
        });

        return planetsReturned;
    }
   
    function pickPlanet(planets) {
        
        let index = Math.floor(Math.random()*6)
        return planets[index];
    }

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;