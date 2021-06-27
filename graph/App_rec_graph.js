//Application Recived graph
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'This', 'This Week'],
          ['Jan',  1000,      400],
          ['Feb',  1170,      460],
          ['Mar',  660,       1120],
          ['Apr',  1030,      540]
          
        ]);

        var options = {
          curveType: 'function',
          backgroundColor: 'transparent',
          is3D: true,
          hAxis: {
            textStyle:{color: '#FFF'}
          }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }
   