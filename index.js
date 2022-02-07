var date = new Date();
///

///
function rendCal() {
  date.setDate(1);

  var monthDays = document.querySelector(".days");

  var lastday = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  var prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

  var lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  var firstDayIndex = date.getDay();

  var nextDays = 7 - lastDayIndex - 1;

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  var days = "";
  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (var i = 1; i <= lastday; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else days += `<div>${i}</div>`;
  }
  for (var j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
  }
  monthDays.innerHTML = days;
  ///
}

document.querySelector(".prev").addEventListener("click", function () {
  date.setMonth(date.getMonth() - 1);
  rendCal();
});
document.querySelector(".next").addEventListener("click", function () {
  date.setMonth(date.getMonth() + 1);
  rendCal();
});

rendCal();
