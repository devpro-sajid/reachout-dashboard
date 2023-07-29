import { useContext, useEffect } from 'react';
import { ToggleContext } from '../../../Providers/ToggleState';
import JobCountCard from './JobCountCard/JobCountCard';
import JobRatio from './JobRatioStages/JobRatio';
import JobStages from './JobRatioStages/JobStages';
import JobPriorities from './JobPriorities/JobPriorities';

const Dashboard = () => {
    const { setRouteName } = useContext(ToggleContext);
    useEffect(() => {
        setRouteName('Dashboard');
    }, [setRouteName]);
    const jobsCountInfo = [
        { id: 1, jobType: 'Total Jobs', icon: '/DashboardIcon/DashboardPage/totaljobs.png', number: '50' },
        { id: 2, jobType: 'Open Jobs', icon: '/DashboardIcon/DashboardPage/openjobs.png', number: '10' },
        { id: 3, jobType: 'Urgent Jobs', icon: '/DashboardIcon/DashboardPage/urgentjobs.png', number: '04' },
    ]
    const jobsPrioritiesInfo = [
        { id: 1, type: 'High', number: 20,total:50,strokeColor:'#23B574' },
        { id: 2, type: 'Medium', number: 10,total:50, strokeColor: '#0C579B' },
        { id: 3, type: 'Low', number: 5,total:50, strokeColor:'#0C579B' },
        { id: 4, type: 'On Hold', number: 2,total:50,strokeColor:'#EB5757' },
    ]
    return (
        <>
            {/* Job Counts */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6'>
                {
                    jobsCountInfo?.map(singleJobCount => <JobCountCard key={singleJobCount.id} singleJobCount={singleJobCount}></JobCountCard>)
                }
            </div>
            {/* Job Ratio-stages */}
            <div className='pt-8 lg:flex lg:space-x-6 space-y-6 lg:space-y-0'>
                <div className='lg:w-2/5'>
                    <JobRatio />
                </div>
                <div className='lg:w-3/5'>
                    <JobStages />
                </div>
            </div>
            {/* Job Priorities */}
            <div className='pt-8'>
                <h2 className='pb-5 primary-heading font-semibold'>Job Priorities</h2>
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 lg:gap-6 gap-5'>
                    {
                        jobsPrioritiesInfo?.map(singlePriorities=><JobPriorities key={singlePriorities.id} singlePriorities={singlePriorities}></JobPriorities>)
                    }
                </div>

            </div>
        </>
    );
};

export default Dashboard;