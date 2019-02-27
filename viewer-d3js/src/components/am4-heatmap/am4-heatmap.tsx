import * as React from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import data from './sample-data'

am4core.useTheme(am4themes_animated);

class Am4Heatmap extends React.Component {
  private chart?: am4charts.XYChart

  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    // ... chart code goes here ...

    chart.maskBullets = false;

    let xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    let yAxis = chart.yAxes.push(new am4charts.CategoryAxis());

    xAxis.dataFields.category = "weekday";
    yAxis.dataFields.category = "hour";

    xAxis.renderer.grid.template.disabled = true;
    xAxis.renderer.minGridDistance = 40;

    yAxis.renderer.grid.template.disabled = true;
    yAxis.renderer.inversed = true;
    yAxis.renderer.minGridDistance = 30;

    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "weekday";
    series.dataFields.categoryY = "hour";
    series.dataFields.value = "value";
    series.sequencedInterpolation = true;
    series.defaultState.transitionDuration = 3000;
    series.columns.template.width = am4core.percent(100);
    series.columns.template.height = am4core.percent(100);

    series.heatRules.push({
      target:series.columns.template,
      property:"fill", min:am4core.color("#ffffff"), max:am4core.color("#692155")
    });

    var columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
    columnTemplate.stroke = am4core.color("#ffffff");
    columnTemplate.tooltipText = "{weekday}, {hour}: {value.workingValue.formatNumber('#.')}";

    // heat legend
    var heatLegend = chart.bottomAxesContainer.createChild(am4charts.HeatLegend);
    heatLegend.width = am4core.percent(100);
    heatLegend.series = series;
    heatLegend.valueAxis.renderer.labels.template.fontSize = 9;
    heatLegend.valueAxis.renderer.minGridDistance = 30;

    // heat legend behavior
    series.columns.template.events.on("over", (event) => {
	    handleHover(event.target);
    })

    series.columns.template.events.on("hit", (event) => {
	    handleHover(event.target);
    })

    function handleHover(column: any) { // am4charts.Column
      if (!column.dataItem) {
        return
      }

	    if (!isNaN(column.dataItem.value)) {
		    heatLegend.valueAxis.showTooltipAt(column.dataItem.value)
	    } else {
		    heatLegend.valueAxis.hideTooltip();
	    }
    }

    series.columns.template.events.on("out", (event) => {
	    heatLegend.valueAxis.hideTooltip();
    })

    chart.data = data

    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
    );
  }
}