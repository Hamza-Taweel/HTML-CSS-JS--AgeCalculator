const dateInpute = document.getElementById("dateInpute");
const calcBtn = document.getElementById("calc-btn");
const ageMsg = document.querySelector(".ageMsg");
const clearBtn = document.querySelector(".clear-btn");

function CalcAge() {
  let years = 0;
  let months = 0;
  let days = 0;
  let myDate = new Date(dateInpute.value);
  let dateNow = new Date();

  years = dateNow.getFullYear() - myDate.getFullYear();
  months = dateNow.getMonth() - myDate.getMonth();
  days = dateNow.getDate() - myDate.getDate();
  if (days < 0) {
    months--;

    // عدد أيام الشهر السابق
    let prevMonth = new Date(dateNow.getFullYear(), dateNow.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  ageMsg.style.display = "block";
  ageMsg.innerHTML = `You are ${years} years, ${months} months and ${days} days old`;
  clearBtn.style.display = "block";
}

calcBtn.addEventListener("click", CalcAge);

clearBtn.addEventListener("click", () => {
  ageMsg.innerHTML = "";
  ageMsg.style.display = "none";
  dateInpute.value = "";
  clearBtn.style.display = "none";
});
