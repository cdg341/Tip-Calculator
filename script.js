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
          total.textContent = (billMoney.value * 0.05).toFixed(2);
          tipMoney.textContent = (total.textContent / ppl.value).toFixed(2);
          break;
        case "10%":
          total.textContent = (billMoney.value * 0.1).toFixed(2);
          tipMoney.textContent = (total.textContent / ppl.value).toFixed(2);
          break;
        case "15%":
          total.textContent = (billMoney.value * 0.15).toFixed(2);
          tipMoney.textContent = (total.textContent / ppl.value).toFixed(2);
          break;
        case "25%":
          total.textContent = (billMoney.value * 0.25).toFixed(2);
          tipMoney.textContent = (total.textContent / ppl.value).toFixed(2);
          break;
        case "50%":
          total.textContent = (billMoney.value * 0.5).toFixed(2);
          tipMoney.textContent = (total.textContent / ppl.value).toFixed(2);
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

//Reset button to clear app
reset.addEventListener("click", () => {
  billMoney.value = "";
  total.textContent = "0.00";
  tipMoney.textContent = "0.00";
  billMoney.focus();
});
