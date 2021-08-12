var ctx = document.getElementById("Pre19").getContext('2d');
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
      data: [10.23, 9.26, 14.39, 11.59, 8.72, 11.15, 9.97, 0
      ]
    }]
  }
});
