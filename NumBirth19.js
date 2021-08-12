var ctx = document.getElementById("barrColors").getContext('2d');
var barrColors = new Chart(ctx, {
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
        "#3459eb"
        
      ],
      data: [3747540, 1915912, 548075, 28450, 238769, 9770, 886467, 
      ]
    }]
  }
});