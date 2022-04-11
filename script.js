let billMoney = document.getElementById("billInput");
let tipMoney = document.getElementById("tipMoney");
let tipButtons = document.querySelectorAll(".tipBtn");
let ppl = document.getElementById("ppl");
let total = document.getElementById("tipTotal");
let reset = document.getElementById("reset");
let customBtn = document.querySelector(".tipCustom");

/* ppl.onkeydown = function (e) {
  e.preventDefault();
};
 */
//Loop through buttons and add event listener
tipButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    //If user doesn't put in bill amount or number of people
    if (billMoney.value === "" || isNaN(billMoney.value)) {
      alert("Please enter a bill amount");
      billMoney.value = "";
      billMoney.style.border = "1px solid red";
    } else if (ppl.value === "" || isNaN(ppl.value)) {
      alert("Please enter a number of people");
      ppl.style.border = "1px solid red";
      ppl.value = "1";
    } else {
      billMoney.style.border = "1px solid black";
      ppl.style.border = "1px solid black";

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

//Custom Tip input box event listener
customBtn.addEventListener("input", () => {
  tipMoney.textContent = ((billMoney.value * (customBtn.value / 100)) / ppl.value).toFixed(2);
  total.textContent = (Number(billMoney.value) * (customBtn.value / 100) + Number(billMoney.value)).toFixed(2);
});

//Reset button to clear app
reset.addEventListener("click", () => {
  billMoney.value = "";
  total.textContent = "0.00";
  tipMoney.textContent = "0.00";
  customBtn.value = "";
  billMoney.focus();
});
