let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let totalEl = document.getElementById("total");
let averageEl = document.getElementById("average");
let count = 0;
let countTable = [];
let total = 0;
let avgang = 0;
let average = 0;

let xValues = [];
let barColors = "#BC7B67";

function increment() {
  count += 1;
  countEl.textContent = count;
  total++;
}

let options = {
  legend: { display: false },
  title: {
    text: "Bybanekrasj",
  },
  scaleOverride: true,
  display: true,
  responsive: true,
  events: [],
  tooltips: { enabled: false },
  hover: { mode: "label" },
  scales: {
    yAxes: [
      {
        display: true,
        ticks: {
          beginAtZero: true, // minimum value will be 0.
          steps: 1,
          max: 20,
        },
      },
    ],
  },
};

let myChart = new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: countTable,
      },
    ],
  },
  options: options,
});

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;

  countTable.push(count);
  console.log(countTable);

  count = 0;

  totalEl.textContent = "Krasj totalt : " + total;

  avgang++;
  averageEl.textContent =
    "Gjennomsnittelig krasj per tur : " + Math.trunc(total / avgang);

  xValues.push(avgang);
  console.log(xValues);

  myChart.update();
}

//const myChart = new Chart("myChart", {});
