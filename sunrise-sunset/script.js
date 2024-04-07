const lat = 40.7128;
const lng = -74.0060;

async function fetchSunTimes() {
    const response = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`);
    const data = await response.json();
    return data.results;
}

function scheduleSunAnimations(sunrise, sunset) {
    console.log(`Sunrise: ${sunrise}, Sunset: ${sunset}`);
}

function updateClockAndSun() {
    const now = new Date();
    document.getElementById('clock').textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    fetchSunTimes().then(times => {
        const sunriseTime = new Date(times.sunrise);
        const sunsetTime = new Date(times.sunset);
        scheduleSunAnimations(sunriseTime, sunsetTime);
    });
}

setInterval(updateClockAndSun, 1000);
