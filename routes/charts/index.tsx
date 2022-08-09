/** @jsx h */
import { h } from "preact";
import { PageProps, Handlers } from "$fresh/server.ts";
import { tw } from "@twind";
import ChartContainer from "../../islands/ChartContainer.tsx";

export const handler: Handlers = {
  async GET(req, ctx) {

    // console.log('middlewar data is : ', ctx.state.data)
    const resp = await ctx.render(ctx.state.data);
    return resp;
  },
};

//that data gets accessed by destructuring the property of V
//to get data and we then can use that in the return
export default function Charts(props: PageProps) {
  // const chartsLog = () => console.log('props data', props.data);
  const typeChart = props.data;
  // chart={ typeChart } REMOVED FROM 25
  return (
    // <div>Charts {props.params.name}</div>
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <ChartContainer  chart={typeChart}/>
      {/* { chartsLog() } */}
    </div>
  )
}