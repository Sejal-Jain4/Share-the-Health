var ctx = document.getElementById("barColor").getContext('2d');
var barColor = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['White', 'Asian Americans', 'Pacific Islander', 'African American', 'Hispanic', 'American Indians'],
    datasets: [{
      backgroundColor: [
        "#f1c40f",
        "#e74c3c",
        "#34495e",
        "#eba434",
        "#34eb93",
        "#c9eb34"
      ],
      data: [88, 82, 80, 79, 68, 68,0]
    }]
  }
});
