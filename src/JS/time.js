const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let countDown = new Date("March 29, 2025 09:00:00").getTime(),
  x = setInterval(function () {
    let now = new Date().getTime(),
      distance = countDown - now;

    (document.getElementById("days").innerText =
      Math.floor(distance / day) > 0 ? Math.floor(distance / day) : 0),
      (document.getElementById("hours").innerText =
        Math.floor((distance % day) / hour) > 0
          ? Math.floor((distance % day) / hour)
          : 0),
      (document.getElementById("minutes").innerText =
        Math.floor((distance % hour) / minute) > 0
          ? Math.floor((distance % hour) / minute)
          : 0),
      (document.getElementById("seconds").innerText =
        Math.floor((distance % minute) / second) > 0
          ? Math.floor((distance % minute) / second)
          : 0);
  }, second);
