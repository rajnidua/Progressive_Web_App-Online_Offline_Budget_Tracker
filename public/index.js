let myChart,
  transactions = [];
fetch("/api/transaction")
  .then((a) => a.json())
  .then((a) => {
    (transactions = a), populateTotal(), populateTable(), populateChart();
  });
function populateTotal() {
  let a = transactions.reduce((a, b) => a + parseInt(b.value), 0),
    b = document.querySelector("#total");
  b.textContent = a;
}
function populateTable() {
  let a = document.querySelector("#tbody");
  (a.innerHTML = ""),
    transactions.forEach((b) => {
      let c = document.createElement("tr");
      (c.innerHTML = `
      <td>${b.name}</td>
      <td>${b.value}</td>
    `),
        a.appendChild(c);
    });
}
function populateChart() {
  let a = transactions.slice().reverse(),
    b = 0,
    c = a.map((a) => {
      let b = new Date(a.date);
      return `${b.getMonth() + 1}/${b.getDate()}/${b.getFullYear()}`;
    }),
    d = a.map((a) => ((b += parseInt(a.value)), b));
  myChart && myChart.destroy();
  let e = document.getElementById("myChart").getContext("2d");
  myChart = new Chart(e, {
    type: "line",
    data: {
      labels: c,
      datasets: [
        {
          label: "Total Over Time",
          fill: !0,
          backgroundColor: "#6666ff",
          data: d,
        },
      ],
    },
  });
}
function sendTransaction(a) {
  let b = document.querySelector("#t-name"),
    c = document.querySelector("#t-amount"),
    d = document.querySelector(".form .error");
  if ("" === b.value || "" === c.value)
    return void (d.textContent = "Missing Information");
  d.textContent = "";
  let e = { name: b.value, value: c.value, date: new Date().toISOString() };
  a || (e.value *= -1),
    transactions.unshift(e),
    populateChart(),
    populateTable(),
    populateTotal(),
    fetch("/api/transaction", {
      method: "POST",
      body: JSON.stringify(e),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((a) => a.json())
      .then((a) => {
        a.errors
          ? (d.textContent = "Missing Information")
          : ((b.value = ""), (c.value = ""));
      })
      .catch(() => {
        saveRecord(e), (b.value = ""), (c.value = "");
      });
}
(document.querySelector("#add-btn").onclick = function () {
  sendTransaction(!0);
}),
  (document.querySelector("#sub-btn").onclick = function () {
    sendTransaction(!1);
  });
