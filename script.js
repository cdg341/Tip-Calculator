let billMoney = document.getElementById("billInput");
let tipMoney = document.getElementById("tipMoney");
let tipButtons = document.querySelectorAll(".tipBtn");
let ppl = document.getElementById("ppl");
let total = document.getElementById("tipTotal");
let reset = document.getElementById("reset");

//Loop through buttons and add event listener
tipButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (ppl.value === "0") {
      alert("Please enter number of people greater than 0");
    } else {
      //Use of switch statement to calculate and show amounts
      switch (button.textContent) {
        case "5%":
          fivePercent();
          break;
        case "10%":
          tenPercent();
          break;
        case "15%":
          fifteenPercent();
          break;
        case "25%":
          twentyfivePercent();
          break;
        case "50%":
          fiftyPercent();
      }
    }

    //How to do the same using if statement
    /* if (button.textContent === "5%") {
      total.textContent = billMoney.value * 0.05;
      tipMoney.textContent = total.textContent / ppl.value;
    } else if (button.textContent === "10%") {
      total.textContent = billMoney.value * 0.1;
      tipMoney.textContent = total.textContent / ppl.value;
    } else if (button.textContent === "15%") {
      total.textContent = billMoney.value * 0.15;
      tipMoney.textContent = total.textContent / ppl.value;
    } else if (button.textContent === "25%") {
      total.textContent = billMoney.value * 0.25;
      tipMoney.textContent = total.textContent / ppl.value;
    } else if (button.textContent === "50%") {
      total.textContent = billMoney.value * 0.5;
      tipMoney.textContent = total.textContent / ppl.value;
    } */
  });
});

//Functions for calculations
function fivePercent() {
  tipMoney.textContent = ((billMoney.value * 0.05) / ppl.value).toFixed(2);
  total.textContent = (Number(billMoney.value) * 0.05 + Number(billMoney.value)).toFixed(2);
}

function tenPercent() {
  tipMoney.textContent = ((billMoney.value * 0.1) / ppl.value).toFixed(2);
  total.textContent = (Number(billMoney.value) * 0.1 + Number(billMoney.value)).toFixed(2);
}

function fifteenPercent() {
  tipMoney.textContent = ((billMoney.value * 0.15) / ppl.value).toFixed(2);
  total.textContent = (Number(billMoney.value) * 0.15 + Number(billMoney.value)).toFixed(2);
}

function twentyfivePercent() {
  tipMoney.textContent = ((billMoney.value * 0.25) / ppl.value).toFixed(2);
  total.textContent = (Number(billMoney.value) * 0.25 + Number(billMoney.value)).toFixed(2);
}

function fiftyPercent() {
  tipMoney.textContent = ((billMoney.value * 0.5) / ppl.value).toFixed(2);
  total.textContent = (Number(billMoney.value) * 0.5 + Number(billMoney.value)).toFixed(2);
}

//Reset button to clear app
reset.addEventListener("click", () => {
  billMoney.value = "";
  total.textContent = "0.00";
  tipMoney.textContent = "0.00";
  billMoney.focus();
});
