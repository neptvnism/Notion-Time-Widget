// script.js
function updateTime() {
  const timeElem = document.getElementById('time');

  let now = new Date();
  let hours = String(now.getHours()).padStart(2, '0');
  let minutes = String(now.getMinutes()).padStart(2, '0');
  let seconds = String(now.getSeconds()).padStart(2, '0');

  timeElem.textContent = `${hours}:${minutes}:${seconds}`;
}

updateTime();

// Update thetime every second
setInterval(updateTime, 1000);