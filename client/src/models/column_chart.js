var ColumnChart = function(container,title,data,categories){

  this.chart = new Highcharts.Chart({
    chart: {
      type: "column",
      renderTo: container
    },
    title: {
      text: title
    },
    series: data,
    xAxis: {
      categories: categories
    }

  })

}

module.exports = ColumnChart