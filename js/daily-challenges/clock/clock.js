function updateClock(timeZone = "local") {
  const clockElement = document.getElementById("clock");
  const now =
    timeZone === "local"
      ? new Date()
      : new Date().toLocaleString("en-US", { timeZone });
  const date = new Date(now); // Convert the string back to a Date object

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  const timeString = `${hours}:${minutes}:${seconds}`;
  clockElement.textContent = timeString;
}

function startClock() {
  const timeZoneSelect = document.getElementById("timezone");

  function update() {
    updateClock(timeZoneSelect.value);
  }

  timeZoneSelect.addEventListener("change", update);
  setInterval(update, 1000);
  update(); // Initial call to display the time immediately
}

startClock();
