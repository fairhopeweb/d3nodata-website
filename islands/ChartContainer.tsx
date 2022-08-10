/** @jsx h */
import { h, render } from "preact";
import { useEffect, useState } from "preact/hooks";
import { tw } from "@twind";

import { Button } from "../components/Button.tsx";
import { Slider } from "../components/Slider.tsx";

import { scatterData } from "../Dummy_Data/ScatterPlotChart_data.ts";
import { barData } from "../Dummy_Data/BarChart_data.ts";
import { donutData } from "../Dummy_Data/DonutChart_data.ts";
import { lineData } from "../Dummy_Data/LineChart_data.ts";
import {
  BarChart,
  DonutChart,
  LineChart,
  ScatterPlotChart,
} from "https://deno.land/x/d3nodata@v.0.0.1.2.2.2/charts.ts";

import {
  barChartProperties,
  donutChartProperties,
  lineChartProperties,
  scatterPlotChartProperties,
} from "../chartPropertyTypes.ts";

// input: chartProperties are the properties of the chart that the user will be altering

export default function ChartContainer(props) {
  const barBundle = [BarChart, barChartProperties];
  const scatterBundle = [ScatterPlotChart, scatterPlotChartProperties];
  const donutBundle = [DonutChart, donutChartProperties];
  const lineBundle = [LineChart, lineChartProperties];

  const [display, setDisplay] = useState(barBundle);

  function ButtonBar() {
    return (
      <div class={tw`col-span-1 w-full h-[89vh]`}>
        <ul class={tw`flex flex-col pt-5 gap-5`}>
          <li>
            <Button
              onClick={() => {
                setDisplay(barBundle);
              }}
            >
              BAR CHART
            </Button>
          </li>
          <li>
            <Button
              onClick={() => {
                setDisplay(lineBundle);
              }}
            >
              LINE CHART
            </Button>
          </li>
          <li>
            <Button
              onClick={() => {
                setDisplay(scatterBundle);
              }}
            >
              SCATTERPLOT CHART
            </Button>
          </li>
          <li>
            <Button
              onClick={() => {
                setDisplay(donutBundle);
              }}
            >
              DONUT CHART
            </Button>
          </li>
        </ul>
      </div>
    );
  }

  function ChartDisplay(chart, chartProperties) {
    function Interactivity() {
      //this separates the keys of our property object
      const propertyNames: string[] = (Object.keys(chartProperties));

      // const modifyInfo = (property:string, callback) => chartProperties.property = callback();

      // creates iteractive element for each property
      const InteractiveElement = ({ property }) => {
        // assign interactiveEl
        let propFunc;
        if (chartProperties[property + "Func"] === "slider") {
          propFunc = (
            <input
              type="range"
              min="1"
              max="1000"
              value={chartProperties[property]}
              class={tw
                `w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700`}
              onChange={(e) => {
                chartProperties[property] = e.target.value;
                setDisplay([chart, chartProperties]);
              }}
            />
          );
        }
        if (chartProperties[property + "Func"] === "input") {
          propFunc = (
            <input
              id={property}
              value={chartProperties[property]}
              class={tw
                `block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50`}
              onChange={() => {
                chartProperties[property] = document.querySelector("#" + property).value;
                setDisplay([chart, chartProperties]);
              }}
            />
          );
        }
        if (chartProperties[property + "Func"] === 'colorPicker') {
          propFunc = (
            <input 
            id={property}
            value={chartProperties[property]}
            type='color'
            onChange={(e) => {
              chartProperties[property] = e.target.value;
              setDisplay([chart, chartProperties])
            }}
            />
          )
        }

        return (
          <div id="singleElement" key={property}>
            {property}: {propFunc}
          </div>
        );
      };

      // select all properties of the passed-in info which the user will be altering
      const propertyList = propertyNames.map((property) => {
        if (
          property !== "data" && property !== "labels" &&
          !property.includes("Func")
        ) {
          return <InteractiveElement key={property} property={property} />;
        }
      });
      return (propertyList);
    }

    return (
      <div>
        {chart(chartProperties)}
        {Interactivity()}
      </div>
    );
  }

  function ChartRender() {
    return (
      <div class={tw`h-full col-span-4 border-l-2 flex flex-col items-center`}>
        {ChartDisplay(display[0], display[1])}
      </div>
    );
  }

  return (
    <div class={tw`grid grid-cols-5 gap-2 h-full`}>
      <ButtonBar />
      <ChartRender />
    </div>
  );
}