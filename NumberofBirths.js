var ctx = document.getElementById("barColors").getContext('2d');
var barColors = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['All races', 'White', 'Black', 'American Indian or Alaska Native', 'Asian', 'Native Hawaiian/Pacific Islander', 'Hispanic'],
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
      data: [3605201, 1839565, 528448, 26638, 218860, 9612, 863949]
      
    }]
  }
});
