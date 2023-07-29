
import ReactApexChart from 'react-apexcharts';

const JobPriorities = ({ singlePriorities }) => {
  const { type, number, total, strokeColor } = singlePriorities;
  const prioritiesInfo = {
    series: [number, total],

    options: {
      chart: {
        type: 'donut',
      },
      width: '16px',
      labels: [type, 'Total'],
      legend: {
        show: false,
      },
      colors: [strokeColor, '#EFF4FA'],
    },


  };
  return (
    <>
      <div id="chart" className="bg-primary-100 rounded-lg py-5">
        <ReactApexChart options={prioritiesInfo.options} series={prioritiesInfo.series} type="donut" />
        <div className='relative lg:-top-28 md:-top-36 sm:-top-40 -top-36 -mb-[53px] right-0 text-center'>
          <h2 className='desc-size desc-color'>{type}</h2>
          <h4 style={{color:strokeColor}} className='text-2xl font-semibold'>{number}</h4>
        </div>
      </div>
    </>
  );
};

export default JobPriorities;