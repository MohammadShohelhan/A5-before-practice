// ========================================================
// =======================calculate button=================================
// ========================================================

const calculate = document.getElementById("calculate");

calculate.addEventListener("click", (e) => {
  const income = getValue("income");
  const software = getValue("software");
  const courses = getValue("courses");
  const internet = getValue("internet");

  const expenses = software + courses + internet;

  if (income > expenses) {
    const error = document.getElementById("logic-error");
    console.log(error);
    error.classList.add("hidden");
    const blance = income - expenses;
    // =============================================
    document.getElementById("total-expenses").innerText = expenses.toFixed(2);
    document.getElementById("balance").innerText = blance.toFixed(2);
    document.getElementById("results").classList.remove("hidden");

    const historylist = document.getElementById("history-list");
    const div = document.createElement("div");

    div.innerHTML = `<div class='border-l-2 border-green-500 p-4 shadow-md'>
      <p class='font-bold text-bold text-xs text-gray-500'>${new Date().toLocaleDateString()}</p>
      <p class='font-bold text-xs text-gray-500'>Income : $ ${income}</p>
      <p class='font-bold text-xs text-gray-500'>Expence : $ ${expenses}</p>
      <p class='font-bold text-xs text-gray-500'>$Balance : $ ${blance}</p>
      </div>
      `;
    // =============================================
    historylist.insertBefore(div, historylist.firstChild);
  } else {
    const error = document.getElementById("logic-error");
    // =============================================
    error.classList.remove("hidden");
  }
});
// ========================================================
// ========================================================
// ========================================================

// ========================================================
// =================claculate seving ======================
// ========================================================

document.getElementById("calculate-savings").addEventListener("click", () => {
  const income = getValue("income");
  const software = getValue("software");
  const courses = getValue("courses");
  const internet = getValue("internet");
  const savings = getValue("savings");
  if (savings <= 50) {
    const expenses = software + courses + internet;
    const blance = income - expenses;

    const savingsAmount = (blance * savings) / 100; //persentage value
    const remainingAmount = blance - savingsAmount;
    // =============================================
    document.getElementById("savings-amount").innerText =
      savingsAmount.toFixed(2);
    document.getElementById("remaining-balance").innerText =
      remainingAmount.toFixed(2);
  } else {
    alert("upto 50% brother");
  }
});
// ========================================================
// ========================================================
// ========================================================

// ========================================================
// =====================history tab functioan==============
// ========================================================
const historytab = document.getElementById("history-tab");
historytab.addEventListener("click", () => {
  historytab.className =
    "w-1/2 py-2 rounded-l-md focus:outline-none transition-colors duration-200 text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-600";
  const assistanttab = document.getElementById("assistant-tab");
  assistanttab.className =
    "w-1/2 py-2 rounded-r-md focus:outline-none transition-colors duration-200 text-gray-600 font-semibold";
  // ==================================
  document.getElementById("expense-form").classList.add("hidden");
  document.getElementById("history-section").classList.remove("hidden");
});

// ========================================================
// ========================================================
// ========================================================

// ========================================================
// ======================asistance tab function========================
// ========================================================
const assistanttab = document.getElementById("assistant-tab");

assistanttab.addEventListener("click", () => {
  assistanttab.className =
    "w-1/2 py-2 rounded-l-md focus:outline-none transition-colors duration-200 text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-600";
  const historytab = document.getElementById("history-tab");
  historytab.className =
    "w-1/2 py-2 rounded-r-md focus:outline-none transition-colors duration-200 text-gray-600 font-semibold";
  // =============================================
  document.getElementById("expense-form").classList.remove("hidden");
  document.getElementById("history-section").classList.add("hidden");
});
