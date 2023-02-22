const timerHandler = () => {
  const targetDate = new Date(2023, 4, 31);
  const currentDate = new Date();
  const gap = targetDate - currentDate;

  const days = Math.floor(gap / 1000 / 60 / 60 / 24);
  const hours = Math.floor(gap / 1000 / 60 / 60) % 24;
  const min = Math.floor(gap / 1000 / 60) % 60;
  const sec = Math.floor(gap / 1000) % 60;

  if (gap < 0) {
    days = days + 7;
    hours = hours + 24;
    min = min + 60;
    sec = sec + 60;
  }

  const daysSpan = document.getElementById("days");
  const hoursSpan = document.getElementById("hours");
  const minutesSpan = document.getElementById("minutes");
  const secondsSpan = document.getElementById("seconds");

  daysSpan.textContent = days < 10 ? "0" + days : days;
  hoursSpan.textContent = hours < 10 ? "0" + hours : hours;
  minutesSpan.textContent = min < 10 ? "0" + min : min;
  secondsSpan.textContent = sec < 10 ? "0" + sec : sec;

  const changeTimerText = () => {
    if (window.innerWidth <= 940) {
      daysSpan.nextElementSibling.textContent !== "DD" &&
        (daysSpan.nextElementSibling.textContent = "DD");

      hoursSpan.nextElementSibling.textContent !== "HH" &&
        (hoursSpan.nextElementSibling.textContent = "HH");

      minutesSpan.nextElementSibling.textContent !== "MM" &&
        (minutesSpan.nextElementSibling.textContent = "MM");

      secondsSpan.nextElementSibling.textContent !== "SS" &&
        (secondsSpan.nextElementSibling.textContent = "SS");
    } else {
      daysSpan.nextElementSibling.textContent !== "Days" &&
        (daysSpan.nextElementSibling.textContent = "Days");

      hoursSpan.nextElementSibling.textContent !== "Hours" &&
        (hoursSpan.nextElementSibling.textContent = "Hours");

      minutesSpan.nextElementSibling.textContent !== "Minutes" &&
        (minutesSpan.nextElementSibling.textContent = "Minutes");

      secondsSpan.nextElementSibling.textContent !== "Seconds" &&
        (secondsSpan.nextElementSibling.textContent = "Seconds");
    }
  };

  changeTimerText();
  window.addEventListener("resize", () => changeTimerText());
};

const Timer = {
  start() {
    timerHandler();
    setInterval(timerHandler, 1000);
  },
};

export default Timer;
