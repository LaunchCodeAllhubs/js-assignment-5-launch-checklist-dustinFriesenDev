const { formSubmission, addDestinationInfo, myFetch, pickPlanet  } = require("./scriptHelper");
window.addEventListener("load", function() {

    let form = this.document.querySelector("form");
    let pilotName = document.querySelector("input[name=pilotName");
    let copilotName = document.querySelector("input[name=copilotName");
    let fuelLevel = document.querySelector("input[name=fuelLevel");
    let cargoMass = document.querySelector("input[name=cargoMass");
    let launchStatus = document.getElementById("launchStatus");
    let faultyItems = document.getElementById("faultyItems");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus"); 
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus"); 

    form.addEventListener("submit", function(event){
        if(pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
            alert("All fields are required!");
            event.preventDefault();
        } else if (formSubmission(window.document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value === false)){
            alert("Make sure to enter valid information for each field!");
        };

        pilotStatus.innerHTML = pilotName.value;
        
    //faultyItems become visible once submitions if validated
    //pilot's name is inserted into sentence
        //"Pilot {Name} is ready for launch"
    //copilot's name is inserted into sentence
        //"Co-pilot {name} is ready for launch"
    //if input of fuel level under 10,000 
        //report "fuel level too low for launch"
    //if input fuel level is over 10,000
        //report "fuel level high enough for launch"
    //if input cargo mass over 10,000
        //reported "cargo mass too heavy for launch"
    //if input cargo is under 10,000
        //rported "cargo mass low enough for launch"
    //If all element above are ready for launch the header is green.
        //"Shuttle is Ready for Launch"
    //If one or more elements above are not ready for launche the header is red
        //"Shuttle Not Ready for Launch"


    });



   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});