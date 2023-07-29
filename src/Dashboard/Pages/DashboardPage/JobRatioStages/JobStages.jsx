
import ReactApexChart from 'react-apexcharts';

const JobStages = () => {
  const stagesInfo = {

    series: [{
      name: 'Jobs',
      data: [20, 15, 12, 8, 5]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Initial', 'Intake', 'Sourcing', 'Interview', 'Offer'],
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val
          }
        }
      }
    }
  };

  return (
    <>
      <h2 className='pb-5 primary-heading font-semibold'>Job Stages</h2>
      <div id="chart" className='bg-primary-100 rounded-lg py-6 px-8'>
        <ReactApexChart options={stagesInfo.options} series={stagesInfo.series} type="bar" height={209} />
      </div>
    </>
  );
};

export default JobStages;