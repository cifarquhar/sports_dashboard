var PieChart = function(container, title, data){

  this.chart = new Highcharts.Chart({
    chart: {
      type: "pie",
      renderTo: container
    },
    title: {
      text: title
    },
    series: data
  })

}

module.exports = PieChart