import ReactApexChart from "react-apexcharts";

const JobRatio = () => {
    const ratioInfo = {
        series: [6, 4, 40],

        options: {
            chart: {
                type: 'donut',
            },
            width: '16px',
            labels: ['Open Jobs', 'Urgent Jobs', 'Closed Jobs'],
            colors: ['#0C579B', '#F5BD62', '#EFF4FA'],
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            total: {
                                showAlways: true,
                                show: true
                            }
                        }
                    }
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 250
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            },
            {
                breakpoint: 1024,
                options: {
                    chart: {
                        width: 400
                    },

                }
            }
            ]
        },


    };
    return (
        <>
            <h2 className="pb-5 primary-heading font-semibold">Jobs Ratio</h2>
            <div id="chart" className="bg-primary-100 rounded-lg sm:pl-12 lg:pl-0 pr-6 py-6 pl-6 h-[272px] flex flex-col justify-center">
                <ReactApexChart options={ratioInfo.options} series={ratioInfo.series} type="donut" />
            </div>
        </>
    );
};

export default JobRatio;