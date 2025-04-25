function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-GB', { hour12: false });
    document.getElementById('clock').innerText = timeString;
  }
  
  setInterval(updateClock, 1000);
  updateClock();
  