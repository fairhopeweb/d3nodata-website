import { barDatasets } from "./Dummy_Data/BarChart_data.ts";
import { scatterData } from "./Dummy_Data/ScatterPlotChart_data.ts";
import { donutData } from "./Dummy_Data/DonutChart_data.ts";
import { datasets } from "./Dummy_Data/LineChart_data.ts";
// import { pieChartData } from "./Dummy_Data/PieChart_data.ts";

// Interactive elements for each property are defined in propFunc
// Func types: slider, checkbox, input, colorPicker
const barChartProperties = {
  datasets: barDatasets,
  // barColor: "#BFE4A3",
  // barColorFunc: "colorPicker",
  animationDuration: 70,
  animationDurationFunc: "slider",
  animationDelay: 30,
  animationDelayFunc: "slider",
  axesColor: "#4D908E",
  axesColorFunc: "colorPicker",
  axesLabelColor: "#277DA1",
  axesLabelColorFunc: "colorPicker",
  barHoverColor: "#90BE6D",
  barHoverColorFunc: "colorPicker",
  addAxesLabel: true,
  addAxesLabelFunc: "checkbox",
  xAxisLabel: "x label",
  xAxisLabelFunc: "input",
  yAxisLabel: "y label",
  yAxisLabelFunc: "input",
  toolTip: true,
  toolTipFunc: "checkbox",
  fontFamily: "Verdana",
  fontFamilyFunc: "input",
  addTitle: true,
  addTitleFunc: "checkbox",
  setTitle: "TITLE",
  setTitleFunc: "input",
  setTitleSize: "1.5em",
  setTitleSizeFunc: "input",
  setTitleColor: "#277DA1",
  setTitleColorFunc: "colorPicker",
};

const scatterPlotChartProperties = {
  datasets: scatterData,
  // dotColor: "#BFE4A3",
  // dotColorFunc: "colorPicker",
  axesColor: "#4D908E",
  axesColorFunc: "colorPicker",
  axesLabelColor: "#277DA1",
  axesLabelColorFunc: "colorPicker",
  setTitle: "ScatterPlot",
  setTitleFunc: "input",
  width: "700",
  height: "700",
};

const donutChartProperties = {
  data: donutData,
  setTitle: "Ages",
  setTitleFunc: "input",
  colorStart: "#cefad0",
  colorStartFunc: "colorPicker",
  colorEnd: "green",
  colorEndFunc: "colorPicker",
  width: "700",
  height: "700",
  innerRadius: "100",
  innerRadiusFunc: "slider",
};

const lineChartProperties = {
  datasets: datasets,
  setTitle: "Line",
  setTitleFunc: "input",
  // lineColor: "#BFE4A3",
  // lineColorFunc: "colorPicker",
  width: 700,
  widthFunc: "input",
  height: 700,
  heightFunc: "input",
  fontFamily: "Verdana",
  fontFamilyFunc: "input",
  // add axes
  addAxesLabel: false,
  xAxisLabel: "x label",
  xAxisLabelFunc: "input",
  yAxisLabel: "y label",
};

const choroplethChartProperties = {
  lowColor: "#e6f6fe",
  lowColorFunc: 'colorPicker',
  highColor: "#00008B",
  highColorFunc: 'colorPicker',
  title: "Map of the World",
  titleFunc: "input",
  scale: 75,
  scaleFunc: 'input',
  width: 600,
  widthFunc: 'input',
  height: 600,
  heightFunc: 'input', 
  thresholdScale: false,
  thresholdScaleFunc: 'checkbox',
  fontSize: '10px',
  fontSizeFunc: 'input'
}

export {
  barChartProperties,
  donutChartProperties,
  lineChartProperties,
  scatterPlotChartProperties,
  choroplethChartProperties,
};
