var ctx = document.getElementById("Pre20").getContext('2d');
var barColor = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['All races', 'White', 'Black', 'American Indian or Alaska Native', 'Asian', 'Native Hawaiian/Pacific Islander','Hispanic'],
    datasets: [{
      backgroundColor: [
        "#f1c40f",
        "#e74c3c",
        "#34495e",
        "#eba434",
        "#34eb93",
        "#c9eb34",
        "#3459eb",
        "#589fbf"
      ],
      data: [10.09, 9.10, 14.35, 11.57, 8.5, 11.98, 9.83,0
      ]
    }]
  }
});
