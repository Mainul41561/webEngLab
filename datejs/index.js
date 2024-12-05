function displayTime() {
    const now = new Date(); // Get the current date and time
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("time").textContent = timeString;
}

// Update the time every second
setInterval(displayTime, 1000);

// Initialize the display immediately
displayTime();
