/** @jsx h */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import TypeWriting from "../islands/TypewritingComp.tsx";
import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>D3no Data</title>
      </Head>
      <div
        className={tw`w-full h-full flex flex-col items-center justify-center gap-20 bg-[#42476d]`}
      >
        {/* from figma */}
        <svg
          width="1028"
          height="217"
          viewBox="0 0 1359 217"
          fill="url(#gradient)"
          id="logo"
        >
          <path
            d="M103.024 188.505L103.031 188.502C116.724 181.655 127.192 171.851 134.386 159.098C141.734 146.196 145.38 131.052 145.38 113.72C145.38 96.389 141.735 81.2462 134.387 68.3443C127.196 55.436 116.733 45.5514 103.041 38.7032C89.5074 31.6943 73.5038 28.22 55.08 28.22H3H1.5V29.72V197V198.5H3H55.08C73.4981 198.5 89.4955 195.188 103.024 188.505ZM103.205 66.0459L103.212 66.0533C114.386 77.3826 120.06 93.2035 120.06 113.72C120.06 134.078 114.465 149.737 103.455 160.904C92.4623 171.893 76.4203 177.5 55.08 177.5H26.34V48.98H55.08C76.2483 48.98 92.2083 54.7396 103.205 66.0459Z"
            stroke="#2EE59D"
            stroke-width="2"
          />
          <path
            d="M167.664 70.9262L167.542 72.54H169.16H190.52H191.838L192.008 71.2328C193.084 62.9262 196.522 56.4015 202.286 51.5474C208.034 46.7072 215.663 44.22 225.32 44.22C235.321 44.22 242.74 46.7183 247.812 51.4923L247.82 51.4997L247.828 51.507C253.079 56.3078 255.74 62.6862 255.74 70.8C255.74 80.2714 252.19 87.1195 245.163 91.6093C237.983 96.0355 227.19 98.4205 212.592 98.58H206.84H205.34V100.08V118.32V119.82H206.84H212.36C228.406 119.82 240.135 122.45 247.774 127.492C255.246 132.423 259.1 140.52 259.1 152.16C259.1 161.089 256.266 168.292 250.659 173.899C245.273 179.286 237.235 182.1 226.28 182.1C215.36 182.1 206.789 179.143 200.406 173.368C193.975 167.549 190.211 160.051 189.13 150.786L188.975 149.46H187.64H166.52H164.898L165.025 151.077C166.331 167.732 172.561 180.777 183.806 190.038L183.817 190.046C195.017 199.105 209.292 203.58 226.52 203.58C238.375 203.58 248.616 201.469 257.191 197.182C265.741 192.906 272.215 187.034 276.539 179.55L276.542 179.544L276.546 179.538C280.843 171.935 282.98 163.438 282.98 154.08C282.98 141.667 279.873 131.467 273.526 123.617C267.853 116.599 260.375 111.686 251.156 108.855C259.154 106.406 265.748 101.867 270.898 95.2489C276.883 87.7638 279.86 78.8692 279.86 68.64C279.86 59.9069 277.715 52.0334 273.402 45.0616C269.234 38.0648 263.002 32.6029 254.786 28.6556C246.694 24.531 237.095 22.5 226.04 22.5C209.459 22.5 195.82 26.731 185.254 35.3158C174.655 43.9278 168.811 55.8493 167.664 70.9262Z"
            stroke="#2EE59D"
            stroke-width="2"
          />
          <path
            d="M446 198.5H447.5V197V29.48V27.98H446H424.16H422.66V29.48V157.448L337.572 28.6532L337.127 27.98H336.32H314.48H312.98V29.48V197V198.5H314.48H336.32H337.82V197V68.7992L422.908 197.826L423.352 198.5H424.16H446Z"
            stroke="#2EE59D"
            stroke-width="2"
          />
          <path
            d="M584 214C643.564 214 692 167.07 692 108.998C692 50.925 643.564 3.99515 584 3.99515C524.436 3.99515 476 50.925 476 108.998C476 167.07 524.436 214 584 214Z"
            stroke="#2EE59D"
            stroke-width="2"
          />
          <path
            d="M876.024 193.785L876.031 193.782C889.724 186.935 900.192 177.131 907.386 164.378C914.734 151.476 918.38 136.332 918.38 119C918.38 101.669 914.735 86.5262 907.387 73.6243C900.196 60.716 889.733 50.8314 876.041 43.9832C862.507 36.9743 846.504 33.5 828.08 33.5H776H774.5V35V202.28V203.78H776H828.08C846.498 203.78 862.495 200.468 876.024 193.785ZM876.205 71.3259L876.212 71.3333C887.386 82.6626 893.06 98.4835 893.06 119C893.06 139.358 887.465 155.017 876.455 166.184C865.462 177.173 849.42 182.78 828.08 182.78H799.34V54.26H828.08C849.248 54.26 865.208 60.0196 876.205 71.3259Z"
            stroke="#2EE59D"
            stroke-width="2"
          />
          <path
            d="M958.48 203.78H959.533L959.891 202.79L972.973 166.58H1043.83L1056.91 202.79L1057.27 203.78H1058.32H1081.36H1083.5L1082.77 201.769L1022.53 35.4492L1022.17 34.46H1021.12H995.92H994.869L994.51 35.4474L934.03 201.767L933.298 203.78H935.44H958.48ZM980.29 145.82L1008.4 67.2908L1036.51 145.82H980.29Z"
            stroke="#2EE59D"
            stroke-width="2"
          />
          <path
            d="M1201.46 35V33.5H1199.96H1086.68H1085.18V35V52.76V54.26H1086.68H1131.02V202.28V203.78H1132.52H1154.36H1155.86V202.28V54.26H1199.96H1201.46V52.76V35Z"
            stroke="#2EE59D"
            stroke-width="2"
          />
          <path
            d="M1231.48 203.78H1232.53L1232.89 202.79L1245.97 166.58H1316.83L1329.91 202.79L1330.27 203.78H1331.32H1354.36H1356.5L1355.77 201.769L1295.53 35.4492L1295.17 34.46H1294.12H1268.92H1267.87L1267.51 35.4474L1207.03 201.767L1206.3 203.78H1208.44H1231.48ZM1253.29 145.82L1281.4 67.2908L1309.51 145.82H1253.29Z"
            stroke="#2EE59D"
            stroke-width="2"
          />
          <defs>
            <linearGradient id="gradient">
              <stop
                offset="0%"
                stop-color="#113c4a"
              >
                <animate
                  dur="0.3s"
                  attributeName="offset"
                  fill="freeze"
                  from="0"
                  to="1"
                />
              </stop>
              <stop stop-color="transparent">
              </stop>
            </linearGradient>
          </defs>

          <g id="deno-logo">
            <mask
              id="mask0_0_1"
              style="mask-type:alpha"
              maskUnits="userSpaceOnUse"
              x="479"
              y="6"
              width="210"
              height="205"
            >
              <path
                d="M679 108.002C679 158.543 636.742 200.005 584 200.005C531.258 200.005 489 158.543 489 108.002C489 57.4619 531.258 16 584 16C636.742 16 679 57.4619 679 108.002Z"
                fill="#F5F5F5"
                stroke="#4D908E"
                stroke-width="20"
              />
            </mask>
            <g mask="url(#mask0_0_1)">
              <mask
                id="mask1_0_1"
                style="mask-type:alpha"
                maskUnits="userSpaceOnUse"
                x="527"
                y="17"
                width="150"
                height="205"
              >
                <path
                  d="M650.188 74.6633C654.868 107.842 661.888 178.247 676.707 221.947H593.251C593.251 210.617 585.451 138.594 582.331 110.27C505.894 102.987 511.666 20.6054 582.331 18.0158C628.349 16.3973 645.509 41.4841 650.188 74.6633Z"
                  fill="#B1DCA7"
                />
              </mask>
              <g mask="url(#mask1_0_1)">
                <path
                  d="M655.481 74.6427C660.362 107.81 667.684 178.189 683.14 221.872H596.094C596.094 210.547 587.959 138.55 584.705 110.237C504.98 102.956 511 20.6045 584.705 18.0158C632.702 16.3979 650.6 41.4755 655.481 74.6427Z"
                  fill="#B1DCA7"
                />
                <path
                  d="M579.367 44.721C581.521 44.721 583.267 42.9095 583.267 40.6748C583.267 38.4401 581.521 36.6286 579.367 36.6286C577.213 36.6286 575.467 38.4401 575.467 40.6748C575.467 42.9095 577.213 44.721 579.367 44.721Z"
                  fill="black"
                />
                <path
                  d="M552.848 44.721C555.002 44.721 556.748 42.9095 556.748 40.6748C556.748 38.4401 555.002 36.6286 552.848 36.6286C550.694 36.6286 548.948 38.4401 548.948 40.6748C548.948 42.9095 550.694 44.721 552.848 44.721Z"
                  fill="black"
                />
              </g>
            </g>
            <mask
              id="mask2_0_1"
              style="mask-type:alpha"
              maskUnits="userSpaceOnUse"
              x="479"
              y="6"
              width="210"
              height="205"
            >
              <ellipse
                cx="584"
                cy="108.002"
                rx="105"
                ry="102.002"
                fill="#4D908E"
              />
            </mask>
            <g mask="url(#mask2_0_1)">
              <rect
                x="469.781"
                y="167.214"
                width="227.415"
                height="86.5777"
                fill="#4D908E"
              />
            </g>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M532.431 147.311V159.685C532.431 159.995 532.744 160.248 533.132 160.248H538.738C539.126 160.248 539.439 159.995 539.439 159.685V147.311C539.439 147.001 539.126 146.748 538.738 146.748H533.132C532.744 146.748 532.431 147.001 532.431 147.311Z"
              fill="#77CD7B"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M522.617 140.561V159.685C522.617 159.995 522.93 160.248 523.318 160.248H528.926C529.312 160.248 529.627 159.995 529.627 159.685V140.561C529.627 140.251 529.312 139.998 528.926 139.998H523.318C522.93 139.998 522.617 140.251 522.617 140.561Z"
              fill="#FF9800"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M512.805 134.937V159.685C512.805 159.995 513.118 160.248 513.506 160.248H519.112C519.5 160.248 519.813 159.995 519.813 159.685V134.937C519.813 134.626 519.5 134.374 519.112 134.374H513.506C513.118 134.374 512.805 134.626 512.805 134.937Z"
              fill="#5C79C5"
            />
            <path
              d="M563.747 147.303L555.004 138.805C550.641 143.666 550.641 150.94 555.004 155.802L563.747 147.303Z"
              fill="#77CD7B"
            />
            <path
              d="M564.51 134.374C561.57 134.488 558.661 135.543 556.302 137.541L564.51 145.518V134.374Z"
              fill="#FF9800"
            />
            <path
              d="M566.346 147.303L556.302 157.065C561.536 161.501 569.48 161.301 574.465 156.458C579.666 151.401 579.666 143.205 574.465 138.15C572.195 135.942 569.309 134.703 566.346 134.423V147.303Z"
              fill="#5C79C5"
            />
            <path
              d="M628.11 160.248C628.236 160.248 628.363 160.19 628.468 160.07L632.943 155.024C633.207 155.257 633.514 155.396 633.848 155.396C634.396 155.396 634.882 155.024 635.198 154.457L639.014 156.249C639.031 157.567 639.794 158.631 640.731 158.631C641.68 158.631 642.452 157.542 642.452 156.205C642.452 156.104 642.44 156.007 642.431 155.912L646.424 153.097C646.733 153.518 647.152 153.779 647.615 153.779C648.563 153.779 649.336 152.69 649.336 151.353C649.336 150.809 649.204 150.312 648.989 149.906L654.08 139.144C654.214 139.191 654.353 139.226 654.498 139.226C655.448 139.226 656.22 138.136 656.22 136.8C656.22 135.461 655.448 134.374 654.498 134.374C653.55 134.374 652.778 135.461 652.778 136.8C652.778 137.344 652.91 137.841 653.125 138.245L648.035 149.009C647.9 148.962 647.76 148.927 647.615 148.927C646.666 148.927 645.893 150.016 645.893 151.353C645.893 151.454 645.906 151.549 645.916 151.646L641.922 154.461C641.613 154.04 641.194 153.779 640.731 153.779C640.181 153.779 639.696 154.15 639.381 154.718L635.565 152.924C635.548 151.608 634.785 150.544 633.848 150.544C632.899 150.544 632.126 151.633 632.126 152.97C632.126 153.248 632.167 153.511 632.227 153.76L627.752 158.808C627.504 159.086 627.465 159.596 627.662 159.945C627.776 160.143 627.942 160.248 628.11 160.248Z"
              fill="#57A0DC"
            />
            <path
              d="M590.608 156.42C591.71 156.42 592.605 157.278 592.605 158.333C592.605 159.39 591.71 160.248 590.608 160.248C589.504 160.248 588.61 159.39 588.61 158.333C588.61 157.278 589.504 156.42 590.608 156.42Z"
              fill="#57A0DC"
            />
            <path
              d="M592.605 148.765C593.708 148.765 594.603 149.622 594.603 150.679C594.603 151.735 593.708 152.592 592.605 152.592C591.503 152.592 590.608 151.735 590.608 150.679C590.608 149.622 591.503 148.765 592.605 148.765Z"
              fill="#57A0DC"
            />
            <path
              d="M598.749 153.829C599.851 153.829 600.746 154.686 600.746 155.743C600.746 156.801 599.851 157.658 598.749 157.658C597.646 157.658 596.751 156.801 596.751 155.743C596.751 154.686 597.646 153.829 598.749 153.829Z"
              fill="#77CD7B"
            />
            <path
              d="M608.586 153.867C609.688 153.867 610.582 154.725 610.582 155.782C610.582 156.839 609.688 157.696 608.586 157.696C607.482 157.696 606.588 156.839 606.588 155.782C606.588 154.725 607.482 153.867 608.586 153.867Z"
              fill="#57A0DC"
            />
            <path
              d="M601.928 145.576C603.029 145.576 603.924 146.433 603.924 147.489C603.924 148.546 603.029 149.403 601.928 149.403C600.824 149.403 599.929 148.546 599.929 147.489C599.929 146.433 600.824 145.576 601.928 145.576Z"
              fill="#57A0DC"
            />
            <path
              d="M611.249 143.662C612.351 143.662 613.246 144.519 613.246 145.576C613.246 146.632 612.351 147.489 611.249 147.489C610.145 147.489 609.251 146.632 609.251 145.576C609.251 144.519 610.145 143.662 611.249 143.662Z"
              fill="#77CD7B"
            />
            <path
              d="M613.246 135.369C614.349 135.369 615.244 136.226 615.244 137.283C615.244 138.339 614.349 139.196 613.246 139.196C612.144 139.196 611.249 138.339 611.249 137.283C611.249 136.226 612.144 135.369 613.246 135.369Z"
              fill="#77CD7B"
            />
            <path
              d="M604.591 137.283C605.693 137.283 606.588 138.14 606.588 139.196C606.588 140.253 605.693 141.11 604.591 141.11C603.487 141.11 602.593 140.253 602.593 139.196C602.593 138.14 603.487 137.283 604.591 137.283Z"
              fill="#77CD7B"
            />
            <path
              d="M596.599 138.559C597.703 138.559 598.598 139.416 598.598 140.472C598.598 141.529 597.703 142.386 596.599 142.386C595.498 142.386 594.603 141.529 594.603 140.472C594.603 139.416 595.498 138.559 596.599 138.559Z"
              fill="#77CD7B"
            />
          </g>
        </svg>

        {/* div to show code of importing */}
        <div
          className={tw`text-[#2EE59D] font-mono code-container flex justify-center`}
        >
          <span class="text first-text">import</span>&nbsp;

          <TypeWriting />
          <span class="text import-text">
            from {`"https://deno.land/x/d3nodata@v.0.1.1/charts.ts"`}
          </span>
        </div>

        <a href="./docs">
          <button
            id="bt-started"
            className={tw`text-[#2EE59D] shadow-xl font-light bg-[#113c4a] p-3 text-sm rounded-3xl hover:bg-[#43AA8B] hover:opacity-80 duration-1000 hover:shadow-none hover:translate-y-1`}
          >
            GET STARTED
          </button>
        </a>
      </div>
    </Fragment>
  );
}
