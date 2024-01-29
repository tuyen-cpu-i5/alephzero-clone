import ReactECharts from 'echarts-for-react';
import {useEffect, useState} from "react";



const dataTable1=[
  {
    name: 'Total Supply',
    value: '100M'
  },
  {
    name: 'Preseed',
    value: '$0.3M'
  },
  {
    name: 'Seed Sale',
    value: '$3.6M'
  },
  {
    name: 'Private Sale',
    value: '$4.6M'
  },
  {
    name: 'Strategic Round',
    value: '$0.3M'
  },
  {
    name: 'Public sale',
    value: '$4.0M'
  },
]


const dataTable2=[
  {
    name: 'Tokens for sale',
    value: '30M'
  },
  {
    name: 'Preseed Price',
    value: '$0.07'
  },
  {
    name: 'Seed Sale Price',
    value: '$0.30'
  },
  {
    name: 'Private Sale Price',
    value: '$0.50'
  },
  {
    name: 'Strategic Round Price',
    value: '$0.75'
  },
  {
    name: 'Public Sale Price',
    value: '$1.00'
  },
  {
    name: 'Initial MCap',
    value: '5.37M'
  },
]


const dataVesting1=[
  {
    name: 'Preseed & Seed',
    value: '0% at TOE, 1M cliff with 15% unlock, linear vesting for 12 months'
  },
  {
    name: 'Private',
    value: '0% at TOE, 15M cliff with unlock, linear vesting for months'
  },
  {
    name: 'Strategic',
    value: '12.5% at TGE, linear vesting for B months'
  },
  {
    name: 'BD Fund',
    value: '0% at TOE, 1M cliff with 2.5% unlock, linear vesting for 12 months'
  }
]
const dataVesting2=[
  {
    name: 'Treasury',
    value: '0% at TOE, 12M cliff, linear vesting for 24 months'
  },
  {
    name: 'Ecosystem',
    value: '096 at TOE, vesting schedule TBD'
  },
  {
    name: 'Public Sale',
    value: '33% at TGE, linear vesting for 3 months'
  },
  {
    name: 'Team & Advisors',
    value: '0% at TOE, 6M cliff with 10% unlock, linear vesting for 24 months'
  }
]
export default function Analysis() {
  const [isMobile, setIsMobile] = useState(false);
  const option = {
    tooltip: {
      trigger: 'item'
    },
    graphic: {
      elements: [{
        id: '1',
        type: 'text',
        left: 'center',
        top: 'middle',
        z: 999,
        style: {
          text: "{a|100M}\n{b|Total Supply}",
          rich: {
            a: {
              fontSize:isMobile? 32: 40,
              fontWeight: 'bold',
              lineHeight: 40,
              fontFamily: 'Gilroy, sans-serif'
            },
            b: {
              fontSize: isMobile? 20: 24,
              fontWeight: 100,
              fontFamily: 'Gilroy, sans-serif',
              marginTop: 10,
              letterSpacing: 5,
              lineHeight: 30,
            }
          },
          textAlign: 'center',
          fontSize: 26,
          backgroundColor: "transparent",
          fill: '#ffffff',
        }
      }]
    },
    color: [
      {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
          offset: 0, color: '#031136' // color at 0%
        }, {
          offset: 1, color: '#006a90' // color at 100%
        }],
        global: false // default is false
      },
      {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
          offset: 0, color: '#031136' // color at 0%
        }, {
          offset: 1, color: '#006a90' // color at 100%
        }],
        global: false // default is false
      },
      {
        type: 'linear',
        x: 1,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
          offset: 0, color: '#031136' // color at 0%
        }, {
          offset: 1, color: '#006a90' // color at 100%
        }],
        global: false // default is false
      },
      {
        type: 'linear',
        x: 1,
        y: 1,
        x2: 0,
        y2: 0,
        colorStops: [{
          offset: 0, color: '#031136' // color at 0%
        }, {
          offset: 1, color: '#006a90' // color at 100%
        }],
        global: false // default is false
      },
      {
        type: 'linear',
        x: 0,
        y: 1,
        x2: 1,
        y2: 0,
        colorStops: [{
          offset: 0, color: '#031136' // color at 0%
        }, {
          offset: 1, color: '#006a90' // color at 100%
        }],
        global: false // default is false
      },

      {
        type: 'linear',
        x: 0,
        y: 1,
        x2: 1,
        y2: 1,
        colorStops: [{
          offset: 0, color: '#031136' // color at 0%
        }, {
          offset: 1, color: '#006a90' // color at 100%
        }],
        global: false // default is false
      },


    ],
    // legend: {
    //   top: '5%',
    //   left: 'center'
    // },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['48%', '70%'],
        avoidLabelOverlap: false,
        // label: {
        //   show: false,
        //   position: 'center'
        // },
        // emphasis: {
        //   label: {
        //     show: true,
        //     fontSize: 40,
        //     fontWeight: 'bold'
        //   }
        // },
        labelLine: {
          show: true,
          lineStyle: {
            color: {
              type: 'linear',  // Sử dụng linear gradient
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                {offset: 0, color: '#031136'},   // Màu bắt đầu
                {offset: 1, color: '#006a90'}    // Màu kết thúc
              ]
            }
          }
        },
        label: {
          alignTo: 'edge',
          formatter: '{name|{b}}\n{time|{c}%}',
          minMargin: 5,
          edgeDistance: 10,
          lineHeight: 25,
          fontSize:isMobile? 10: 15,
          color: "#cccccc",
          rich: {
            time: {
              fontSize: 12,
              color: '#ffffff',
              fontWeight: 600
            }
          }
        },
        labelLayout: function (params) {
          const isLeft = params.labelRect.x < 400 / 2;
          const points = params.labelLinePoints;
          // Update the end point.
          points[2][0] = isLeft
            ? params.labelRect.x
            : params.labelRect.x + params.labelRect.width;
          return {
            labelLinePoints: points,
          };
        },
        title: {
          text: 'Referer of a Website',
          subtext: 'Fake Data',
          left: 'center'
        },
        data: [
          {name: 'Token Sale', value: 30},
          {name: 'Treasury', value: 10},
          {name: 'Liquidity Incentives', value: 25},
          {name: 'BD Fund', value: 15},
          {name: 'Ecosystem', value: 5},
          {name: 'Team & Advisors', value: 15},

        ]
      },

    ]
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    };

    handleResize();
    window.addEventListener('resize', handleResize); // Thêm sự kiện lắng nghe khi cửa sổ được resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup khi component bị unmount
    };
  }, []);
  return (
    <>
      <div className="container lg:my-32 lg:mt-28">
        <div className="md:grid lg:grid md:grid-cols-6 lg:grid-cols-12 sm:gap-y-10 md:gap-y-10 lg:gap-x-10">
          <div className="lg:col-span-6 md:col-span-6 md:grid-cols-2 aos-init aos-animate">
            <div className="chart-custome">
              <ReactECharts  style={{height:'100%'}} option={option}/>
            </div>

          </div>
          <div className="lg:col-span-6 md:col-span-6 md:grid-cols-2 aos-init aos-animate m-auto">
            <div className="border border-[#cccccc] p-10 rounded-2xl">
              <div className="md:grid lg:grid md:grid-cols-2 lg:grid-cols-12 gap-x-8">
                <div className="lg:col-span-5 aos-init aos-animate">

                  {dataTable1.map((item, index) => {
                    return (
                      <div key={index} className="flex gap-x-3">
                        <div className={`c-flex-left text-sm leading-7 font-bold text-[#4598c8]`}>
                          {item.name}
                        </div>
                        <div className={`c-flex-right1 text-sm leading-7 tracking-wide font-bold`}>
                          {item.value}
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className="lg:col-span-7 aos-init aos-animate">
                  {dataTable2.map((item, index) => {
                    return (
                      <div key={index} className="flex gap-x-3">
                        <div className="flex-none text-sm c-flex-right leading-7 font-bold text-[#4598c8]">
                          {item.name}
                        </div>
                        <div className="flex-1 text-sm leading-7 tracking-wide font-bold">
                          {item.value}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="mb-2 mt-4 text-[#4598c8] text-sm font-bold">
          <div>Vesting Schedule</div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-x-6">
          <div className="lg:col-span-6 aos-init aos-animate">
            {dataVesting1.map((item, index) => {
              return (
                <div key={index} className="flex gap-x-3">
                  <div className="flex-none text-sm min-w-32 leading-7 font-bold">
                    {item.name}
                  </div>
                  <div className="flex-1 text-sm leading-7 tracking-wide">
                    {item.value}
                  </div>
                </div>
              )
            })}
          </div>
          <div className="lg:col-span-6 aos-init aos-animate">
            {dataVesting2.map((item, index) => {
              return (
                <div key={index} className="flex gap-x-3 ">
                  <div className={`flex-none text-sm min-w-32 leading-7 font-bold`}>
                    {item.name}
                  </div>
                  <div className="flex-1 text-sm leading-7 tracking-wide">
                    {item.value}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

    </>
  )
}