
const JobCountCard = ({ singleJobCount }) => {
    const { jobType, number, icon } = singleJobCount;
    return (
        <div className='p-6 bg-primary-100 rounded-lg'>
            <div className='flex space-x-3 items-center pb-8'>
                <img className='p-3 bg-primary-300 rounded-full' src={icon} alt="" />
                <h4 className='primary-heading font-semibold'>{jobType}</h4>
            </div>
            <h4 className='primary-color font-bold text-2xl text-right'>{number}</h4>
        </div>
    );
};

export default JobCountCard;