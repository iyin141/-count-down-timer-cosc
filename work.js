function countdown() {
  const countDownDate = new Date("Mar 5, 2024 00:11:30").getTime();
  
  const interval = setInterval(() => {
    
  const now = new Date().getTime();
  const distance = countDownDate - now;

    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = formatTime(days);
    document.getElementById("hours").textContent = formatTime(hours);
    document.getElementById("minutes").textContent = formatTime(minutes);
    document.getElementById("seconds").textContent = formatTime(seconds);

    
    if (distance < 0) {
      clearInterval(interval);
      document.getElementById("days").textContent = "00";
      document.getElementById("hours").textContent = "00";
      document.getElementById("minutes").textContent = "00";
      document.getElementById("seconds").textContent = "00";
    }
  }, 1000);
}


function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}


window.onload = countdown;
