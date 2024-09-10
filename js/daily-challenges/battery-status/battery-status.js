// Check if the Battery Status API is supported
if ("Battery" in window.navigator) {
  // Get the battery object
  const battery = window.navigator.getBattery();

  // Display battery level as a percentage
  const levelElement = document.getElementById("battery-level");
  const statusElement = document.getElementById("battery-status");

  // Display initial battery level and status
  battery.then((battery) => {
    levelElement.textContent = `${battery.level * 100}%`;
    statusElement.textContent = battery.charging ? "Charging" : "Not Charging";
  });

  // Add event listeners to update the battery level and charging status dynamically
  battery.addEventListener("chargingchange", () => {
    statusElement.textContent = battery.charging ? "Charging" : "Not Charging";
  });

  battery.addEventListener("chargingtimechange", () => {
    const remainingTime = battery.chargingTime * 100;
    const elapsedTime = battery.dischargingTime * 100;
    const remainingTimeElement = document.getElementById("remaining-time");
    const elapsedTimeElement = document.getElementById("elapsed-time");

    remainingTimeElement.textContent = `${remainingTime.toFixed(2)}%`;
    elapsedTimeElement.textContent = `${elapsedTime.toFixed(2)}%`;
  });

  battery.addEventListener("levelchange", () => {
    levelElement.textContent = `${battery.level * 100}%`;
  });
} else {
  console.error("Battery Status API is not supported.");
}
