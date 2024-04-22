const gravitaionalAccelerations = {
    mercury: 3.7,
    venus: 8.87,
    earth: 9.81,
    mars: 3.71,
    jupiter: 24.79,
    saturn: 10.44,
    uranus: 8.69,
    neptune: 11.15
}

// *function to calculate weight on each planet
const calculateWeightOnPlanets = (weightOnEarth) => {
    const weightsOnPlanets = {};
    for (const planet in gravitaionalAccelerations) {
        const gravityOnPlanet = gravitaionalAccelerations[planet];
        const weightOnPlanet = (weightOnEarth * gravityOnPlanet) / gravitaionalAccelerations.earth;
        weightsOnPlanets[planet] = weightOnPlanet;
    }
    return weightsOnPlanets;
}

// *function calculate and display results
const calculateWeight = () => {
    const earthWeightInput = document.querySelector("#earthWeight");
    const result = document.querySelector("#result");

    const weightOnEarth = parseFloat(earthWeightInput.value);
    if (!isNaN(weightOnEarth)) {
        const weightOnPlanets = calculateWeightOnPlanets(weightOnEarth);
        let resultText = ``;
        for (const planet in weightOnPlanets) {
            resultText += `
            <div class="planet-box">
                <img src="./imgs/${planet}.png">
                <p>
                    ${planet.charAt(0).toUpperCase() + planet.slice(1)}
                    <br>
                    ${weightOnPlanets[planet].toFixed(2)} kg
                </p>
            </div>
        `
        }
        result.innerHTML = resultText;
    } else {
        result.innerHTML = `<p>Please enter a valid weight.</p>`
    }
}

document.querySelector("#calculate-btn").addEventListener("click", calculateWeight)