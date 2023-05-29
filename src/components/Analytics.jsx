import React from 'react'
import AnalyticSvg from "../assets/analytics.svg";
import Button from './Button';

const Analytics = () => {
  return (
    <div className='w-[95%] mx-auto rounded-xl bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto px-6 grid md:grid-cols-2 gap-4'>
            <img src={AnalyticSvg} className='w-[500px] mx-auto my-4' alt="analytics" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00fd9a] font-bold py-4'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='text-black font-bold text-4xl md:text-4xl pb-2'>Manage Data Analytics Centrally</h1>
                <p>Managing data analytics centrally streamlines the process of collecting, organizing, and analyzing data across an organization. It eliminates silos, ensures data consistency, and enables efficient data governance and informed decision-making.</p>
                <Button/>
            </div>
            
        </div>
    </div>
  )
}

export default Analytics