// Write your JavaScript code here!

window.addEventListener("load", function(){
    let form = this.document.querySelector("form");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        let list = document.getElementById("faultyItems");
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel").value; 
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;
        
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    });
});

        


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
        let planetIndex = pickPlanet(listedPlanets);
        addDestinationInfo(document, planetIndex.name, planetIndex.diameter, planetIndex.star, planetIndex.distance, planetIndex.moons, planetIndex.image);
    })